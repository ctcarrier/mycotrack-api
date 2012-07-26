package com.mycotrack.api.aggregation

import akka.event.Logging
import com.mongodb.casbah.Imports._
import org.apache.commons.codec.binary.Base64
import akka.actor.{ActorSystem, Actor, Props}
import com.mycotrack.api.model.{ProjectWrapper, Project}
import com.weiglewilczek.slf4s.Logging

/**
 * @author chris_carrier
 * @version 7/16/12
 */


trait GlobalAggregators { this: Logging =>
  val system: ActorSystem
  def cultureCountCollection: MongoCollection

  logger.info("Akka actor system: " + system)

  lazy val aggregationBroadcaster = system.actorOf(Props(new AggregationBroadcaster((cultureCountCollection))), name = "aggregationBroadcaster")
}

class AggregationBroadcaster(cultureCountCollection: MongoCollection) extends Actor {
  val log = Logging(context.system, this)

  val projectActors = List(context.actorOf(Props(new CultureCountActor(cultureCountCollection)), name = "cultureCountActor"))

  def receive = {
    case p: ProjectWrapper => projectActors.foreach(_ ! p.content.head)
    case e => log.error("Got something weird in GlobalAgg: " + e)
  }
}

class CultureCountActor(cultureCountCollection: MongoCollection) extends Actor {
  val log = Logging(context.system, this)

  def receive = {
    case Project(id, description, cultureUrl, userUrl, enabled, substrate, container, startDate,
    parent, timestamp, count, events) => {
      log.info("Should aggregate : " + cultureUrl.getOrElse(""))
      incrementCultureCount(cultureUrl, userUrl, count)
    }
    case _ => log.info("received unknown message")
  }

  def incrementCultureCount(cultureUrl: Option[String], userUrl: Option[String], count: Option[Long]) {
    (userUrl, cultureUrl, count) match {
      case (Some(u), Some(c), Some(count)) => {
        val id = Base64.encodeBase64URLSafeString("%s%s" format (u, c) getBytes)
        val query = MongoDBObject(("_id" -> id))
        val dbo = $inc("created" -> count) ++ ("cultureUrl" -> cultureUrl)
        log.info("DBO: " + dbo)
        cultureCountCollection.update(query, dbo, true, false)
      }
      case _ => None
    }
  }
}


