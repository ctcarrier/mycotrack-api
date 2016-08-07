package com.mycotrack.api.dao

import com.mycotrack.api._
import model._
import akka.actor.{ActorRefFactory, ActorSystem}
import org.mindrot.jbcrypt.BCrypt
import reactivemongo.api.collections.bson.BSONCollection
import reactivemongo.bson.{BSONObjectID, BSONDocument}
import scaldi.Injector
import scaldi.akka.AkkaInjectable

import scala.concurrent.{Future, ExecutionContext}

trait UserService {
  def search(searchObj: BSONDocument): Future[List[User]]
  def get(key: BSONObjectID): Future[Option[User]]
  def save(user: User): Future[Option[User]]
  def update(key: BSONObjectID, user: User): Future[Option[User]]
  def refreshPassword(user: User, password: String): Future[Option[User]]
}

class UserDao(implicit inj: Injector) extends UserService with AkkaInjectable {

  def urlPrefix = "/users/"

  import ExecutionContext.Implicits.global
  implicit lazy val system = inject[ActorSystem]
  lazy val actorRefFactory: ActorRefFactory = system

  lazy val salt = inject[Int] (identified by 'SALT)
  lazy val userCollection = inject[BSONCollection] (identified by 'USER_COLLECTION)

  def search(searchObj: BSONDocument): Future[List[User]] = userCollection.find(searchObj).cursor[User].collect[List]()

  def get(key: BSONObjectID): Future[Option[User]] = userCollection.find(BSONDocument("_id" -> key)).one[User]

  def save(user: User): Future[Option[User]] = {

    val newObjectId = Option(BSONObjectID.generate)
    for {
      lastError <- userCollection.insert(user.copy(_id = newObjectId, password = BCrypt.hashpw(user.password, BCrypt.gensalt(salt))))
      toReturn <- userCollection.find(BSONDocument("_id" -> newObjectId)).one[User]
    } yield toReturn
  }

  def update(key: BSONObjectID, user: User): Future[Option[User]] = ???

  def refreshPassword(user: User, password: String): Future[Option[User]] = {
    val query = BSONDocument("_id" -> user._id)
    val update = BSONDocument("$set" -> BSONDocument("password" -> BCrypt.hashpw(password, BCrypt.gensalt(salt))))

    userCollection.update(query, update).flatMap(x => {
      get(user._id.get)
    })
  }
}

