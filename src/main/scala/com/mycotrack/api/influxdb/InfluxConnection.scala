package com.mycotrack.api.influxdb

import com.typesafe.config.ConfigFactory
import scaldi.Module

/**
 * Created by ctcarrier on 10/2/16.
 */
class InfluxConnection extends Module {
  import com.paulgoldbaum.influxdbclient._
  import scala.concurrent.ExecutionContext.Implicits.global

  private val config = ConfigFactory.load()

  val db = InfluxDB.connect("localhost", 8086)

  bind[Database] as 'SENSOR_DB to db.selectDatabase("mycotrack")
}
