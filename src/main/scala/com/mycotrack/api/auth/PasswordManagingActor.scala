package com.mycotrack.api.auth

import com.mycotrack.api.dao.UserDao
import com.mycotrack.api.model.User
import com.typesafe.scalalogging.LazyLogging
import scaldi.akka.AkkaInjectable
import akka.actor.Actor
import scaldi.Injector

/**
 * Created by ctcarrier on 6/28/14.
 */

case class PasswordRefresh(user: User, password: String)
class PasswordManagingActor(implicit val inj: Injector) extends Actor with LazyLogging with AkkaInjectable {

  lazy val salt = inject[Int] (identified by 'SALT)
  lazy val userDao = inject[UserDao]

  val hashPattern = """^\$(..)\$(\d\d)\$(.+)""".r

  def receive = {
    case PasswordRefresh(u, p) => {
      val hashPattern(prefix, factor, suffix) = u.password

      if (factor.toInt != salt) {
        userDao.refreshPassword(u, p)
      }
    }
  }
}
