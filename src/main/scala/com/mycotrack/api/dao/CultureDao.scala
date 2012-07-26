package com.mycotrack.api.dao

import com.mongodb.casbah.Imports._
import akka.dispatch.Future
import com.novus.salat._
import com.novus.salat.global._
import com.mongodb.casbah.commons.MongoDBObject
import com.mycotrack.api._
import model._
import mongo.RandomId
import akka.actor.ActorSystem

/*
 * User: gregg
 * Date: 11/6/11
 * Time: 3:52 PM
 */
trait CultureDao extends ICultureDao {

  def urlPrefix = "/cultures/"

  val mongoCollection: MongoCollection
  val speciesService: ISpeciesDao
  val projCollection: MongoCollection

  def search(searchObj: MongoDBObject, includeProjects: Option[Boolean]) = Future {

    val cultureListRes = mongoCollection.find(searchObj).map(f => {
      val cw = grater[CultureWrapper].asObject(f)

      if (includeProjects.getOrElse(false)) {
        //fetch list of projects by culture
        val projectBuilder = MongoDBObject.newBuilder
        cw._id.foreach(projectBuilder += "content.cultureUrl" -> _)
        projectBuilder += ("content.enabled" -> true)
        val listRes = projCollection.find(projectBuilder.result.asDBObject).map(p => {
          val pw = grater[ProjectWrapper].asObject(p)
          pw.content.head.copy(id = pw._id)
        }).toList

        cw.content.head.copy(id = cw._id, projects = Option(listRes))
      }
      else {
        cw.content.head.copy(id = cw._id)
      }
    }).toList

    val res = cultureListRes match {
      case l: List[Culture] if (!l.isEmpty) => Some(l)
      case _ => None
    }

    res
  }

  def getProjectsByCulture(userUrl: Option[String]): Option[List[Culture]] = {
    val builder = MongoDBObject.newBuilder
    userUrl.foreach(builder += "content.userUrl" -> _)

    val cultureListRes = mongoCollection.find(builder.result.asDBObject).map(f => {
      val cw = grater[CultureWrapper].asObject(f)

      //fetch list of projects by culture
      val projectBuilder = MongoDBObject.newBuilder
      userUrl.foreach(projectBuilder += "content.userUrl" -> _)
      cw._id.foreach(projectBuilder += "content.cultureUrl" -> _)
      val listRes = projCollection.find(projectBuilder.result.asDBObject).map(f => {
        val pw = grater[ProjectWrapper].asObject(f)
        pw.content.head.copy(id = pw._id)
      }).toList

      cw.content.head.copy(id = cw._id, projects = Option(listRes))
    }).toList

    val res = cultureListRes match {
      case l: List[Culture] if (!l.isEmpty) => Some(l)
      case _ => None
    }

    res
  }
}