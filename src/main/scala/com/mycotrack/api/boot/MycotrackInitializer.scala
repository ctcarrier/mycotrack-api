package com.mycotrack.api.boot

import org.slf4j.LoggerFactory
import akka.actor.Supervisor
import akka.config.Supervision
import Supervision._
import cc.spray.connectors.Initializer
import akka.actor.Actor._
import cc.spray.HttpService._
import com.mongodb.ServerAddress
import com.mongodb.casbah.MongoConnection
import com.mycotrack.api.endpoint._
import com.mycotrack.api.model._
import _root_.com.mycotrack.api.dao._
import akka.event.slf4j.Logging
import com.mycotrack.api.model.{NestedObject, Project}
import cc.spray.{SprayCanRootService, HttpService, RootService}
import cc.spray.can.{ServerConfig, HttpServer}

/**
 * @author chris_carrier
 */

object MycotrackInitializer extends App with Logging {

  log.info("Running Initializer")

  val akkaConfig = akka.config.Config.config

  val host = "0.0.0.0"
  val port = Option(System.getenv("PORT")).getOrElse("8080").toInt

  val mongoUrl = akkaConfig.getString("mongodb.url", "localhost")
  val mongoDbName = akkaConfig.getString("mongodb.database", "mycotrack")

  val projectCollection = akkaConfig.getString("mycotrack.project.collection", "projects")
  val speciesCollection = akkaConfig.getString("mycotrack.species.collection", "species")
  val cultureCollection = akkaConfig.getString("mycotrack.culture.collection", "cultures")
  val userCollection = akkaConfig.getString("mycotrack.user.collection", "users")

  val urlList = mongoUrl.split(",").toList.map(new ServerAddress(_))
  val db = urlList match {
    case List(s) => MongoConnection(s)(mongoDbName)
    case s: List[String] => MongoConnection(s)(mongoDbName)
    case _ => MongoConnection("localhost")(mongoDbName)
  }
  val projectDao = new ProjectDao {
    val mongoCollection = db(projectCollection)
  }
  val speciesDao = new SpeciesDao {
    val mongoCollection = db(speciesCollection)
  }
  val cultureDao = new CultureDao {
    val mongoCollection = db(cultureCollection)
    val speciesService = speciesDao
  }
  val aggregationDao = new AggregationDao(db(projectCollection))
  val userDao = new UserDao {
    val mongoCollection = db(userCollection)
  }

  // ///////////// INDEXES for collections go here (include all lookup fields)
  //  configsCollection.ensureIndex(MongoDBObject("customerId" -> 1), "idx_customerId")
  val projectModule = new ProjectEndpoint {val service = projectDao}
  val cultureModule = new CultureEndpoint {val service = cultureDao}
  val speciesModule = new SpeciesEndpoint {val service = speciesDao}
  val aggregationModule = new AggregationEndpoint {val service = aggregationDao}
  val userModule = new UserEndpoint {val service = userDao}
  val webAppModule = new WebAppEndpoint {}

  val projectService = actorOf(new HttpService(projectModule.restService))
  val speciesService = actorOf(new HttpService(speciesModule.restService))
  val cultureService = actorOf(new HttpService(cultureModule.restService))
  val webAppService = actorOf(new HttpService(webAppModule.restService))
  val aggregationService = actorOf(new HttpService(aggregationModule.restService))
  val userService = actorOf(new HttpService(userModule.restService))
  val rootService = actorOf(new SprayCanRootService(projectService, speciesService, cultureService, webAppService, aggregationService, userService))
  val sprayCanServer = actorOf(new HttpServer(new ServerConfig(host = host, port = port)))

  // Start all actors that need supervision, including the root service actor.
  Supervisor(
    SupervisorConfig(
      OneForOneStrategy(List(classOf[Exception]), 3, 100),
      List(
        Supervise(projectService, Permanent),
        Supervise(speciesService, Permanent),
      Supervise(cultureService, Permanent),
      Supervise(aggregationService, Permanent),
      Supervise(userService, Permanent),
      Supervise(webAppService, Permanent),
        Supervise(rootService, Permanent),
        Supervise(sprayCanServer, Permanent)
      )
    )
  )
}

