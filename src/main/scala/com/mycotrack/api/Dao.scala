package com.mycotrack.api

import akka.dispatch.Future
import org.bson.types.ObjectId
import com.mongodb.casbah.commons.MongoDBObject
import com.mycotrack.api.model._

trait Dao {
  def getProject(key: ObjectId): Future[Option[ProjectWrapper]]

  def createProject(modelWrapper: ProjectWrapper): Future[Option[ProjectWrapper]]

  def updateProject(key: ObjectId, model: Project): Future[Option[ProjectWrapper]]

  def searchProject(searchObj: MongoDBObject): Future[Option[List[Project]]]
}