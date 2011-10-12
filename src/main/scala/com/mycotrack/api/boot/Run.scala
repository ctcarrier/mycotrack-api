package com.mycotrack.api.boot

/**
 * @author chris_carrier
 * @version 8/4/11
 */


import org.slf4j.LoggerFactory
import org.eclipse.jetty.servlet.ServletContextHandler
import cc.spray.connectors.Servlet30ConnectorServlet

import java.util.Calendar
import org.eclipse.jetty.server.Server
import org.eclipse.jetty.server.nio.SelectChannelConnector

object Run {
  val GMT_TIMEZONE: String = "Greenwich Mean Time"
  val logger = LoggerFactory.getLogger("com.zub.ss.core.Run");

  def main(args: Array[String]): Unit = {
    logger.info("Starting campaign service.")

    var env: String = System.getProperty("akka.mode")
    if (env == null) {
      throw new RuntimeException("Must set environment (Example: java -Dakka.mode=dev -jar ...)")
    }
    val timeZone: String = Calendar.getInstance().getTimeZone().getDisplayName()
    if (!(env.equals("dev") || env.equals("test")) && !timeZone.equals(GMT_TIMEZONE)) {
      logger.error(String.format("System clock is set to non-GMT timezone (%s). This may cause data integrity issues.", timeZone))
      logger.error("Exiting the Campaign Service")
      throw new RuntimeException("Must set environment (Example: java -Dakka.mode=dev -jar ...)")
    }

    val port: Int = 8010

    val server: Server = new Server()

    //localhost connector
    val connector = new SelectChannelConnector();
    connector.setPort(port);
    server.addConnector(connector);

    val context = new ServletContextHandler(ServletContextHandler.NO_SESSIONS);
    context.setContextPath("/");
    server.setHandler(context);

    context.addServlet(classOf[Servlet30ConnectorServlet], "/*");

    val initializer: MycotrackInitializer = new MycotrackInitializer();
    context.addEventListener(initializer);

    // finally, start the Jetty Server
    server.start()
    server.join()
  }


}