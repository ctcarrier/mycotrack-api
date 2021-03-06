package com.mycotrack

import com.mycotrack.api.dao._
import com.mycotrack.api.model._
import com.mycotrack.api.service.Farm
import org.joda.time.format.ISODateTimeFormat
import org.joda.time.{DateTime, DateTimeZone}
import reactivemongo.bson._
import spray.httpx.unmarshalling.{MalformedContent, Deserializer}

import scala.util.{Failure, Success}

/**
 * Created by ctcarrier on 3/6/15.
 */
package object api {

  DateTimeZone.setDefault(DateTimeZone.UTC)

  implicit object BSONDateTimeHandler extends BSONHandler[BSONDateTime, DateTime] {
    val fmt = ISODateTimeFormat.dateTime()
    def read(time: BSONDateTime) = new DateTime(time.value)
    def write(jdtime: DateTime) = BSONDateTime(jdtime.getMillis)
  }

  implicit val harvestHandler = Macros.handler[Harvest]
  implicit val cultureInventoryHandler = Macros.handler[CultureInventory]
  implicit val locationQueryHandler = Macros.handler[Location]
  implicit val eventHandler = Macros.handler[Event]
  implicit val projectHandler = Macros.handler[Project]
  implicit val speciesHandler = Macros.handler[Species]
  implicit val cultureHandler = Macros.handler[Culture]
  implicit val userHandler = Macros.handler[User]
  implicit val substrateHandler = Macros.handler[Substrate]
  implicit val containerHandler = Macros.handler[Container]
  implicit val cultureAggregationHandler = Macros.handler[CultureAggregation]
  implicit val containerAggregationHandler = Macros.handler[ContainerAggregation]
  implicit val generalAggregationQueryHandler = Macros.handler[GeneralAggregationQuery]
  implicit val sensorReadingHandler = Macros.handler[SensorReading]
  implicit val sensorLocationHAndler = Macros.handler[SensorLocation]

  implicit val farmHandler = Macros.handler[Farm]

}
