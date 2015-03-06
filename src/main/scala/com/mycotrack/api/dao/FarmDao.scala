package com.mycotrack.api.dao

import akka.actor.{ActorRefFactory, ActorSystem}
import com.mycotrack.api.model.{Container, Substrate}
import reactivemongo.api.collections.default.BSONCollection
import scaldi.Injector
import scaldi.akka.AkkaInjectable

import scala.concurrent.{Future, ExecutionContext}

/**
 * @author chris_carrier
 * @version 7/25/12
 */

trait FarmDao {

  def defaultSubstrates: Future[List[Substrate]]
  def defaultContainers: Future[List[Container]]

}

class MongoFarmDao(implicit inj: Injector) extends FarmDao with AkkaInjectable {

  import ExecutionContext.Implicits.global
  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory: ActorRefFactory = system

  val defaultSubstrateCollection = inject[BSONCollection] (identified by 'DEFAULT_SUBSTRATE_COLLECTION)
  val defaultContainerCollection = inject[BSONCollection] (identified by 'DEFAULT_CONTAINER_COLLECTION)

  def defaultSubstrates: Future[List[Substrate]] = {
    defaultSubstrateCollection.find().cursor[Substrate].collect[List]()
  }

  def defaultContainers: Future[List[Container]] = {
    defaultContainerCollection.find().cursor[Container].collect[List]()
  }

}
