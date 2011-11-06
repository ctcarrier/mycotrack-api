package com.mycotrack.api.response

/**
 * @author chris_carrier
 * @version 8/19/11
 */


abstract class Response(version: Long, request: String)

case class ErrorResponse(version: Long, request: String, errors: List[String]) extends Response(version, request)

case class SuccessResponse[T](version: Long,
                              request: String,
                              size: Long,
                              requestParams: Option[Map[String, _]],
                              content: List[T]) extends Response(version, request)