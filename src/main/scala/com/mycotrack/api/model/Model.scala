package com.mycotrack.api.model

import org.bson.types.ObjectId
import com.novus.salat.annotations.raw.Ignore
import java.util.Date

case class Project(@Ignore id: Option[ObjectId], name: String, description: String, nestedObject: Option[NestedObject], enabled: Boolean)
object Project {
  implicit def projToProjWrapper(project: Project): ProjectWrapper = {
    val now = new Date
    ProjectWrapper(project.id, 1, now, now, List(project))
  }
}

case class Species(@Ignore id: Option[ObjectId], scientificName: String, commonName: String)
object Species {
  implicit def species2SpeciesWrapper(species: Species): SpeciesWrapper = {
    val now = new Date
    SpeciesWrapper(species.id, 1, now, now, List(species))
  }
}

case class Culture(@Ignore id: Option[ObjectId], speciesId: ObjectId, names: List[String])
object Culture {
  implicit def culture2CultureWrapper(culture: Culture): CultureWrapper = {
    val now = new Date
    CultureWrapper(culture.id, 1, now, now, List(culture))
  }
}