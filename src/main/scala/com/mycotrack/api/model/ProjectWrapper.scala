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
                          content: List[Species])



