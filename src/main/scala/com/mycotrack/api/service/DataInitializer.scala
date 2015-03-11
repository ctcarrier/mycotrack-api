package com.mycotrack.api.service

import reactivemongo.api.collections.default.BSONCollection
import reactivemongo.bson.BSONDocument
import scaldi.Injector
import scaldi.akka.AkkaInjectable

/**
 * Created by ctcarrier on 3/6/15.
 */
trait DataInitializer {

  def initializeData: Unit
}

class DefaultDataInitializer(implicit val inj: Injector) extends AkkaInjectable with DataInitializer {

  import scala.concurrent.ExecutionContext.Implicits.global

  lazy val defaultContainerCollection = inject[BSONCollection] (identified by 'DEFAULT_CONTAINER_COLLECTION)
  lazy val defaultSubstrateCollection = inject[BSONCollection] (identified by 'DEFAULT_SUBSTRATE_COLLECTION)

  def initializeData = {

    defaultContainerCollection.insert(BSONDocument("_id" -> "quart", "name" -> "mason jar(quart)"))
    defaultContainerCollection.insert(BSONDocument("_id" -> "halfpint", "name" -> "mason jar(half-pint)"))
    defaultContainerCollection.insert(BSONDocument("_id" -> "pint", "name" -> "mason jar(pint)"))
    defaultContainerCollection.insert(BSONDocument("_id" -> "filterbag", "name" -> "filter patch bag"))
    defaultContainerCollection.insert(BSONDocument("_id" -> "tub", "name" -> "tub"))
    defaultContainerCollection.insert(BSONDocument("_id" -> "plasticTubing", "name" -> "plastic tube"))
    defaultContainerCollection.insert(BSONDocument("_id" -> "pyrex", "name" -> "pyrex dish"))

    defaultSubstrateCollection.insert(BSONDocument("_id" ->"rye", "name" -> "rye"))
    defaultSubstrateCollection.insert(BSONDocument("_id" ->"sorghum", "name" -> "sorghum"))
    defaultSubstrateCollection.insert(BSONDocument("_id" ->"wbs", "name" -> "wild bird seed"))
    defaultSubstrateCollection.insert(BSONDocument("_id" ->"sawdust", "name" -> "sawdust"))
    defaultSubstrateCollection.insert(BSONDocument("_id" ->"enrichedsawdust", "name" -> "sawdust(enriched)"))
    defaultSubstrateCollection.insert(BSONDocument("_id" ->"woodchips", "name" -> "wood chips"))
    defaultSubstrateCollection.insert(BSONDocument("_id" ->"straw", "name" -> "straw"))
    defaultSubstrateCollection.insert(BSONDocument("_id" ->"coir", "name" -> "coir"))
    defaultSubstrateCollection.insert(BSONDocument("_id" ->"hpoo", "name" -> "horse poo"))
  }
}
