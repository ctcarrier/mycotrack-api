package com.mycotrack.api.endpoint

import java.util.concurrent.TimeUnit

import akka.util.Timeout
import com.mycotrack.api.dao.CultureAggregation

import com.mycotrack.api.endpoint.auth.{TestUserContext}
import com.mycotrack.api.endpoint.model.TestProject
import com.mycotrack.api.model.Project
import com.mycotrack.api.service.Farm
import com.mycotrack.api.spraylib.LocalRejectionHandlers
import com.mycotrack.api.test.BeforeAllAfterAll
import com.typesafe.scalalogging.LazyLogging
import org.json4s.Formats
import org.specs2.mutable.Specification
import reactivemongo.api.collections.default.BSONCollection
import reactivemongo.bson.BSONDocument
import reactivemongo.core.commands.LastError

import scaldi.akka.AkkaInjectable
import spray.httpx.Json4sJacksonSupport
import spray.routing.HttpService
import spray.testkit.Specs2RouteTest

import spray.http.StatusCodes._

import scala.concurrent.Await
import scala.concurrent.duration._

/**
 * @author chris_carrier
 * @version 9/26/11
 */

class ProjectSpec extends Specification with HttpService with Json4sJacksonSupport with Specs2RouteTest
  with AkkaInjectable with LocalRejectionHandlers with LazyLogging with TestModuleDefinition {

  val actorRefFactory = system
  lazy val json4sJacksonFormats = inject[Formats]
  val timeout: FiniteDuration = new FiniteDuration(5, TimeUnit.SECONDS)
  implicit val routeTestTimeout: RouteTestTimeout = RouteTestTimeout(timeout)

  lazy val projectEndpoint = inject[ProjectEndpoint]
  lazy val farmEndpoint = inject[FarmEndpoint]
  lazy val projectCollection = inject[BSONCollection] (identified by 'PROJECT_COLLECTION)
  lazy val cultureCountCollection = inject[BSONCollection] (identified by 'CULTURE_COUNT_COLLECTION)
  lazy val testUserContext = inject[TestUserContext]

  testUserContext.initialize

  val toSave = TestProject.generate
  Await.result(projectCollection.save(toSave), Duration("5 seconds")).asInstanceOf[LastError]

  "The Projects Endpoint" should {
    "create a project with a POST request" in {
      Post("/projects", TestProject.generateWithoutId) ~>
        testUserContext.authHeader ~>
        sealRoute(projectEndpoint.route) ~>
        check {
          status === Created
          val actual = responseAs[Project]
          actual === TestProject.generateWithoutId.copy(_id=actual._id, userId = actual.userId)
          val timeout = Timeout(5, TimeUnit.SECONDS)
          Get(s"/projects/${actual._id.get.stringify}") ~>
            testUserContext.authHeader ~>
            sealRoute(projectEndpoint.route) ~>
            check {
              status === OK
            }
          Get("/farms") ~>
            testUserContext.authHeader ~>
            sealRoute(farmEndpoint.route) ~>
            check {
              status === OK
              val farmResponse = responseAs[Farm]
              farmResponse.cultures.size === 1
              farmResponse.cultures.head.count === 1
              farmResponse.cultures.head.culture._id === actual.cultureId
            }
        }
    }
  }

}