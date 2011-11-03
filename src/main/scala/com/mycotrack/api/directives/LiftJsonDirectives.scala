package com.mycotrack.api.directives

import cc.spray.directives._
import cc.spray.{ValidationRejection, Reject, Pass, Directives}
import net.liftweb.json.JsonParser._
import com.mycotrack.api.model.Project
import net.liftweb.json.JsonAST.{JValue, JNothing}
import net.liftweb.json.Serialization._
import scala.reflect.Manifest
import net.liftweb.json.{Formats, DefaultFormats}

/**
 * @author chris_carrier
 * @version 10/2/11
 */


trait LiftJsonDirectives extends Directives {
  implicit val formats: Formats

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