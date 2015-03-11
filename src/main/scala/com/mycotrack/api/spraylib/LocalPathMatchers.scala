package com.mycotrack.api.spraylib

import com.mycotrack.api.model.User
import com.typesafe.scalalogging.LazyLogging
import org.apache.commons.codec.binary.Base64
import reactivemongo.bson.BSONObjectID
import spray.routing._

import scala.util.Success

/**
 * Created by ctcarrier on 1/7/14.
 */
trait LocalPathMatchers extends LazyLogging {

  val BSONObjectIDSegment: PathMatcher1[BSONObjectID] = {
    PathMatcher("""^([\w]+)$""".r) flatMap { string ⇒
      BSONObjectID.parse(string) match {
        case Success(id) => Option(id)
        case _ => None
      }
    }
  }

  val Base64Segment: PathMatcher1[String] = {
    PathMatcher("""^(.+)$""".r) flatMap { string =>
      try {
        Some(new String(Base64.decodeBase64(string.getBytes("UTF-8"))))
      }
      catch { case _: Throwable ⇒ None }
    }
  }

  val Base64EmailSegment: PathMatcher1[String] = {
    Base64Segment flatMap { string =>
      if (User.validEmail(string)) Some(string)
      else None
    }
  }
}
