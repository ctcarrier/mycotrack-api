package com.mycotrack.api.dao

import com.mycotrack.api._
import com.mycotrack.api.model._
import akka.actor.{ActorRefFactory, ActorSystem}
import reactivemongo.api.collections.bson.BSONCollection
import reactivemongo.bson.{BSONObjectID, BSONDocument}
import scaldi.Injector
import scaldi.akka.AkkaInjectable

import scala.concurrent.{ExecutionContext, Future}

trait ICultureDao {
  def get(key: BSONObjectID): Future[Option[Culture]]
  def save(culture: Culture): Future[Option[Culture]]
  def search(searchObj: BSONDocument, includeProjects: Option[Boolean]): Future[List[Culture]]
  def update(cultureId: BSONObjectID, culture: Culture): Future[Option[Culture]]
  def getBySpecies(speciesId: BSONObjectID): Future[List[Culture]]

  def getInventory(cultureId: BSONObjectID, userId: BSONObjectID): Future[Option[CultureInventory]]
  def updateInventory(cultureId: BSONObjectID, cultureInventory: CultureInventory): Future[Option[CultureInventory]]
}

class CultureDao(implicit inj: Injector) extends ICultureDao with AkkaInjectable {

  def urlPrefix = "/cultures/"

  import ExecutionContext.Implicits.global
  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory: ActorRefFactory = system

  lazy val cultureCollection = inject[BSONCollection] (identified by 'CULTURE_COLLECTION)
  lazy val cultureInventoryCollection = inject[BSONCollection] (identified by 'CULTURE_INVENTORY_COLLECTION)
  lazy val speciesDao = inject[SpeciesDao]

  def get(key: BSONObjectID): Future[Option[Culture]] = {
    for {
      culture <- cultureCollection.find(BSONDocument("_id" -> key)).one[Culture]
      cultureSpecies <- speciesDao.get(culture.get.speciesId.get)
    } yield Some(culture.get.copy(species = cultureSpecies))
  }

  def save(culture: Culture): Future[Option[Culture]] = {

    val newObjectId = Option(BSONObjectID.generate)
    for {
      lastError <- cultureCollection.insert(culture.copy(_id = newObjectId))
      toReturn <- cultureCollection.find(BSONDocument("_id" -> newObjectId)).one[Culture]
    } yield toReturn
  }

  def search(searchObj: BSONDocument, includeProjects: Option[Boolean]): Future[List[Culture]] = {
    val preRes: Future[Future[List[Culture]]] = for {
      cultures <- cultureCollection.find(searchObj).cursor[Culture]().collect[List]()
    } yield {
      val listOfFutures = cultures.map(culture => {
        speciesDao.get(culture.speciesId.get).map(cultureSpecies => culture.copy(species = cultureSpecies))
      })

      Future.sequence(listOfFutures)
    }

    preRes.flatMap(x => x)
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

  def getInventory(cultureId: BSONObjectID, userId: BSONObjectID): Future[Option[CultureInventory]] = {
    val query = BSONDocument("cultureId" -> cultureId, "userId" -> userId)
    cultureInventoryCollection.find(query).one[CultureInventory]
  }
  def updateInventory(cultureId: BSONObjectID, cultureInventory: CultureInventory): Future[Option[CultureInventory]] = {

    val newObjectId = Option(BSONObjectID.generate)
    for {
      lastError <- cultureInventoryCollection.insert(cultureInventory.copy(_id = newObjectId))
      toReturn <- cultureInventoryCollection.find(BSONDocument("_id" -> newObjectId)).one[CultureInventory]
    } yield toReturn
  }
}