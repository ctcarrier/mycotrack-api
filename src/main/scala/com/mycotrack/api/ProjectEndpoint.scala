package com.mycotrack.api

import auth.FromMongoUserPassAuthenticator
import json.{ObjectIdSerializer, LiftJsonSupport}
import org.bson.types.ObjectId
import akka.event.EventHandler
import cc.spray.http._
import HttpHeaders._
import HttpMethods._
import StatusCodes._
import MediaTypes._
import net.liftweb.json.JsonParser._
import net.liftweb.json.Serialization._
import model._
import response._
import net.liftweb.json.{Formats, DefaultFormats}
import cc.spray._
import akka.dispatch.Future

/**
 * @author chris carrier
 */

trait ProjectEndpoint extends Directives with LiftJsonSupport {
  implicit val formats = DefaultFormats + new ObjectIdSerializer

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"

  def JsonContent(content: String) = HttpContent(ContentType(`application/json`), content)

  val requiredFields = List("name", "description")

  EventHandler.info(this, "Starting actor.")
  val service: Dao

  def withErrorHandling(ctx: RequestContext)(f: Future[_]): Future[_] = {
    f.onTimeout(f => {
                  ctx.fail(StatusCodes.InternalServerError, write(ErrorResponse(1, ctx.request.path, List("Internal error."))))
                  EventHandler.info(this, "Timed out")
                }).onException {
                  case e => {
                    EventHandler.info(this, "Excepted: " + e)
                    ctx.fail(StatusCodes.InternalServerError, write(ErrorResponse(1, ctx.request.path, List(e.getMessage))))
                  }
                }
  }

  def withSuccessCallback(ctx: RequestContext)(f: Future[_]): Future[_] = {
    f.onComplete(f => {
                        f.result.get match {
                      case Some(ProjectWrapper(oid, version, content)) => ctx.complete(write(SuccessResponse[Project](version, ctx.request.path, 1, None, content.map(x => x.copy(id = oid)))))
                      case None => ctx.fail(StatusCodes.NotFound, write(ErrorResponse(1l, ctx.request.path, List(NOT_FOUND_MESSAGE))))
                    }
                      })
  }

  //directive compositions
  val objectIdPathMatch = path("^[a-f0-9]+$".r)
  val directGetProject = authenticate(httpMongo(realm = "mycotrack")) & get
  val putProject = content(as[Project]) & put
  val postProject = path("") & content(as[Project]) & post
  val indirectGetProjects = path("") & parameters('name ?, 'description ?) & get

  val restService = {
    // Debugging: /ping -> pong
    path("ping") {
      get {
        _.complete("pong")
      }
    } ~
      // Service implementation.
      pathPrefix("projects") {
        objectIdPathMatch {
          resourceId =>
            directGetProject {
              user => ctx =>
                try {
                  EventHandler.info(this, "User is: " + user)
                  withErrorHandling(ctx) {
                    withSuccessCallback(ctx) {
                      service.getProject(new ObjectId(resourceId))
                    }
                  }
                }
                catch {
                  case e: IllegalArgumentException => {
                    ctx.fail(StatusCodes.NotFound, write(ErrorResponse(1l, ctx.request.path, List(NOT_FOUND_MESSAGE))))
                  }
                }
            } ~
              putProject {
                resource => ctx =>
                  try {
                    withErrorHandling(ctx) {
                      withSuccessCallback(ctx) {
                        service.updateProject(new ObjectId(resourceId), resource)
                      }
                    }
                  }
                  catch {
                    case e: IllegalArgumentException => {
                      ctx.fail(StatusCodes.NotFound, write(ErrorResponse(1l, ctx.request.path, List(NOT_FOUND_MESSAGE))))
                    }
                  }

              }
        } ~
          postProject {
            resource => ctx =>
              val resourceWrapper = ProjectWrapper(None, 1, List(resource))
              withErrorHandling(ctx) {
                withSuccessCallback(ctx) {
                  service.createProject(resourceWrapper)
                }
              }


          } ~
          indirectGetProjects {
            (name, description) => ctx =>
              withErrorHandling(ctx) {
                  service.searchProject(ProjectSearchParams(name, description)).onComplete(f => {
                    f.result.get match {
                      case content: Some[List[Project]] => ctx.complete(write(SuccessResponse[Project](1, ctx.request.path, content.get.length, None, content.get)))
                      case None => ctx.fail(StatusCodes.NotFound, write(ErrorResponse(1, ctx.request.path, List(NOT_FOUND_MESSAGE))))
                    }
                  })
              }
          }

      }


  }

def httpMongo[U](realm: String = "Secured Resource",
                 authenticator: UserPassAuthenticator[U] = FromMongoUserPassAuthenticator)
                 : BasicHttpAuthenticator[U] =
  new BasicHttpAuthenticator[U](realm, authenticator)



}