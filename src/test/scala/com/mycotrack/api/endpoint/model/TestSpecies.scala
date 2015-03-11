package com.mycotrack.api.endpoint.model

import com.mycotrack.api.model.{Species, Event, Project}
import org.joda.time.DateTime
import reactivemongo.bson.BSONObjectID

/**
 * Created by ctcarrier on 3/7/15.
 */
object TestSpecies {

  val SCIENTIFIC_NAME = "Scientific Name"
  val COMMON_NAME = "Common Name"
  val IMAGE_URL = "Image Url"

  def generate: Species = {
    val speciesId = Option(BSONObjectID.generate)
    Species(speciesId, SCIENTIFIC_NAME, COMMON_NAME, IMAGE_URL)
  }

  def generateWithoutId: Species = {
    Species(None, SCIENTIFIC_NAME, COMMON_NAME, IMAGE_URL)
  }
}
