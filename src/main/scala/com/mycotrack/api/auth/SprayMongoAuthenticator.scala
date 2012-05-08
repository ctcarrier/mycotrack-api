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
import com.mycotrack.api.model.{UserWrapper, User}
import utils.Logging
import com.mycotrack.api.mongo.MongoSettings
import scala.util.Properties

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

object FromMongoUserPassAuthenticator extends UserPassAuthenticator[User] with Logging {
  def apply(userPass: Option[(String, String)]) = {
    log.info("Mongo auth")
    Future {
      userPass.flatMap {
        case (user, pass) => {
          log.info("Autenticating: " + user + " " + pass)
          val MongoSettings(db) = Properties.envOrNone("MONGOHQ_URL")
          val userColl = db("users")
          val userResult = userColl.findOne(MongoDBObject("content.email" -> user) ++ ("content.password" -> pass))
          userResult.map(grater[UserWrapper].asObject(_))
        }
        case _ => None
      }
    }
  }
  
}