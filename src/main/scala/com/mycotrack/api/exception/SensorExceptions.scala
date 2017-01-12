package com.mycotrack.api.exception

/**
 * Created by ctcarrier on 1/10/17.
 */
case class SensorNotFoundException(message: String = "", cause: Throwable = null)
  extends Exception(message, cause)