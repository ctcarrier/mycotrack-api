package com.mycotrack.api.endpoint

import cc.spray.Directives
import cc.spray.utils.Logging

/**
 * @author chris_carrier
 * @version 1/14/12
 */


trait WebAppEndpoint extends Directives with Logging {

  log.info("Starting web ap endpoint.")

  val restService = {
    path("") {
        cache {
            getFromResource("bb_mt.html")
        }
    } ~
    path("bb") {
        cache {
            getFromResource("bb_index.html")
        }
    } ~
    path("bb_mt") {
        cache {
            getFromResource("bb_mt.html")
        }
    } ~
    path("speciesList") {
        cache {
            getFromResource("bb_mt.html")
        }
    } ~
    path("cultureList") {
        cache {
            getFromResource("bb_mt.html")
        }
    } ~
    pathPrefix("test") {
        cache {
            log.info("test endpoint")
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