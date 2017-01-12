package com.mycotrack.api.model

import org.joda.time.DateTime
import reactivemongo.bson.BSONObjectID

/**
 * Created by ctcarrier on 12/21/16.
 */

case class SensorLocation(_id: Option[BSONObjectID], sourceAddress: String, location: String, description: String)

case class TempPressureData(name: String, pressure: Double, temperature: Double, sourceAddress: String, timestamp: DateTime, userId: Option[BSONObjectID])

object TempPressureData{
  val dataLength = 2

  def apply(reading: SensorReading): TempPressureData = {
    TempPressureData(reading.sensor, reading.sensorData(0), reading.sensorData(1), reading.sourceAddress, reading.timestamp, reading.userId)
  }

  def validate(rawData: Seq[Double]): Boolean = {
    rawData.length == dataLength
  }
}

case class TempHumidityData(name: String, humidity: Double, temperature: Double, sourceAddress: String, timestamp: DateTime, userId: Option[BSONObjectID])

object TempHumidityData{
  val dataLength = 2

  def apply(reading: SensorReading): TempHumidityData = {
    TempHumidityData(reading.sensor, reading.sensorData(0), reading.sensorData(1), reading.sourceAddress, reading.timestamp, reading.userId)
  }

  def validate(rawData: Seq[Double]): Boolean = {
    rawData.length == dataLength
  }
}

case class Tsl2561Data(name: String, lux: Double, sourceAddress: String, timestamp: DateTime, userId: Option[BSONObjectID])

object Tsl2561Data{
  val dataLength = 1

  def apply(reading: SensorReading): Tsl2561Data = {
    Tsl2561Data(reading.sensor, reading.sensorData.head, reading.sourceAddress, reading.timestamp, reading.userId)
  }

  def validate(rawData: Seq[Double]): Boolean = {
    rawData.length == dataLength
  }
}

case class Tmp007Data(name: String, objTemp: Double, dieTemp: Double, sourceAddress: String, timestamp: DateTime, userId: Option[BSONObjectID])

object Tmp007Data{
  val dataLength = 2

  def apply(reading: SensorReading): Tmp007Data = {
    Tmp007Data(reading.sensor, reading.sensorData(0), reading.sensorData(1), reading.sourceAddress, reading.timestamp, reading.userId)
  }

  def validate(rawData: Seq[Double]): Boolean = {
    rawData.length == dataLength
  }
}