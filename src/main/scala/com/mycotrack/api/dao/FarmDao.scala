package com.mycotrack.api.dao

import com.mongodb.casbah.Imports._
import com.mycotrack.api.model.{Container, Substrate}
import com.novus.salat._
import com.novus.salat.global._

/**
 * @author chris_carrier
 * @version 7/25/12
 */

trait FarmDao {

  def defaultSubstrates: List[Substrate]
  def defaultContainers: List[Container]

}

class MongoFarmDao(defaultSubstrateCollection: MongoCollection, defaultContainerCollection: MongoCollection) extends FarmDao {

  def defaultSubstrates: List[Substrate] = {
    val res = defaultSubstrateCollection.find().map(f => {
      grater[Substrate].asObject(f)
    })

    res.toList
  }

  def defaultContainers: List[Container] = {
    val res = defaultSubstrateCollection.find().map(f => {
      grater[Container].asObject(f)
    })

    res.toList
  }

}
