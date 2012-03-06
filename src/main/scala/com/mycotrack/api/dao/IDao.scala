package com.mycotrack.api.dao

import _root_.com.mongodb.casbah.Imports._
import akka.dispatch.Future
import org.bson.types.ObjectId
import com.mycotrack.api.model._

trait IProjectDao {
  def getProject(key: ObjectId): Future[Option[ProjectWrapper]]
  def createProject(modelWrapper: ProjectWrapper): Future[Option[ProjectWrapper]]
  def updateProject(key: ObjectId, model: Project): Future[Option[ProjectWrapper]]
  def searchProject(searchObj: MongoDBObject): Future[Option[List[Project]]]
  def getChildren(root: Project): Future[Option[List[Project]]]
}

trait ISpeciesDao {
  def getSpecies(key: ObjectId): Future[Option[SpeciesWrapper]]
  def createSpecies(speciesWrapper: SpeciesWrapper): Future[Option[SpeciesWrapper]]
  def updateSpecies(key: ObjectId, model: Species): Future[Option[SpeciesWrapper]]
  def searchSpecies(searchObj: MongoDBObject): Future[Option[List[Species]]]
}

trait ICultureDao {
  def getCulture(key: ObjectId): Future[Option[Culture]]
  def createCulture(cultureWrapper: CultureWrapper): Future[Option[CultureWrapper]]
  def updateCulture(key: ObjectId, model: Culture): Future[Option[CultureWrapper]]
  def searchCulture(searchObj: MongoDBObject): Future[Option[List[Culture]]]
}