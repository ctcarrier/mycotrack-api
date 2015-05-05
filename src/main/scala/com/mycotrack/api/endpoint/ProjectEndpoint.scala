package com.mycotrack.api.endpoint

import akka.actor.ActorSystem
import com.mycotrack.api.auth.Authenticator
import com.mycotrack.api.service.ProjectService
import com.typesafe.scalalogging.LazyLogging
import com.mycotrack.api.model._
import com.mycotrack.api.response._
import com.mycotrack.api.dao._
import com.mycotrack.api.spraylib.{LocalPathMatchers}
import org.json4s.Formats
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
  with LocalPathMatchers {

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
  val directGetProject = path(BSONObjectIDSegment) & get
  val putProject = path(BSONObjectIDSegment) & put & entity(as[Project])
  val postEvent = path("[^/]+".r / "events" / Segment) & post
  val postProject = post & entity(as[Project]) & respondWithStatus(Created)
  val indirectGetProjects = get & parameters('name ?, 'description ?)

  val route = {
    // Debugging: /ping -> pong
    path("ping") {
      get {
        _.complete("pong " + new java.util.Date())
      }


    } ~
    // Service implementation.
    pathPrefix("projects") {
      authenticate(authenticator.basicAuthenticator) { user =>
        directGetProject { resourceId =>
          complete {
            dao.get(resourceId, user._id.getOrElse(throw new RuntimeException("This shouldn't happen")))
          }
        } ~
        putProject { (resourceId, resource) =>
          complete {
            dao.update(resourceId, resource)
          }
        } ~
        postProject { resource =>
          complete {
            service.save(resource.copy(userId = user._id))
          }
        } ~
        indirectGetProjects { (name, description) =>
          complete {
            dao.search(ProjectSearchParams(name, description, user._id))
          }
        }
      }
    }
  }
}