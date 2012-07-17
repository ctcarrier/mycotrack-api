package com.mycotrack.api.endpoint

import com.mycotrack.api.auth.FromMongoUserPassAuthenticator
import com.mycotrack.api.json.{ObjectIdSerializer}
import org.bson.types.ObjectId
import cc.spray.http._
import cc.spray.typeconversion._
import HttpHeaders._
import HttpMethods._
import StatusCodes._
import MediaTypes._
import cc.spray.authentication._
import net.liftweb.json.JsonParser._
import net.liftweb.json.Serialization._
import com.mycotrack.api.model._
import aggregation.General
import com.mycotrack.api.response._
import com.mycotrack.api.dao._
import net.liftweb.json.{Formats, DefaultFormats}
import cc.spray._
import akka.dispatch.Future
import caching._
import caching.LruCache._
import com.weiglewilczek.slf4s.Logging
import com.mycotrack.api.spray.MongoAuthSupport

trait UserEndpoint extends Directives with LiftJsonSupport with Logging with MongoAuthSupport {
  implicit val liftJsonFormats = DefaultFormats + new ObjectIdSerializer

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"

  def JsonContent(content: String) = HttpContent(ContentType(`application/json`), content)

  val requiredFields = List("name")

  val service: UserService

  def withSuccessCallback(ctx: RequestContext, statusCode: StatusCode = OK)(f: Future[_]): Future[_] = {
    f.onComplete(f => {
      f match {
        case Right(Some(cl: List[User])) => ctx.complete(statusCode, cl)
        case Right(Some(c: User)) => ctx.complete(statusCode, c)
        case Right(Some(uw: UserWrapper)) => ctx.complete(statusCode, uw.content.head.copy(id = uw._id))
        case _ => ctx.fail(StatusCodes.NotFound, ErrorResponse(1l, ctx.request.path, List(NOT_FOUND_MESSAGE)))
      }
    })
  }

  //directive compositions
  val objectIdPathMatch = path("^[a-zA-Z0-9]+$".r)
  val mtAuth = authenticate(httpMongo())

  val putUser = content(as[User]) & put
  val postUser = path("") & content(as[User]) & post
  val searchUser = (path("") & get)

  val restService = {
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