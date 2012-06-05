package com.mycotrack.api.dao

import com.mongodb.casbah.Imports._
import akka.dispatch.Future
import com.novus.salat._
import com.novus.salat.global._
import com.mongodb.casbah.commons.MongoDBObject
import com.mycotrack.api._
import model._
import cc.spray.utils.Logging

/*
 * User: gregg
 * Date: 11/6/11
 * Time: 1:23 PM
 */
trait EventDao extends EventService with Logging {

  val mongoCollection: MongoCollection

  def urlPrefix = "/events/"

  def search(searchObj: MongoDBObject) = Future {
    val listRes = mongoCollection.find(searchObj).map(f => {
      grater[Event].asObject(f)
    }).toList


    val res = listRes match {
      case l: List[Species] if (!l.isEmpty) => Some(l)
      case _ => None
    }

    res
  }
}