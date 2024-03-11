"use client"
import React, { useContext, useEffect, useMemo } from "react"
import TeamFilterGroup from "../../_components/AppComps/TeamFilterGroup"
import TeamStatistics from "./TeamStatistics"
import RecentlyViewedTeamMembers from "./RecentlyViewedTeamMembers"
import AllTeamMembers from "./AllTeamMembers"
import TeamAppgroup from "../../_components/AppComps/TeamAppgroup"
import { TeamContext } from "../../_providers/TeamProvider"

function Team() {
  const {
    teamMembers,
    recentlyViewedTeamMembers,
    hasInitialized,
    initialize,
    teamStats,
    loading,
  } = useContext(TeamContext)

  useEffect(() => {
    if (!hasInitialized) initialize()
  }, [hasInitialized, initialize])

  const filteredTeamMembers = useMemo(() => {
    return teamMembers
    // return teamMembers.filter(it => JSON.stringify())
  }, [teamMembers])
  return (
    <section className="mx-2 p-3 h-screen flex flex-col gap-4">
      <div className="flex items-center justify-between py-3">
        <h1 className="custom-h1">Team</h1>
        <TeamAppgroup />
      </div>

      <TeamFilterGroup />

      <TeamStatistics
        totalCountOfActiveEmployees={teamStats.totalNumOfActiveEmployees}
        totalNumberOfWorkedHours={teamStats.totalNumOfWorkedHours}
        loading={loading}
      />
      <RecentlyViewedTeamMembers
        loading={loading}
        users={recentlyViewedTeamMembers}
      />
      <AllTeamMembers loading={loading} users={filteredTeamMembers} />
    </section>
  )
}

export default Team
