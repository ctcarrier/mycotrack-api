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

trait UserService {
  def get(key: String): Future[Option[User]]

  def create(model: UserWrapper): Future[Option[User]]

  def update(key: String, model: User): Future[Option[User]]

  def search(searchObj: MongoDBObject): Future[Option[List[User]]]
}

class UserDao(mongoCollection: MongoCollection) extends UserService {

  def get(key: String) = {
    Future {
      val q = MongoDBObject("_id" -> key)
      val dbo = mongoCollection.findOne(q)
      dbo.map(f => {
        grater[UserWrapper].asObject(f)
      })
    }
  }

  def create(model: UserWrapper) = {
    Future {
      val dbo = grater[UserWrapper].asDBObject(model.copy(_id = RandomId.getNextValue))
      mongoCollection += dbo
      Some(model)
    }
  }

  def update(key: String, model: User) = {
    Future {
      val inputDbo = grater[User].asDBObject(model)
      val query = MongoDBObject("_id" -> key)
      val update = $set("content" -> List(inputDbo))

      mongoCollection.update(query, update, false, false, WriteConcern.Safe)

      val dbo = mongoCollection.findOne(query)
      val result = dbo.map(f => {
        val uw: User = grater[UserWrapper].asObject(f)
        uw
      })

      result
    }
  }

  def search(searchObj: MongoDBObject) = {
    Future {
      val listRes: List[User] = mongoCollection.find(searchObj).map(f => {
        val u: User = grater[UserWrapper].asObject(f)
        u
      }).toList

      val res = listRes match {
        case l: List[User] if (!l.isEmpty) => Some(l)
        case _ => None
      }

      res
    }
  }
}

