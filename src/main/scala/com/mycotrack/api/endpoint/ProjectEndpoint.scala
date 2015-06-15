package com.mycotrack.api.endpoint

import akka.actor.ActorSystem
import com.mycotrack.api.auth.Authenticator
import com.mycotrack.api.service.ProjectService
import com.typesafe.scalalogging.LazyLogging
import com.mycotrack.api.model._
import com.mycotrack.api.response._
import com.mycotrack.api.dao._
import com.mycotrack.api.spraylib.{LocalDeserializers, LocalPathMatchers}
import org.json4s.Formats
import reactivemongo.bson.BSONObjectID
import scaldi.Injector
import scaldi.akka.AkkaInjectable
import spray.httpx.Json4sJacksonSupport
import spray.routing.HttpService
import scala.concurrent.ExecutionContext.Implicits.global

import spray.http.StatusCodes._

import scala.language.postfixOps

/**
 * @author chris carrier
 */

class ProjectEndpoint(implicit inj: Injector) extends HttpService
  with Json4sJacksonSupport
  with LazyLogging
  with AkkaInjectable
  with LocalPathMatchers
  with LocalDeserializers {

  implicit lazy val system = inject[ActorSystem]
  val actorRefFactory = system
  lazy val json4sJacksonFormats = inject[Formats]

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"

  val requiredFields = List("name", "description")

  lazy val authenticator = inject[Authenticator]

  lazy val dao = inject[IProjectDao]
  lazy val service = inject[ProjectService]

  //val directGetProject = authenticate(httpMongo(realm = "mycotrack")) & get
  val directGetProject = path("extendedProjects" / BSONObjectIDSegment) & get
  val putProject = path("projects" / BSONObjectIDSegment) & put & entity(as[Project])
  val postProjectChildren = path("extendedProjects" / BSONObjectIDSegment / "children") & post & entity(as[ProjectChildCommand]) & respondWithStatus(Created)
  val postEvent = path("projects" / "[^/]+".r / "events" / Segment) & post
  val postProject = path("projects") & post & entity(as[Project]) & respondWithStatus(Created)
  val indirectGetProjects = path("extendedProjects") & get & parameters('cultureId.as[BSONObjectID] ?, 'speciesId.as[BSONObjectID] ?, 'containerId ?)

  val route = {
    // Service implementation.
    authenticate(authenticator.basicAuthenticator) { user =>
      directGetProject { resourceId =>
        complete {
          service.get(resourceId, user._id.getOrElse(throw new RuntimeException("This shouldn't happen")))
        }
      } ~
      putProject { (resourceId, resource) =>
        complete {
          dao.update(resourceId, resource)
        }
      } ~
      postProjectChildren { (resourceId, resource) =>
        complete {
          service.addChild(resourceId, user._id.getOrElse(throw new RuntimeException("This shouldn't happen")), resource.copy(userId = user._id))
        }
      } ~
      postProject { resource =>
        complete {
          service.save(resource.copy(userId = user._id))
        }
      } ~
      indirectGetProjects { (cultureId, speciesId, containerId) =>
        complete {
          service.search(cultureId, speciesId, containerId, user._id)
        }
      }
    }
  }
}