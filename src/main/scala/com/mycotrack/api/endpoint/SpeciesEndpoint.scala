package com.mycotrack.api.endpoint

import com.typesafe.scalalogging.LazyLogging
import com.mycotrack.api.model._
import com.mycotrack.api.response._
import com.mycotrack.api.dao._
import com.mycotrack.api.json.{UnrestrictedLiftJsonSupport, ObjectIdSerializer}
import com.mycotrack.api.spray.MongoAuthSupport
import spray.httpx.Json4sJacksonSupport

class SpeciesEndpoint extends HttpService with Json4sJacksonSupport with LazyLogging with MongoAuthSupport {
  implicit val liftJsonFormats = DefaultFormats + new ObjectIdSerializer

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"

  val service: ISpeciesDao

  //directive compositions
  val objectIdPathMatch = path("^[a-zA-Z0-9]+$".r)
  val getSpecies = get
  val getProjectsBySpecies = path("all" / "projects") & get
  val putSpecies = content(as[Species]) & put
  val postSpecies = path("") & content(as[Species]) & post
  val searchSpecies = path("") & parameters('commonName ?, 'scientificName ?) & get

  val route = {
    // Debugging: /ping -> pong
    // Service implementation.
    pathPrefix("api" / "species") {
      objectIdPathMatch {
        resourceId =>
          getSpecies {
            ctx =>
                  withSuccessCallback(ctx) {
                    service.get[SpeciesWrapper](service.formatKeyAsId(resourceId))
                  }
          } ~
            putSpecies {
              resource => ctx =>
                    withSuccessCallback(ctx) {
                      service.update[Species, SpeciesWrapper](resourceId, resource)
                    }
            }
      } ~
      getProjectsBySpecies {
        authenticate(httpMongo()) {user =>
          completeWith {
            logger.info("Got species project request")
            val result = service.getProjectsBySpecies(user.id).get
            logger.info("Result is: " + result)
            result
          }
        }
      } ~
        postSpecies {
          resource => ctx =>
            val now = new java.util.Date
            val resourceWrapper = SpeciesWrapper(None, 1, now, now, List(resource))
              withSuccessCallback(ctx, Created) {
                service.create[SpeciesWrapper](resourceWrapper)
              }
        } ~
        searchSpecies {
          (commonName, scientificName) => ctx =>
              service.search(SpeciesSearchParams(scientificName, commonName)).onComplete(f => {
                f match {
                    case Right(Some(content)) => {
                      logger.info("Completing species call")
                      val res: List[Species] = content
                      ctx.complete(res)
                    }
                    case _ => ctx.fail(StatusCodes.NotFound, ErrorResponse(1, ctx.request.path, List(NOT_FOUND_MESSAGE)))
                  }
                })
        }
    }
  }
}