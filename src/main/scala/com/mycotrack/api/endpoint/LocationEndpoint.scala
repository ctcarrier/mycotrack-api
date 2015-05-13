package com.mycotrack.api.endpoint

import akka.actor.ActorSystem
import com.mycotrack.api.auth.Authenticator
import com.mycotrack.api.dao.{Location, LocationDao}
import com.mycotrack.api.model.LocationSearchParams
import com.mycotrack.api.spraylib.{LocalDeserializers, LocalPathMatchers}
import com.typesafe.scalalogging.LazyLogging
import org.json4s.Formats
import reactivemongo.bson.BSONObjectID
import scaldi.Injector
import scaldi.akka.AkkaInjectable
import spray.http.StatusCodes._
import spray.httpx.Json4sJacksonSupport
import spray.routing.HttpService
import scala.concurrent.ExecutionContext.Implicits.global

/**
 * Created by ctcarrier on 5/12/15.
 */
class LocationEndpoint(implicit inj: Injector) extends HttpService
with Json4sJacksonSupport
with LazyLogging
with AkkaInjectable
with LocalPathMatchers
with LocalDeserializers {

  implicit lazy val system = inject[ActorSystem]
  val actorRefFactory = system
  lazy val json4sJacksonFormats = inject[Formats]

  val locationDao = inject[LocationDao]

  lazy val authenticator = inject[Authenticator]

  //directive compositions
  val directGetLocation = path("locations" / BSONObjectIDSegment) & get
  val postLocation = path("locations") & post & entity(as[Location]) & respondWithStatus(Created)
  val indirectGetLocations = path("locations") & get

  val route = {
    // Service implementation.
    authenticate(authenticator.basicAuthenticator) { user =>
      directGetLocation { resourceId =>
        complete {
          locationDao.get(resourceId, user._id.getOrElse(throw new RuntimeException("This shouldn't happen")))
        }
      } ~
      postLocation { resource =>
        complete {
          locationDao.save(resource.copy(userId = user._id))
        }
      } ~
      indirectGetLocations {
        complete {
          locationDao.search(LocationSearchParams())
        }
      }
    }
  }
}