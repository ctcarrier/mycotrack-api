package com.mycotrack.api.dao

import _root_.com.mongodb.casbah.Imports._
import akka.dispatch.Future
import org.bson.types.ObjectId
import com.mycotrack.api.model._
import com.mycotrack.api.mongo.RandomId

trait MycotrackDao[T, W] {
  def urlPrefix: String
  def formatKeyAsId(s: String): String = {
    urlPrefix + s
  }
  def nextRandomId: String = {
    formatKeyAsId(RandomId.getNextValue.get)
  }

  def getByKey(key: String): Future[Option[T]] = {
    get(formatKeyAsId(key))
  }
  def get(id: String): Future[Option[T]]
  def search(searchObj: MongoDBObject): Future[Option[List[T]]]
}

trait IProjectDao extends MycotrackDao[Project, ProjectWrapper] {
  def createProject(modelWrapper: ProjectWrapper): Future[Option[ProjectWrapper]]
  def updateProject(key: ObjectId, model: Project): Future[Option[ProjectWrapper]]
  def getChildren(root: Project): Future[Option[List[Project]]]
}

trait ISpeciesDao extends MycotrackDao[Species, SpeciesWrapper] {
  def createSpecies(speciesWrapper: SpeciesWrapper): Future[Option[SpeciesWrapper]]
  def updateSpecies(key: ObjectId, model: Species): Future[Option[SpeciesWrapper]]
}

trait ICultureDao extends MycotrackDao[Culture, CultureWrapper] {
  def createCulture(cultureWrapper: CultureWrapper): Future[Option[CultureWrapper]]
  def updateCulture(key: ObjectId, model: Culture): Future[Option[CultureWrapper]]

}