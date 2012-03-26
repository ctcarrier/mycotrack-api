package com.mycotrack.api.dao

import com.mycotrack.api.model.aggregation.General
import akka.dispatch.Future
import com.mongodb.casbah.Imports._
import cc.spray.utils.Logging

/**
 * @author chris_carrier
 * @version 3/25/12
 */

trait AggregationService {
  def getGeneralAggregation: Future[Option[General]];
}

class AggregationDao(projectCollection: MongoCollection) extends AggregationService with Logging {
  def getGeneralAggregation: Future[Option[General]] = {
    Future{
      val count = projectCollection.count
      log.info("Aggregation count is: " + count)
      Some(General(count))

    }
  }
}