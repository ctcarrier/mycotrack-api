package com.mycotrack.api.model

import reactivemongo.bson.{BSONObjectID, BSONDocument}
import scala.language.implicitConversions

case class ProjectSearchParams(cultureId: Option[BSONObjectID], containerId: Option[String], userId: Option[BSONObjectID])
object ProjectSearchParams {
  implicit def toDbo(p: ProjectSearchParams): BSONDocument = {
    BSONDocument("cultureId" -> p.cultureId, "container" -> p.containerId, "userId" -> p.userId, "enabled" -> true)

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

case class LocationSearchParams(userId: Option[BSONObjectID])
object LocationSearchParams {
  implicit def asDBObject(s: LocationSearchParams): BSONDocument = {
    BSONDocument("userId" -> s.userId)
  }
}