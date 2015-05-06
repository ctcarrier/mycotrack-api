package com.mycotrack.api.endpoint

import akka.actor.{Actor, ActorSystem}
import com.mycotrack.api.spraylib.LocalRejectionHandlers
import scaldi.Injector
import scaldi.akka.AkkaInjectable
import spray.http.CacheDirectives.{`must-revalidate`, `no-cache`, `no-store`}
import spray.http.HttpHeaders._
import spray.routing.HttpService
import scala.concurrent.ExecutionContext.Implicits.global

/**
 * Created by ccarrier for bl-rest.
 * at 5:54 PM on 12/17/13
 */


class MasterInjector(implicit val inj: Injector) extends Actor with AkkaInjectable
with LocalRejectionHandlers with HttpService {

  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory = system

  lazy val userEndpoint = inject[UserEndpoint]
  lazy val cultureEndpoint = inject[CultureEndpoint]
  lazy val farmDataEndpoint = inject[FarmEndpoint]
  lazy val projectEndpoint = inject[ProjectEndpoint]
  lazy val speciesEndpoint = inject[SpeciesEndpoint]
  lazy val aggregationEndpoint = inject[AggregationEndpoint]

  def receive = runRoute {
    respondWithHeader(`Cache-Control`(`no-cache`, `no-store`, `must-revalidate`)) {
      pathPrefix("api") {
        userEndpoint.route ~
          cultureEndpoint.route ~
          farmDataEndpoint.route ~
          projectEndpoint.route ~
          speciesEndpoint.route ~
          aggregationEndpoint.route
      }
    }
  }
}
