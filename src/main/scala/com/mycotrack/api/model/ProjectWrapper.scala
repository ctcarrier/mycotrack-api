package com.mycotrack.api.model

import org.bson.types.ObjectId

case class ProjectWrapper(_id: Option[ObjectId],
                          version: Long,
                          content: List[Project])

case class SpeciesWrapper(_id: Option[ObjectId],
                          version: Long,
                          content: List[Species])



