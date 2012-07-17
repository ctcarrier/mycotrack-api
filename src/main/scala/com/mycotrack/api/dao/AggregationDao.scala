package com.mycotrack.api.dao

import com.mycotrack.api.model.aggregation.General
import akka.dispatch.Future
import com.mongodb.casbah.Imports._
import com.weiglewilczek.slf4s.Logging
import akka.actor.ActorSystem

/**
 * @author chris_carrier
 * @version 3/25/12
 */

trait AggregationService {
  def getGeneralAggregation: Future[Option[General]];
}

class AggregationDao(projectCollection: MongoCollection)(implicit actorSystem: ActorSystem) extends AggregationService with Logging {
  def getGeneralAggregation: Future[Option[General]] = {
    Future{
      val count = projectCollection.count
      logger.info("Aggregation count is: " + count)
      Some(General(count))

    }
  }
}