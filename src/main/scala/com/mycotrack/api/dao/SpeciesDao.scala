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
import cc.spray.utils.Logging

/*
 * User: gregg
 * Date: 11/6/11
 * Time: 1:23 PM
 */
trait SpeciesDao extends ISpeciesDao with Logging {

  val mongoCollection: MongoCollection
  def urlPrefix = "/species/"

//  def createSpecies(speciesWrapper: SpeciesWrapper) = {
//    Future {
//      val dbo = grater[SpeciesWrapper].asDBObject(speciesWrapper.copy(_id = Some(nextRandomId)))
//      mongoCollection += dbo
//      Some(speciesWrapper.copy(_id = dbo.getAs[String]("_id"))) // TODO grater was not working here. If this were an actor you would just do a "self.channel" as before.
//    }
//  }

//  def updateSpecies(key: String, model: Species) = {
//    Future {
//      val inputDbo = grater[Species].asDBObject(model)
//      val query = MongoDBObject("_id" -> formatKeyAsId(key))
//      val update = $set("content" -> List(inputDbo))
//
//      mongoCollection.update(query, update, false, false, WriteConcern.Safe)
//      mongoCollection.findOne(query).map(f => grater[SpeciesWrapper].asObject(f))
//    }
//  }

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
}