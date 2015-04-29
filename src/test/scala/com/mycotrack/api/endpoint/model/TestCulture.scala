package com.mycotrack.api.endpoint.model

import com.mycotrack.api.model.{Culture, Species}
import reactivemongo.bson.BSONObjectID

/**
 * Created by ctcarrier on 3/7/15.
 */
object TestCulture {

  val NAME = "name"
  val SPECIES = Some(TestSpecies.generate)
  val SPECIES_ID = SPECIES.map(_._id).flatten

  def generate: Culture = {
    val speciesId = Option(BSONObjectID.generate)
    generateWithoutId.copy(_id=speciesId)
  }

  def generateWithoutId: Culture = {
    Culture(None, NAME, SPECIES_ID, None, SPECIES, None)
  }
}
