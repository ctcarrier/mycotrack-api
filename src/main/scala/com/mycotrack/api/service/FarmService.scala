package com.mycotrack.api.service

import com.mycotrack.api.dao._
import com.mycotrack.api.model.{LocationSearchParams, Substrate, Container, User}
import reactivemongo.bson.BSONObjectID
import scaldi.Injector
import scaldi.akka.AkkaInjectable

import scala.concurrent.Future

/**
 * @author chris_carrier
 * @version 7/25/12
 */

case class Farm(_id: Option[BSONObjectID],
                substrates: List[Substrate],
                containers: List[Container],
                cultures: List[CultureAggregation],
                containerAggregation: List[ContainerAggregation],
                locations: List[Location])

trait FarmService {
  def getFarm(user: User): Future[Farm]
}

class DefaultFarmService(implicit inj: Injector) extends FarmService with AkkaInjectable {

  import scala.concurrent.ExecutionContext.Implicits.global

  lazy val farmDao = inject[FarmDao]
  lazy val locationDao = inject[LocationDao]
  lazy val aggregationService = inject[AggregationService]

  def getFarm(user: User): Future[Farm] = {

    for {
      substrates <- farmDao.defaultSubstrates
      containers <- farmDao.defaultContainers
      cultureAggregation <- aggregationService.getCultureCount(user._id.getOrElse(throw new RuntimeException("Need a userId here")))
      containerAggregation <- aggregationService.getContainerCount(user._id.getOrElse(throw new RuntimeException("Need a userId here")))
      locations <- locationDao.search(LocationSearchParams(user._id))
    } yield Farm(None, substrates, containers, cultureAggregation, containerAggregation, locations)
  }
}
