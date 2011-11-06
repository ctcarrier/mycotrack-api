package com.mycotrack.api.dao

import com.mongodb.casbah.Imports._
import akka.dispatch.Future
import com.novus.salat._
import com.novus.salat.global._
import com.mongodb.casbah.commons.MongoDBObject
import com.mycotrack.api._
import model._
import org.bson.types.ObjectId

/**
 * @author chris carrier
 */

class ProjectDao(mongoCollection: MongoCollection) extends IProjectDao {

  def getProject(key: ObjectId) = {
    Future {
      val q = MongoDBObject("_id" -> key)
      val dbo = mongoCollection.findOne(q)
      dbo.map(f => grater[ProjectWrapper].asObject(f))
    }
  }

  def createProject(modelWrapper: ProjectWrapper) = {
    Future {
      val dbo = grater[ProjectWrapper].asDBObject(modelWrapper)
      mongoCollection += dbo
      Some(modelWrapper.copy(_id = dbo.getAs[org.bson.types.ObjectId]("_id")))
    }
  }

  def updateProject(key: ObjectId, model: Project) = {
    Future {
      val query = MongoDBObject("_id" -> key)
      val update = $addToSet("content" -> model)

      mongoCollection.update(query, update, false, false, WriteConcern.Safe)

      val dbo = mongoCollection.findOne(query)
      dbo.map(f => grater[ProjectWrapper].asObject(f))
    }
  }

  def searchProject(searchObj: MongoDBObject) = Future {
    mongoCollection.find(searchObj).map(f =>
      grater[ProjectWrapper].asObject(f).content).toList match {
      case l: List[Project] if (!l.isEmpty) => Some(l)
      case _ => None
    }
  }
}

