package com.mycotrack.api.auth

import scaldi.akka.AkkaInjectable
import com.typesafe.scalalogging.slf4j.Logging
import akka.actor.Actor
import com.infestrow.model.User
import scaldi.Injector
import com.infestrow.dao.UserDao

/**
 * Created by ctcarrier on 6/28/14.
 */

case class PasswordRefresh(user: User, password: String)
class PasswordManagingActor(implicit val inj: Injector) extends Actor with Logging with AkkaInjectable {

  lazy val salt = inject[Int] (identified by 'SALT)
  lazy val userDao = inject[UserDao]

  val hashPattern = """^\$(..)\$(\d\d)\$(.+)""".r

  def receive = {
    case PasswordRefresh(u, p) => {
      val hashPattern(prefix, factor, suffix) = u.password.get

      if (factor.toInt != salt) {
        userDao.refreshPassword(u, p)
      }
    }
  }
}
