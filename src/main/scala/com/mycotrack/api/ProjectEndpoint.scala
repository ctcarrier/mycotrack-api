package com.mycotrack.api

import cc.spray.Directives
import directives.ValidationDirectives
import net.liftweb.json.JsonParser._
import net.liftweb.json.Serialization._
import org.bson.types.ObjectId
import akka.event.EventHandler
import cc.spray.http._
import HttpHeaders._
import HttpMethods._
import StatusCodes._
import MediaTypes._
import model._
import response._

/**
 * @author chris carrier
 */

trait ProjectEndpoint extends Directives with ValidationDirectives {

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"

  def JsonContent(content: String) = HttpContent(ContentType(`application/json`), content)

  val requiredFields = List("name", "description")

  EventHandler.info(this, "Starting actor.")
  val service: Dao

  val restService = {
    // Debugging: /ping -> pong
    path("ping") {
      get {
        _.complete("pong")
      }
    } ~
      // Service implementation.
      pathPrefix("projects") {
        path("^[a-f0-9]+$".r) {
          resourceId =>
            get {
              ctx =>
                try {
                  service.getProject(new ObjectId(resourceId)).onComplete(f => {
                    f.result.get match {
                      case Some(ProjectWrapper(oid, version, content)) => ctx.complete(write(SuccessResponse[Project](version, ctx.request.path, 1, None, content.map(x => x.copy(id = oid)))))
                      case None => ctx.fail(StatusCodes.NotFound, write(ErrorResponse(1l, ctx.request.path, List(NOT_FOUND_MESSAGE))))
                    }
                  })
                }
                catch {
                  case e: IllegalArgumentException => {
                    ctx.fail(StatusCodes.NotFound, write(ErrorResponse(1l, ctx.request.path, List(NOT_FOUND_MESSAGE))))
                  }
                }
            } ~
              requiringStrings(requiredFields) {
                put {
                  ctx =>
                    try {
                      val content = new String(ctx.request.content.get.buffer)

                      val resource = parse(content).extract[Project]

                      service.updateProject(new ObjectId(resourceId), resource).onTimeout(f => {
                        ctx.fail(StatusCodes.InternalServerError, write(ErrorResponse(1, ctx.request.path, List(INTERNAL_ERROR_MESSAGE))))
                      }).onComplete(f => {
                        f.result.get match {
                          case Some(ProjectWrapper(oid, version, content)) => ctx.complete(write(SuccessResponse[Project](version, ctx.request.path, 1, None, content.map(x => x.copy(id = oid)))))
                          case None => ctx.fail(StatusCodes.NotFound, write(ErrorResponse(1, ctx.request.path, List(NOT_FOUND_MESSAGE))))
                        }
                      }).onException {
                        case e => {
                          ctx.fail(StatusCodes.InternalServerError, write(ErrorResponse(1, ctx.request.path, List(e.getMessage))))
                        }
                      }

                    }
                    catch {
                      case e: IllegalArgumentException => {
                        ctx.fail(StatusCodes.NotFound, write(ErrorResponse(1l, ctx.request.path, List(NOT_FOUND_MESSAGE))))
                      }
                    }
                }
              }
        } ~
          path("") {
            requiringStrings(requiredFields) {
              post {
                ctx =>
                  val content = new String(ctx.request.content.get.buffer)

                  val resource = parse(content).extract[Project]
                  val resourceWrapper = ProjectWrapper(None, 1, List(resource))

                  service.createProject(resourceWrapper).onTimeout(f => {
                    ctx.fail(StatusCodes.InternalServerError, write(ErrorResponse(1, ctx.request.path, List(INTERNAL_ERROR_MESSAGE))))
                    EventHandler.info(this, "Timed out")
                  }).onComplete(f => {
                    f.result.get match {
                      case Some(ProjectWrapper(oid, version, content)) => ctx.complete(HttpResponse(StatusCodes.Created, JsonContent(write(SuccessResponse[Project](version, ctx.request.path, 1, None, content.map(x => x.copy(id = oid)))))))
                      case None => ctx.fail(StatusCodes.BadRequest, write(ErrorResponse(1, ctx.request.path, List(NOT_FOUND_MESSAGE))))
                    }
                  }).onException {
                    case e => {
                      EventHandler.info(this, "Excepted: " + e)
                      ctx.fail(StatusCodes.InternalServerError, write(ErrorResponse(1, ctx.request.path, List(e.getMessage))))
                    }
                  }
              }
            }
          } ~
          parameters('name ?, 'description ?) {
            (name, description) =>
              get {
                ctx =>

                  service.searchProject(ProjectSearchParams(name, description)).onTimeout(f => {
                    ctx.fail(StatusCodes.InternalServerError, write(ErrorResponse(1, ctx.request.path, List(INTERNAL_ERROR_MESSAGE))))
                  }).onComplete(f => {
                    f.result.get match {
                      case content: Some[List[Project]] => ctx.complete(write(SuccessResponse[Project](1, ctx.request.path, content.get.length, None, content.get)))
                      case None => ctx.fail(StatusCodes.NotFound, write(ErrorResponse(1, ctx.request.path, List(NOT_FOUND_MESSAGE))))
                    }
                  }).onException {
                    case e => {
                      e.printStackTrace()
                      ctx.fail(StatusCodes.InternalServerError, write(ErrorResponse(1, ctx.request.path, List(e.getMessage))))
                    }
                  }
              }

          }
      }
  }

}