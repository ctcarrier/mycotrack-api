package com.mycotrack.api.model

import com.mongodb.casbah.Imports._

case class ProjectSearchParams(name: Option[String], description: Option[String])
object ProjectSearchParams {
  implicit def toDbo(p: ProjectSearchParams): MongoDBObject = {
    val query = MongoDBObject()
    p.name.foreach(xs => query += "content.name" -> xs)
    p.description.foreach(xs => query += "content.description" -> xs)
    query
  }
}

case class SpeciesSearchParams(scientificName: Option[String], commonName: Option[String])
object SpeciesSearchParams {
  implicit def asDBObject(s: SpeciesSearchParams): MongoDBObject = {
    val builder = MongoDBObject.newBuilder
    s.scientificName.foreach(builder += "content.scientificName" -> _)
    s.commonName.foreach(builder += "content.commonName" -> _)
    builder.result.asDBObject
  }
}

case class CultureSearchParams(names: Option[List[String]])
object CultureSearchParams {
  implicit def toDbo(c: CultureSearchParams): MongoDBObject = {
    val builder = MongoDBObject.newBuilder
    c.names.foreach(_.foreach(builder += "content.name" -> _))
    builder.result.asDBObject
  }
}

