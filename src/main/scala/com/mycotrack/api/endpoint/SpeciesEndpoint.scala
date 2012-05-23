package com.mycotrack.api.endpoint

import com.mycotrack.api.auth.FromMongoUserPassAuthenticator
import org.bson.types.ObjectId
import akka.event.EventHandler
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
import utils.Logging
import com.mycotrack.api.json.{UnrestrictedLiftJsonSupport, ObjectIdSerializer}

trait SpeciesEndpoint extends Directives with UnrestrictedLiftJsonSupport with Logging {
  implicit val liftJsonFormats = DefaultFormats + new ObjectIdSerializer

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"

  def JsonContent(content: String) = HttpContent(ContentType(`application/json`), content)

  EventHandler.info(this, "Starting actor.")
  val service: ISpeciesDao

  def withErrorHandling(ctx: RequestContext)(f: Future[_]): Future[_] = {
    f.onTimeout(f => {
      ctx.fail(StatusCodes.InternalServerError, write(ErrorResponse(1, ctx.request.path, List("Internal error."))))
      log.info("Timed out")
    }).onException {
      case e => {
        EventHandler.info(this, "Excepted: " + e)
        ctx.fail(StatusCodes.InternalServerError, write(ErrorResponse(1, ctx.request.path, List(e.getMessage))))
      }
    }
  }

  def withSuccessCallback(ctx: RequestContext, statusCode: StatusCode = OK)(f: Future[_]): Future[_] = {
    f.onComplete(f => {
      f.result.get match {
        case Some(SpeciesWrapper(oid, version, dateCreated, lastUpdated, content)) => ctx.complete(statusCode, content.map(x => x.copy(id = oid)).head)
        case Some(c: Species) => ctx.complete(c)
        case Some(c: List[Species]) => ctx.complete(c)
        case None => ctx.fail(StatusCodes.NotFound, write(ErrorResponse(1l, ctx.request.path, List(NOT_FOUND_MESSAGE))))
      }
    })
  }

  //directive compositions
  val objectIdPathMatch = path("^[a-zA-Z0-9]+$".r)
  val getSpecies = get
  val getProjectsBySpecies = path("all" / "projects") & get
  val putSpecies = content(as[Species]) & put
  val postSpecies = path("") & content(as[Species]) & post
  val searchSpecies = path("") & parameters('commonName ?, 'scientificName ?) & get

  val restService = {
    // Debugging: /ping -> pong
    // Service implementation.
    pathPrefix("api" / "species") {
      objectIdPathMatch {
        resourceId =>
          getSpecies {
            ctx =>
                withErrorHandling(ctx) {
                  withSuccessCallback(ctx) {
                    service.get[SpeciesWrapper](service.formatKeyAsId(resourceId))
                  }
                }
              
          } ~
            putSpecies {
              resource => ctx =>
                try {
                  withErrorHandling(ctx) {
                    withSuccessCallback(ctx) {
                      service.update[Species, SpeciesWrapper](resourceId, resource)
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
      getProjectsBySpecies {
        authenticate(httpMongo(realm = "mycotrack", authenticator = FromMongoUserPassAuthenticator)) {user =>
          completeWith {
            log.info("Got species project request")
            val result = service.getProjectsBySpecies(user.id).get
            log.info("Result is: " + result)
            result
          }
        }
      } ~
        postSpecies {
          resource => ctx =>
            val now = new java.util.Date
            val resourceWrapper = SpeciesWrapper(None, 1, now, now, List(resource))
            withErrorHandling(ctx) {
              withSuccessCallback(ctx, Created) {
                service.create[SpeciesWrapper](resourceWrapper)
              }
            }
        } ~
        searchSpecies {
          (commonName, scientificName) => ctx =>
            withErrorHandling(ctx) {
              service.search(SpeciesSearchParams(scientificName, commonName)).onComplete(f => {
                f.result.get match {
                    case Some(content) => {
                      log.info("Completing species call")
                      val res: List[Species] = content
                      ctx.complete(res)
                    }
                    case None => ctx.fail(StatusCodes.NotFound, ErrorResponse(1, ctx.request.path, List(NOT_FOUND_MESSAGE)))
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