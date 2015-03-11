package com.mycotrack.api.spraylib

import com.typesafe.scalalogging.LazyLogging


/**
 * Created by ctcarrier on 3/3/14.
 */
trait LocalRejectionHandlers extends LazyLogging {

  /*implicit val myRejectionHandler = RejectionHandler {
    case AuthenticationFailedRejection(_, _) :: _ =>
      complete(Forbidden, "Auth Failed")
    case BadIdInUrlRejection(s) :: _ => complete(BadRequest, s)
  }

  implicit def myExceptionHandler =
    ExceptionHandler {
      case e: ResourceNotFoundException =>
        requestUri { uri =>
          complete(NotFound, e.message)
        }
      case e: PaymentFailedException =>
        requestUri { uri =>
          complete(BadRequest, e.message)
        }
      case e: LastError =>
        requestUri { uri =>
          logger.info(e.toString)
          complete(BadRequest, "Unique Index Violated")
        }
      case e: InvalidUrlException =>
        requestUri { uri =>
          complete(BadRequest, "Vault not in a proper state")
        }
    }*/
}
