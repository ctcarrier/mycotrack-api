package com.mycotrack.api.endpoint.auth

import com.mycotrack.api.model.User
import org.joda.time.DateTime
import org.mindrot.jbcrypt.BCrypt
import reactivemongo.api.collections.bson.BSONCollection
import reactivemongo.bson.BSONObjectID
import reactivemongo.core.commands.LastError
import scaldi.{Injector, Module}
import scaldi.akka.AkkaInjectable
import spray.http.BasicHttpCredentials
import spray.http.HttpHeaders.Authorization

import scala.concurrent.Await
import scala.concurrent.duration.Duration

import scala.concurrent.ExecutionContext.Implicits.global

/**
 * Created by ctcarrier on 3/8/15.
 */
class TestDataModule extends Module {

  bind[TestUserContext] to new TestUserContext

}

class TestUserContext(implicit inj: Injector) extends AkkaInjectable {

  val testUserId = Option(BSONObjectID.generate)
  val DATE_CREATED = Option(DateTime.now)
  val LAST_UPDATED = Option(DateTime.now)
  val EMAIL = "user@test.com"
  val PASSWORD = "password"

  val testUser = User(testUserId, DATE_CREATED, LAST_UPDATED, EMAIL, PASSWORD)
  val authHeader =  Authorization(BasicHttpCredentials(EMAIL, PASSWORD))

  lazy val salt = inject[Int] (identified by 'SALT)
  lazy val userCollection = inject[BSONCollection] (identified by 'USER_COLLECTION)

  def initialize = {
    Await.result({
      userCollection.update(testUser._id.get, testUser.copy(password = BCrypt.hashpw(testUser.password, BCrypt.gensalt(salt))))
    }, Duration("5 seconds")).asInstanceOf[LastError]
  }
}