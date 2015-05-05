package com.mycotrack.api.aggregation

import akka.event.Logging
import akka.actor.{ActorSystem, Actor, Props}
import com.mycotrack.api.dao.CultureDao
import com.mycotrack.api.model.{Project}
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

class AggregationBroadcaster(implicit inj: Injector) extends Actor with AkkaInjectable {
  val log = Logging(context.system, this)

  lazy val cultureCountActor = injectActorRef[CultureCountActor]
  lazy val containerCountActor = injectActorRef[ContainerCountActor]
  lazy val projectActors = List(cultureCountActor, containerCountActor)

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
      log.info("Should aggregate : " + cultureId.getOrElse(""))
      incrementCultureCount(cultureId, userId, count)
    }
    case _ => log.info("received unknown message")
  }

  def incrementCultureCount(cultureId: Option[BSONObjectID], userId: Option[BSONObjectID], count: Long) = {
    for {
      culture <- cultureDao.get(cultureId.get)
    } yield {
      val queryInput = BSONDocument("userId" -> userId.getOrElse(throw new RuntimeException("UserId shouldn't be null")),
                                          "culture._id" -> cultureId.getOrElse(throw new RuntimeException("CultureId shouldn't be null")))
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
      log.info("Should aggregate : " + cultureId.getOrElse(""))
      incrementSpeciesCount(cultureId, userId, count)
    }
    case _ => log.info("received unknown message")
  }

  def incrementSpeciesCount(cultureId: Option[BSONObjectID], userId: Option[BSONObjectID], count: Long) = ???
}

class ContainerCountActor(implicit inj: Injector) extends Actor with AkkaInjectable {
  val log = Logging(context.system, this)

  lazy val containerCountCollection = inject[BSONCollection] (identified by 'CONTAINER_COUNT_COLLECTION)

  def receive = {
    case Project(id, description, cultureId, speciesId, userId, enabled, substrate, container, startDate,
    parent, timestamp, count, events) => {
      log.info("Should aggregate : " + container.getOrElse(""))
      incrementContainerCount(container.getOrElse(""), userId, count)
    }
    case _ => log.info("received unknown message")
  }

  def incrementContainerCount(container: String, userId: Option[BSONObjectID], count: Long) = {
    val queryInput = BSONDocument("userId" -> userId.getOrElse(throw new RuntimeException("UserId shouldn't be null")),
      "container" -> container)
    val updateInput = BSONDocument("$inc" -> BSONDocument("count" -> count), "$set" -> BSONDocument("userId" -> userId, "container" -> container))
    containerCountCollection.update(selector = queryInput, update = updateInput, upsert = true)
  }
}