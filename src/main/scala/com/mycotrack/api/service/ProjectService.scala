package com.mycotrack.api.service

import akka.actor.ActorSystem
import com.mycotrack.api.aggregation.AggregationBroadcaster
import com.mycotrack.api.boot.Boot._
import com.mycotrack.api.dao.ProjectDao
import com.mycotrack.api.model.Project
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
}
