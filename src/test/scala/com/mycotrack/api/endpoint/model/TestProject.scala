package com.mycotrack.api.endpoint.model

import com.mycotrack.api.model.{Event, Project}
import org.joda.time.DateTime
import reactivemongo.bson.BSONObjectID

/**
 * Created by ctcarrier on 3/7/15.
 */
object TestProject {

  val DESCRIPTION = Option("description")
  val CULTURE_ID = Option(BSONObjectID.generate)
  val SPECIES_ID = Option(BSONObjectID.generate)
  val ENABLED = true
  val SUBSTRATE = Option("SUBSTRATE")
  val CONTAINER = Option("CONTAINER")
  val START_DATE = Option(DateTime.now)
  val PARENT: Option[String] = None
  val TIMESTAMP = Option(DateTime.now)
  val COUNT = Option(0l)
  val EVENTS: List[Event] = List.empty

  def generate: Project = {
    val projectId = Option(BSONObjectID.generate)
    val newUserId = Option(BSONObjectID.generate)
    Project(_id = projectId,
      description = DESCRIPTION,
      speciesId = SPECIES_ID,
      cultureId = CULTURE_ID,
      userId = newUserId,
      enabled = ENABLED,
      substrate = SUBSTRATE,
      container = CONTAINER,
      startDate = START_DATE,
      parent = PARENT,
      timestamp = TIMESTAMP,
      count = COUNT,
      events = EVENTS)
  }

  def generateWithoutId: Project = {
    val projectId = None
    val newUserId = Option(BSONObjectID.generate)
    Project(_id = projectId,
      description = DESCRIPTION,
      speciesId = SPECIES_ID,
      cultureId = CULTURE_ID,
      userId = newUserId,
      enabled = ENABLED,
      substrate = SUBSTRATE,
      container = CONTAINER,
      startDate = START_DATE,
      parent = PARENT,
      timestamp = TIMESTAMP,
      count = COUNT,
      events = EVENTS)
  }
}
