package com.mycotrack.api.dao

import com.mongodb.casbah.Imports._
import akka.dispatch.Future
import com.novus.salat._
import com.novus.salat.global._
import com.mongodb.casbah.commons.MongoDBObject
import com.mycotrack.api._
import model._
import mongo.RandomId

/*
 * User: gregg
 * Date: 11/6/11
 * Time: 3:52 PM
 */
trait CultureDao extends ICultureDao {

  def urlPrefix = "/cultures/"

  val mongoCollection: MongoCollection
  val speciesService: ISpeciesDao

  def createCulture(cultureWrapper: CultureWrapper) = {
    Future {
      val dbo = grater[CultureWrapper].asDBObject(cultureWrapper.copy(_id = Some(nextRandomId)))
      mongoCollection += dbo
      Some(cultureWrapper.copy(_id = dbo.getAs[String]("_id"))) // TODO grater was not working here. If this were an actor you would just do a "self.channel" as before.
    }
  }

  def updateCulture(key: String, model: Culture) = {
    Future {
      val inputDbo = grater[Culture].asDBObject(model)
      val query = MongoDBObject("_id" -> formatKeyAsId(key))
      val update = $set("content" -> List(inputDbo))

      mongoCollection.update(query, update, false, false, WriteConcern.Safe)
      mongoCollection.findOne(query).map(f => grater[CultureWrapper].asObject(f))
    }
  }

  def search(searchObj: MongoDBObject) = Future {
    val listRes = mongoCollection.find(searchObj).map(f => {
      val pw = grater[CultureWrapper].asObject(f)
      val speciesObj: Option[Species] = speciesService.get(pw.content.head.speciesUrl.get).get
      pw.content.head.copy(id = pw._id, species = speciesObj.map(f => f.content.head))
    }).toList


    val res = listRes match {
      case l: List[Culture] if (!l.isEmpty) => Some(l)
      case _ => Some(List.empty[Culture])
    }

    res
  }
}