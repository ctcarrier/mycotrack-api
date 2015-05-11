package com.mycotrack.api.aggregation

import akka.event.Logging
import akka.actor.{ActorSystem, Actor, Props}
import com.mycotrack.api.dao.CultureDao
import com.mycotrack.api.model.{Species, Project}
import com.typesafe.scalalogging.LazyLogging
import reactivemongo.api.collections.default.BSONCollection
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

  lazy val projectActors = List(cultureCountActor, containerCountActor, generalAggregationActor)

  def receive = {
    case p: Project => projectActors.foreach(_ ! p)
    case e => log.error("Got something weird in GlobalAgg: " + e)
  }
}

class CultureCountActor(implicit inj: Injector) extends Actor with AkkaInjectable with LazyLogging {
  val log = Logging(context.system, this)

  lazy val cultureCountCollection = inject[BSONCollection] (identified by 'CULTURE_COUNT_COLLECTION)
  lazy val cultureDao = inject[CultureDao]

  def receive = {
    case Project(id, description, cultureId, speciesId, userId, enabled, substrate, container, startDate,
    parent, timestamp, count, events) => {
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
    parent, timestamp, count, events) => {
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
    parent, timestamp, count, events) => {
      log.info("Should aggregate : " + container)
      incrementContainerCount(container, userId, count)
    }
    case Disable(Project(id, description, cultureId, speciesId, userId, enabled, substrate, container, startDate,
    parent, timestamp, count, events)) => {
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
    parent, timestamp, count, events) => {
      log.info("Doing general agg")
      val userId = userIdOpt.getOrElse(throw new RuntimeException("UserId shouldn't be none"))
      processNewProject(container, substrate, cultureId, speciesId, userId, count)
    }
    case Disable(Project(id, description, cultureId, speciesId, userIdOpt, enabled, substrate, container, startDate,
    parent, timestamp, count, events)) => {
      log.info("Should decrement : " + container)
      val userId = userIdOpt.getOrElse(throw new RuntimeException("UserId shouldn't be none"))
      processDisabledProject(container, substrate, cultureId, speciesId, userId, count)
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
    val updateInput = BSONDocument("dec" -> BSONDocument("count" -> count))
    generalAggregationCollection.update(selector = queryInput, update = updateInput, upsert = false)
  }
}