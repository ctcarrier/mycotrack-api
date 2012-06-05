package com.mycotrack.api.model

import org.bson.types.ObjectId
import java.util.Date

case class ProjectWrapper(_id: Option[String],
                          version: Long,
                          dateCreated: Date,
                          lastUpdated: Date,
                          content: List[Project],
                          events: List[Event] = List.empty)

object ProjectWrapper {

  implicit def projectWrapper2Project(wrapper: ProjectWrapper): Project = {
    wrapper.content.head.copy(id = wrapper._id, events = wrapper.events)
  }
}

case class SpeciesWrapper(_id: Option[String],
                          version: Long,
                          dateCreated: Date,
                          lastUpdated: Date,
                          content: List[Species])

object SpeciesWrapper {

  implicit def speciesWrapper2Species(wrapper: SpeciesWrapper): Species = {
    wrapper.content.head.copy(id = wrapper._id)
  }
}

case class CultureWrapper(_id: Option[String],
                          version: Long,
                          dateCreated: Date,
                          lastUpdated: Date,
                          content: List[Culture])

object CultureWrapper {

  implicit def cultureWrapper2Culture(wrapper: CultureWrapper): Culture = {
    wrapper.content.head.copy(id = wrapper._id)
  }
}


case class UserWrapper(_id: Option[String],
                          version: Long,
                          dateCreated: Date,
                          lastUpdated: Date,
                          content: List[User])
object UserWrapper {

  implicit def userWrapper2User(userWrapper: UserWrapper): User = {
    userWrapper.content.head.copy(id = userWrapper._id, dateCreated = Some(userWrapper.dateCreated), lastUpdated = Some(userWrapper.lastUpdated))
  }
}