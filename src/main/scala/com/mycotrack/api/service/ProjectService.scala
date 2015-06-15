package com.mycotrack.api.service

import akka.actor.ActorSystem
import com.mycotrack.api.aggregation.{Disable, AggregationBroadcaster}
import com.mycotrack.api.boot.Boot._
import com.mycotrack.api.dao._
import com.mycotrack.api.model.{ProjectChildCommand, ProjectSearchParams, ProjectResponse, Project}
import org.joda.time.DateTime
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import scaldi.Injector
import scaldi.akka.AkkaInjectable

import scala.concurrent.Future
import scala.util.Success

import scala.concurrent.ExecutionContext.Implicits.global

/**
 * Created by ctcarrier on 4/30/15.
 */
trait ProjectService {

  def get(key: BSONObjectID, userId: BSONObjectID): Future[Option[ProjectResponse]]
  def search(cultureId: Option[BSONObjectID], speciesId: Option[BSONObjectID], containerId: Option[String], userId: Option[BSONObjectID]): Future[List[ProjectResponse]]
  def save(project: Project): Future[Option[Project]]
  def addChild(id: BSONObjectID, userId: BSONObjectID, project: ProjectChildCommand): Future[Option[Project]]
}

class ProjectServiceImpl(implicit inj: Injector) extends ProjectService with AkkaInjectable {
  implicit lazy val system = inject[ActorSystem]

  lazy val aggregationBroadcaster = injectActorRef[AggregationBroadcaster]
  lazy val projectDao = inject[ProjectDao]
  lazy val farmDao = inject[FarmDao]
  lazy val speciesDao = inject[SpeciesDao]
  lazy val cultureDao = inject[CultureDao]
  lazy val locationDao = inject[LocationDao]

  def get(key: BSONObjectID, userId: BSONObjectID): Future[Option[ProjectResponse]] = {

    for {
      baseProject <- projectDao.get(key, userId)
      container <- farmDao.getContainer(baseProject.get.container)
      substrate <- farmDao.getSubstrate(baseProject.get.substrate)
      species <- speciesDao.get(baseProject.get.speciesId)
      culture <- cultureDao.get(baseProject.get.cultureId)
      location <- {
        baseProject.get.locationId match {
          case Some(locationId) => locationDao.get(locationId, userId)
          case None => Future.successful(None)
        }

      }
    } yield Option(ProjectResponse(baseProject.get, culture.get, species.get, substrate.get, container.get, location))
  }

  def search(cultureId: Option[BSONObjectID],
             speciesId: Option[BSONObjectID],
             containerId: Option[String],
             userId: Option[BSONObjectID]): Future[List[ProjectResponse]] = {

    val response: Future[Future[List[ProjectResponse]]] = projectDao.search(ProjectSearchParams(cultureId, containerId, userId)).map(x => Future.sequence(x.map(projectItem => {
      for {
        container <- farmDao.getContainer(projectItem.container)
        substrate <- farmDao.getSubstrate(projectItem.substrate)
        species <- speciesDao.get(projectItem.speciesId)
        culture <- cultureDao.get(projectItem.cultureId)
        location <- {
          projectItem.locationId match {
            case Some(locationId) => locationDao.get(locationId, userId.get)
            case None => Future.successful(None)
          }

        }
      } yield ProjectResponse(projectItem, culture.get, species.get, substrate.get, container.get, location)
    })))

    response.flatMap(x => x)
  }

  def save(project: Project): Future[Option[Project]] = {
    projectDao.save(project).andThen({
      case Success(_) => aggregationBroadcaster ! project
    })
  }

  def addChild(id: BSONObjectID, userId: BSONObjectID, projectChildCommand: ProjectChildCommand): Future[Option[Project]] = {

    val response: Future[Future[Option[Project]]] = for {
      parentProject <- projectDao.get(id, userId)
      toSave <- Future.successful({
        Project(_id = None,
        description = projectChildCommand.description,
        cultureId = parentProject.get.cultureId,
        speciesId = parentProject.get.speciesId,
        userId = Some(userId),
        enabled = projectChildCommand.enabled,
        substrate = projectChildCommand.substrate._id.get,
        container = projectChildCommand.container._id.get,
        createdDate = projectChildCommand.createdDate,
        parent = Some(id),
        count = projectChildCommand.count,
        events = projectChildCommand.events,
        locationId = parentProject.get.locationId)
      })
    } yield {
        if (projectChildCommand.countSubstrateUsed < parentProject.get.count) {
          val newCount = parentProject.get.count - projectChildCommand.countSubstrateUsed
          val remainder = parentProject.get.copy(count = newCount, _id = None, parent = parentProject.get._id)
          save(remainder)
        }
        save(toSave).andThen({
          case Success(_) => projectDao.update(id, parentProject.get.copy(enabled=false)).andThen({
            case Success(Some(disabledProject)) => aggregationBroadcaster ! Disable(disabledProject)
          })
        })
      }.flatMap({x: Option[Project] => Future.successful(x)})

    response.flatMap(x => x)
  }
}
