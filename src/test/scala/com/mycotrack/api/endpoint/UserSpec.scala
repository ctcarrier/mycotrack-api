package com.mycotrack.api.endpoint

/*
 * User: gregg
 * Date: 10/16/11
 * Time: 11:12 AM
 */

import akka.actor.ActorSystem
import com.mycotrack.api.endpoint.auth.TestUserContext
import com.mycotrack.api.model.User
import com.mycotrack.api.{ModuleDefinition, CryptoModule, ActorSystemModule}
import com.mycotrack.api.boot.{MycotrackServices, Configs, SprayModule, MycotrackDaos}
import com.mycotrack.api.json.LocalJacksonFormats
import com.mycotrack.api.spraylib.LocalRejectionHandlers
import com.typesafe.scalalogging.LazyLogging
import org.json4s.Formats
import org.specs2.mutable.Specification
import scaldi.akka.AkkaInjectable
import spray.httpx.Json4sJacksonSupport
import spray.routing.HttpService
import spray.testkit.Specs2RouteTest
import spray.http.StatusCodes._

class UserSpec extends Specification with HttpService with Json4sJacksonSupport with Specs2RouteTest
with AkkaInjectable with LocalRejectionHandlers with LazyLogging with TestModuleDefinition {

  val actorRefFactory = system
  lazy val json4sJacksonFormats = inject[Formats]

  lazy val userEndpoint = inject[UserEndpoint]
  lazy val testUserContext = inject[TestUserContext]

  "The User Endpoint" should {
    "return 200 for a direct GET request" in {
      Get("/users") ~>
        testUserContext.authHeader ~>
        sealRoute(userEndpoint.route) ~>
        check {
          status === OK
          val actual = responseAs[User]
          actual === testUserContext.testUser.copy(_id = actual._id,
            dateCreated = actual.dateCreated,
            lastUpdated = actual.lastUpdated,
            password = actual.password)
        }
    }
  }
}