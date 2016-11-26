package com.mycotrack.api.service

import akka.actor.ActorSystem
import com.mycotrack.api.aggregation.AggregationBroadcaster
import com.mycotrack.api.dao.{AggregationDao, ProjectDao}
import scaldi.Injector
import scaldi.akka.AkkaInjectable

import scala.concurrent.Future

import scala.concurrent.ExecutionContext.Implicits.global

/**
 * Created by ctcarrier on 11/16/16.
 */
trait AggregationService {

  def regenerateAggregate(): Future[Option[Boolean]]
}

class AggregationServiceImpl(implicit inj: Injector) extends AggregationService with AkkaInjectable {
  implicit lazy val system = inject[ActorSystem]

  lazy val aggregationBroadcaster = injectActorRef[AggregationBroadcaster]
  lazy val projectDao = inject[ProjectDao]
  lazy val aggregationDao = inject[AggregationDao]

  def regenerateAggregate(): Future[Option[Boolean]] = {
    for {
      cl <- aggregationDao.clearAllAggregates()
      ga <- projectDao.getAll().map(projects => {
        projects.foreach(project => {
          aggregationBroadcaster ! project
        })
      })
    } yield Option(true)
  }
}