package com.mycotrack.api.dao

import com.mycotrack.api._
import com.typesafe.scalalogging.LazyLogging
import model._
import akka.actor.{ActorRefFactory, ActorSystem}
import reactivemongo.api.collections.bson.BSONCollection
import reactivemongo.bson.{BSONObjectID, BSONDocument}
import scaldi.Injector
import scaldi.akka.AkkaInjectable

import scala.concurrent.{Future, ExecutionContext}

trait ISpeciesDao {
  def get(key: BSONObjectID): Future[Option[Species]]
  def save(species: Species): Future[Option[Species]]
  def search(searchObj: BSONDocument): Future[List[Species]]
  def update(id: BSONObjectID, species: Species): Future[Option[Species]]
}

class SpeciesDao(implicit inj: Injector) extends ISpeciesDao with LazyLogging with AkkaInjectable {

  import ExecutionContext.Implicits.global
  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory: ActorRefFactory = system

  lazy val projectCollection = inject[BSONCollection] (identified by 'PROJECT_COLLECTION)
  lazy val speciesCollection = inject[BSONCollection] (identified by 'SPECIES_COLLECTION)

  def get(key: BSONObjectID): Future[Option[Species]] = speciesCollection.find(BSONDocument("_id" -> key)).one[Species]

  def save(species: Species): Future[Option[Species]] = {

    val newObjectId = Option(BSONObjectID.generate)
    for {
      lastError <- speciesCollection.insert(species.copy(_id = newObjectId))
      toReturn <- speciesCollection.find(BSONDocument("_id" -> newObjectId)).one[Species]
    } yield toReturn
  }

  def search(searchObj: BSONDocument): Future[List[Species]] = {
    speciesCollection.find(searchObj).cursor[Species]().collect[List]()
  }

  def update(id: BSONObjectID, species: Species): Future[Option[Species]] = {
    val query = BSONDocument("_id" -> id)
    for {
      lastError <- speciesCollection.update(query, species)
      toReturn <- speciesCollection.find(BSONDocument("_id" -> species._id)).one[Species]
    } yield toReturn
  }
}