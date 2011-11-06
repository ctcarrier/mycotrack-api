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

  def getSpecies(key: ObjectId) = {
    Future {
      val dbo = mongoCollection.findOneByID(key)
      dbo.map(f => grater[SpeciesWrapper].asObject(f))
    }
  }

  def createSpecies(speciesWrapper: SpeciesWrapper) = {
    Future {
      val dbo = grater[SpeciesWrapper].asDBObject(speciesWrapper)
      mongoCollection += dbo
      Some(speciesWrapper.copy(_id = dbo.getAs[org.bson.types.ObjectId]("_id"))) // TODO grater was not working here. If this were an actor you would just do a "self.channel" as before.
    }
  }

  def updateSpecies(key: ObjectId, model: Species) = {
    Future {
      val query = MongoDBObject("_id" -> key)
      val update = $addToSet("content" -> model)
      mongoCollection.update(query, update, false, false, WriteConcern.Safe)
      mongoCollection.findOne(query).map(f => grater[SpeciesWrapper].asObject(f))
    }
  }

  /*def searchSpecies(searchObj: MongoDBObject) = {
    Future {
      mongoCollection.find(searchObj).map(f =>
        grater[SpeciesWrapper].asObject(f).content).flatten.toList match {
          case l: List[Species] => Some(l)
          case Nil => None
        }
    }
  } */

  def searchSpecies(searchObj: MongoDBObject) = {
    println(searchObj)
    Future {
      val data = mongoCollection.find(searchObj)
      val dataList = data.map(f => grater[SpeciesWrapper].asObject(f).content).flatten.toList
      if (dataList.isEmpty) {
        None
      }
      else {
        Some(dataList)
      }
    }
  }
}

