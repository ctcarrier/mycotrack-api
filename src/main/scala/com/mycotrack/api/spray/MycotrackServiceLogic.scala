package com.mycotrack.api.spray

import cc.spray._
import http._
import StatusCodes._
import cc.spray.http._
import HttpHeaders._
import MediaTypes._
import net.liftweb.json.Serialization._
import typeconversion.LiftJsonSupport
import net.liftweb.json.DefaultFormats
import com.mycotrack.api.response.ErrorResponse
import com.weiglewilczek.slf4s.Logging

/**
 * @author chris_carrier
 * @version 5/7/12
 */


trait MycotrackServiceLogic extends HttpServiceLogic with LiftJsonSupport {
  this: Logging =>

  implicit val liftJsonFormats = DefaultFormats
  def JsonContent(content: String) = HttpContent(ContentType(`application/json`), content)

  // ZUBSS-408: POST Logins endpoint should format error response bodies as JSON objects
  val AUTHENTICATION_ERROR_RESPONSE = JsonContent(write(ErrorResponse(1L, "login", List("The supplied authentication is either invalid or not authorized to access this resource"))))

  //  Only http BadRequest is returned in final response, add more Rejections
  //  like ZubValidationRejection in case you want and add them here.
  val customRejectionHandler: PartialFunction[List[Rejection], HttpResponse] = {
    case AuthenticationFailedRejection(realm) :: _ => HttpResponse(BadRequest, AUTHENTICATION_ERROR_RESPONSE)
    case AuthenticationRequiredRejection(scheme, realm, params) :: _ =>  HttpResponse(BadRequest, `WWW-Authenticate`(HttpChallenge(scheme, realm, params)) :: Nil, AUTHENTICATION_ERROR_RESPONSE)
  }

  override val rejectionHandler: RejectionHandler = customRejectionHandler orElse RejectionHandler.Default
}