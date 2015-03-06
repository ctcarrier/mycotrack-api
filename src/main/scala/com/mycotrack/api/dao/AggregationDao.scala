package com.mycotrack.api.dao

import com.mycotrack.api.model.aggregation.General
import com.typesafe.scalalogging.LazyLogging
import akka.actor.{ActorRefFactory, ActorSystem}
import reactivemongo.api.collections.default.BSONCollection
import scaldi.Injector
import scaldi.akka.AkkaInjectable
import scala.concurrent.Future

import scala.concurrent.ExecutionContext

/**
 * @author chris_carrier
 * @version 3/25/12
 */

trait AggregationService {
  def getGeneralAggregation: Future[Option[General]];
}

class AggregationDao(implicit inj: Injector) extends AggregationService with LazyLogging with AkkaInjectable {

  import ExecutionContext.Implicits.global
  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory: ActorRefFactory = system

  val projectCollection = inject[BSONCollection] (identified by 'PROJECT_COLLECTION)

  def getGeneralAggregation: Future[Option[General]] = {
    Future{
      val count = projectCollection.count
      logger.info("Aggregation count is: " + count)
      Some(General(count))

    }
  }
}