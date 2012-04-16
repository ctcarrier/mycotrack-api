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

/**
 * @author chris carrier
 */

trait ProjectDao extends IProjectDao {

  val mongoCollection: MongoCollection
  def urlPrefix = "/projects/"

  def createProject(modelWrapper: ProjectWrapper) = {
    Future {
      val dbo = grater[ProjectWrapper].asDBObject(modelWrapper.copy(_id = Some(nextRandomId)))
      mongoCollection += dbo
      Some(modelWrapper.copy(_id = dbo.getAs[String]("_id")))
    }
  }

  def updateProject(key: String, model: Project) = {
    Future {
      val inputDbo = grater[Project].asDBObject(model)
      val query = MongoDBObject("_id" -> formatKeyAsId(key))
      val update = $set("content" -> List(inputDbo))

      mongoCollection.update(query, update, false, false, WriteConcern.Safe)

      val dbo = mongoCollection.findOne(query)
      val result = dbo.map(f => grater[ProjectWrapper].asObject(f))

      result
    }
  }

  def search(searchObj: MongoDBObject) = Future {
    val listRes = mongoCollection.find(searchObj).map(f => {
      val pw = grater[ProjectWrapper].asObject(f)
      pw.content.head.copy(id = pw._id)
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
}

