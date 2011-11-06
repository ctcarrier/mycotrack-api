package com.mycotrack.api.model

import org.bson.types.ObjectId
import com.novus.salat.annotations.raw.Ignore
import java.util.Date

object Project {
  implicit def projToProjWrapper(project: Project): ProjectWrapper = {
    val now = new Date
    ProjectWrapper(project.id, 1, now, now, List(project))
  }
}

case class Project(@Ignore id: Option[ObjectId], name: String, description: String, nestedObject: Option[NestedObject], enabled: Boolean)

object Species {
  implicit def species2SpeciesWrapper(species: Species): SpeciesWrapper = {
    val now = new Date
    SpeciesWrapper(species.id, 1, now, now, List(species))
  }
}

case class Species(@Ignore id: Option[ObjectId], scientificName: String, commonName: String)
