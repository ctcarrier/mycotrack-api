package com.mycotrack.api.endpoint

import com.mycotrack.api.endpoint.auth.TestDataModule
import com.mycotrack.api.{ActorSystemModule, AuthModule, CryptoModule}
import com.mycotrack.api.boot.{MycotrackServices, Configs, SprayModule, MycotrackDaos}
import com.mycotrack.api.json.LocalJacksonFormats
import com.mycotrack.api.mongo.ReactiveMongoConnection

/**
 * Created by ctcarrier on 3/8/15.
 */
trait TestModuleDefinition {

  implicit val appModule = new ActorSystemModule :: new MycotrackDaos :: new SprayModule :: new Configs ::
    new LocalJacksonFormats :: new MycotrackServices :: new ReactiveMongoConnection :: new AuthModule ::
    new CryptoModule :: new TestDataModule
}
