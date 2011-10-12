package com.mycotrack.api.directives

import cc.spray.directives._
import cc.spray.{ValidationRejection, Reject, Pass, Directives}
import net.liftweb.json.JsonParser._
import net.liftweb.json.DefaultFormats
/**
 * @author chris_carrier
 * @version 10/2/11
 */


trait ValidationDirectives extends Directives {
  implicit val formats = DefaultFormats

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