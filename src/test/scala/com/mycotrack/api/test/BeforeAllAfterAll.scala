package com.mycotrack.api.test

import org.specs2.mutable.Specification
import org.specs2.specification.{Step, Fragments}

/**
 * Created by ctcarrier on 5/4/15.
 */

trait BeforeAllAfterAll extends Specification {
  // see http://bit.ly/11I9kFM (specs2 User Guide)
  override def map(fragments: =>Fragments) =
    Step(beforeAll) ^ fragments ^ Step(afterAll)

  protected def beforeAll()
  protected def afterAll()
}
