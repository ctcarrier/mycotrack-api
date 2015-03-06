package com.mycotrack.api.dao

import com.mycotrack.api._
import model._
import akka.actor.{ActorRefFactory, ActorSystem}
import reactivemongo.api.collections.default.BSONCollection
import reactivemongo.bson.BSONDocument
import scaldi.Injector
import scaldi.akka.AkkaInjectable

import scala.concurrent.{ExecutionContext, Future}

trait ICultureDao extends MycotrackDao[Culture, CultureWrapper] {
  def search(searchObj: BSONDocument, includeProjects: Option[Boolean]): Future[Option[List[Culture]]]
  def getProjectsByCulture(userUrl: Option[String]): Option[List[Culture]];
}

class CultureDao(implicit inj: Injector) extends ICultureDao with AkkaInjectable {

  def urlPrefix = "/cultures/"

  import ExecutionContext.Implicits.global
  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory: ActorRefFactory = system

  val projectCollection = inject[BSONCollection] (identified by 'PROJECT_COLLECTION)

  def search(searchObj: BSONDocument, includeProjects: Option[Boolean]) = Future {

    val cultureListRes = mongoCollection.find(searchObj).map(f => {
      val cw = grater[CultureWrapper].asObject(f)

      if (includeProjects.getOrElse(false)) {
        //fetch list of projects by culture
        val projectBuilder = MongoDBObject.newBuilder
        cw._id.foreach(projectBuilder += "content.cultureUrl" -> _)
        projectBuilder += ("content.enabled" -> true)
        val listRes = projCollection.find(projectBuilder.result.asDBObject).map(p => {
          val pw = grater[ProjectWrapper].asObject(p)
          pw.content.head.copy(id = pw._id)
        }).toList

        cw.content.head.copy(id = cw._id, projects = Option(listRes))
      }
      else {
        cw.content.head.copy(id = cw._id)
      }
    }).toList

    val res = cultureListRes match {
      case l: List[Culture] if (!l.isEmpty) => Some(l)
      case _ => None
    }

    res
  }

  def getProjectsByCulture(userUrl: Option[String]): Option[List[Culture]] = {
    val builder = MongoDBObject.newBuilder
    userUrl.foreach(builder += "content.userUrl" -> _)

    val cultureListRes = mongoCollection.find(builder.result.asDBObject).map(f => {
      val cw = grater[CultureWrapper].asObject(f)

      //fetch list of projects by culture
      val projectBuilder = MongoDBObject.newBuilder
      userUrl.foreach(projectBuilder += "content.userUrl" -> _)
      cw._id.foreach(projectBuilder += "content.cultureUrl" -> _)
      val listRes = projCollection.find(projectBuilder.result.asDBObject).map(f => {
        val pw = grater[ProjectWrapper].asObject(f)
        pw.content.head.copy(id = pw._id)
      }).toList

      cw.content.head.copy(id = cw._id, projects = Option(listRes))
    }).toList

    val res = cultureListRes match {
      case l: List[Culture] if (!l.isEmpty) => Some(l)
      case _ => None
    }

    res
  }
}