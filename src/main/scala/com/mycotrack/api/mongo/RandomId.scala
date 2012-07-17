package com.mycotrack.api.mongo

import java.io.{DataOutputStream, ByteArrayOutputStream}
import org.apache.commons.codec.binary.Base64
import com.weiglewilczek.slf4s.Logging

/**
 * @author chris_carrier
 * @version 3/25/12
 */


object RandomId extends Logging {

  def getNextValue : Option[String]  = {
    val bits = randomByteArray

    val res = Some(base62Encode(bits))
    res
  }

  def randomByteArray: Array[Byte] = {
    val bos = new ByteArrayOutputStream
    val dos = new DataOutputStream(bos)

    val fourBitTimestamp = (System.currentTimeMillis / 1000).toInt

    //val sec = new java.security.SecureRandom
    //val sbuf = sec.generateSeed(4)

    logger.info("Using util.Random")

    val sbuf = new Array[Byte](4)
    val rand = new java.util.Random
    rand.nextBytes(sbuf)

    dos.write(sbuf)
    dos.writeInt(fourBitTimestamp)
    dos.flush
    bos.toByteArray
  }

  def base62Encode(ba: Array[Byte]): String = {
    val digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    val result = ba.map(b => digits(positive(b % 62)))

    new String(result)
  }

  def positive(i: Int): Int = {
    if (i < 0){
      i * -1
    }
    else i

  }

}