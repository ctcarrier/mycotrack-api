package com.mycotrack.api.endpoint

import com.mycotrack.api.json.{ObjectIdSerializer}
import com.typesafe.scalalogging.LazyLogging
import com.mycotrack.api.model._
import com.mycotrack.api.response._
import com.mycotrack.api.dao._
import com.mycotrack.api.spray.MongoAuthSupport
import spray.httpx.Json4sJacksonSupport

class UserEndpoint extends HttpService with Json4sJacksonSupport with LazyLogging with MongoAuthSupport {
  implicit val liftJsonFormats = DefaultFormats + new ObjectIdSerializer

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"

  val requiredFields = List("name")

  val service: UserService

  //directive compositions
  val objectIdPathMatch = path("^[a-zA-Z0-9]+$".r)
  val mtAuth = authenticate(httpMongo())

  val putUser = content(as[User]) & put
  val postUser = path("") & content(as[User]) & post
  val searchUser = (path("") & get)

  val route = {
    // Debugging: /ping -> pong
    // Service implementation.
    pathPrefix("api" / "users") {
      objectIdPathMatch {
        resourceId =>
          mtAuth { user =>
          get {
            ctx =>
                  withSuccessCallback(ctx) {
                    service.getByKey(resourceId)
                  }
          } ~
            putUser {
              resource => ctx =>
                    withSuccessCallback(ctx) {
                      service.update[User, UserWrapper](resourceId, resource)
                    }
                  }
          }
      } ~
        searchUser {
          mtAuth { user =>
          _.complete(user)
          }
      }~
        postUser {
          resource => ctx =>
              withSuccessCallback(ctx, Created) {
                service.create[UserWrapper](resource)
              }
            }
    }
  }
}