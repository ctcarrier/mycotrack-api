package com.mycotrack.api.model

import reactivemongo.bson.{BSONObjectID, BSONDocument}
import scala.language.implicitConversions

case class ProjectSearchParams(name: Option[String], description: Option[String], userId: Option[BSONObjectID])
object ProjectSearchParams {
  implicit def toDbo(p: ProjectSearchParams): BSONDocument = {
    BSONDocument()

  }
}

case class SpeciesSearchParams(scientificName: Option[String], commonName: Option[String])
object SpeciesSearchParams {
  implicit def asDBObject(s: SpeciesSearchParams): BSONDocument = {
    BSONDocument()
  }
}

case class CultureSearchParams(name: Option[String], userId: Option[BSONObjectID])
object CultureSearchParams {
  implicit def toDbo(c: CultureSearchParams): BSONDocument = {
    BSONDocument()
  }
}

case class UserSearchParams(email: Option[String], password: Option[String])
object UserSearchParams {
  implicit def toDbo(c: UserSearchParams): BSONDocument = {
    BSONDocument()
  }
}