package com.mycotrack.api.endpoint

import cc.spray.Directives
import com.weiglewilczek.slf4s.Logging

/**
 * @author chris_carrier
 * @version 1/14/12
 */


trait WebAppEndpoint extends Directives with Logging {

  logger.info("Starting web ap endpoint.")

  val appPath =  path("") | path("bb_mt") | path("speciesList") | path("cultureList") | path("projects") | path("new_user")

  val restService = {
    appPath {
        cache {
            getFromResource("bb_mt.html")
        }
    } ~
    path("bb") {
        cache {
            getFromResource("bb_index.html")
        }
    } ~
    pathPrefix("test") {
        cache {
            logger.info("test endpoint")
            //ctx.complete("OK")
            getFromResourceDirectory("test")
        }
    } ~
    pathPrefix("css") {
        cache {
            getFromResourceDirectory("css")
        }
    } ~
    pathPrefix("js") {
        cache {
            getFromResourceDirectory("js")
        }
    } ~
    pathPrefix("img") {
        cache {
            getFromResourceDirectory("img")
        }
    } ~
    pathPrefix("templates") {
        cache {
            getFromResourceDirectory("templates")
        }
    } ~
    path("webAppPing") {
      get {
        _.complete("Yo!")
      }
    }
  }

}