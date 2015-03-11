package com.mycotrack.api.service

import com.mycotrack.api.dao.FarmDao
import com.mycotrack.api.model.{Farm, User}
import scaldi.Injector
import scaldi.akka.AkkaInjectable

import scala.concurrent.Future

/**
 * @author chris_carrier
 * @version 7/25/12
 */

trait FarmService {
  def getFarm(user: User): Future[Farm]
}

class DefaultFarmService(implicit inj: Injector) extends FarmService with AkkaInjectable {

  import scala.concurrent.ExecutionContext.Implicits.global

  lazy val farmDao = inject[FarmDao]

  def getFarm(user: User): Future[Farm] = {

    for {
      substrates <- farmDao.defaultSubstrates
      containers <- farmDao.defaultContainers
    } yield Farm(None, substrates, containers)
  }
}
