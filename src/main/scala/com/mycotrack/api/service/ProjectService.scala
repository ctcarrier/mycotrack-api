package com.mycotrack.api.service

import akka.actor.ActorSystem
import com.mycotrack.api.aggregation.AggregationBroadcaster
import com.mycotrack.api.boot.Boot._
import com.mycotrack.api.dao.ProjectDao
import com.mycotrack.api.model.Project
import reactivemongo.bson.BSONObjectID
import scaldi.Injector
import scaldi.akka.AkkaInjectable

import scala.concurrent.Future
import scala.util.Success

import scala.concurrent.ExecutionContext.Implicits.global

/**
 * Created by ctcarrier on 4/30/15.
 */
trait ProjectService {

  def save(project: Project): Future[Option[Project]]
  def addChild(id: BSONObjectID, userId: BSONObjectID, project: Project): Future[Option[Project]]
}

class ProjectServiceImpl(implicit inj: Injector) extends ProjectService with AkkaInjectable {
  implicit lazy val system = inject[ActorSystem]

  lazy val aggregationBroadcaster = injectActorRef[AggregationBroadcaster]
  lazy val projectDao = inject[ProjectDao]

  def save(project: Project): Future[Option[Project]] = {
    projectDao.save(project).andThen({
      case Success(_) => aggregationBroadcaster ! project
    })
  }

  def addChild(id: BSONObjectID, userId: BSONObjectID, newProject: Project): Future[Option[Project]] = {

    val response: Future[Future[Option[Project]]] = for {
      parentProject <- projectDao.get(id, userId)
      toSave <- Future.successful(newProject.copy(Some(id)))
    } yield {
        if (toSave.count < parentProject.get.count) {
          val newCount = parentProject.get.count - toSave.count
          val remainder = parentProject.get.copy(count = newCount, _id = None, parent = parentProject.get._id)
          save(remainder)
        }
        save(toSave).andThen({
          case Success(_) => projectDao.update(id, newProject.copy(enabled=false)).andThen({
            case Success(_) =>
          })
        })
      }.flatMap({x: Option[Project] => Future.successful(x)})

    response.flatMap(x => x)
  }
}
