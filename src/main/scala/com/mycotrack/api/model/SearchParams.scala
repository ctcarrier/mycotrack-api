package com.mycotrack.api.model

import com.mongodb.casbah.Imports._

case class SpeciesSearchParams(scientificName: Option[String], commonName: Option[String]) {
  def asDBObject: MongoDBObject = {
    val builder = MongoDBObject()
    scientificName.foreach(builder += "content.scientificName" -> _)
    commonName.foreach(builder += "content.commonName" -> _)
    builder.result.asDBObject
  }
}