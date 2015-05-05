package com.mycotrack.api

import akka.actor.ActorSystem
import akka.util.Timeout
import com.mycotrack.api.auth.Authenticator
import com.mycotrack.api.boot._
import com.mycotrack.api.json.LocalJacksonFormats
import com.mycotrack.api.mongo.ReactiveMongoConnection
import com.typesafe.config.ConfigFactory
import com.typesafe.scalalogging.LazyLogging
import scaldi.Module

import scala.concurrent.duration._
import scala.language.postfixOps
import scala.util.Properties

class EmailModule extends Module with LazyLogging {

}

class AuthModule extends Module with LazyLogging {

  bind[Authenticator] to new Authenticator
}

class ActorSystemModule extends Module {
  //Fixes creating multiple Actor systems
  bind[ActorSystem] to ActorSystem("mycotrack") destroyWith (_.shutdown())
}

class CryptoModule extends Module with LazyLogging {
  private val config = ConfigFactory.load(Properties.envOrElse("B2B_ENV", "application"))
  bind[Int] as 'ROUNDS to config.getInt("crypto.rounds")
  bind[Int] as 'SALT_LENGTH to config.getInt("crypto.salt_length")
  bind[Int] as 'SHA1_LENGTH to config.getInt("crypto.sha1_length")
  bind[Int] as 'MD5_LENGTH to config.getInt("crypto.md5_length")
  bind[String] as 'TOKEN_KEY to config.getString("crypto.token_key")
  bind[Long] as 'TTL_MS to config.getLong("crypto.ttl_ms")

}

trait ModuleDefinition {

  implicit val appModule = new ActorSystemModule :: new MycotrackDaos :: new SprayModule :: new Configs ::
    new LocalJacksonFormats :: new MycotrackServices :: new ReactiveMongoConnection :: new AuthModule ::
    new CryptoModule :: new AggregationModule
}