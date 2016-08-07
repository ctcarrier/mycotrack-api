package com.mycotrack.api.dao

import com.mycotrack.api._
import com.typesafe.scalalogging.LazyLogging
import model._
import akka.actor.{ActorRefFactory, ActorSystem}
import reactivemongo.api.collections.bson.BSONCollection
import reactivemongo.bson.BSONDocument
import scaldi.Injector
import scaldi.akka.AkkaInjectable

import scala.concurrent.{Future, ExecutionContext}

trait EventService {
  def search(searchObj: BSONDocument): Future[List[Event]]
}

class EventDao(implicit inj: Injector) extends EventService with LazyLogging with AkkaInjectable {

  def urlPrefix = "/events/"

  import ExecutionContext.Implicits.global
  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory: ActorRefFactory = system

  lazy val eventCollection = inject[BSONCollection] (identified by 'EVENT_COLLECTION)

  def search(searchObj: BSONDocument): Future[List[Event]] =
    eventCollection.find(searchObj).cursor[Event].collect[List]()
}