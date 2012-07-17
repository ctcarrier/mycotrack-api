package com.mycotrack.api.endpoint

import com.mycotrack.api.auth.FromMongoUserPassAuthenticator
import org.bson.types.ObjectId
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
import com.weiglewilczek.slf4s.Logging
import com.mycotrack.api.json.{UnrestrictedLiftJsonSupport, ObjectIdSerializer}
import com.mycotrack.api.spray.MongoAuthSupport

trait SpeciesEndpoint extends Directives with UnrestrictedLiftJsonSupport with Logging with MongoAuthSupport {
  implicit val liftJsonFormats = DefaultFormats + new ObjectIdSerializer

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"

  def JsonContent(content: String) = HttpContent(ContentType(`application/json`), content)

  val service: ISpeciesDao

  def withSuccessCallback(ctx: RequestContext, statusCode: StatusCode = OK)(f: Future[_]): Future[_] = {
    f.onComplete(f => {
      f match {
        case Right(Some(SpeciesWrapper(oid, version, dateCreated, lastUpdated, content))) => ctx.complete(statusCode, content.map(x => x.copy(id = oid)).head)
        case Right(Some(c: Species)) => ctx.complete(c)
        case Right(Some(c: List[Species])) => ctx.complete(c)
        case _ => ctx.fail(StatusCodes.NotFound, write(ErrorResponse(1l, ctx.request.path, List(NOT_FOUND_MESSAGE))))
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