package com.mycotrack.api.boot

import akka.io.IO
import akka.util.Timeout
import scala.concurrent.duration._
import com.typesafe.scalalogging.LazyLogging
import scaldi.Module
import scaldi.akka.AkkaInjectable
import spray.can.Http
import util.Properties
import com.mycotrack.api.endpoint._
import akka.actor.{ActorSystem, Props}
import com.typesafe.config.ConfigFactory
import com.mycotrack.api.aggregation.GlobalAggregators

/**
 * @author chris_carrier
 */

class ActorSystemModule extends Module {
  bind [ActorSystem] to ActorSystem("vaultswap") destroyWith (_.shutdown())
}

class SysProps extends Module {
  bind[String] as 'AWS_SECRET_ACCESS_KEY to Properties.envOrElse("AWS_SECRET_ACCESS_KEY", "")
  bind[String] as 'AWS_ACCESS_KEY_ID to Properties.envOrElse("AWS_ACCESS_KEY_ID", "")
  bind[String] as 'SPREEDLY_KEY to Properties.envOrElse("SPREEDLY_KEY", "")
  bind[String] as 'SPREEDLY_SECRET to Properties.envOrElse("SPREEDLY_SECRET", "")
}

object MycotrackInitializer extends App with LazyLogging with GlobalAggregators {

  logger.info("Running Initializer")

  val system = ActorSystem("mycotrack")

  val config = ConfigFactory.load()

  val host = "0.0.0.0"
  val port = Option(System.getenv("PORT")).getOrElse("8080").toInt

  val mongoUrl = config.getString("mongodb.url")
  val mongoDbName = config.getString("mongodb.database")

//  val urlList = mongoUrl.split(",").toList.map(new ServerAddress(_))

  val MongoSettings(db) = Properties.envOrNone("MONGOHQ_URL")

  defaultContainerCollection.insert(MongoDBObject("_id" -> "quart", "name" -> "mason jar(quart)"))
  defaultContainerCollection.insert(MongoDBObject("_id" -> "halfpint", "name" -> "mason jar(half-pint)"))
  defaultContainerCollection.insert(MongoDBObject("_id" -> "pint", "name" -> "mason jar(pint)"))
  defaultContainerCollection.insert(MongoDBObject("_id" -> "filterbag", "name" -> "filter patch bag"))
  defaultContainerCollection.insert(MongoDBObject("_id" -> "tub", "name" -> "tub"))
  defaultContainerCollection.insert(MongoDBObject("_id" -> "plasticTubing", "name" -> "plastic tube"))
  defaultContainerCollection.insert(MongoDBObject("_id" -> "pyrex", "name" -> "pyrex dish"))

  defaultSubstrateCollection.insert(MongoDBObject("_id" ->"rye", "name" -> "rye"))
  defaultSubstrateCollection.insert(MongoDBObject("_id" ->"sorghum", "name" -> "sorghum"))
  defaultSubstrateCollection.insert(MongoDBObject("_id" ->"wbs", "name" -> "wild bird seed"))
  defaultSubstrateCollection.insert(MongoDBObject("_id" ->"sawdust", "name" -> "sawdust"))
  defaultSubstrateCollection.insert(MongoDBObject("_id" ->"enrichedsawdust", "name" -> "sawdust(enriched)"))
  defaultSubstrateCollection.insert(MongoDBObject("_id" ->"woodchips", "name" -> "wood chips"))
  defaultSubstrateCollection.insert(MongoDBObject("_id" ->"straw", "name" -> "straw"))
  defaultSubstrateCollection.insert(MongoDBObject("_id" ->"coir", "name" -> "coir"))
  defaultSubstrateCollection.insert(MongoDBObject("_id" ->"hpoo", "name" -> "horse poo"))


}

class MycotrackDaos extends Module {

}

class MycotrackServices extends Module {
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

class Configs extends Module with LazyLogging {
  private val config = ConfigFactory.load()

  bind[String] as 'BIND to config.getString("spray-can.server.host")
  bind[Int] as 'PORT to config.getInt("spray-can.server.port")


}


object Boot extends App with AkkaInjectable with LazyLogging {
  implicit val appModule = new ActorSystemModule :: new MycotrackDaos :: new SprayModule :: new Configs ::
    new LocalJacksonFormats :: new AuthorizeModule :: new DbModule :: new MycotrackServices :: new EmailModule ::
    new CryptoModule :: new StatusModule

  implicit lazy val system = inject[ActorSystem]
  lazy val host = inject[String](identified by 'BIND)
  lazy val port = inject[Int](identified by 'PORT)

  val handler = injectActorRef[MasterInjector]

  implicit val timeout = Timeout(5.seconds)
  IO(Http) ? Http.Bind(handler, interface = host, port = port)
}