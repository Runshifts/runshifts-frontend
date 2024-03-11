"use client"
import React, { useContext, useEffect } from "react"
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
  } = useContext(TeamContext)

  useEffect(() => {
    if (!hasInitialized) initialize()
  }, [hasInitialized, initialize])
console.log(teamStats)
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
      />
      <RecentlyViewedTeamMembers users={recentlyViewedTeamMembers} />
      <AllTeamMembers users={teamMembers} />
    </section>
  )
}

export default Team
