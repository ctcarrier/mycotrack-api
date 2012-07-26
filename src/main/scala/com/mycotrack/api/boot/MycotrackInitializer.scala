package com.mycotrack.api.boot

import cc.spray.io.IoWorker
import cc.spray.{SprayCanRootService, HttpService, RootService}
import util.Properties
import com.mycotrack.api.endpoint._
import com.mycotrack.api.dao._
import cc.spray.can.server.HttpServer
import cc.spray.io.pipelines.MessageHandlerDispatch
import akka.actor.{ActorSystem, Props}
import com.weiglewilczek.slf4s.Logging
import com.typesafe.config.ConfigFactory
import com.mycotrack.api.mongo.MongoSettings
import com.mycotrack.api.aggregation.GlobalAggregators
import akka.dispatch.ExecutionContext
import com.mycotrack.api.service.DefaultFarmService
import com.mongodb.casbah.commons.MongoDBObject

/**
 * @author chris_carrier
 */

object MycotrackInitializer extends App with Logging with GlobalAggregators {

  logger.info("Running Initializer")

  val system = ActorSystem("mycotrack")
  val executionContext: ExecutionContext = system.dispatcher

  val config = ConfigFactory.load()

  val host = "0.0.0.0"
  val port = Option(System.getenv("PORT")).getOrElse("8080").toInt

  val mongoUrl = config.getString("mongodb.url")
  val mongoDbName = config.getString("mongodb.database")

  val projectCollection = config.getString("mycotrack.project.collection")
  val speciesCollection = config.getString("mycotrack.species.collection")
  val cultureCollection = config.getString("mycotrack.culture.collection")
  val userCollection = config.getString("mycotrack.user.collection")

//  val urlList = mongoUrl.split(",").toList.map(new ServerAddress(_))

  val MongoSettings(db) = Properties.envOrNone("MONGOHQ_URL")

  val cultureCountCollection = db(config.getString("mycotrack.cultureCount.collection"))

  val defaultSubstrateCollection = db(config.getString("mycotrack.defaultSubstrates.collection"))
  val defaultContainerCollection = db(config.getString("mycotrack.defaultContainers.collection"))

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


  val projectDao = new ProjectDao {
    implicit val ec = executionContext
    val mongoCollection = db(projectCollection)
    def aggBroadcaster = aggregationBroadcaster
  }
  val speciesDao = new SpeciesDao {
    implicit val ec = executionContext
    val mongoCollection = db(speciesCollection)
    val projCollection = db(projectCollection)
    def aggBroadcaster = aggregationBroadcaster
  }
  val cultureDao = new CultureDao {
    implicit val ec = executionContext
    val mongoCollection = db(cultureCollection)
    val speciesService = speciesDao
    val projCollection = db(projectCollection)
    def aggBroadcaster = aggregationBroadcaster
  }
  val aggregationDao = new AggregationDao(db(projectCollection))(system) {
//    implicit def actorSystem = system
  }
  val userDao = new UserDao {
    implicit val ec = executionContext
    val mongoCollection = db(userCollection)
    def aggBroadcaster = aggregationBroadcaster
  }
  val farmDao = new MongoFarmDao(defaultSubstrateCollection, defaultContainerCollection)

  val farmService = new DefaultFarmService(farmDao)

  // ///////////// INDEXES for collections go here (include all lookup fields)
  //  configsCollection.ensureIndex(MongoDBObject("customerId" -> 1), "idx_customerId")
  val projectModule = new ProjectEndpoint {
    implicit def actorSystem = system
    val service = projectDao
  }
  val cultureModule = new CultureEndpoint {
    implicit def actorSystem = system
    val service = cultureDao
  }
  val speciesModule = new SpeciesEndpoint {
    implicit def actorSystem = system
    val service = speciesDao
  }
  val aggregationModule = new AggregationEndpoint {
    implicit def actorSystem = system
    val service = aggregationDao
  }
  val userModule = new UserEndpoint {
    implicit def actorSystem = system
    val service = userDao
  }
  val webAppModule = new WebAppEndpoint {
    implicit def actorSystem = system
  }
  val farmModule = new FarmEndpoint {
    implicit def actorSystem = system

    val service = farmService
  }

  val projectService = system.actorOf(
    props = Props(new HttpService(projectModule.restService)),
    name = "project-service"
  )
  val speciesService = system.actorOf(
    props = Props(new HttpService(speciesModule.restService)),
    name = "species-service"
  )
  val cultureService = system.actorOf(
    props = Props(new HttpService(cultureModule.restService)),
    name = "culture-service"
  )
  val webAppService = system.actorOf(
    props = Props(new HttpService(webAppModule.restService)),
    name = "webApp-service"
  )
  val aggregationService = system.actorOf(
    props = Props(new HttpService(aggregationModule.restService)),
    name = "aggregation-service"
  )
  val userService = system.actorOf(
    props = Props(new HttpService(userModule.restService)),
    name = "user-service"
  )
  val farmEndpoint = system.actorOf(
    props = Props(new HttpService(farmModule.restService)),
    name = "farm-service"
  )

  val rootService = system.actorOf(
    props = Props(new SprayCanRootService(projectService, speciesService, cultureService, aggregationService, userService, webAppService, farmEndpoint)),
    name = "root-service"
  )

  // every spray-can HttpServer (and HttpClient) needs an IoWorker for low-level network IO
  // (but several servers and/or clients can share one)
  val ioWorker = new IoWorker(system).start()

  // create and start the spray-can HttpServer, telling it that we want requests to be
  // handled by the root service actor
  val sprayCanServer = system.actorOf(
    Props(new HttpServer(ioWorker, MessageHandlerDispatch.SingletonHandler(rootService))),
    name = "http-server"
  )

  // a running HttpServer can be bound, unbound and rebound
  // initially to need to tell it where to bind to
  sprayCanServer ! HttpServer.Bind(host, port)

  // finally we drop the main thread but hook the shutdown of
  // our IoWorker into the shutdown of the applications ActorSystem
  system.registerOnTermination {
    ioWorker.stop()
  }
}

