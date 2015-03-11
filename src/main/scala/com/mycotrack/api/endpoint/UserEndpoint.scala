package com.mycotrack.api.endpoint

import akka.actor.ActorSystem
import com.mycotrack.api.auth.Authenticator
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

class UserEndpoint(implicit inj: Injector) extends HttpService
  with Json4sJacksonSupport
  with LazyLogging
  with AkkaInjectable
  with LocalPathMatchers {

  implicit lazy val system = inject[ActorSystem]
  val actorRefFactory = system
  lazy val json4sJacksonFormats = inject[Formats]

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"

  val requiredFields = List("name")

  lazy val authenticator = inject[Authenticator]

  lazy val service = inject[UserService]

  //directive compositions
  val objectIdPathMatch = path("^[a-zA-Z0-9]+$".r)
  val mtAuth = authenticate(authenticator.basicAuthenticator)

  val putUser = path(BSONObjectIDSegment) & put & entity(as[User])
  val postUser =  post & entity(as[User])
  val searchUser = (path("") & get)

  val route = {
    // Debugging: /ping -> pong
    // Service implementation.
    pathPrefix("users") {
      mtAuth { user =>
        get {
          complete {
            user
          }
        } ~
        putUser { (resourceId, resource) =>
          complete {
            service.update(resourceId, resource)
          }
        }
      } ~
      searchUser {
        mtAuth { user =>
          complete(user)
        }
      } ~
      postUser { resource =>
        complete {
          service.save(resource)
        }
      }
    }
  }
}