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
import com.mycotrack.api.response._
import com.mycotrack.api.dao._
import net.liftweb.json.{Formats, DefaultFormats}
import cc.spray._
import akka.dispatch.Future
import caching._
import caching.LruCache._
import directives.Remaining
import com.weiglewilczek.slf4s.Logging
import java.text.SimpleDateFormat
import com.mycotrack.api.spray.MongoAuthSupport

/**
 * @author chris carrier
 */

trait ProjectEndpoint extends Directives with LiftJsonSupport with Logging with MongoAuthSupport {
  implicit val liftJsonFormats = DefaultFormats.lossless + new ObjectIdSerializer

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"

  def JsonContent(content: String) = HttpContent(ContentType(`application/json`), content)

  val requiredFields = List("name", "description")

  //caches
  lazy val projectCache: Cache[Either[Set[Rejection], HttpResponse]] = LruCache(100)

  val service: IProjectDao

  def withSuccessCallback(ctx: RequestContext, statusCode: StatusCode = OK)(f: Future[_]): Future[_] = {
    f.onComplete(f => {
      f match {
        case Right(Some(ProjectWrapper(oid, version, dateCreated, lastUpdated, content, oevents))) => {
          val res = content.head.copy(id = oid, events = oevents, timestamp = Some(new java.util.Date()))
          //logger.debug("Project returned at endpoint: " + oevents.get)
          ctx.complete(statusCode, res)
        }
        case Right(Some(c: Project)) => ctx.complete(c)
        case _ => ctx.fail(StatusCodes.NotFound, ErrorResponse(1l, ctx.request.path, List(NOT_FOUND_MESSAGE)))
      }
    })
  }

  //directive compositions
  val objectIdPathMatch = path("[^/]+".r)
  //val directGetProject = authenticate(httpMongo(realm = "mycotrack")) & get
  val directGetProject = get
  val putProject = content(as[Project]) & put
  val postEvent = path("[^/]+".r / "events" / Remaining) & post
  val postProject = path("") & content(as[Project]) & post
  val indirectGetProjects = path("") & parameters('name ?, 'description ?) & get

  val restService = {
    // Debugging: /ping -> pong
    path("ping") {
      detach{
      cache {
        get {
          _.complete("pong " + new java.util.Date())
        }
      }
      }
    } ~
      // Service implementation.
      pathPrefix("api" / "projects") {
        authenticate(httpMongo()) { user =>
        objectIdPathMatch {
          resourceId =>
            logger.info("REsourceId: " + resourceId)
                respondWithHeader(CustomHeader("TEST", "Awesome")){
                directGetProject {
                  ctx =>
                        withSuccessCallback(ctx) {
                          service.get[ProjectWrapper](service.formatKeyAsId(resourceId), user.id)
                        }
                    }
                } ~
              putProject {
                resource => ctx =>
                      withSuccessCallback(ctx) {
                        service.update[Project, ProjectWrapper](resourceId, resource)
                      }
              }
        } ~
          postEvent {
            (resourceId, eventName) => ctx =>
                withSuccessCallback(ctx) {
                  Future {
                    logger.info("Posting event " + eventName)
                    service.addEvent(resourceId, eventName)
                  }
              }
          } ~
          postProject {
            resource => ctx =>
                withSuccessCallback(ctx, Created) {
                  service.create[ProjectWrapper](resource.copy(userUrl = user.id))
                }
          } ~
          indirectGetProjects {
            (name, description) => ctx =>
                service.search(ProjectSearchParams(name, description, user.id)).onComplete(f => {
                  logger.info("User: " + user.toString)
                  f match {
                    case Right(Some(content)) => {
                      val res: List[Project] = content
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