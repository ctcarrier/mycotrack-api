package com.mycotrack.api.dao

import com.mycotrack.api._
import com.typesafe.scalalogging.LazyLogging
import model._
import akka.actor.{ActorRefFactory, ActorSystem}
import reactivemongo.api.collections.default.BSONCollection
import reactivemongo.bson.BSONDocument
import scaldi.akka.AkkaInjectable

import scala.concurrent.{Future, ExecutionContext}

trait ISpeciesDao extends MycotrackDao[Species, SpeciesWrapper] {
  def search(searchObj: BSONDocument): Future[Option[List[Species]]]
  def getProjectsBySpecies(userUrl: Option[String]): Option[Map[String, List[Project]]];
}

trait SpeciesDao extends ISpeciesDao with LazyLogging with AkkaInjectable {

  import ExecutionContext.Implicits.global
  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory: ActorRefFactory = system

  val projectCollection = inject[BSONCollection] (identified by 'PROJECT_COLLECTION)
  val speciesCollection = inject[BSONCollection] (identified by 'SPECIES_COLLECTION)

  def search(searchObj: BSONDocument) = Future {
    val listRes = speciesCollection.find(searchObj).map(f => {
      val pw = grater[SpeciesWrapper].asObject(f)
      pw.content.head.copy(id = pw._id)
    }).toList


    val res = listRes match {
      case l: List[Species] if (!l.isEmpty) => Some(l)
      case _ => None
    }

    res
  }

  def getProjectsBySpecies(userUrl: Option[String]): Option[Map[String, List[Project]]] = {
    val builder = MongoDBObject.newBuilder
    userUrl.foreach(builder += "content.userUrl" -> _)

    val listRes = projectCollection.find(builder.result.asDBObject).map(f => {
      logger.info(f.toString);
      val pw = grater[ProjectWrapper].asObject(f)
      pw.content.head.copy(id = pw._id)
    }).toList

    val res = listRes match {
      case l: List[Project] if (!l.isEmpty) => Some(l.groupBy(p => p.cultureUrl.get))
      case _ => None
    }

    res
  }
}