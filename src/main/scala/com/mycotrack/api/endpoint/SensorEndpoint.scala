package com.mycotrack.api.endpoint

import akka.actor.ActorSystem
import akka.event.Logging
import com.mycotrack.api.auth.Authenticator
import com.mycotrack.api.dao.{SensorDao, Location, LocationDao}
import com.mycotrack.api.model.{SensorReading, LocationSearchParams}
import com.mycotrack.api.spraylib.{LocalDeserializers, LocalPathMatchers}
import com.typesafe.scalalogging.LazyLogging
import org.json4s.Formats
import scaldi.Injector
import scaldi.akka.AkkaInjectable
import spray.http.StatusCodes._
import spray.httpx.Json4sJacksonSupport
import spray.routing.HttpService

import scala.concurrent.ExecutionContext.Implicits.global

/**
 * Created by ctcarrier on 5/12/15.
 */
class SensorEndpoint(implicit inj: Injector) extends HttpService
with Json4sJacksonSupport
with LazyLogging
with AkkaInjectable
with LocalPathMatchers
with LocalDeserializers {

  implicit lazy val system = inject[ActorSystem]
  val actorRefFactory = system
  lazy val json4sJacksonFormats = inject[Formats]

  val dao = inject[SensorDao]

  lazy val authenticator = inject[Authenticator]

  //directive compositions
  val postSensorReading = path("sensorReadings") & post & entity(as[SensorReading]) & respondWithStatus(Created)

  val route = {
    // Service implementation.
    logRequestResponse("Sensor", Logging.InfoLevel) {
      authenticate(authenticator.basicAuthenticator) { user =>
        postSensorReading { resource =>
          complete {
            dao.save(resource.copy(userId = user._id))
          }
        }
      }
    }
  }
}