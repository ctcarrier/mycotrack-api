package com.mycotrack.api.dao

import akka.actor.{ActorRefFactory, ActorSystem}
import com.mycotrack.api.model.SensorReading
import com.paulgoldbaum.influxdbclient.{Point, Database}
import org.joda.time.format.ISODateTimeFormat
import reactivemongo.api.collections.bson.BSONCollection
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import scaldi.Injector
import scaldi.akka.AkkaInjectable

import scala.concurrent.{Future, ExecutionContext}

/**
 * Created by ctcarrier on 5/12/15.
 */

trait SensorDao {

  def get(key: BSONObjectID, userId: BSONObjectID): Future[Option[SensorReading]]
  def save(project: SensorReading): Future[Option[Boolean]]
  def search(searchObj: BSONDocument): Future[List[SensorReading]]
}

class MongoSensorDao(implicit inj: Injector) extends SensorDao with AkkaInjectable {

  import ExecutionContext.Implicits.global
  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory: ActorRefFactory = system
  val fmt = ISODateTimeFormat.dateTime()
  
  lazy val sensorCollection = inject[BSONCollection] (identified by 'SENSOR_COLLECTION)
  lazy val influx = inject[Database] (identified by 'SENSOR_DB)

  def get(key: BSONObjectID, userId: BSONObjectID): Future[Option[SensorReading]] =
    sensorCollection.find(BSONDocument("_id" -> key, "userId" -> userId)).one[SensorReading]

  def saveToMongo(sensor: SensorReading): Future[Option[BSONObjectID]] = {

    val newObjectId = Option(BSONObjectID.generate)
    val sel = BSONDocument(
      "tag" -> sensor.tag,
      "userId" -> sensor.userId,
      "hour" -> sensor.timestamp.getHourOfDay)
    val toInsert = BSONDocument(
      "$set" -> BSONDocument(
        "data" -> BSONDocument(
          "minute" -> sensor.timestamp.getMinuteOfHour(),
          "fahrenheit" -> sensor.fahrenheit,
          "humidity" -> sensor.humidity,
          "timestamp" -> fmt.print(sensor.timestamp)
        )))
    for {
      lastError <- sensorCollection.update(selector = sel, update = toInsert, multi = false, upsert = true)
      doc <- sensorCollection.find(BSONDocument(
        "tag" -> sensor.tag,
        "userId" -> sensor.userId,
        "hour" -> sensor.timestamp.getHourOfDay)).one[BSONDocument]
      toReturn <- Future.successful(doc.get.getAs[BSONObjectID]("_id"))
    } yield toReturn
  }

  def save(sensor: SensorReading): Future[Option[Boolean]] = {
    val point = Point("env")
      .addTag("name", sensor.tag)
      .addField("h", sensor.humidity)
      .addField("t", sensor.fahrenheit)
      .addField("userId", sensor.userId.get.stringify)
    influx.write(point).map(resp => Some(true))
  }

  def search(searchObj: BSONDocument): Future[List[SensorReading]] = {
    sensorCollection.find(searchObj).cursor[SensorReading]().collect[List]()
  } 
}
