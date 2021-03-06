package com.mycotrack.api.aggregation

import akka.event.Logging
import akka.actor.{ActorSystem, Actor, Props}
import com.mycotrack.api.dao.CultureDao
import com.mycotrack.api.model.{Species, Project}
import com.paulgoldbaum.influxdbclient.Parameter.Precision
import com.paulgoldbaum.influxdbclient.{WriteException, Point, Database}
import com.typesafe.scalalogging.LazyLogging
import org.joda.time.DateTime
import reactivemongo.api.collections.bson.BSONCollection
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import scaldi.Injector
import scaldi.akka.AkkaInjectable
import scala.concurrent.ExecutionContext.Implicits.global

/**
 * @author chris_carrier
 * @version 7/16/12
 */

case class Disable(project: Project)

class AggregationBroadcaster(implicit inj: Injector) extends Actor with AkkaInjectable {
  val log = Logging(context.system, this)

  lazy val cultureCountActor = injectActorRef[CultureCountActor]
  lazy val containerCountActor = injectActorRef[ContainerCountActor]
  lazy val generalAggregationActor = injectActorRef[GeneralAggregationActor]
  lazy val influxAggregationActor = injectActorRef[InfluxAggregationActor]

  lazy val projectActors = List(cultureCountActor, containerCountActor, generalAggregationActor, influxAggregationActor)

  def receive = {
    case p: Project => projectActors.foreach(_ ! p)
    case d: Disable => projectActors.foreach(_ ! d)
    case e => log.error("Got something weird in GlobalAgg: " + e)
  }
}

class CultureCountActor(implicit inj: Injector) extends Actor with AkkaInjectable with LazyLogging {
  val log = Logging(context.system, this)

  lazy val cultureCountCollection = inject[BSONCollection] (identified by 'CULTURE_COUNT_COLLECTION)
  lazy val cultureDao = inject[CultureDao]

  def receive = {
    case Project(id, description, cultureId, speciesId, userId, enabled, substrate, container, startDate,
    parent, count, events, locationId, contaminated, disabledDate) => {
      log.info("Should aggregate : " + cultureId)
      incrementCultureCount(cultureId, userId, count)
    }
    case _ => log.info("received unknown message")
  }

  def incrementCultureCount(cultureId: BSONObjectID, userId: Option[BSONObjectID], count: Long) = {
    for {
      culture <- cultureDao.get(cultureId)
    } yield {
      val queryInput = BSONDocument("userId" -> userId.getOrElse(throw new RuntimeException("UserId shouldn't be null")),
                                          "culture._id" -> cultureId)
      val updateInput = BSONDocument("$inc" -> BSONDocument("count" -> count), "$set" -> BSONDocument("userId" -> userId, "culture" -> culture))
      cultureCountCollection.update(selector = queryInput, update = updateInput, upsert = true)
    }
  }
}

class SpeciesCountActor(implicit inj: Injector) extends Actor with AkkaInjectable {
  val log = Logging(context.system, this)

  lazy val cultureCountCollection = inject[BSONCollection] (identified by 'CULTURE_COUNT_COLLECTION)

  def receive = {
    case Project(id, description, cultureId, speciesId, userId, enabled, substrate, container, startDate,
    parent, count, events, locationId, contaminated, disabledDate) => {
      log.info("Should aggregate : " + cultureId)
      incrementSpeciesCount(cultureId, userId, count)
    }
    case _ => log.info("received unknown message")
  }

  def incrementSpeciesCount(cultureId: BSONObjectID, userId: Option[BSONObjectID], count: Long) = ???
}

class ContainerCountActor(implicit inj: Injector) extends Actor with AkkaInjectable {
  val log = Logging(context.system, this)

  lazy val containerCountCollection = inject[BSONCollection] (identified by 'CONTAINER_COUNT_COLLECTION)

  def receive = {
    case Project(id, description, cultureId, speciesId, userId, enabled, substrate, container, startDate,
    parent, count, events, locationId, contaminated, disabledDate) => {
      log.info("Should aggregate : " + container)
      incrementContainerCount(container, userId, count)
    }
    case Disable(Project(id, description, cultureId, speciesId, userId, enabled, substrate, container, startDate,
    parent, count, events, locationId, contaminated, disabledDate)) => {
      log.info("Should decrement : " + container)
      decrementContainerCount(container, userId, count)
    }
    case _ => log.info("received unknown message")
  }

  private[this] def incrementContainerCount(container: String, userId: Option[BSONObjectID], count: Long) = {
    val queryInput = BSONDocument("userId" -> userId.getOrElse(throw new RuntimeException("UserId shouldn't be null")),
      "container" -> container)
    val updateInput = BSONDocument("$inc" -> BSONDocument("count" -> count), "$set" -> BSONDocument("userId" -> userId, "container" -> container))
    containerCountCollection.update(selector = queryInput, update = updateInput, upsert = true)
  }

  private[this] def decrementContainerCount(container: String, userId: Option[BSONObjectID], count: Long) = {
    val queryInput = BSONDocument("userId" -> userId.getOrElse(throw new RuntimeException("UserId shouldn't be null")),
      "container" -> container)
    val updateInput = BSONDocument("$dec" -> BSONDocument("count" -> count))
    containerCountCollection.update(selector = queryInput, update = updateInput, upsert = false)
  }
}

class GeneralAggregationActor(implicit inj: Injector) extends Actor with AkkaInjectable {
  val log = Logging(context.system, this)

