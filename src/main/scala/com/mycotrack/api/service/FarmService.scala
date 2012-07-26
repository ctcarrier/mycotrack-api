package com.mycotrack.api.service

import com.mycotrack.api.dao.FarmDao
import com.mycotrack.api.model.{Farm, User}

/**
 * @author chris_carrier
 * @version 7/25/12
 */

trait FarmService {
  def getFarm(user: User): Farm
}

class DefaultFarmService(farmDao: FarmDao) extends FarmService {

  def getFarm(user: User): Farm = {
    val substrates = farmDao.defaultSubstrates
    val containers = farmDao.defaultContainers

    Farm(None, substrates, containers)
  }
}
