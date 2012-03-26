package com.mycotrack.api.model

import org.bson.types.ObjectId
import java.util.Date

case class ProjectWrapper(_id: Option[ObjectId],
                          version: Long,
                          dateCreated: Date,
                          lastUpdated: Date,
                          content: List[Project])

case class SpeciesWrapper(_id: Option[ObjectId],
                          version: Long,
                          dateCreated: Date,
                          lastUpdated: Date,
                          content: List[Species])

case class CultureWrapper(_id: Option[ObjectId],
                          version: Long,
                          dateCreated: Date,
                          lastUpdated: Date,
                          content: List[Culture])


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