package com.mycotrack.api.service

import akka.actor.ActorSystem
import com.mycotrack.api.dao.SensorDao
import com.mycotrack.api.model.{Tmp007Data, Tsl2561Data, Bmp180Data, SensorReading}
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
    reading.sensor match {
      case "bmp180" => sensorDao.save(Bmp180Data(reading))
      case "tsl2561" => sensorDao.save(Tsl2561Data(reading))
      case "tmp007" => sensorDao.save(Tmp007Data(reading))
    }
  }
}