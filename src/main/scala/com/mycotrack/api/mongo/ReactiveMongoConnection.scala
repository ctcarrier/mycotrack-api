package com.mycotrack.api.mongo

import com.typesafe.config.ConfigFactory
import reactivemongo.api.collections.default.BSONCollection
import reactivemongo.api.{DB, MongoDriver}
import scaldi.Module

import scala.concurrent.duration._
import scala.concurrent.{Await, ExecutionContext}
import scala.util.Properties


/**
 * Created by ccarrier for bl-rest.
 * at 10:02 PM on 12/14/13
 */
class ReactiveMongoConnection extends Module {
  import scala.concurrent.ExecutionContext.Implicits.global

  private val config = ConfigFactory.load()
  val driver = new MongoDriver

  val pattern = "^mongodb:\\/\\/([\\w]*):([\\w]*)@([\\w\\.-]+):([\\d]+)\\/([\\w]+)".r

  val envUri = Properties.envOrElse("MONGODB_URI", "").toString

  val (connection, db) = if (!envUri.isEmpty){
    val pattern(user, password, host, port, dbName) = envUri

    val connection = driver.connection(List("%s:%s".format(host, port)))

    val userName =Properties.envOrElse("MONGODB_USER", user)
    val pass = Properties.envOrElse("MONGODB_PASS", password)

    // Gets a reference to the database "plugin"
    val db = connection(dbName)
    val authResult = Await.result(db.authenticate(userName, pass)(120.seconds), 120.seconds)

    (connection, db)

  }
  else {
    val connection = driver.connection(List(config.getString("mongodb.url")))

    // Gets a reference to the database "plugin"
    val db = connection(config.getString("mongodb.database"))

    (connection, db)
  }

  // Gets a reference to the collection "acoll"
  // By default, you get a BSONCollection.
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

}

