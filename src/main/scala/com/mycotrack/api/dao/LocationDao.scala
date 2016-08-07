package com.mycotrack.api.dao

import akka.actor.{ActorRefFactory, ActorSystem}
import org.joda.time.DateTime
import reactivemongo.api.collections.bson.BSONCollection
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import scaldi.Injector
import scaldi.akka.AkkaInjectable

import scala.concurrent.{Future, ExecutionContext}

/**
 * Created by ctcarrier on 5/12/15.
 */

case class Location(_id: Option[BSONObjectID], 
                    name: String,
                    userId: Option[BSONObjectID],
                    createdDate: Option[DateTime] = Some(DateTime.now()))

trait LocationDao {

  def get(key: BSONObjectID, userId: BSONObjectID): Future[Option[Location]]
  def save(project: Location): Future[Option[Location]]
  def search(searchObj: BSONDocument): Future[List[Location]]
}

class MongoLocationDao(implicit inj: Injector) extends LocationDao with AkkaInjectable {

  import ExecutionContext.Implicits.global
  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory: ActorRefFactory = system
  
  lazy val locationCollection = inject[BSONCollection] (identified by 'LOCATION_COLLECTION)

  def get(key: BSONObjectID, userId: BSONObjectID): Future[Option[Location]] =
    locationCollection.find(BSONDocument("_id" -> key, "userId" -> userId)).one[Location]

  def save(location: Location): Future[Option[Location]] = {

    val newObjectId = Option(BSONObjectID.generate)
    for {
      lastError <- locationCollection.insert(location.copy(_id = newObjectId))
      toReturn <- locationCollection.find(BSONDocument("_id" -> newObjectId)).one[Location]
    } yield toReturn
  }

  def search(searchObj: BSONDocument): Future[List[Location]] = {
    locationCollection.find(searchObj).cursor[Location].collect[List]()
  } 
}
