package com.mycotrack.api.auth

import akka.actor.ActorSystem
import com.mycotrack.api.model.User
import com.typesafe.config.ConfigFactory
import com.typesafe.scalalogging.LazyLogging
import org.mindrot.jbcrypt.BCrypt
import reactivemongo.api.collections.default.BSONCollection
import reactivemongo.bson._
import scaldi.Injector
import scaldi.akka.AkkaInjectable
import spray.routing.authentication.{BasicHttpAuthenticator, UserPass, UserPassAuthenticator}

import scala.concurrent.{ExecutionContext, Future}

/**
 * Created by ctcarrier on 3/3/14.
 */

trait MycotrackUserPassAuthenticator {
  val basicAuthenticator: BasicHttpAuthenticator[User]
}

class Authenticator(implicit val inj: Injector) extends AkkaInjectable with MycotrackUserPassAuthenticator {
  import ExecutionContext.Implicits.global
  implicit lazy val system = inject[ActorSystem]

  val userCollection = inject[BSONCollection] (identified by 'USER_COLLECTION)
  lazy val passwordManagingActor = injectActorRef[PasswordManagingActor]

  object FromMongoUserPassAuthenticator extends LazyLogging {
    import ExecutionContext.Implicits.global

    val config = ConfigFactory.load()

    def apply(): UserPassAuthenticator[User] = {
      new UserPassAuthenticator[User] {
        def apply(userPass: Option[UserPass]) = {
          userPass match {
            case Some(up) => {
              userCollection.find(BSONDocument("email" -> up.user.toLowerCase)).one[User].map(y => {
                y.filter(x => BCrypt.checkpw(up.pass, x.password)).map(validUser => {
                  passwordManagingActor ! PasswordRefresh(validUser, up.pass)
                  validUser
                })
              })
            }
            case None => Future.successful(None)
          }
        }
      }
    }

  }

  val basicAuthenticator = new BasicHttpAuthenticator[User]("Secure", FromMongoUserPassAuthenticator())
}
