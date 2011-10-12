package com.mycotrack.api.model

import org.bson.types.ObjectId
import com.novus.salat.annotations.raw.Ignore

case class Project(@Ignore id: Option[ObjectId], name: String, description: String, nestedObject: Option[NestedObject], enabled: Boolean)