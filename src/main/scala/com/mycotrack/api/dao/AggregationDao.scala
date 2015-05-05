package com.mycotrack.api.dao

import com.mycotrack.api.model.Culture
import com.mycotrack.api.model.aggregation.General
import com.typesafe.scalalogging.LazyLogging
import akka.actor.{ActorRefFactory, ActorSystem}
import reactivemongo.api.collections.default.BSONCollection
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

case class CultureAggregation(_id: Option[BSONObjectID], count: Long, userId: BSONObjectID, culture: Culture)
case class ContainerAggregation(_id: Option[BSONObjectID], count: Long, container: String, userId: BSONObjectID)

trait AggregationService {
  def getGeneralAggregation: Future[Option[General]]
  def getCultureCount(userId: BSONObjectID): Future[List[CultureAggregation]]
  def getContainerCount(userId: BSONObjectID): Future[List[ContainerAggregation]]
}

class AggregationDao(implicit inj: Injector) extends AggregationService with LazyLogging with AkkaInjectable {

  import ExecutionContext.Implicits.global
  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory: ActorRefFactory = system

  lazy val projectCollection = inject[BSONCollection] (identified by 'PROJECT_COLLECTION)
  lazy val cultureCountCollection = inject[BSONCollection] (identified by 'CULTURE_COUNT_COLLECTION)
  lazy val containerCountCollection = inject[BSONCollection] (identified by 'CONTAINER_COUNT_COLLECTION)

  def getGeneralAggregation: Future[Option[General]] = {
    for {
      futureCount <- projectCollection.db.command(
        Count(
          projectCollection.name,
          None
        )
      )
    } yield Some(General(futureCount))
  }

  def getCultureCount(userId: BSONObjectID): Future[List[CultureAggregation]] = {
    val query = BSONDocument("userId" -> userId)

    cultureCountCollection.find(query).cursor[CultureAggregation].collect[List]()
  }

  def getContainerCount(userId: BSONObjectID): Future[List[ContainerAggregation]] = {
    val query = BSONDocument("userId" -> userId)

    containerCountCollection.find(query).cursor[ContainerAggregation].collect[List]()
  }
}