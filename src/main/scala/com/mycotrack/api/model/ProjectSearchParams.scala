package com.mycotrack.api.model

import com.mongodb.casbah.Imports._

/**
 * @author chris_carrier
 * @version 9/30/11
 */

object ProjectSearchParams {

  implicit def toDbo(p: ProjectSearchParams): MongoDBObject = {

    val query = MongoDBObject()

    p.name.foreach(xs => query += "content.name" -> xs)

    p.description.foreach(xs => query += "content.description" -> xs)

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
