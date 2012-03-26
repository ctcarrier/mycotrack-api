package com.mycotrack.api.model

import org.bson.types.ObjectId
import com.novus.salat.annotations.Ignore
import java.util.Date

case class Project(@Ignore id: Option[ObjectId], name: String, description: String, cultureUrl: Option[String], enabled: Boolean, parent: Option[ObjectId] = None, @Ignore timestamp: Option[Date] = Some(new Date()))
object Project {
  implicit def projToProjWrapper(project: Project): ProjectWrapper = {
    val now = new Date
    ProjectWrapper(project.id, 1, now, now, List(project))
  }
}

case class Species(@Ignore id: Option[ObjectId], scientificName: String, commonName: String, imageUrl: String)
object Species {
  implicit def species2SpeciesWrapper(species: Species): SpeciesWrapper = {
    val now = new Date
    SpeciesWrapper(species.id, 1, now, now, List(species))
  }
}

case class Culture(@Ignore id: Option[ObjectId], name: String, speciesUrl: Option[String])
object Culture {
  implicit def culture2CultureWrapper(culture: Culture): CultureWrapper = {
    val now = new Date
    CultureWrapper(culture.id, 1, now, now, List(culture))
  }
}

case class User(@Ignore id: Option[String], @Ignore dateCreated: Option[Date], @Ignore lastUpdated: Option[Date], email: String, password: String)
object User {
  implicit def user2UserWrapper(user: User): UserWrapper = {
    val now = new Date
    UserWrapper(user.id, 1, now, now, List(user))
  }
}