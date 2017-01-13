package com.mycotrack.api.dao

import java.util.Locale

import akka.actor.{ActorRefFactory, ActorSystem}
import com.mycotrack.api.model._
import com.paulgoldbaum.influxdbclient.Parameter.Precision
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

  def save(data: TempPressureData): Future[Boolean]
  def save(data: Tmp007Data): Future[Boolean]
  def save(data: Tsl2561Data): Future[Boolean]
  def save(data: TempHumidityData): Future[Boolean]
}

class MongoSensorDao(implicit inj: Injector) extends SensorDao with AkkaInjectable {

  import ExecutionContext.Implicits.global
  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory: ActorRefFactory = system
  val fmt = ISODateTimeFormat.dateTime()
  
  lazy val sensorCollection = inject[BSONCollection] (identified by 'SENSOR_COLLECTION)
  lazy val sensorLocationCollection = inject[BSONCollection] (identified by 'SENSOR_LOCATION_COLLECTION)
  lazy val influx = inject[Database] (identified by 'SENSOR_DB)

  private[this] def getSensorLocation(sourceAddress: String): Future[Option[SensorLocation]] = {
    val query = BSONDocument("sourceAddress" -> sourceAddress)
    sensorLocationCollection.find(query).one[SensorLocation]
  }

  def save(data: TempPressureData): Future[Boolean] = {

    getSensorLocation(data.sourceAddress).flatMap(locationOpt => {
      locationOpt.map(location => {
        val point = Point(location.location, timestamp = data.timestamp.getMillis)
          .addTag("name", data.name.toLowerCase(Locale.US))
          .addTag("sourceAddress", data.sourceAddress)
          .addField("temperature", data.temperature)
          .addField("pressure", data.pressure)
          .addTag("userId", data.userId.get.stringify)

        influx.write(point, precision=Precision.MILLISECONDS).map(resp => true)
      }).getOrElse[Future[Boolean]](Future.successful(false))
    })
  }

  def save(data: TempHumidityData): Future[Boolean] = {

    getSensorLocation(data.sourceAddress).flatMap(locationOpt => {
      locationOpt.map(location => {
        val point = Point(location.location, timestamp = data.timestamp.getMillis)
          .addTag("name", data.name.toLowerCase(Locale.US))
          .addTag("sourceAddress", data.sourceAddress)
          .addField("temperature", data.temperature)
          .addField("humidity", data.humidity)
          .addTag("userId", data.userId.get.stringify)

        influx.write(point, precision=Precision.MILLISECONDS).map(resp => true)
      }).getOrElse[Future[Boolean]](Future.successful(false))
    })
  }

  def save(data: Tmp007Data): Future[Boolean] = {

    getSensorLocation(data.sourceAddress).flatMap(locationOpt => {
      locationOpt.map(location => {
        val point = Point(location.location, timestamp = data.timestamp.getMillis)
          .addTag("name", data.name.toLowerCase(Locale.US))
          .addTag("sourceAddress", data.sourceAddress)
          .addField("dieTemperature", data.dieTemp)
          .addField("objectTemperature", data.objTemp)
          .addTag("userId", data.userId.get.stringify)

        influx.write(point, precision=Precision.MILLISECONDS).map(resp => true)
      }).getOrElse[Future[Boolean]](Future.successful(false))
    })
  }

  def save(data: Tsl2561Data): Future[Boolean] = {

    getSensorLocation(data.sourceAddress).flatMap(locationOpt => {
      locationOpt.map(location => {
        val point = Point(location.location, timestamp = data.timestamp.getMillis)
          .addTag("name", data.name.toLowerCase(Locale.US))
          .addTag("sourceAddress", data.sourceAddress)
          .addField("lux", data.lux)
          .addTag("userId", data.userId.get.stringify)

        influx.write(point, precision=Precision.MILLISECONDS).map(resp => true)
      }).getOrElse[Future[Boolean]](Future.successful(false))
    })
  }
}
