package com.mycotrack.api.endpoint

import com.mycotrack.api.json.ObjectIdSerializer
import cc.spray.http._
import cc.spray.typeconversion._
import HttpHeaders._
import StatusCodes._
import MediaTypes._
import com.mycotrack.api.model._
import com.mycotrack.api.response._
import com.mycotrack.api.dao._
import net.liftweb.json.DefaultFormats
import cc.spray._
import akka.dispatch.Future
import caching._
import directives.Remaining
import com.weiglewilczek.slf4s.Logging
import com.mycotrack.api.spray.MongoAuthSupport
import com.mycotrack.api.service.FarmService

/**
 * @author chris carrier
 */

trait FarmEndpoint extends Directives with LiftJsonSupport with Logging with MongoAuthSupport {
  implicit val liftJsonFormats = DefaultFormats.lossless + new ObjectIdSerializer

  def JsonContent(content: String) = HttpContent(ContentType(`application/json`), content)

  val service: FarmService

  //directive compositions
  val indirectGet = path("") & get

  val restService = {
    // Debugging: /ping -> pong
    path("ping") {
      detach {
        cache {
          get {
            _.complete("pong " + new java.util.Date())
          }
        }
      }
    } ~
      // Service implementation.
      pathPrefix("api" / "farms") {
        authenticate(httpMongo()) {
          user =>
            indirectGet {
                completeWith {
                  service.getFarm(user)
                }
            }

        }
      }
  }
}