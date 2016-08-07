package com.mycotrack.api.dao

import com.mycotrack.api._
import com.typesafe.scalalogging.LazyLogging
import model._
import java.util.Date
import akka.actor.{ActorRefFactory, ActorSystem}
import reactivemongo.api.collections.bson.BSONCollection
import reactivemongo.bson.{BSONObjectID, BSONDocument}
import scaldi.Injector
import scaldi.akka.AkkaInjectable

import scala.concurrent.{Future, ExecutionContext}
import scala.util.Success

trait IProjectDao {
  def get(key: BSONObjectID, userId: BSONObjectID): Future[Option[Project]]
  def save(project: Project): Future[Option[Project]]
  def search(searchObj: BSONDocument): Future[List[Project]]
  def update(id: BSONObjectID, project: Project): Future[Option[Project]]
}

class ProjectDao(implicit inj: Injector) extends IProjectDao with LazyLogging with AkkaInjectable {

  import ExecutionContext.Implicits.global
  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory: ActorRefFactory = system

  lazy val projectCollection = inject[BSONCollection] (identified by 'PROJECT_COLLECTION)

  def get(key: BSONObjectID, userId: BSONObjectID): Future[Option[Project]] =
    projectCollection.find(BSONDocument("_id" -> key, "userId" -> userId)).one[Project]

  def save(project: Project): Future[Option[Project]] = {

    val newObjectId = Option(BSONObjectID.generate)
    for {
      lastError <- projectCollection.insert(project.copy(_id = newObjectId))
      toReturn <- projectCollection.find(BSONDocument("_id" -> newObjectId)).one[Project]
    } yield toReturn
  }

  def search(searchObj: BSONDocument): Future[List[Project]] = {
    projectCollection.find(searchObj).cursor[Project].collect[List]()
  }

  def update(id: BSONObjectID, project: Project): Future[Option[Project]] = {
    val query = BSONDocument("_id" -> id)
    for {
      lastError <- projectCollection.update(query, project)
      toReturn <- projectCollection.find(BSONDocument("_id" -> project._id)).one[Project]
    } yield toReturn
  }
}

