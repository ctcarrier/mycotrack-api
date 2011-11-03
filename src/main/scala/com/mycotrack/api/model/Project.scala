package com.mycotrack.api.model

import org.bson.types.ObjectId
import com.novus.salat.annotations.raw.Ignore
import java.util.Date

object Project {

  implicit def projToProjWrapper(project: Project): ProjectWrapper = {
    ProjectWrapper(project.id, 1, new Date, new Date, List(project))
  }
}

case class Project(@Ignore id: Option[ObjectId], name: String, description: String, nestedObject: Option[NestedObject], enabled: Boolean)

case class Species(@Ignore id: Option[ObjectId], commonName: String, scientificName: String)
