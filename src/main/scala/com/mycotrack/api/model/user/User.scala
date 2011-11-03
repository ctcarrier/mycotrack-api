package com.mycotrack.api.model.user

import org.bson.types.ObjectId

/**
 * @author chris_carrier
 * @version 10/27/11
 */


case class User(_id: ObjectId, email: String, password: String)