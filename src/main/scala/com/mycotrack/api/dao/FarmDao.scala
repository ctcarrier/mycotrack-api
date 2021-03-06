package com.mycotrack.api.dao

import akka.actor.{ActorRefFactory, ActorSystem}
import com.mycotrack.api.model.{Container, Substrate}
import reactivemongo.api.collections.bson.BSONCollection
import reactivemongo.bson.BSONDocument
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
  def getContainer(key: String): Future[Option[Container]]
  def getSubstrate(key: String): Future[Option[Substrate]]
}

class MongoFarmDao(implicit inj: Injector) extends FarmDao with AkkaInjectable {

  import ExecutionContext.Implicits.global
  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory: ActorRefFactory = system

  lazy val defaultSubstrateCollection = inject[BSONCollection] (identified by 'DEFAULT_SUBSTRATE_COLLECTION)
  lazy val defaultContainerCollection = inject[BSONCollection] (identified by 'DEFAULT_CONTAINER_COLLECTION)

  val existsQuery = BSONDocument("_id" -> BSONDocument("$exists" -> true))

  def defaultSubstrates: Future[List[Substrate]] = {
    defaultSubstrateCollection.find(existsQuery).cursor[Substrate].collect[List]()
  }

  def defaultContainers: Future[List[Container]] = {
    defaultContainerCollection.find(existsQuery).cursor[Container].collect[List]()
  }

  def getContainer(key: String): Future[Option[Container]] = {
    val query = BSONDocument("_id" -> key)

    defaultContainerCollection.find(query).one[Container]
  }

  def getSubstrate(key: String): Future[Option[Substrate]] = {
    val query = BSONDocument("_id" -> key)

    defaultSubstrateCollection.find(query).one[Substrate]
  }
}
