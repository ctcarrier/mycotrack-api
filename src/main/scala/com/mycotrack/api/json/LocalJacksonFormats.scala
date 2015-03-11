package com.mycotrack.api.json

import com.mycotrack.api.model.User

import org.json4s.jackson.Serialization
import org.json4s._
import FieldSerializer._

import reactivemongo.bson.{BSONObjectID, BSONDocument}
import org.json4s.ShortTypeHints
import org.joda.time.DateTime
import org.joda.time.format.ISODateTimeFormat
import scaldi.Module


/**
 * Created by ccarrier for bl-rest.
 * at 9:58 PM on 12/14/13
 */
class LocalJacksonFormats extends Module {

  val userSerializer = FieldSerializer[User](ignore("password"))

  bind[Formats] to Serialization.formats(ShortTypeHints(List(classOf[BSONDocument]))) +
    new IntervalSerializer +
    new DateTimeSerializer

}

class IntervalSerializer   extends CustomSerializer[BSONObjectID](format => (
  {
    case JString(id) =>
      BSONObjectID(id)
  },
  {
    case x: BSONObjectID =>
      JString(x.stringify)
  }
  ))

class DateTimeSerializer   extends CustomSerializer[DateTime](format => (
  {
    case JString(id) =>
      val fmt = ISODateTimeFormat.dateTime()
      fmt.parseDateTime(id)
  },
  {
    case x: DateTime =>
      val fmt = ISODateTimeFormat.dateTime()
      JString(fmt.print(x))
  }
  ))