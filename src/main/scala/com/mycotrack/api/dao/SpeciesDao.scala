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
import akka.actor.ActorSystem

/*
 * User: gregg
 * Date: 11/6/11
 * Time: 1:23 PM
 */
trait SpeciesDao extends ISpeciesDao with Logging {

  implicit def actorSystem: ActorSystem
  val mongoCollection: MongoCollection
  val projCollection: MongoCollection
  def urlPrefix = "/species/"

  def search(searchObj: MongoDBObject) = Future {
    val listRes = mongoCollection.find(searchObj).map(f => {
      val pw = grater[SpeciesWrapper].asObject(f)
      pw.content.head.copy(id = pw._id)
    }).toList


    val res = listRes match {
      case l: List[Species] if (!l.isEmpty) => Some(l)
      case _ => None
    }

    res
  }

  def getProjectsBySpecies(userUrl: Option[String]): Option[Map[String, List[Project]]] = {
    val builder = MongoDBObject.newBuilder
    userUrl.foreach(builder += "content.userUrl" -> _)

    val listRes = projCollection.find(builder.result.asDBObject).map(f => {
      logger.info(f.toString);
      val pw = grater[ProjectWrapper].asObject(f)
      pw.content.head.copy(id = pw._id)
    }).toList

    val res = listRes match {
      case l: List[Project] if (!l.isEmpty) => Some(l.groupBy(p => p.cultureUrl.get))
      case _ => None
    }

    res
  }
}