package com.mycotrack.api.dao

import com.mongodb.casbah.Imports._
import akka.dispatch.Future
import com.novus.salat._
import com.novus.salat.global._
import com.mongodb.casbah.commons.MongoDBObject
import com.mycotrack.api._
import com.mycotrack.api.model._

/**
 * @author chris carrier
 * // TODO need a better way to have this as a singleton "object" and use db as an implicit val.
 */

class ProjectDao(mongoCollection: MongoCollection) extends Dao {

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
      Some(modelWrapper.copy(_id = dbo.getAs[org.bson.types.ObjectId]("_id"))) // TODO grater was not working here. If this were an actor you would just do a "self.channel" as before.
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

  def searchProject(searchObj: MongoDBObject) = {
    Future {
      val data = mongoCollection.find(searchObj)
      val dataList = data.map(f => grater[ProjectWrapper].asObject(f).content).flatten.toList

      if (dataList.isEmpty) {
        None
      }
      else {
        Some(dataList)
      }
    }
  }
}
