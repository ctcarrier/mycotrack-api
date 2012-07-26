package com.mycotrack.api.model

import org.bson.types.ObjectId
import com.novus.salat.annotations.{Ignore, Key}
import java.util.Date

case class Project(@Ignore id: Option[String],
                   description: Option[String],
                   cultureUrl: Option[String],
                   userUrl: Option[String],
                   enabled: Boolean,
                   substrate: Option[String],
                   container: Option[String],
                   startDate: Option[Date],
                   parent: Option[String] = None,
                   @Ignore timestamp: Option[Date] = Some(new Date()),
                    count: Option[Long],
                    events: List[Event] = List.empty)
object Project {
  implicit def projToProjWrapper(project: Project): ProjectWrapper = {
    val now = new Date
    ProjectWrapper(project.id, 1, now, now, List(project), project.events)
  }
}

case class Species(@Ignore id: Option[String], scientificName: String, commonName: String, imageUrl: String)
object Species {
  implicit def species2SpeciesWrapper(species: Species): SpeciesWrapper = {
    val now = new Date
    SpeciesWrapper(species.id, 1, now, now, List(species))
  }
}

case class Culture(@Ignore id: Option[String], name: String, speciesUrl: Option[String], userUrl: Option[String], species: Option[Species] = None, projects: Option[List[Project]] = None)
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

case class Event(name: String, dateCreated: Date)

case class Substrate(@Key("_id") id: Option[String], name: String)

case class Container(@Key("_id") id: Option[String], name: String)

case class Farm(@Ignore id: Option[String], substrates: List[Substrate], containers: List[Container])