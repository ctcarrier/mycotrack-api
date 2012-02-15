package com.mycotrack.api.auth

import org.bson.types.ObjectId
import cc.spray._
import cc.spray.http.{BasicHttpCredentials, HttpCredentials}
import com.mongodb.casbah.MongoConnection._
import com.mongodb.casbah.MongoConnection
import com.mongodb.casbah.commons.MongoDBObject
import com.mongodb.casbah.commons.Imports._
import com.novus.salat._
import com.novus.salat.global._
import akka.event.EventHandler
import akka.dispatch.Future

/**
 * @author chris_carrier
 * @version 10/19/11
 */

/*trait MongoAuthenticator[U] extends HttpAuthenticator[U] {

  def apply(ctx: RequestContext) = {
    val authHeader = ctx.request.headers.findByType[`Authorization`]
    val credentials = authHeader.map { case Authorization(credentials) => credentials }
    authenticate(credentials, ctx) match {
      case Some(userContext) => Right(userContext)
      case None => Left {
        if (authHeader.isEmpty) AuthenticationRequiredRejection(scheme, realm, params(ctx))
        else AuthenticationFailedRejection(realm)
      }
    }
  }

  def scheme: String

  def realm: String

  def params(ctx: RequestContext): Map[String, String]

  def authenticate(credentials: Option[HttpCredentials], ctx: RequestContext): Option[U]
}*/

object FromMongoUserPassAuthenticator extends UserPassAuthenticator[BasicUserContext] {
  def apply(userPass: Option[(String, String)]) = {
    EventHandler.info(this, "Mongo auth")
    Future {
      userPass.flatMap {
        case (user, pass) => {
          val db = MongoConnection()("mycotrack")("users")
          val userResult = db.findOne(MongoDBObject("username" -> user) ++ ("password" -> pass))
          userResult.map(grater[BasicUserContext].asObject(_))
        }
        case _ => None
      }
    }
  }
  
}

case class BasicUserContext(_id: ObjectId, username: String, password: String)