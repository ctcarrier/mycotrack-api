package com.mycotrack.api.aggregation

import akka.event.Logging
import akka.actor.{ActorSystem, Actor, Props}
import com.mycotrack.api.model.{Project}
import com.typesafe.scalalogging.LazyLogging
import reactivemongo.api.collections.default.BSONCollection
import reactivemongo.bson.BSONObjectID

/**
 * @author chris_carrier
 * @version 7/16/12
 */


trait GlobalAggregators { this: LazyLogging =>
  val system: ActorSystem
  def cultureCountCollection: BSONCollection

  logger.info("Akka actor system: " + system)

  lazy val aggregationBroadcaster = system.actorOf(Props(new AggregationBroadcaster((cultureCountCollection))), name = "aggregationBroadcaster")
}

class AggregationBroadcaster(cultureCountCollection: BSONCollection) extends Actor {
  val log = Logging(context.system, this)

  val projectActors = List(context.actorOf(Props(new CultureCountActor(cultureCountCollection)), name = "cultureCountActor"))

  def receive = {
    case p: Project => projectActors.foreach(_ ! p)
    case e => log.error("Got something weird in GlobalAgg: " + e)
  }
}

class CultureCountActor(cultureCountCollection: BSONCollection) extends Actor {
  val log = Logging(context.system, this)

  def receive = {
    case Project(id, description, cultureId, speciesId, userId, enabled, substrate, container, startDate,
    parent, timestamp, count, events) => {
      log.info("Should aggregate : " + cultureId.getOrElse(""))
      incrementCultureCount(cultureId, userId, count)
    }
    case _ => log.info("received unknown message")
  }

  def incrementCultureCount(cultureUrl: Option[BSONObjectID], userId: Option[BSONObjectID], count: Option[Long]) = ???
}


