package com.mycotrack.api.dao

import akka.actor.{ActorRefFactory, ActorSystem}
import com.mycotrack.api.model.Harvest
import com.typesafe.scalalogging.LazyLogging
import reactivemongo.api.collections.bson.BSONCollection
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import scaldi.Injector
import scaldi.akka.AkkaInjectable

import scala.concurrent.{Future, ExecutionContext}

/**
 * Created by ctcarrier on 6/25/15.
 */
trait HarvestDao {

  def save(harvest: Harvest, projectId: BSONObjectID, userId: BSONObjectID): Future[Option[Harvest]]
  def getAll(projectId: BSONObjectID, userId: BSONObjectID): Future[List[Harvest]]
}

class MongoHarvestDao(implicit inj: Injector) extends HarvestDao with LazyLogging with AkkaInjectable {

  import ExecutionContext.Implicits.global

  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory: ActorRefFactory = system

  lazy val harvestCollection = inject[BSONCollection](identified by 'HARVEST_COLLECTION)

  def save(harvest: Harvest, projectId: BSONObjectID, userId: BSONObjectID): Future[Option[Harvest]] = {

    for {
      lastError <- harvestCollection.insert(harvest)
      toReturn <- harvestCollection.find(BSONDocument("_id" -> harvest._id.get)).one[Harvest]
    } yield toReturn
  }

  def getAll(projectId: BSONObjectID, userId: BSONObjectID): Future[List[Harvest]] = {
    val query = BSONDocument("projectId" -> projectId, "userId" -> userId)

    harvestCollection.find(query).cursor[Harvest].collect[List]()
  }

}