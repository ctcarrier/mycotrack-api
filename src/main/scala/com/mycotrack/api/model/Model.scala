package com.mycotrack.api.model

import java.util.Date

import org.joda.time.DateTime
import reactivemongo.bson.BSONObjectID

case class Project(_id: Option[BSONObjectID],
                   description: Option[String],
                   cultureId: Option[BSONObjectID],
                   speciesId: Option[BSONObjectID],
                   userId: Option[BSONObjectID],
                   enabled: Boolean,
                   substrate: Option[String],
                   container: Option[String],
                   startDate: Option[DateTime],
                   parent: Option[String] = None,
                   timestamp: Option[DateTime] = Some(DateTime.now()),
                    count: Option[Long],
                    events: List[Event] = List.empty)


case class Species(_id: Option[BSONObjectID], scientificName: String, commonName: String, imageUrl: String)


case class Culture(_id: Option[BSONObjectID], name: String, speciesId: Option[BSONObjectID], userId: Option[BSONObjectID], species: Option[Species] = None, projects: Option[List[Project]] = None)


case class User(_id: Option[BSONObjectID], dateCreated: Option[DateTime], lastUpdated: Option[DateTime], email: String, password: String)
object User {
  val rx = "(^[\\w\\._%+-]+@[\\w\\.-]+\\.[\\w]{2,4}$)".r

  def validEmail(email: String) = {
    rx.findFirstIn(email) match {
      case Some(_) => true
      case None => false
    }
  }
}

case class Event(name: String, dateCreated: DateTime)

case class Substrate(_id: Option[String], name: String)

case class Container(_id: Option[String], name: String)

case class Farm(_id: Option[BSONObjectID], substrates: List[Substrate], containers: List[Container])