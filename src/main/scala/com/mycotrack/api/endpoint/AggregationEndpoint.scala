package com.mycotrack.api.endpoint

import akka.actor.ActorSystem
import com.mycotrack.api.auth.Authenticator
import com.mycotrack.api.spraylib.LocalPathMatchers
import com.typesafe.scalalogging.LazyLogging
import com.mycotrack.api.dao._
import org.json4s.Formats
import scaldi.Injector
import scaldi.akka.AkkaInjectable
import spray.httpx.Json4sJacksonSupport
import spray.routing.HttpService
import scala.concurrent.ExecutionContext.Implicits.global

class AggregationEndpoint(implicit inj: Injector) extends HttpService
  with Json4sJacksonSupport
  with LazyLogging
  with LocalPathMatchers
  with AkkaInjectable {

  implicit lazy val system = inject[ActorSystem]
  val actorRefFactory = system
  lazy val json4sJacksonFormats = inject[Formats]

  lazy val authenticator = inject[Authenticator]

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"


  val requiredFields = List("name")

  lazy val service: AggregationService = inject[AggregationService]

  val route = {
    // Debugging: /ping -> pong
    // Service implementation.
    path("aggregations") {
      authenticate(authenticator.basicAuthenticator) { user =>
        get {
          logger.info("Got agg request")
          complete {
            logger.info("Getting aggregation")
            service.getGeneralAggregation(user._id.getOrElse(throw new RuntimeException("UserId shouldn't be null")))
          }
        }
      }
    }
  }
}