package com.mycotrack.api.endpoint.model

import com.mycotrack.api.model.{Culture, Species}
import reactivemongo.bson.BSONObjectID

/**
 * Created by ctcarrier on 3/7/15.
 */
object TestCulture {

  val NAME = "name"
  val SPECIES_URL = Some("species url")
  val SPECIES = Some(TestSpecies.generate)

  def generate: Culture = {
    val speciesId = Option(BSONObjectID.generate)
    generateWithoutId.copy(_id=speciesId)
  }

  def generateWithoutId: Culture = {
    Culture(None, NAME, SPECIES_URL, None, SPECIES, None)
  }
}
