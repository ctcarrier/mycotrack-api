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
import aggregation.General
import com.mycotrack.api.response._
import com.mycotrack.api.dao._
import net.liftweb.json.{Formats, DefaultFormats}
import cc.spray._
import akka.dispatch.Future
import caching._
import caching.LruCache._
import com.weiglewilczek.slf4s.Logging

trait AggregationEndpoint extends Directives with LiftJsonSupport with Logging {
  implicit val liftJsonFormats = DefaultFormats + new ObjectIdSerializer

  final val NOT_FOUND_MESSAGE = "resource.notFound"
  final val INTERNAL_ERROR_MESSAGE = "error"

  def JsonContent(content: String) = HttpContent(ContentType(`application/json`), content)

  val requiredFields = List("name")

  val service: AggregationService

  //directive compositions
  val objectIdPathMatch = path("^[a-f0-9]+$".r)

  def withSuccessCallback(ctx: RequestContext, statusCode: StatusCode = OK)(f: Future[_]): Future[_] = {
    f.onComplete(f => {
      f match {
        case Right(Some(agg: General)) => ctx.complete(agg)
        case _ => ctx.fail(StatusCodes.NotFound, ErrorResponse(1l, ctx.request.path, List(NOT_FOUND_MESSAGE)))
      }
    })
  }

  val restService = {
    // Debugging: /ping -> pong
    // Service implementation.
    path("api" / "aggregations") {
        get {
          ctx => {
            logger.info("Got agg request")
              withSuccessCallback(ctx) {
                logger.info("Getting aggregation")
                  service.getGeneralAggregation
              }
          }
        }
    }
  }
}