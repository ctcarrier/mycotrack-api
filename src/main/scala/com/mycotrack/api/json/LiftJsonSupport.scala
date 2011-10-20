package com.mycotrack.api.json

import java.io.ByteArrayInputStream

import cc.spray._
import marshalling.{DefaultMarshallers, DefaultUnmarshallers, UnmarshallerBase, MarshallerBase}
import http._
import HttpHeaders._
import HttpMethods._
import StatusCodes._
import MediaTypes._
import utils._
import MediaRanges._
import HttpCharsets._

import net.liftweb.json.JsonParser._
import net.liftweb.json.DefaultFormats
import net.liftweb.json.Serialization._


/**
 * @author chris_carrier
 * @version 10/18/11
 */


object LiftJsonSupport extends LiftJsonSupport

trait LiftJsonSupport {
  implicit val formats = DefaultFormats

   implicit def liftJsonUnmarshaller[A :Manifest] = new UnmarshallerBase[A] {
           val canUnmarshalFrom = ContentTypeRange(`application/json`) :: Nil
           def unmarshal(content: HttpContent) = protect {
                   val jsonSource = DefaultUnmarshallers.StringUnmarshaller.unmarshal(content).right.get
                   parse(jsonSource).extract[A]
           }
   }

   implicit def liftJsonMarshaller[A <: AnyRef] = new MarshallerBase[A] {
           val canMarshalTo = ContentType(`application/json`) :: Nil
           def marshal(value: A, contentType: ContentType) = {
                   val jsonSource = write(value)
                   DefaultMarshallers.StringMarshaller.marshal(jsonSource, contentType)
           }
   }
}