package com.mycotrack.api.endpoint

import akka.actor.ActorSystem
import akka.event.Logging
import com.mycotrack.api.auth.Authenticator
import com.mycotrack.api.dao.{SensorDao, Location, LocationDao}
import com.mycotrack.api.model.{SensorReading, LocationSearchParams}
import com.mycotrack.api.service.SensorService
import com.mycotrack.api.spraylib.{LocalDeserializers, LocalPathMatchers}
import com.typesafe.scalalogging.LazyLogging
import org.joda.time.DateTime
import org.json4s.Formats
import reactivemongo.bson.BSONObjectID
import scaldi.Injector
import scaldi.akka.AkkaInjectable
import spray.http.StatusCodes._
import spray.httpx.Json4sJacksonSupport
import spray.routing.HttpService
import scala.language.postfixOps

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

  val service = inject[SensorService]

  lazy val authenticator = inject[Authenticator]

  //directive compositions
  val postSensorReading = path("sensorReadings") & post & entity(as[SensorReading]) & respondWithStatus(Created)

  val getSensorReadings = path("sensorReadings") & get & parameters('location.as[String], 'metric.as[String], 'start.as[DateTime] ?, 'end.as[DateTime] ?)

  val indirectGetProjects = path("extendedProjects") & get & parameters('location.as[String], 'metric.as[String], 'start.as[DateTime] ?, 'contaminated.as[Boolean] ?)

  val route = {
    // Service implementation.
    logRequestResponse("Sensor", Logging.InfoLevel) {
      authenticate(authenticator.basicAuthenticator) { user =>
        postSensorReading { resource =>
          complete {
            service.save(resource.copy(userId = user._id))
          }
        } ~
        getSensorReadings { (location, metric, start, end) =>
          complete {
            service.getReadings(location, metric, start, end)
          }
        }
      }
    }
  }
}