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

  def search(searchObj: MongoDBObject) = Future {
    val listRes = mongoCollection.find(searchObj).map(f => {
      val pw = grater[CultureWrapper].asObject(f)
      val speciesObj: Option[SpeciesWrapper] = speciesService.get[SpeciesWrapper](pw.content.head.speciesUrl.get, None).get
      pw.content.head.copy(id = pw._id, species = speciesObj.map(f => f.content.head))
    }).toList


    val res = listRes match {
      case l: List[Culture] if (!l.isEmpty) => Some(l)
      case _ => Some(List.empty[Culture])
    }

    res
  }
}