package com.mycotrack.api.endpoint

import com.mycotrack.api.json.{ObjectIdSerializer}
import com.typesafe.scalalogging.LazyLogging
import com.mycotrack.api.model._
import com.mycotrack.api.response._
import com.mycotrack.api.dao._
import com.mycotrack.api.spray.MongoAuthSupport
import spray.httpx.Json4sJacksonSupport

/**
 * @author chris carrier
 */

class ProjectEndpoint extends HttpService with Json4sJacksonSupport with LazyLogging with MongoAuthSupport {
  implicit val liftJsonFormats = DefaultFormats.lossless + new ObjectIdSerializer

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"

  val requiredFields = List("name", "description")

  //caches
  lazy val projectCache: Cache[Either[Set[Rejection], HttpResponse]] = LruCache(100)

  val service: IProjectDao

  //directive compositions
  val objectIdPathMatch = path("[^/]+".r)
  //val directGetProject = authenticate(httpMongo(realm = "mycotrack")) & get
  val directGetProject = get
  val putProject = content(as[Project]) & put
  val postEvent = path("[^/]+".r / "events" / Remaining) & post
  val postProject = path("") & content(as[Project]) & post
  val indirectGetProjects = path("") & parameters('name ?, 'description ?) & get

  val route = {
    // Debugging: /ping -> pong
    path("ping") {
      detach {
        cache {
          get {
            _.complete("pong " + new java.util.Date())
          }
        }
      }
    } ~
      // Service implementation.
      pathPrefix("api" / "projects") {
        authenticate(httpMongo()) {
          user =>
            objectIdPathMatch {
              resourceId =>
                logger.info("REsourceId: " + resourceId)
                respondWithHeader(CustomHeader("TEST", "Awesome")) {
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