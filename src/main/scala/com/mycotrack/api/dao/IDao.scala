package com.mycotrack.api.dao

import com.mongodb.casbah.Imports._
import akka.dispatch.Future
import org.bson.types.ObjectId
import com.mycotrack.api.model._
import com.mycotrack.api.mongo.RandomId
import com.novus.salat._
import com.novus.salat.global._
import scala.reflect.Manifest
import cc.spray.utils.Logging

trait MycotrackDao[T <: CaseClass, W <: CaseClass] extends Logging {
  val mongoCollection: MongoCollection

  def urlPrefix: String
  def formatKeyAsId(s: String): String = {
    urlPrefix + s
  }
  def nextRandomId: String = {
    formatKeyAsId(RandomId.getNextValue.get)
  }

  def getByKey(key: String): Future[Option[T]] = {
    get(formatKeyAsId(key))
  }
  def get[TT <: W](id: String)(implicit man: Manifest[TT]): Future[Option[TT]] = {
    Future {
      val dbo = mongoCollection.findOneByID(id)
      dbo.map(f => {
        log.info(f.toString)
        grater[TT].asObject(f)
      })
    }
  }

  def create[TT <: W](wrapper: TT)(implicit man: Manifest[TT]): Future[Option[TT]] = {
    Future {
      val dbo = grater[TT].asDBObject(wrapper)
      val builder = MongoDBObject.newBuilder
      builder ++= dbo.toList
      builder += ("_id" -> Some(nextRandomId))
      val toSave = builder.result
      mongoCollection += toSave
      Some(grater[TT].asObject(toSave))
    }
  }

  def update[TT <: T, WW <: W](key: String, model: TT)(implicit man: Manifest[TT], manW: Manifest[WW]): Future[Option[WW]] = {
    Future {
      val inputDbo = grater[TT].asDBObject(model)
      val query = MongoDBObject("_id" -> formatKeyAsId(key))
      val update = $set("content" -> List(inputDbo))

      mongoCollection.update(query, update, false, false, WriteConcern.Safe)

      val dbo = mongoCollection.findOne(query)
      val result = dbo.map(f => grater[WW].asObject(f))

      result
    }
  }

  def search(searchObj: MongoDBObject): Future[Option[List[T]]]
}

trait IProjectDao extends MycotrackDao[Project, ProjectWrapper] {
  def getChildren(root: Project): Future[Option[List[Project]]]
}

trait ISpeciesDao extends MycotrackDao[Species, SpeciesWrapper] {
}

trait ICultureDao extends MycotrackDao[Culture, CultureWrapper] {
}

trait UserService extends MycotrackDao[User, UserWrapper] {
}