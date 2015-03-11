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

import spray.http.StatusCodes._

import scala.language.postfixOps

class SpeciesEndpoint(implicit inj: Injector) extends HttpService
  with Json4sJacksonSupport
  with LazyLogging
  with LocalPathMatchers
  with AkkaInjectable {

  implicit lazy val system = inject[ActorSystem]
  val actorRefFactory = system
  lazy val json4sJacksonFormats = inject[Formats]

  val service = inject[ISpeciesDao]

  lazy val authenticator = inject[Authenticator]

  //directive compositions
  val getSpecies = path(BSONObjectIDSegment) & get
  val putSpecies = path(BSONObjectIDSegment) & put & entity(as[Species])
  val postSpecies = post & entity(as[Species]) & respondWithStatus(Created)
  val searchSpecies = parameters('commonName ?, 'scientificName ?) & get

  val route = {
    pathPrefix("species") {
      getSpecies { resourceId =>
        complete {
          service.get(resourceId)
        }
      } ~
      putSpecies { (resourceId, resource) =>
        complete {
          service.update(resourceId, resource)
        }
      } ~
      postSpecies { resource =>
          complete {
            service.save(resource)
          }
      } ~
      searchSpecies { (commonName, scientificName) =>
        complete {
          service.search(SpeciesSearchParams(scientificName, commonName))
        }
      }
    }
  }
}