package com.mycotrack.api.mongo

import com.typesafe.config.ConfigFactory
import com.typesafe.scalalogging.LazyLogging
import reactivemongo.api.collections.bson.BSONCollection
import reactivemongo.api.{MongoConnection, DB, MongoDriver}
import reactivemongo.core.nodeset.Authenticate
import scaldi.Module

import scala.concurrent.duration._
import scala.concurrent.{Await, ExecutionContext}
import scala.util.Properties


/**
 * Created by ccarrier for bl-rest.
 * at 10:02 PM on 12/14/13
 */
class ReactiveMongoConnection extends Module with LazyLogging {
  import scala.concurrent.ExecutionContext.Implicits.global

  private val config = ConfigFactory.load()
  val driver = new MongoDriver

  //val pattern = "^mongodb:\\/\\/([\\w]*):([\\w]*)@([\\w\\.-]+):([\\d]+)\\/([\\w]+)".r
  val pattern = "^mongodb:\\/\\/([\\w\\.-]+):([\\d]+)\\/([\\w]+)".r

  val envUri = Properties.envOrElse("MONGO_URI", "").toString
  logger.info("MONGO_URI - %s".format(envUri))

  MongoConnection.parseURI(envUri).map { parsedUri =>
    val connection = driver.connection(parsedUri)
    val dbName = parsedUri.db.get
    val db = connection(dbName)

    bind[DB] to db

    bind[BSONCollection] as 'CULTURE_COUNT_COLLECTION to db(config.getString("mycotrack.cultureCount.collection"))
    bind[BSONCollection] as 'CONTAINER_COUNT_COLLECTION to db(config.getString("mycotrack.containerCount.collection"))
    bind[BSONCollection] as 'GENERAL_AGGREGATION_COLLECTION to db(config.getString("mycotrack.generalAggregation.collection"))
    bind[BSONCollection] as 'DEFAULT_SUBSTRATE_COLLECTION to db(config.getString("mycotrack.defaultSubstrates.collection"))
    bind[BSONCollection] as 'DEFAULT_CONTAINER_COLLECTION to db(config.getString("mycotrack.defaultContainers.collection"))

    bind[BSONCollection] as 'PROJECT_COLLECTION to db(config.getString("mycotrack.project.collection"))
    bind[BSONCollection] as 'CULTURE_COLLECTION to db(config.getString("mycotrack.culture.collection"))
    bind[BSONCollection] as 'SPECIES_COLLECTION to db(config.getString("mycotrack.species.collection"))
    bind[BSONCollection] as 'USER_COLLECTION to db(config.getString("mycotrack.user.collection"))
    bind[BSONCollection] as 'LOCATION_COLLECTION to db(config.getString("mycotrack.location.collection"))
    bind[BSONCollection] as 'HARVEST_COLLECTION to db(config.getString("mycotrack.harvest.collection"))
    bind[BSONCollection] as 'SENSOR_COLLECTION to db(config.getString("mycotrack.sensor.collection"))
    bind[BSONCollection] as 'SENSOR_LOCATION_COLLECTION to db(config.getString("mycotrack.sensorLocation.collection"))
  }

}

