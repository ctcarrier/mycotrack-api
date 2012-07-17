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
import net.liftweb.json.JsonParser._
import net.liftweb.json.Serialization._
import com.mycotrack.api.model._
import com.mycotrack.api.response._
import com.mycotrack.api.dao._
import net.liftweb.json.{Formats, DefaultFormats}
import cc.spray._
import akka.dispatch.Future
import cc.spray.authentication._
import com.weiglewilczek.slf4s.Logging
import com.mycotrack.api.spray.MongoAuthSupport

trait CultureEndpoint extends Directives with LiftJsonSupport with Logging with MongoAuthSupport {
  implicit val liftJsonFormats = DefaultFormats + new ObjectIdSerializer

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"

  def JsonContent(content: String) = HttpContent(ContentType(`application/json`), content)

  val requiredFields = List("name")

  val service: ICultureDao

  def withSuccessCallback(ctx: RequestContext, statusCode: StatusCode = OK)(f: Future[_]): Future[_] = {
    f.onComplete(f => {
      f match {
        case Right(Some(CultureWrapper(oid, version, dateCreated, lastUpdated, content))) => ctx.complete(statusCode, content.map(x => x.copy(id = oid)).head)
        case Right(Some(c: Culture)) => ctx.complete(c)
        case Right(Some(c: List[Culture])) => ctx.complete(c)
        case _ => {
          ctx.fail(StatusCodes.NotFound, ErrorResponse(1l, ctx.request.path, List(NOT_FOUND_MESSAGE)))
        }
      }
    })
  }

  //directive compositions
  val objectIdPathMatch = path("^[a-zA-Z0-9]+$".r)
  val putCulture = content(as[Culture]) & put
  val postCulture = path("") & content(as[Culture]) & post
  val searchCultures = path("") & parameters('name ?, 'includeProjects.as[Boolean]?) & get
  val getProjectsByCulture = path("all" / "projects") & get

  val restService = {
    // Debugging: /ping -> pong
    // Service implementation.
    pathPrefix("api" / "cultures") {
      authenticate(httpMongo()) { user =>
      objectIdPathMatch {
        resourceId =>
          get {
            ctx =>
                  withSuccessCallback(ctx) {
                    service.get[CultureWrapper](service.formatKeyAsId(resourceId), user.id)
                  }

          } ~
            putCulture {
              resource => ctx =>
                    withSuccessCallback(ctx) {
                      service.update[Culture, CultureWrapper](resourceId, resource)
                    }

            }
      } ~
        postCulture {
          resource => ctx =>
              withSuccessCallback(ctx, Created) {
                service.create[CultureWrapper](resource.copy(userUrl = user.id))
              }

        } ~
        getProjectsByCulture {
            completeWith {
              logger.info("Got culture project request")
              val result = service.getProjectsByCulture(user.id).get
              logger.info("Result is: " + result)
              result
            }
        } ~
        searchCultures {
          (name, includeProjects) => ctx =>
              service.search(CultureSearchParams(name, user.id), includeProjects).onComplete(f => {
                f match {
                    case Right(Some(content)) => {
                      val res: List[Culture] = content
                      ctx.complete(res)
                    }
                    case _ => ctx.fail(StatusCodes.NotFound, ErrorResponse(1, ctx.request.path, List(NOT_FOUND_MESSAGE)))
                  }
                })
        }
      }
    }
  }
}