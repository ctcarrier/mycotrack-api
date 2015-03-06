package com.mycotrack.api.endpoint

import com.mycotrack.api.json.{ObjectIdSerializer}
import com.mycotrack.api.model._
import com.mycotrack.api.response._
import com.mycotrack.api.dao._
import com.mycotrack.api.spray.MongoAuthSupport

class CultureEndpoint extends HttpService with Json4sJacksonSupport with LazyLogging with MongoAuthSupport {
  implicit val liftJsonFormats = DefaultFormats + new ObjectIdSerializer

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"

  val requiredFields = List("name")

  val service: ICultureDao

  //directive compositions
  val objectIdPathMatch = path("^[a-zA-Z0-9]+$".r)
  val putCulture = content(as[Culture]) & put
  val postCulture = path("") & content(as[Culture]) & post
  val searchCultures = path("") & parameters('name ?, 'includeProjects.as[Boolean]?) & get
  val getProjectsByCulture = path("all" / "projects") & get

  val route = {
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