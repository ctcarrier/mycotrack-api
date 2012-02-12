package com.mycotrack.api.json

import cc.spray._
import typeconversion._
import http._
import MediaTypes._

import net.liftweb.json.Serialization._
import akka.event.EventHandler
import org.bson.types.ObjectId
import net.liftweb.json.JsonAST.{JString, JValue}
import net.liftweb.json._

/**
 * @author chris_carrier
 * @version 10/18/11
 */

class ObjectIdSerializer extends Serializer[ObjectId] {
  private val ObjectIdClass = classOf[ObjectId]

  def deserialize(implicit format: Formats): PartialFunction[(TypeInfo, JValue), ObjectId] = {
    case (TypeInfo(ObjectIdClass, _), json) => json match {
      case JString(s) if (ObjectId.isValid(s)) =>
        new ObjectId(s)
      case x => throw new MappingException("Can't convert " + x + " to ObjectId")
    }
  }

  def serialize(implicit formats: Formats): PartialFunction[Any, JValue] = {
    case x: ObjectId => JString(x.toString)
  }
}