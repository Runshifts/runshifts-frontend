"use client"

import { createContext, useCallback, useEffect, useState } from "react"
import useAxios from "../_hooks/useAxios"

export const TeamContext = createContext({
  teamMembers: [],
  recentlyViewedTeamMembers: [],
  teamStats: {
    totalNumOfActiveEmployees: null,
    totalNumOfWorkedHours: null,
  },
  hasInitialized: false,
  initialize: () => {},
})

export default function TeamProvider({
  children,
  organizationId,
  shouldAutoInitialize,
}) {
  const fetchData = useAxios()
  const [hasInitialized, setHasInitialized] = useState(false)
  const [teamMembers, setTeamMembers] = useState([])
  const [recentlyViewedTeamMembers, setRecentlyViewedTeamMembers] = useState([])
  const [teamStats, setTeamStats] = useState({
    totalNumOfActiveEmployees: null,
    totalNumOfWorkedHours: null,
  })

  const initialize = useCallback(async () => {
    if (!organizationId) return
    const res = await fetchData(`/organizations/${organizationId}/team`)
    console.log(res)
    setTeamStats({
      totalNumOfActiveEmployees: res.totalNumberOfActiveStaff,
      totalNumOfWorkedHours: res.totalHoursWorked,
    })
    setTeamMembers(res.teamMembers)
    setRecentlyViewedTeamMembers(res.recentlyViewedTeamMembers)
    setHasInitialized(true)
  }, [organizationId])

  useEffect(() => {
    shouldAutoInitialize && initialize()
  }, [shouldAutoInitialize, initialize])

  return (
    <TeamContext.Provider
      value={{
        initialize,
        teamMembers,
        recentlyViewedTeamMembers,
        teamStats,
        hasInitialized,
      }}
    >
      {children}
    </TeamContext.Provider>
  )
}
