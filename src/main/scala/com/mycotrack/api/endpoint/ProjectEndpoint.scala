package com.mycotrack.api.endpoint

import com.mycotrack.api.auth.FromMongoUserPassAuthenticator
import com.mycotrack.api.json.{ObjectIdSerializer}
import org.bson.types.ObjectId
import akka.event.EventHandler
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
import com.mycotrack.api.response._
import com.mycotrack.api.dao._
import net.liftweb.json.{Formats, DefaultFormats}
import cc.spray._
import akka.dispatch.Future
import caching._
import caching.LruCache._
import utils.Logging

/**
 * @author chris carrier
 */

trait ProjectEndpoint extends Directives with LiftJsonSupport with Logging {
  implicit val liftJsonFormats = DefaultFormats + new ObjectIdSerializer

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"

  def JsonContent(content: String) = HttpContent(ContentType(`application/json`), content)

  val requiredFields = List("name", "description")

  //caches
  lazy val projectCache: Cache[Either[Set[Rejection], HttpResponse]] = LruCache(maxEntries = 100)

  EventHandler.info(this, "Starting actor.")
  val service: IProjectDao

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

  def withSuccessCallback(ctx: RequestContext, statusCode: StatusCode = OK)(f: Future[_]): Future[_] = {
    f.onComplete(f => {
      f.result.get match {
        case Some(ProjectWrapper(oid, version, dateCreated, lastUpdated, content)) => ctx.complete(content.map(x => x.copy(id = oid, timestamp = Some(new java.util.Date()))))
        case None => ctx.fail(StatusCodes.NotFound, write(ErrorResponse(1l, ctx.request.path, List(NOT_FOUND_MESSAGE))))
      }
    })
  }

  //directive compositions
  val objectIdPathMatch = path("^[a-f0-9]+$".r)
  //val directGetProject = authenticate(httpMongo(realm = "mycotrack")) & get
  val directGetProject = get
  val putProject = content(as[Project]) & put
  val postProject = path("") & content(as[Project]) & post
  val indirectGetProjects = path("") & parameters('name ?, 'description ?) & get

  val restService = {
    // Debugging: /ping -> pong
    path("ping") {
      cache {
        get {
          _.complete("pong " + new java.util.Date())
        }
      }
    } ~
      // Service implementation.
      pathPrefix("projects") {
        objectIdPathMatch {
          resourceId =>
            cacheResults(projectCache) {
              directGetProject {
                ctx =>
                  try {
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
              withErrorHandling(ctx) {
                withSuccessCallback(ctx, Created) {
                  service.createProject(resource)
                }
              }


          } ~
          indirectGetProjects {
            (name, description) => ctx =>
              withErrorHandling(ctx) {
                service.searchProject(ProjectSearchParams(name, description)).onComplete(f => {
                  f.result.get match {
                    case Some(content) => {
                      val res: List[Project] = content
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