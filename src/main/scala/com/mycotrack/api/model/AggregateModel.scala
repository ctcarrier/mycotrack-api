package com.mycotrack.api.model

import org.joda.time.DateTime

/**
 * Created by ctcarrier on 11/25/16.
 */
case class ProjectSummary(weeklyCount: List[ProjectCount], pastWeek: BigDecimal, pastMonth: BigDecimal)
case class ProjectCount(timestamp: DateTime, count: BigDecimal)
