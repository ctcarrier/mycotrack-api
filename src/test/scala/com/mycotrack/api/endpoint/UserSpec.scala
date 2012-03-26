package com.mycotrack.api.endpoint

/*
 * User: gregg
 * Date: 10/16/11
 * Time: 11:12 AM
 */
import com.mycotrack.api.dao._
import com.mycotrack.api.model._
import org.specs2.Specification
import org.specs2.specification._
import com.novus.salat._
import com.mongodb.casbah.Imports._
import com.novus.salat.global._
import cc.spray.test.SprayTest
import org.specs2.matcher.ThrownExpectations
import cc.spray.http._
import HttpMethods._
import com.mycotrack.api.mongo.RandomId

class UserSpec extends Specification with MycotrackSpec {
  override val resourceName = "users"

  val testObj = User(None, None, None, "email1", "password1")

  val jsonText = """{"email":"email2","password": "password2"}"""
  val newJsonText = """{"email":"email3","password": "password3"}"""
  val badJsonText = """{"password": "password"}"""

  val now = new java.util.Date
  val dbo = grater[UserWrapper].asDBObject(UserWrapper(RandomId.getNextValue, 1, now, now, List(testObj)))

  configDb.insert(dbo, WriteConcern.Safe)
  val testId = dbo.get("_id").toString

  def is = args(traceFilter = includeTrace("com.mycotrack*")) ^
    String.format("The direct GET %s/%s API should", BASE_URL, testId) ^
    "return HTTP status 200 with a response body from: " + BASE_URL ! as().getDirect ^
    "and return 404 for a non-existent resource" ! as().getNotFound() ^
    p ^
    String.format("The indirect GET %s API should", BASE_URL) ^
    "return a 200 with a response body from " + BASE_URL ! as().getIndirectUserWithParamTest(200, List(("email", "email1"))) ^
    "return a 200 with a response body from " + BASE_URL ! as().getIndirectUserWithParamTest(200, List(("email", "email1"), ("password", "password1"))) ^
    "return a 404 with an error response body from " + BASE_URL ! as().getIndirectUserWithParamTest(404, List(("email", "NOT_REAL"), ("password", "password1"))) ^
    p ^
    String.format("The valid POST %s API should", BASE_URL) ^
    "return 201 as the HTTP status" ! as().postTest() ^
    p ^
    String.format("The invalid POST %s API should", BASE_URL) ^
    "return HTTP status 400 with an error message if required field is missing" ! as().postTestFail() ^
    p ^
    String.format("The PUT %s/%s API should", BASE_URL, testId) ^
    "return HTTP status 200 with a response body" ! as().putSuccess() ^
    Step {
      configDb.remove(MongoDBObject("_id" -> testId))
    } ^
    end

  case class as() extends SprayTest with UserEndpoint with ThrownExpectations {

    val service = new UserDao(configDb)

    def getDirect = {
      val response = testService(HttpRequest(GET, BASE_URL + "/" + testId)) {
        restService
      }.response

      response.content.as[String] must not be empty
      response.status must be equalTo 200
    }

    def getIndirectUserWithParamTest(status: Int, params: Seq[(String, String)]) = {
      val response = testService(HttpRequest(method = GET,
        uri = BASE_URL + "?" + params.map(x => x._1 + "=" + x._2).reduceLeft((x1, x2) => String.format("%s&%s", x1, x2)))) {
        restService
      }.response

      response.content.as[String] must not be empty
      response.status must be equalTo status
    }

    def getNotFound() = {
      val response = testService(HttpRequest(GET, BASE_URL + "/4e8687b776906a40054d3c9f")) {
        restService
      }.response

      response.content.as[String] must not be empty
      response.status must be equalTo 404
    }

    def postTest() = {
      val response = testService(HttpRequest(method = POST, uri = BASE_URL, content = Some(JsonContent(jsonText)))) {
        restService
      }.response

      response.content.as[String] must not be empty
      response.status must be equalTo 201
    }

    def postTestFail() = {
      val response = testService(HttpRequest(method = POST, uri = BASE_URL, content = Some(JsonContent(badJsonText)))) {
        restService
      }.response

      response.status must be equalTo 400
    }

    def putSuccess() = {
      val response = testService(HttpRequest(method = GET, uri = BASE_URL + "/" + testId, content = Some(JsonContent(newJsonText)))) {
        restService
      }.response

      response.content.as[String] must not be empty
      response.status must be equalTo 200
    }
  }

}