package com.mycotrack.api.spray

import cc.spray._
import authentication.BasicHttpAuthenticator
import com.mycotrack.api.auth.FromMongoUserPassAuthenticator
import akka.actor.ActorSystem

/**
 * @author chris_carrier
 * @version 7/16/12
 */


trait MongoAuthSupport {

  implicit def actorSystem: ActorSystem

  def httpMongo[U](realm: String = "Secured Resource",
                   authenticator: UserPassAuthenticator[U] = FromMongoUserPassAuthenticator())
  : BasicHttpAuthenticator[U] =
    new BasicHttpAuthenticator[U](realm, authenticator)
}
