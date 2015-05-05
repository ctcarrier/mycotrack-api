package com.mycotrack.api.endpoint

/*
 * User: gregg
 * Date: 10/16/11
 * Time: 11:12 AM
 */

import com.mycotrack.api.endpoint.auth.TestUserContext
import com.mycotrack.api.endpoint.model.{TestCulture, TestSpecies}
import com.mycotrack.api.model.{Culture, Species}
import com.mycotrack.api.spraylib.LocalRejectionHandlers
import com.mycotrack.api.test.BeforeAllAfterAll
import com.typesafe.scalalogging.LazyLogging
import org.json4s.Formats
import org.specs2.mutable.Specification
import reactivemongo.api.DB
import reactivemongo.core.commands.Drop
import scaldi.akka.AkkaInjectable
import spray.http.StatusCodes._
import spray.httpx.Json4sJacksonSupport
import spray.routing.HttpService
import spray.testkit.Specs2RouteTest

class CultureSpec extends Specification with HttpService with Json4sJacksonSupport with Specs2RouteTest
with AkkaInjectable with LocalRejectionHandlers with LazyLogging with TestModuleDefinition with BeforeAllAfterAll {

  val actorRefFactory = system
  lazy val json4sJacksonFormats = inject[Formats]

  lazy val cultureEndpoint = inject[CultureEndpoint]
  lazy val testUserContext = inject[TestUserContext]

  lazy val db = inject[DB]

  protected def beforeAll() = {
    //noop
  }
  protected def afterAll() = {
    val dropCommand = new Drop(db.name)
    db.command(dropCommand)
  }

  "The Culture Endpoint" should {
    "return 200 for a direct GET request" in {
      Post("/cultures", TestCulture.generateWithoutId) ~>
        testUserContext.authHeader ~>
        sealRoute(cultureEndpoint.route) ~>
        check {
          status === Created
          val actual = responseAs[Culture]
          actual === TestCulture.generateWithoutId.copy(_id=actual._id, userId = actual.userId)
          Get(s"/cultures/${actual._id.get.stringify}") ~>
            testUserContext.authHeader ~>
            sealRoute(cultureEndpoint.route) ~>
            check {
              status === OK
              val innerActual = responseAs[Culture]
              innerActual === actual
            }
          /*Get(s"/species/${actual.speciesId.get.stringify}/") ~>
            testUserContext.authHeader ~>
            sealRoute(cultureEndpoint.route) ~>
            check {
              status === OK
              val innerActual = responseAs[List[Culture]]
              innerActual.head === actual
            }*/
        }
    }
  }
}