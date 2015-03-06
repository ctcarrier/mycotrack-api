package com.mycotrack.api.dao

import com.mycotrack.api._
import model._
import akka.actor.{ActorRefFactory, ActorSystem}
import reactivemongo.api.collections.default.BSONCollection
import reactivemongo.bson.BSONDocument
import scaldi.Injector
import scaldi.akka.AkkaInjectable

import scala.concurrent.ExecutionContext

trait UserService extends MycotrackDao[User, UserWrapper] {
}

class UserDao(implicit inj: Injector) extends UserService with AkkaInjectable {

  def urlPrefix = "/users/"

  import ExecutionContext.Implicits.global
  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory: ActorRefFactory = system

  val userCollection = inject[BSONCollection] (identified by 'USER_COLLECTION)

//  def create(model: UserWrapper) = {
//    Future {
//      val dbo = grater[UserWrapper].asDBObject(model.copy(_id = Some(nextRandomId)))
//      mongoCollection += dbo
//      Some(model)
//    }
//  }

//  def update(key: String, model: User) = {
//    Future {
//      val inputDbo = grater[User].asDBObject(model)
//      val query = MongoDBObject("_id" -> key)
//      val update = $set("content" -> List(inputDbo))
//
//      mongoCollection.update(query, update, false, false, WriteConcern.Safe)
//
//      val dbo = mongoCollection.findOne(query)
//      val result = dbo.map(f => {
//        val uw: User = grater[UserWrapper].asObject(f)
//        uw
//      })
//
//      result
//    }
//  }

  def search(searchObj: BSONDocument) = userCollection.find(searchObj).cursor[User].collect[List]()
}

