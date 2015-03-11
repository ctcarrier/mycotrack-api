package com.mycotrack.api.endpoint

import com.mycotrack.api.ModuleDefinition
import com.mycotrack.api.endpoint.auth.{TestUserContext}
import com.mycotrack.api.endpoint.model.TestProject
import com.mycotrack.api.model.Project
import com.mycotrack.api.spraylib.LocalRejectionHandlers
import com.typesafe.scalalogging.LazyLogging
import org.json4s.Formats
import org.specs2.mutable.Specification
import reactivemongo.api.collections.default.BSONCollection
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

  lazy val projectEndpoint = inject[ProjectEndpoint]
  lazy val projectCollection = inject[BSONCollection] (identified by 'PROJECT_COLLECTION)
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
          Get(s"/projects/${actual._id.get.stringify}") ~>
            testUserContext.authHeader ~>
            sealRoute(projectEndpoint.route) ~>
            check {
              status === OK
            }
        }
    }
  }

}