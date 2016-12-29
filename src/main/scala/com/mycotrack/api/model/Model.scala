package com.mycotrack.api.model

import scala.language.implicitConversions

import com.mycotrack.api.dao.Location
import org.joda.time.DateTime
import reactivemongo.bson.BSONObjectID

case class Project(_id: Option[BSONObjectID],
                   description: Option[String],
                   cultureId: BSONObjectID,
                   speciesId: Option[BSONObjectID],
                   userId: Option[BSONObjectID],
                   enabled: Boolean,
                   substrate: String,
                   container: String,
                   createdDate: Option[DateTime] = Some(DateTime.now()),
                   parent: Option[BSONObjectID] = None,
                   count: Long = 1l,
                   events: List[Event] = List.empty,
                   locationId: Option[BSONObjectID] = None,
                   contaminated: Option[Boolean] = Some(false),
                   disabledDate: Option[DateTime] = None)

object Project {

  implicit def projectResponseToProject(pr: ProjectResponse): Project = {
    Project(pr._id,
      pr.description,
      pr.culture._id.get,
      pr.species._id,
      pr.userId,
      pr.enabled,
      pr.substrate._id.get,
      pr.container._id.get,
      pr.createdDate,
      pr.parent,
      pr.count,
      pr.events,
      pr.location.map(_._id).flatten,
      pr.contaminated,
      pr.disabledDate)
  }
}

case class ProjectChildCommand(description: Option[String],
                   userId: Option[BSONObjectID],
                   enabled: Boolean,
                   substrate: String,
                   container: String,
                   createdDate: Option[DateTime] = Some(DateTime.now()),
                   parent: Option[BSONObjectID] = None,
                   countSubstrateUsed: Long,
                   count: Long = 1l,
                   events: List[Event] = List.empty,
                   locationId: BSONObjectID,
                   contaminated: Option[Boolean] = Some(false))

case class ProjectResponse(_id: Option[BSONObjectID],
                   description: Option[String],
                   culture: Culture,
                   species: Species,
                   userId: Option[BSONObjectID],
                   enabled: Boolean,
                   substrate: Substrate,
                   container: Container,
                   createdDate: Option[DateTime] = Some(DateTime.now()),
                   parent: Option[BSONObjectID] = None,
                   count: Long = 1l,
                   events: List[Event] = List.empty,
                   location: Option[Location] = None,
                   weightOz: Option[Double] = None,
                   contaminated: Option[Boolean],
                   disabledDate: Option[DateTime])

object ProjectResponse {

  def apply(project: Project, culture: Culture, species: Species, substrate: Substrate, container: Container, location: Option[Location], weightOz: Option[Double]): ProjectResponse = {

    ProjectResponse(project._id,
      project.description,
      culture,
      species,
      project.userId,
      project.enabled,
      substrate,
      container,
      project.createdDate,
      project.parent,
      project.count,
      project.events,
      location,
      weightOz,
      project.contaminated,
      project.disabledDate
    )
  }
}


case class Species(_id: Option[BSONObjectID], scientificName: String, commonName: String, imageUrl: String, imageAttribution: Option[String])

case class Culture(_id: Option[BSONObjectID], name: String, speciesId: Option[BSONObjectID], userId: Option[BSONObjectID], species: Option[Species] = None, projects: Option[List[Project]] = None)
case class CultureInventory(_id: Option[BSONObjectID],
                            cultureId: Option[BSONObjectID],
                            speciesId: Option[BSONObjectID],
                            userId: Option[BSONObjectID],
                            count: Int)

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

case class Harvest(_id: Option[BSONObjectID], userId: Option[BSONObjectID], projectId: Option[BSONObjectID], weightOz: Double, dateCreated: Option[DateTime])

case class HarvestAggregate(harvests: List[Harvest], totalWeightOz: Double)

case class SensorReading(_id: Option[BSONObjectID], sensor: String, sensorData: Seq[Double], sourceAddress: String, timestamp: DateTime, userId: Option[BSONObjectID])