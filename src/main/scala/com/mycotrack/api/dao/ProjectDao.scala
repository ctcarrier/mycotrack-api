package com.mycotrack.api.dao

import com.mycotrack.api._
import com.typesafe.scalalogging.LazyLogging
import model._
import java.util.Date
import akka.actor.{ActorRefFactory, ActorSystem}
import reactivemongo.api.collections.default.BSONCollection
import reactivemongo.bson.BSONDocument
import scaldi.akka.AkkaInjectable

import scala.concurrent.{Future, ExecutionContext}

trait IProjectDao extends MycotrackDao[Project, ProjectWrapper] {
  def search(searchObj: BSONDocument): Future[Option[List[Project]]]
  def getChildren(root: Project): Future[Option[List[Project]]]
  def addEvent(projectId: String, eventName: String): Option[Project]
}

trait ProjectDao extends IProjectDao with LazyLogging with AkkaInjectable {

  def urlPrefix = "/projects/"

  import ExecutionContext.Implicits.global
  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory: ActorRefFactory = system

  val projectCollection = inject[BSONCollection] (identified by 'PROJECT_COLLECTION)

  def search(searchObj: BSONDocument) = Future {
    val listRes = projectCollection.find(searchObj).map(f => {
      logger.info(f.toString);
      val pw: Project = grater[ProjectWrapper].asObject(f)
      pw
    }).toList

    val res = listRes match {
      case l: List[Project] if (!l.isEmpty) => Some(l)
      case _ => None
    }

    res
  }

  def getChildren(root: Project) = Future {
    val query = BSONDocument("parent" -> root.id)
    projectCollection.find(query).map(f =>
      grater[ProjectWrapper].asObject(f).content).toList match {
      case l: List[Project] if (!l.isEmpty) => Some(l)
      case _ => None
    }
  }

  def addEvent(projectId: String, eventName: String): Option[Project] = {
    logger.info("adding event in DAO with" + projectId + " and " + eventName)
    val eventDbo = grater[Event].asDBObject(Event(eventName, new Date()))
    val find = BSONDocument("_id" -> formatKeyAsId(projectId))
    val update = $addToSet("events" -> eventDbo)
    projectCollection.findAndModify(find, null, null, false, update, true, false).map(f => {
      val pw: Project = grater[ProjectWrapper].asObject(f)
      pw
    })
  }
}

