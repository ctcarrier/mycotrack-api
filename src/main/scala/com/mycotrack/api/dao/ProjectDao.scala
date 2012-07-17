package com.mycotrack.api.dao

import com.mongodb.casbah.Imports._
import akka.dispatch.Future
import com.novus.salat._
import com.novus.salat.global._
import com.mongodb.casbah.commons.MongoDBObject
import com.mycotrack.api._
import model._
import mongo.RandomId
import org.bson.types.ObjectId
import com.weiglewilczek.slf4s.Logging
import java.util.Date
import akka.actor.ActorSystem

/**
 * @author chris carrier
 */

trait ProjectDao extends IProjectDao with Logging {

  implicit def actorSystem: ActorSystem
  val mongoCollection: MongoCollection
  def urlPrefix = "/projects/"

  def search(searchObj: MongoDBObject) = Future {
    val listRes = mongoCollection.find(searchObj).map(f => {
      logger.info(f.toString);
      val pw: Project = grater[ProjectWrapper].asObject(f)
      pw
    }).toList

    val res = listRes match {
      case l: List[Project] if (!l.isEmpty) => Some(l)
      case _ => None
    }

    res
  }

  def getChildren(root: Project) = Future {
    val query = MongoDBObject("parent" -> root.id)
    mongoCollection.find(query).map(f =>
      grater[ProjectWrapper].asObject(f).content).toList match {
      case l: List[Project] if (!l.isEmpty) => Some(l)
      case _ => None
    }
  }

  def addEvent(projectId: String, eventName: String): Option[Project] = {
    logger.info("adding event in DAO with" + projectId + " and " + eventName)
    val eventDbo = grater[Event].asDBObject(Event(eventName, new Date()))
    val find = MongoDBObject("_id" -> formatKeyAsId(projectId))
    val update = $addToSet("events" -> eventDbo)
    mongoCollection.findAndModify(find, null, null, false, update, true, false).map(f => {
      val pw: Project = grater[ProjectWrapper].asObject(f)
      pw
    })
  }
}

