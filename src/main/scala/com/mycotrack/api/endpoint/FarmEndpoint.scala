package com.mycotrack.api.endpoint

import com.mycotrack.api.json.ObjectIdSerializer
import com.typesafe.scalalogging.LazyLogging
import com.mycotrack.api.spray.MongoAuthSupport
import com.mycotrack.api.service.FarmService
import spray.httpx.Json4sJacksonSupport

/**
 * @author chris carrier
 */

class FarmEndpoint extends HttpService with Json4sJacksonSupport with LazyLogging with MongoAuthSupport {
  implicit val liftJsonFormats = DefaultFormats.lossless + new ObjectIdSerializer

  val service: FarmService

  //directive compositions
  val indirectGet = path("") & get

  val route = {
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