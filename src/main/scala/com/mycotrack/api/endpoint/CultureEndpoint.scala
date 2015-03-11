package com.mycotrack.api.endpoint

import akka.actor.ActorSystem
import com.mycotrack.api.auth.Authenticator
import com.mycotrack.api.model._
import com.mycotrack.api.response._
import com.mycotrack.api.dao._
import com.mycotrack.api.spraylib.{LocalPathMatchers}
import com.typesafe.scalalogging.LazyLogging
import org.json4s.Formats
import scaldi.Injector
import scaldi.akka.AkkaInjectable
import spray.httpx.Json4sJacksonSupport
import spray.routing.HttpService
import scala.concurrent.ExecutionContext.Implicits.global

import spray.http.StatusCodes._

import scala.language.postfixOps

class CultureEndpoint(implicit inj: Injector) extends HttpService
  with Json4sJacksonSupport
  with LazyLogging
  with LocalPathMatchers
  with AkkaInjectable{

  implicit lazy val system = inject[ActorSystem]
  val actorRefFactory = system
  lazy val json4sJacksonFormats = inject[Formats]

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"

  val requiredFields = List("name")

  val service = inject[ICultureDao]

  lazy val authenticator = inject[Authenticator]

  //directive compositions
  val getCulture =  path(BSONObjectIDSegment) & get
  val putCulture =  path(BSONObjectIDSegment) & put & entity(as[Culture])
  val postCulture = post & entity(as[Culture]) & respondWithStatus(Created)
  val searchCultures = get & parameters('name ?, 'includeProjects.as[Boolean] ?)

  val route = {
    // Debugging: /ping -> pong
    // Service implementation.
    pathPrefix("cultures") {
      authenticate(authenticator.basicAuthenticator) { user =>
        getCulture { resourceId =>
          complete {
            service.get(resourceId)
          }

        } ~
        putCulture { (resourceId, resource) =>
          complete {
            service.update(resourceId, resource)
          }
        } ~
        postCulture { resource =>
          complete {
            service.save(resource.copy(userId = user._id))
          }
        } ~
        searchCultures { (name, includeProjects) =>
          complete {
            service.search(CultureSearchParams(name, user._id), includeProjects)
          }
        }
      }
    }
  }
}