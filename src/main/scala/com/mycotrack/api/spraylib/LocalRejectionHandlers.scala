package com.mycotrack.api.spraylib

import com.mycotrack.api.exception.SensorNotFoundException
import com.typesafe.scalalogging.LazyLogging
import spray.routing._
import spray.http._
import StatusCodes._
import Directives._


/**
 * Created by ctcarrier on 3/3/14.
 */
trait LocalRejectionHandlers extends LazyLogging {

  implicit val myRejectionHandler = RejectionHandler {
    case AuthenticationFailedRejection(_, _) :: _ =>
      complete(Forbidden, "Auth Failed")
    //case BadIdInUrlRejection(s) :: _ => complete(BadRequest, s)
  }

  implicit def myExceptionHandler =
    ExceptionHandler {
      case e: SensorNotFoundException =>
        requestUri { uri =>
          complete(BadRequest, e.message)
        }
    }
}
