package com.mycotrack.api.service

import java.util.Locale

import akka.actor.ActorSystem
import com.mycotrack.api.dao.SensorDao
import com.mycotrack.api.exception.SensorNotFoundException
import com.mycotrack.api.model._
import scaldi.Injector
import scaldi.akka.AkkaInjectable

import scala.concurrent.Future

/**
 * Created by ctcarrier on 12/21/16.
 */
trait SensorService {

  def save(reading: SensorReading): Future[Boolean]
}

class DefaultSensorService(implicit inj: Injector) extends SensorService with AkkaInjectable {
  implicit lazy val system = inject[ActorSystem]

  lazy val sensorDao = inject[SensorDao]

  def save(reading: SensorReading): Future[Boolean] = {
    val lowerSensor = reading.sensor.toLowerCase(Locale.US)
    lowerSensor match {
      case "bmp180" => sensorDao.save(TempPressureData(reading))
      case "tsl2561" => sensorDao.save(Tsl2561Data(reading))
      case "tmp007" => sensorDao.save(Tmp007Data(reading))
      case "sht01" => sensorDao.save(Tmp007Data(reading))
      case "am2315" => sensorDao.save(TempHumidityData(reading))
      case x => throw SensorNotFoundException("Sensor [%s] not found".format(x))
    }
  }
}