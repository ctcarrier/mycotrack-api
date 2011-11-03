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

trait SpeciesEndpoint extends Directives with LiftJsonSupport {
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
        case Some(SpeciesWrapper(oid, version, content)) => ctx.complete(write(SuccessResponse[Species](version, ctx.request.path, 1, None, content.map(x => x.copy(id = oid)))))
        case None => ctx.fail(StatusCodes.NotFound, write(ErrorResponse(1l, ctx.request.path, List(NOT_FOUND_MESSAGE))))
      }
    })
  }

  //directive compositions
  val objectIdPathMatch = path("^[a-f0-9]+$".r)
  val getSpecies = get
  val putSpecies = content(as[Species]) & put
  val postSpecies = path("") & content(as[Species]) & post
  val searchSpecies = path("") & parameters('commonName ?, 'scientificName ?) & get

  val restService = {
    // Debugging: /ping -> pong
    // Service implementation.
    pathPrefix("species") {
      objectIdPathMatch {
        resourceId =>
          getSpecies {
            ctx =>
              try {
                withErrorHandling(ctx) {
                  withSuccessCallback(ctx) {
                    service.getSpecies(new ObjectId(resourceId))
                  }
                }
              }
              catch {
                case e: IllegalArgumentException => {
                  ctx.fail(StatusCodes.NotFound, write(ErrorResponse(1l, ctx.request.path, List(NOT_FOUND_MESSAGE))))
                }
              }
          } ~
            putSpecies {
              resource => ctx =>
                try {
                  withErrorHandling(ctx) {
                    withSuccessCallback(ctx) {
                      service.updateSpecies(new ObjectId(resourceId), resource)
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
        postSpecies {
          resource => ctx =>
            val resourceWrapper = SpeciesWrapper(None, 1, List(resource))
            withErrorHandling(ctx) {
              withSuccessCallback(ctx) {
                service.createSpecies(resourceWrapper)
              }
            }
        } ~
        searchSpecies {
          (commonName, scientificName) => ctx =>
            withErrorHandling(ctx) {
              service.searchSpecies(SpeciesSearchParams(commonName, scientificName).asDBObject).onComplete(f => {
                f.result.get match {
                  case content: Some[List[Species]] => ctx.complete(write(SuccessResponse[Species](1, ctx.request.path, content.get.length, None, content.get)))
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