  lazy val generalAggregationCollection = inject[BSONCollection] (identified by 'GENERAL_AGGREGATION_COLLECTION)

  def receive = {
    case Project(id, description, cultureId, speciesId, userIdOpt, enabled, substrate, container, startDate,
    parent, count, events, locationId, contaminated, disabledDate) => {
      log.info("Doing general agg")
      val userId = userIdOpt.getOrElse(throw new RuntimeException("UserId shouldn't be none"))
      processNewProject(container, substrate, cultureId, speciesId.get, userId, count)
    }
    case Disable(Project(id, description, cultureId, speciesId, userIdOpt, enabled, substrate, container, startDate,
    parent, count, events, locationId, contaminated, disabledDate)) => {
      log.info("Should decrement : " + container)
      val userId = userIdOpt.getOrElse(throw new RuntimeException("UserId shouldn't be none"))
      processDisabledProject(container, substrate, cultureId, speciesId.get, userId, count)
    }
    case _ => log.info("received unknown message")
  }

  private[this] def processNewProject(container: String,
                        substrate: String,
                        cultureId: BSONObjectID,
                        speciesId: BSONObjectID,
                        userId: BSONObjectID,
                        count: Long) = {
    val queryInput = BSONDocument("userId" -> userId,
      "containerId" -> container,
    "cultureId" -> cultureId,
    "speciesId" -> speciesId)
    val updateInput = BSONDocument("$inc" -> BSONDocument("count" -> count),
      "$set" -> BSONDocument("userId" -> userId,
        "containerId" -> container,
        "cultureId" -> cultureId,
        "speciesId" -> speciesId))
    generalAggregationCollection.update(selector = queryInput, update = updateInput, upsert = true)
  }

  private[this] def processDisabledProject(container: String,
                        substrate: String,
                        cultureId: BSONObjectID,
                        speciesId: BSONObjectID,
                        userId: BSONObjectID,
                        count: Long) = {
    val queryInput = BSONDocument("userId" -> userId,
      "containerId" -> container,
      "cultureId" -> cultureId,
      "speciesId" -> speciesId)
    val updateInput = BSONDocument("$inc" -> BSONDocument("count" -> (count * -1)))
    generalAggregationCollection.update(selector = queryInput, update = updateInput, upsert = false)
  }
}

class InfluxAggregationActor(implicit inj: Injector) extends Actor with AkkaInjectable with LazyLogging {
  val log = Logging(context.system, this)

  lazy val aggregationInflux = inject[Database] (identified by 'AGGREGATION_DB)

  def receive = {
    case Project(id, description, cultureId, speciesId, userIdOpt, enabled, substrate, container, createdDate,
    parent, count, events, locationId, contaminated, disabledDate) => {
      log.info("Doing influx agg")
      val userId = userIdOpt.getOrElse(throw new RuntimeException("UserId shouldn't be none"))
      processNewProject(container, substrate, cultureId, speciesId.get, userId, count, createdDate.get)
    }
    case Disable(Project(id, description, cultureId, speciesId, userIdOpt, enabled, substrate, container, startDate,
    parent, count, events, locationId, contaminated, disabledDate)) => {
      log.info("NOop for influx agg")
      val userId = userIdOpt.getOrElse(throw new RuntimeException("UserId shouldn't be none"))
      processDisabledProject(container, substrate, cultureId, speciesId.get, userId, count)
    }
    case _ => log.info("received unknown message")
  }

  private[this] def processNewProject(container: String,
                                      substrate: String,
                                      cultureId: BSONObjectID,
                                      speciesId: BSONObjectID,
                                      userId: BSONObjectID,
                                      count: Long,
                                      createdDate: DateTime) = {
    val point = Point("projects", timestamp=createdDate.getMillis)
      .addField("count", count)
      .addTag("container", container)
      .addTag("substrate", substrate)
      .addTag("cultureId", cultureId.stringify)
      .addTag("speciesId", speciesId.stringify)
      .addTag("userId", userId.stringify)


    aggregationInflux.write(point, precision=Precision.MILLISECONDS).map(resp => Some(true))
    .recover({
      case e: WriteException => logger.error("Error writing to Influx", e.getCause)
    })
  }

  private[this] def processDisabledProject(container: String,
                                           substrate: String,
                                           cultureId: BSONObjectID,
                                           speciesId: BSONObjectID,
                                           userId: BSONObjectID,
                                           count: Long) = {
  }
}