package com.mycotrack.api.endpoint

import com.mycotrack.api.dao._
import com.mycotrack.api.model._
import org.specs2.Specification
import org.specs2.specification._
import _root_.com.novus.salat._
import _root_.com.mongodb.casbah.Imports._
import _root_.com.novus.salat.global._
import _root_.com.mycotrack.api.endpoint._
import cc.spray.test.SprayTest
import net.liftweb.json.DefaultFormats
import org.specs2.matcher.ThrownExpectations
import cc.spray.http._
import HttpMethods._
import java.util.Date

/**
 * @author chris_carrier
 * @version 9/26/11
 */

class ProjectSpec extends Specification with MycotrackSpec {

  override val resourceName = "projects"

  val testObj = Project(None, "name", "description", Some("/culture/1"), Some("/users/3"), true, Some("substrate"), Some("container"), Some(new Date()))
  val testObj2 = Project(None, "name2", "description2", Some("/culture/2"), Some("/users/3"), true, Some("substrate"), Some("container"), Some(new Date()))
  val testObjString = net.liftweb.json.Serialization.write(testObj)

  val jsonText = "{\"name\":\"stringName\",\"description\": \"stringDescription\",\"cultureUrl\": \"/culture/3\",\"container\": \"filterbag\",\"substrate\": \"rye\",\"enabled\": true}"
  val newJsonText = "{\"name\":\"newName\",\"description\": \"newDescription\",\"cultureUrl\": \"/culture/3\",\"container\": \"filterbag\",\"substrate\": \"rye\",\"enabled\": true}"
  val badJsonText = "{\"description\": \"newDescription\",\"enabled\": true}"

  val dbo = grater[ProjectWrapper].asDBObject(testObj)

  configDb.insert(dbo, WriteConcern.Safe)
  val testProjectId = dbo.get("_id").toString

  def is = args(traceFilter = includeTrace("com.mycotrack*")) ^
    String.format("The direct GET %s/%s API should", BASE_URL, testProjectId) ^
    "return HTTP status 200 with a response body from: " + BASE_URL ! as().getTest() ^
    "and return 404 for a non-existent resource" ! as().getNotFound() ^
    "and return 404 for an illegal ID" ! as().getBadObjectId() ^
    p ^
    String.format("The indirect GET %s API should", BASE_URL) ^
    "return a 200 with a response body from " + BASE_URL ! as().getIndirectProjectWithParamTest(200, List(("name", "name"))) ^
    "return a 200 with a response body from " + BASE_URL ! as().getIndirectProjectWithParamTest(200, List(("name", "name"), ("description", "description"))) ^
    "return a 404 with an error response body from " + BASE_URL ! as().getIndirectProjectWithParamTest(404, List(("name", "NOT_REAL"), ("description", "description"))) ^
    p ^
    String.format("The valid POST %s API should", BASE_URL) ^
    "return 201 as the HTTP status" ! as().postTest() ^
    p ^
    String.format("The invalid POST %s API should", BASE_URL) ^
    "return HTTP status 400 with an error message if required field is missing" ! as().postTestFail() ^
    p ^
    String.format("The PUT %s/%s API should", BASE_URL, testProjectId) ^
    "return HTTP status 200 with a response body" ! as().putSuccess() ^
    Step {
      configDb.remove(MongoDBObject("_id" -> testProjectId))
    } ^
    end

  case class as() extends SprayTest with ProjectEndpoint with ThrownExpectations {

    val service = new ProjectDao(configDb)

    def getTest() = {
      val response = testService(HttpRequest(GET, testProjectId)) {
        restService
      }.response

      response.content.as[String] must not be empty
      response.status must be equalTo 200
    }

    def getIndirectProjectWithParamTest(status: Int, params: Seq[(String, String)]) = {
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
      val response = testService(HttpRequest(method = GET, uri = testProjectId, content = Some(JsonContent(newJsonText)))) {
        restService
      }.response

      response.content.as[String] must not be empty
      response.status must be equalTo 200
    }
  }

}