package com.mycotrack.api.model

import com.mongodb.casbah.Imports._

/**
 * @author chris_carrier
 * @version 9/30/11
 */

object ProjectSearchParams {

  implicit def toDbo(p: ProjectSearchParams): MongoDBObject = {

    val query = MongoDBObject()

    if (p.name != None) {
      query += "content.name" -> p.name.get
    }


    if (p.description != None) {
      query += "content.description" -> p.description.get
    }

    query
  }
}

case class ProjectSearchParams(name: Option[String], description: Option[String])

case class SpeciesSearchParams(scientificName: Option[String], commonName: Option[String]) {
  def asDBObject: MongoDBObject = {
    val builder = MongoDBObject()
    scientificName.foreach(builder += "content.scientificName" -> _)
    commonName.foreach(builder += "content.commonName" -> _)
    builder.result.asDBObject
  }
}