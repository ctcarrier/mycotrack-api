package com.mycotrack.api.spraylib

import org.joda.time.DateTime
import org.joda.time.format.DateTimeFormat
import reactivemongo.bson.{BSONDateTime, BSONHandler, BSONObjectID}
import spray.httpx.unmarshalling.{MalformedContent, Deserializer}

import scala.util.{Failure, Success}

/**
 * Created by ctcarrier on 5/7/15.
 */
trait LocalDeserializers {

  implicit val String2BSONObjectIDConverter = new Deserializer[String, BSONObjectID] {
    def apply(value: String) = BSONObjectID.parse(value) match {
      case Success(oid) => Right(oid)
      case Failure(x) => Left(MalformedContent(x.getMessage))
    }
  }

  implicit val String2DateTimeConverter = new Deserializer[String, DateTime] {
    def apply(value: String) = Right(new DateTime(value.toLong))
  }
}
