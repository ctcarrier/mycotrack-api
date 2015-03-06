package com.mycotrack.api.endpoint

import com.mycotrack.api.json.{ObjectIdSerializer}
import com.typesafe.scalalogging.LazyLogging
import com.mycotrack.api.dao._
import spray.httpx.Json4sJacksonSupport
import spray.routing.HttpService

class AggregationEndpoint extends HttpService with Json4sJacksonSupport with LazyLogging {
  implicit val liftJsonFormats = DefaultFormats + new ObjectIdSerializer

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"


  val requiredFields = List("name")

  val service: AggregationService

  //directive compositions
  val objectIdPathMatch = path("^[a-f0-9]+$".r)

  val route = {
    // Debugging: /ping -> pong
    // Service implementation.
    path("api" / "aggregations") {
        get {
            logger.info("Got agg request")
              complete {
                logger.info("Getting aggregation")
                  service.getGeneralAggregation
              }
          }
        }
    }
  }