package com.mycotrack.api.dao

import com.mycotrack.api._
import model._
import akka.actor.{ActorRefFactory, ActorSystem}
import reactivemongo.api.collections.default.BSONCollection
import reactivemongo.bson.{BSONObjectID, BSONDocument}
import scaldi.Injector
import scaldi.akka.AkkaInjectable

import scala.concurrent.{ExecutionContext, Future}

trait ICultureDao {
  def get(key: BSONObjectID): Future[Option[Culture]]
  def save(species: Culture): Future[Option[Culture]]
  def search(searchObj: BSONDocument, includeProjects: Option[Boolean]): Future[List[Culture]]
  def update(cultureId: BSONObjectID, culture: Culture): Future[Option[Culture]]
  def getBySpecies(speciesId: BSONObjectID): Future[List[Culture]]
}

class CultureDao(implicit inj: Injector) extends ICultureDao with AkkaInjectable {

  def urlPrefix = "/cultures/"

  import ExecutionContext.Implicits.global
  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory: ActorRefFactory = system

  lazy val cultureCollection = inject[BSONCollection] (identified by 'CULTURE_COLLECTION)

  def get(key: BSONObjectID): Future[Option[Culture]] = cultureCollection.find(BSONDocument("_id" -> key)).one[Culture]

  def save(culture: Culture): Future[Option[Culture]] = {

    val newObjectId = Option(BSONObjectID.generate)
    for {
      lastError <- cultureCollection.save(culture.copy(_id = newObjectId))
      toReturn <- cultureCollection.find(BSONDocument("_id" -> newObjectId)).one[Culture]
    } yield toReturn
  }

  def search(searchObj: BSONDocument, includeProjects: Option[Boolean]): Future[List[Culture]] = {
    cultureCollection.find(searchObj).cursor[Culture].collect[List]()
  }

  def update(cultureId: BSONObjectID, culture: Culture): Future[Option[Culture]] = {
    val query = BSONDocument("_id" -> cultureId)
    for {
      lastError <- cultureCollection.update(query, culture)
      toReturn <- cultureCollection.find(BSONDocument("_id" -> culture._id)).one[Culture]
    } yield toReturn
  }

  def getBySpecies(speciesId: BSONObjectID): Future[List[Culture]] = {
    val query = BSONDocument("speciesId" -> speciesId)
    cultureCollection.find(query).cursor[Culture].collect[List]()
  }
}