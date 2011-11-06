package com.mycotrack.api

import _root_.com.mongodb.casbah.Imports._
import net.liftweb.json.DefaultFormats

trait MycotrackSpec {
  implicit val formats = DefaultFormats

  val resourceName = "UNDEFINED"
  lazy val BASE_URL = "/%s" format resourceName

  lazy val akkaConfig = akka.config.Config.config

  lazy val mongoUrl = akkaConfig.getString("mongodb.url", "localhost")
  lazy val mongoDbName = akkaConfig.getString("mongodb.database", "mycotrack_test")
  lazy val collection = akkaConfig.getString("mycotrack.%s.collection" format resourceName, resourceName)
  lazy val db = MongoConnection(mongoUrl, 27017)(mongoDbName)
  lazy val configDb = db(collection)
}