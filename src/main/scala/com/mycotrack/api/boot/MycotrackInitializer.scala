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
import cc.spray.{HttpService, RootService}
import com.mycotrack.api.model._
import _root_.com.mycotrack.api.dao._
import akka.event.slf4j.Logging
import com.mycotrack.api.model.{NestedObject, Project}

/**
 * @author chris_carrier
 */

class MycotrackInitializer extends Initializer with Logging {

  log.info("Running Initializer")

  val akkaConfig = akka.config.Config.config

  val mongoUrl = akkaConfig.getString("mongodb.url", "localhost")
  val mongoDbName = akkaConfig.getString("mongodb.database", "mycotrack")

  val projectCollection = akkaConfig.getString("mycotrack.project.collection", "projects")
  val speciesCollection = akkaConfig.getString("mycotrack.species.collection", "species")

  val urlList = mongoUrl.split(",").toList.map(new ServerAddress(_))
  val db = urlList match {
    case List(s) => MongoConnection(s)(mongoDbName)
    case s: List[String] => MongoConnection(s)(mongoDbName)
    case _ => MongoConnection("localhost")(mongoDbName)
  }
  val projectDao = new ProjectDao(db(projectCollection))
  val speciesDao = new SpeciesDao(db(speciesCollection))

  // ///////////// INDEXES for collections go here (include all lookup fields)
  //  configsCollection.ensureIndex(MongoDBObject("customerId" -> 1), "idx_customerId")
  val projectModule = new ProjectEndpoint {val service = projectDao}
  val speciesModule = new SpeciesEndpoint {val service = speciesDao}

  val projectService = actorOf(new HttpService(projectModule.restService))
  val speciesService = actorOf(new HttpService(speciesModule.restService))
  val rootService = actorOf(new RootService(projectService, speciesService))

  // Start all actors that need supervision, including the root service actor.
  Supervisor(
    SupervisorConfig(
      OneForOneStrategy(List(classOf[Exception]), 3, 100),
      List(
        Supervise(projectService, Permanent),
        Supervise(speciesService, Permanent),
        Supervise(rootService, Permanent)
      )
    )
  )
}

