package com.mycotrack.api.endpoint

import cc.spray.Directives
import cc.spray.utils.Logging

/**
 * @author chris_carrier
 * @version 1/14/12
 */


class WebAppEndpoint extends Directives with Logging {

  log.info("Starting web ap endpoint.")

  val restService = {
    path("app") {
        cache {
            log.info("test endpoint")
            //ctx.complete("OK")
            getFromResource("index.html")
        }
    } ~
    path("projectList") {
        cache {
            getFromResource("projectList.html")
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
            getFromResource("speciesList.html")
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