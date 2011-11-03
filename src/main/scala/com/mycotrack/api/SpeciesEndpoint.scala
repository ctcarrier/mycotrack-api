package com.mycotrack.api

/**
 * User: gregg
 * Date: 10/16/11
 * Time: 11:28 AM
 */

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
import model._
import response._

trait SpeciesEndpoint extends Directives with ValidationDirectives {

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"

  def JsonContent(content: String) = HttpContent(ContentType(`application/json`), content)

  val requiredFields = List("commonNames", "scientificNames")

  EventHandler.info(this, "Starting actor.")
  val service: Dao

  val restService = {
    // Service implementation.
    pathPrefix("species") {
      path("^[a-f0-9]+$".r) {
        resourceId =>
          get {
            ctx =>
              try {
                service.getSpecies(new ObjectId(resourceId)).onComplete(f => {
                  f.result.get match {
                    case Some(SpeciesWrapper(oid, version, content)) => ctx.complete(write(SuccessResponse[Species](version, ctx.request.path, 1, None, content.map(x => x.copy(id = oid)))))
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

                    val resource = parse(content).extract[Species]

                    service.updateSpecies(new ObjectId(resourceId), resource).onTimeout(f => {
                      ctx.fail(StatusCodes.InternalServerError, write(ErrorResponse(1, ctx.request.path, List(INTERNAL_ERROR_MESSAGE))))
                    }).onComplete(f => {
                      f.result.get match {
                        case Some(SpeciesWrapper(oid, version, content)) => ctx.complete(write(SuccessResponse[Species](version, ctx.request.path, 1, None, content.map(x => x.copy(id = oid)))))
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

                val resource = parse(content).extract[Species]
                val resourceWrapper = SpeciesWrapper(None, 1, List(resource))

                service.createSpecies(resourceWrapper).onTimeout(f => {
                  ctx.fail(StatusCodes.InternalServerError, write(ErrorResponse(1, ctx.request.path, List(INTERNAL_ERROR_MESSAGE))))
                  EventHandler.info(this, "Timed out")
                }).onComplete(f => {
                  f.result.get match {
                    case Some(SpeciesWrapper(oid, version, content)) => ctx.complete(HttpResponse(StatusCodes.Created, JsonContent(write(SuccessResponse[Species](version, ctx.request.path, 1, None, content.map(x => x.copy(id = oid)))))))
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
        parameters('scientificName ?, 'commonName ?) {
          (scientificName, commonName) =>
            get {
              ctx =>
                service.searchSpecies(SpeciesSearchParams(scientificName, commonName).asDBObject)
                  .onTimeout(f => {
                    ctx.fail(StatusCodes.InternalServerError, write(ErrorResponse(1, ctx.request.path, List(INTERNAL_ERROR_MESSAGE))))
                  }).onComplete(f => {
                    f.result.get match {
                      case content: Some[List[Species]] => ctx.complete(write(SuccessResponse[Species](1, ctx.request.path, content.get.length, None, content.get)))
                      //TODO - should empty search results return 404?
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