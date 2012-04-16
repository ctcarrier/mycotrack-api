package com.mycotrack.api.dao

import _root_.com.mongodb.casbah.Imports._
import akka.dispatch.Future
import org.bson.types.ObjectId
import com.mycotrack.api.model._
import com.mycotrack.api.mongo.RandomId
import com.novus.salat._
import com.novus.salat.global._

trait MycotrackDao[T <: CaseClass, W <: CaseClass] {
  val mongoCollection: MongoCollection

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
  def get[T <: CaseClass : Manifest](id: String): Future[Option[T]] = {
    Future {
      val dbo = mongoCollection.findOneByID(id)
      dbo.map(f => grater[T].asObject(f))
    }
  }

  def search(searchObj: MongoDBObject): Future[Option[List[T]]]
}

trait IProjectDao extends MycotrackDao[Project, ProjectWrapper] {
  def createProject(modelWrapper: ProjectWrapper): Future[Option[ProjectWrapper]]
  def updateProject(key: String, model: Project): Future[Option[ProjectWrapper]]
  def getChildren(root: Project): Future[Option[List[Project]]]
}

trait ISpeciesDao extends MycotrackDao[Species, SpeciesWrapper] {
  def createSpecies(speciesWrapper: SpeciesWrapper): Future[Option[SpeciesWrapper]]
  def updateSpecies(key: String, model: Species): Future[Option[SpeciesWrapper]]
}

trait ICultureDao extends MycotrackDao[Culture, CultureWrapper] {
  def createCulture(cultureWrapper: CultureWrapper): Future[Option[CultureWrapper]]
  def updateCulture(key: String, model: Culture): Future[Option[CultureWrapper]]

}