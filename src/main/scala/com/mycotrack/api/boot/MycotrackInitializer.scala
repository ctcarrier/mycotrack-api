package com.mycotrack.api.boot

import akka.io.IO
import akka.util.Timeout
import com.mycotrack.api.aggregation.{GeneralAggregatioActor, ContainerCountActor, AggregationBroadcaster, CultureCountActor}
import com.mycotrack.api.auth.PasswordManagingActor
import com.mycotrack.api.dao._
import com.mycotrack.api.{ModuleDefinition, ActorSystemModule, CryptoModule}
import com.mycotrack.api.service._
import scala.concurrent.duration._
import com.typesafe.scalalogging.LazyLogging
import scaldi.Module
import scaldi.akka.AkkaInjectable
import spray.can.Http
import util.Properties
import com.mycotrack.api.endpoint._
import akka.actor.{ActorSystem, Props}
import com.typesafe.config.ConfigFactory
import akka.pattern.ask

/**
 * @author chris_carrier
 */

class SysProps extends Module {

}

class MycotrackDaos extends Module {
  bind[AggregationDao] to new AggregationDao
  bind[CultureDao] to new CultureDao
  bind[EventDao] to new EventDao
  bind[FarmDao] to new MongoFarmDao
  bind[ProjectDao] to new ProjectDao
  bind[SpeciesDao] to new SpeciesDao
  bind[UserDao] to new UserDao
}

class MycotrackServices extends Module {

  bind[DataInitializer] to new DefaultDataInitializer
  bind[FarmService] to new DefaultFarmService()
  bind[ProjectService] to new ProjectServiceImpl()
  bind[PasswordManagingActor] to new PasswordManagingActor
}

class SprayModule extends Module {
  binding toProvider new MasterInjector

  bind[AggregationEndpoint] to new AggregationEndpoint
  bind[CultureEndpoint] to new CultureEndpoint
  bind[FarmEndpoint] to new FarmEndpoint
  bind[ProjectEndpoint] to new ProjectEndpoint
  bind[SpeciesEndpoint] to new SpeciesEndpoint
  bind[UserEndpoint] to new UserEndpoint

}

class AggregationModule extends Module {
  binding toProvider new AggregationBroadcaster()
  binding toProvider new CultureCountActor
  binding toProvider new ContainerCountActor
  binding toProvider new GeneralAggregatioActor
}

class Configs extends Module with LazyLogging {
  private val config = ConfigFactory.load()

  bind[String] as 'BIND to config.getString("spray-can.server.host")
  bind[Int] as 'PORT to config.getInt("spray-can.server.port")

  bind[Int] as 'SALT to config.getInt("mycotrack.bcrypt.salt")
}


object Boot extends App with AkkaInjectable with LazyLogging with ModuleDefinition {

  implicit lazy val system = inject[ActorSystem]
  lazy val host = inject[String](identified by 'BIND)
  lazy val port = inject[Int](identified by 'PORT)

  lazy val dataInitializer = inject[DataInitializer]
  dataInitializer.initializeData

  val handler = injectActorRef[MasterInjector]

  implicit val timeout = Timeout(5.seconds)
  IO(Http) ? Http.Bind(handler, interface = host, port = port)
}

