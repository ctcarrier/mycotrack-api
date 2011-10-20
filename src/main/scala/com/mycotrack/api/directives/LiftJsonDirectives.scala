package com.mycotrack.api.directives

import cc.spray.directives._
import cc.spray.{ValidationRejection, Reject, Pass, Directives}
import net.liftweb.json.JsonParser._
import net.liftweb.json.DefaultFormats
import com.mycotrack.api.model.Project
import net.liftweb.json.JsonAST.{JValue, JNothing}
import net.liftweb.json.Serialization._
import scala.reflect.Manifest

/**
 * @author chris_carrier
 * @version 10/2/11
 */


trait LiftJsonDirectives extends Directives {
  implicit val formats = DefaultFormats

  def extractAndValidate[A <: Any : Manifest](fields: List[String]): SprayRoute1[A] = filter1 {
    ctx =>
      ctx.request.content match {
        case Some(httpContent) => {
          val json = parse(new String(httpContent.buffer))
          fields.map {
            xs =>
              xs.split("\\.").foldLeft(json)(_ \ _) match {
                case JNothing => Some(xs)
                case x: JValue => None
                case _ => Some(xs)
              }
          }.flatten match {
            case Nil => Pass(json.extract[A])
            case list: List[String] => Reject(ValidationRejection(list.reduceLeft((x1, x2) => "%s.required, %s" format(x1, x2))))
          }
        }
        case _ => Reject(ValidationRejection("body.required"))
      }
  }

  def extract[A <: Any : Manifest]: SprayRoute1[A] = filter1 {
    ctx =>
      ctx.request.content match {
        case Some(httpContent) => {
          val json = parse(new String(httpContent.buffer))
          Pass(json.extract[A])
        }
        case _ => Reject(ValidationRejection("body.required"))
      }
  }

  def requiringStrings(fieldNames: List[String]): SprayRoute0 = filter {
    ctx =>
      ctx.request.content match {
        case Some(httpContent) => {
          val json = parse(new String(httpContent.buffer))
          fieldNames.map {
            xs =>
              val field = json \ xs
              field.extractOpt[String] match {
                case Some(x) => None
                case None => Some(xs)
              }
          }.flatten match {
            case Nil => Pass()
            case list: List[String] => Reject(ValidationRejection(list.reduceLeft((x1, x2) => "%s.required, %s" format(x1, x2))))
          }
        }
        case _ => Reject(ValidationRejection("body.required"))
      }
  }


}