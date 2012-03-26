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
import _root_.com.novus.salat._
import _root_.com.mongodb.casbah.Imports._
import _root_.com.novus.salat.global._
import _root_.com.mycotrack.api.endpoint._
import cc.spray.test.SprayTest
import org.specs2.matcher.ThrownExpectations
import cc.spray.http._
import HttpMethods._

class SpeciesSpec extends Specification with MycotrackSpec {
  override val resourceName = "species"

  val testObj = Species(None, "scientificName1", "commonName1", "image.jpg")

  val jsonText = """{"scientificName":"scientificNameString","commonName": "commonNameString", "imageUrl": "image2.jpg"}"""
  val newJsonText = """{"scientificName":"scientificNameStringNew","commonName": "commonNameStringNew", "imageUrl": "image3.jpg"}"""
  val badJsonText = """{"commonName": "commonNameString"}"""

  val now = new java.util.Date
  val dbo = grater[SpeciesWrapper].asDBObject(SpeciesWrapper(None, 1, now, now, List(testObj)))

  configDb.insert(dbo, WriteConcern.Safe)
  val testId = dbo.get("_id").toString

  def is = args(traceFilter = includeTrace("com.mycotrack*")) ^
    String.format("The direct GET %s/%s API should", BASE_URL, testId) ^
    "return HTTP status 200 with a response body from: " + BASE_URL ! as().getDirect ^
    "and return 404 for a non-existent resource" ! as().getNotFound() ^
    "and return 404 for an illegal ID" ! as().getBadObjectId() ^
    p ^
    String.format("The indirect GET %s API should", BASE_URL) ^
    "return a 200 with a response body from " + BASE_URL ! as().getIndirectSpeciesWithParamTest(200, List(("commonName", "commonName1"))) ^
    "return a 200 with a response body from " + BASE_URL ! as().getIndirectSpeciesWithParamTest(200, List(("scientificName", "scientificName1"), ("commonName", "commonName1"))) ^
    "return a 404 with an error response body from " + BASE_URL ! as().getIndirectSpeciesWithParamTest(404, List(("commonName", "NOT_REAL"), ("scientificName", "scientificNameString"))) ^
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

  case class as() extends SprayTest with SpeciesEndpoint with ThrownExpectations {

    val service = new SpeciesDao(configDb)

    def getDirect = {
      val response = testService(HttpRequest(GET, BASE_URL + "/" + testId)) {
        restService
      }.response

      response.content.as[String] must not be empty
      response.status must be equalTo 200
    }

    def getIndirectSpeciesWithParamTest(status: Int, params: Seq[(String, String)]) = {
      val myUri = BASE_URL + "?" + params.map(x => x._1 + "=" + x._2).reduceLeft((x1, x2) => String.format("%s&%s", x1, x2))
      val response = testService(HttpRequest(method = GET,
        uri = myUri)) {
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

    def getBadObjectId() = {
      val response = testService(HttpRequest(GET, BASE_URL + "/55")) {
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