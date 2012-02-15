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
    path("webAppPing") {
      get {
        _.complete("Yo!")
      }
    }
  }

}