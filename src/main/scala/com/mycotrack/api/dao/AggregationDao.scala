package com.mycotrack.api.dao

import com.mycotrack.api.model._
import com.paulgoldbaum.influxdbclient.{Series, Database}
import com.typesafe.scalalogging.LazyLogging
import akka.actor.{ActorRefFactory, ActorSystem}
import org.joda.time.DateTime
import org.joda.time.format.{ISODateTimeFormat, DateTimeFormatter}
import reactivemongo.api.collections.bson.BSONCollection
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import reactivemongo.core.commands.Count
import scaldi.Injector
import scaldi.akka.AkkaInjectable
import scala.concurrent.Future

import scala.concurrent.ExecutionContext

/**
 * @author chris_carrier
 * @version 3/25/12
 */

case class GeneralAggregation(_id: Option[BSONObjectID],
                   count: Long,
                   userId: BSONObjectID,
                   culture: Culture,
                   species: Species,
                   container: Container)
case class GeneralAggregationQuery(_id: Option[BSONObjectID],
                              count: Long,
                              userId: BSONObjectID,
                              cultureId: BSONObjectID,
                              speciesId: BSONObjectID,
                              containerId: String)

object GeneralAggregation {

  def apply(generalAggQuery: GeneralAggregationQuery,
            culture: Culture,
            species: Species,
            container: Container): GeneralAggregation = {
    GeneralAggregation(generalAggQuery._id, generalAggQuery.count, generalAggQuery.userId, culture, species, container)
  }
}
case class CultureAggregation(_id: Option[BSONObjectID], count: Long, userId: BSONObjectID, culture: Culture)
case class ContainerAggregation(_id: Option[BSONObjectID], count: Long, container: String, userId: BSONObjectID)

trait AggregationDao {
  def getGeneralAggregation(userId: BSONObjectID): Future[List[GeneralAggregation]]
  def getCultureCount(userId: BSONObjectID): Future[List[CultureAggregation]]
  def getContainerCount(userId: BSONObjectID): Future[List[ContainerAggregation]]
  def clearAllAggregates(): Future[Boolean]
  def getProjectCounts(userId: BSONObjectID): Future[ProjectSummary]
}

class MongoAggregationDao(implicit inj: Injector) extends AggregationDao with LazyLogging with AkkaInjectable {

  import ExecutionContext.Implicits.global
  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory: ActorRefFactory = system

  lazy val projectCollection = inject[BSONCollection] (identified by 'PROJECT_COLLECTION)
  lazy val generalAggregationCollection = inject[BSONCollection] (identified by 'GENERAL_AGGREGATION_COLLECTION)
  lazy val cultureCountCollection = inject[BSONCollection] (identified by 'CULTURE_COUNT_COLLECTION)
  lazy val containerCountCollection = inject[BSONCollection] (identified by 'CONTAINER_COUNT_COLLECTION)
  lazy val aggregationInflux = inject[Database] (identified by 'AGGREGATION_DB)

  lazy val cultureDao = inject[CultureDao]
  lazy val speciesDao = inject[SpeciesDao]
  lazy val farmDao = inject[FarmDao]

  def getGeneralAggregation(userId: BSONObjectID): Future[List[GeneralAggregation]] = {
    val query = BSONDocument("userId" -> userId, "count" -> BSONDocument("$gt" -> 0))

    val queryResultFuture = generalAggregationCollection.find(query).cursor[GeneralAggregationQuery].collect[List]()

    queryResultFuture.map(queryResult => {
      Future.sequence(queryResult.map(generalAggResult => {
        for {
          culture <- cultureDao.get(generalAggResult.cultureId)
          species <- speciesDao.get(generalAggResult.speciesId)
          container <- farmDao.getContainer(generalAggResult.containerId)
        } yield (GeneralAggregation(generalAggQuery = generalAggResult, culture.get, species.get, container.get))
      }))
    }).flatMap(x => x)
  }

  def getCultureCount(userId: BSONObjectID): Future[List[CultureAggregation]] = {
    val query = BSONDocument("userId" -> userId)

    cultureCountCollection.find(query).cursor[CultureAggregation].collect[List]()
  }

  def getContainerCount(userId: BSONObjectID): Future[List[ContainerAggregation]] = {
    val query = BSONDocument("userId" -> userId)

    containerCountCollection.find(query).cursor[ContainerAggregation].collect[List]()
  }

  def clearAllAggregates(): Future[Boolean] = {
    val query = BSONDocument("_id" -> BSONDocument("$exists" -> true))

    for {
      r1 <- generalAggregationCollection.remove(query)
      r2 <- cultureCountCollection.remove(query)
      r3 <- containerCountCollection.remove(query)
      r4 <- aggregationInflux.drop()
      r5 <- aggregationInflux.create()
    } yield true

  }

  def getProjectCounts(userId: BSONObjectID): Future[ProjectSummary] = {
    val fmt = ISODateTimeFormat.dateTime()

    val oldest = DateTime.now().minusMonths(6)
    val oneWeekAgo = DateTime.now().minusWeeks(1)
    val oneMonthAgo = DateTime.now().minusMonths(1)
    val byWeekQuery = "select sum(count) as count from projects where userId = '%s' and time >= '%s' group by time(1w) fill(0) order by time desc"
      .format(userId.stringify, fmt.print(oldest))
    val oneWeekAgoQuery = "select sum(count) as count from projects where userId = '%s' and time >= '%s'"
      .format(userId.stringify, fmt.print(oneWeekAgo))
    val oneMonthAgoQuery = "select sum(count) as count from projects where userId = '%s' and time >= '%s'"
      .format(userId.stringify, fmt.print(oneMonthAgo))
    for {
      weekly <- aggregationInflux.query(byWeekQuery)
      pastWeek <- aggregationInflux.query(oneWeekAgoQuery)
      pastMonth <- aggregationInflux.query(oneMonthAgoQuery)
    } yield {
      val weeklyProjectCount = weekly.series.map(s => {
        s.records.map(r => {
          ProjectCount(timestamp = DateTime.parse(r("time").toString()), count = r("count").asInstanceOf[BigDecimal])
        })
      }).flatten
      val projectCountLastWeek = pastWeek.series.map(s => {
        s.records.map(r => {
          r("count").asInstanceOf[BigDecimal]
        })
      }).flatten.headOption.getOrElse[BigDecimal](0)
      val projectCountLastMonth = pastMonth.series.map(s => {
        s.records.map(r => {
          r("count").asInstanceOf[BigDecimal]
        })
      }).flatten.headOption.getOrElse[BigDecimal](0)
      ProjectSummary(weeklyCount = weeklyProjectCount, pastWeek = projectCountLastWeek, pastMonth = projectCountLastMonth)
    }
  }
}