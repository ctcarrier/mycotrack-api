package com.mycotrack.api.endpoint

/*
 * User: gregg
 * Date: 10/16/11
 * Time: 11:12 AM
 */

import akka.actor.ActorSystem
import com.mycotrack.api.endpoint.auth.TestUserContext
import com.mycotrack.api.endpoint.model.TestSpecies
import com.mycotrack.api.model.Species
import com.mycotrack.api.test.BeforeAllAfterAll
import com.mycotrack.api.{CryptoModule, ActorSystemModule}
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

class SpeciesSpec extends Specification with HttpService with Json4sJacksonSupport with Specs2RouteTest
with AkkaInjectable with LocalRejectionHandlers with LazyLogging with TestModuleDefinition {

  val actorRefFactory = system
  lazy val json4sJacksonFormats = inject[Formats]

  lazy val speciesEndpoint = inject[SpeciesEndpoint]
  lazy val testUserContext = inject[TestUserContext]

  "The Species Endpoint" should {
    "return 200 for a direct GET request" in {
      Post("/species", TestSpecies.generateWithoutId) ~>
        testUserContext.authHeader ~>
        sealRoute(speciesEndpoint.route) ~>
        check {
          status === Created
          val actual = responseAs[Species]
          actual === TestSpecies.generateWithoutId.copy(_id=actual._id)
          Get(s"/species/${actual._id.get.stringify}") ~>
            testUserContext.authHeader ~>
            sealRoute(speciesEndpoint.route) ~>
            check {
              status === OK
            }
        }
    }
  }
}