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
import aggregation.General
import com.mycotrack.api.response._
import com.mycotrack.api.dao._
import net.liftweb.json.{Formats, DefaultFormats}
import cc.spray._
import akka.dispatch.Future
import caching._
import caching.LruCache._
import utils.Logging

trait AggregationEndpoint extends Directives with LiftJsonSupport with Logging {
  implicit val liftJsonFormats = DefaultFormats + new ObjectIdSerializer

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"

  def JsonContent(content: String) = HttpContent(ContentType(`application/json`), content)

  val requiredFields = List("name")

  val service: AggregationService

  //directive compositions
  val objectIdPathMatch = path("^[a-f0-9]+$".r)

  def withErrorHandling(ctx: RequestContext)(f: Future[_]): Future[_] = {
    f.onTimeout(f => {
      ctx.fail(StatusCodes.InternalServerError, ErrorResponse(1, ctx.request.path, List("Internal error.")))
      log.info("Timed out")
    }).onException {
      case e => {
        log.info("Excepted: " + e)
        ctx.fail(StatusCodes.InternalServerError, ErrorResponse(1, ctx.request.path, List(e.getMessage)))
      }
    }
  }

  def withSuccessCallback(ctx: RequestContext, statusCode: StatusCode = OK)(f: Future[_]): Future[_] = {
    f.onComplete(f => {
      f.result.get match {
        case agg: Some[General] => ctx.complete(agg.get)
        case None => ctx.fail(StatusCodes.NotFound, ErrorResponse(1l, ctx.request.path, List(NOT_FOUND_MESSAGE)))
      }
    })
  }

  val restService = {
    // Debugging: /ping -> pong
    // Service implementation.
    path("aggregations") {
        get {
          ctx => {
            log.info("Got agg request")
            withErrorHandling(ctx){
              withSuccessCallback(ctx) {
                log.info("Getting aggregation")
                  service.getGeneralAggregation

              }
            }
          }
        }
    }
  }

  def httpMongo[U](realm: String = "Secured Resource",
                   authenticator: UserPassAuthenticator[U] = FromMongoUserPassAuthenticator)
  : BasicHttpAuthenticator[U] =
    new BasicHttpAuthenticator[U](realm, authenticator)


}