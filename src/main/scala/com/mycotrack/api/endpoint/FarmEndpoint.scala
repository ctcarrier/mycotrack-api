package com.mycotrack.api.endpoint

import akka.actor.ActorSystem
import com.mycotrack.api.auth.Authenticator
import com.typesafe.scalalogging.LazyLogging
import com.mycotrack.api.service.FarmService
import org.json4s.Formats
import scaldi.Injector
import scaldi.akka.AkkaInjectable
import spray.httpx.Json4sJacksonSupport
import spray.routing.HttpService
import scala.concurrent.ExecutionContext.Implicits.global

/**
 * @author chris carrier
 */

class FarmEndpoint(implicit inj: Injector) extends HttpService
  with Json4sJacksonSupport
  with LazyLogging
  with AkkaInjectable {

  implicit lazy val system = inject[ActorSystem]
  val actorRefFactory = system
  lazy val json4sJacksonFormats = inject[Formats]

  val service = inject[FarmService]

  lazy val authenticator = inject[Authenticator]

  //directive compositions
  val indirectGet = path("") & get

  val route = {
    // Debugging: /ping -> pong
    path("ping") {
      get {
        complete("pong " + new java.util.Date())
      }
    } ~
    pathPrefix("farms") {
      authenticate(authenticator.basicAuthenticator) { user =>
        indirectGet {
          complete {
            service.getFarm(user)
          }
        }
      }
    }
  }
}