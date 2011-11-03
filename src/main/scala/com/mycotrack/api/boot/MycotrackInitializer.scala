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
import cc.spray.{HttpService, RootService}
import com.mycotrack.api._
import _root_.com.mycotrack.api.dao._
import akka.event.slf4j.Logging
import model.{NestedObject, Project}

/**
 * @author chris_carrier
 */


class MycotrackInitializer extends Initializer with Logging {

  log.info("Running Initializer")

  val akkaConfig = akka.config.Config.config

  val mongoUrl = akkaConfig.getString("mongodb.mongoUrl", "localhost")
  val mongoDbName = akkaConfig.getString("mongodb.database", "")
  val collection = akkaConfig.getString("mongodb.collection", "Projects")

  val urlList = mongoUrl.split(",").toList.map(new ServerAddress(_))
  val db = urlList match {
    case List(s) => MongoConnection(s)(mongoDbName)
    case s: List[String] => MongoConnection(s)(mongoDbName)
  }
  val dao = new ProjectDao(db(collection))

  // ///////////// INDEXES for collections go here (include all lookup fields)
  //  configsCollection.ensureIndex(MongoDBObject("customerId" -> 1), "idx_customerId")
  val projectModule = new ProjectEndpoint {val service = dao}
  val speciesModule = new SpeciesEndpoint {val service = dao}

  val projectService = actorOf(new HttpService(projectModule.restService))
  val speciesService = actorOf(new HttpService(speciesModule.restService))
  val rootService = actorOf(new RootService(projectService, speciesService))

  // Start all actors that need supervision, including the root service actor.
  Supervisor(
    SupervisorConfig(
      OneForOneStrategy(List(classOf[Exception]), 3, 100),
      List(
        Supervise(projectService, Permanent),
        Supervise(rootService, Permanent)
      )
    )
  )

}

