"use client"

import { createContext, useCallback, useEffect, useState } from "react"
import useAxios from "../_hooks/useAxios"
import { getPastNumOfDays } from "../_utils"

export const TeamContext = createContext({
  teamMembers: [],
  recentlyViewedTeamMembers: [],
  teamStats: {
    totalNumOfActiveEmployees: null,
    totalNumOfWorkedHours: null,
  },
  hasInitialized: false,
  initialize: () => {},
  loading: false,
  fetchStatsForDuration: () => {},
  loadingStats: false,
  updateRecentlyViewed: () => {},
  updateTeamMembers: () => {},
  removeArchivedTeamMember: () => {},
  removeArchivedRecentlyViewed: () => {},
})

export default function TeamProvider({
  children,
  organizationId,
  shouldAutoInitialize,
}) {
  const fetchData = useAxios()
  const [hasInitialized, setHasInitialized] = useState(false)
  const [loading, setLoading] = useState(hasInitialized === false)
  const [loadingStats, setLoadingStats] = useState(false)
  const [teamMembers, setTeamMembers] = useState([])
  const [recentlyViewedTeamMembers, setRecentlyViewedTeamMembers] = useState([])
  const [totalNumOfHoursWorkedStore, setTotalNumOfHoursWorkedStore] = useState(
    {}
  )
  const [teamStats, setTeamStats] = useState({
    totalNumOfActiveEmployees: null,
    totalNumOfWorkedHours: null,
  })

  const initialize = useCallback(async () => {
    if (!organizationId) return
    setLoading(true)
    const res = await fetchData(`/organizations/${organizationId}/team`)
    if (res.statusCode === 200) {
      setTeamStats({
        totalNumOfActiveEmployees: res.totalNumberOfActiveStaff,
        totalNumOfWorkedHours: res.totalHoursWorked,
      })
      setTotalNumOfHoursWorkedStore((prev) => ({
        ...prev,
        [getPastNumOfDays(7).toLocaleDateString()]: res.totalHoursWorked,
      }))
      setTeamMembers(res.teamMembers)
      setRecentlyViewedTeamMembers(res.recentlyViewedTeamMembers)
      setHasInitialized(true)
    }
    setLoading(false)
  }, [organizationId])

  useEffect(() => {
    shouldAutoInitialize && initialize()
  }, [shouldAutoInitialize, initialize])

  const fetchStatsForDuration = useCallback(
    async (fromDate) => {
      if (!organizationId || loadingStats) return
      if (totalNumOfHoursWorkedStore[fromDate.toLocaleDateString()] >= 0) {
        setTeamStats((prev) => ({
          ...prev,
          totalNumOfWorkedHours:
            totalNumOfHoursWorkedStore[fromDate.toLocaleDateString()],
        }))
        return
      }
      setLoadingStats(true)
      const res = await fetchData(
        `/organizations/${organizationId}/team/stats?fromDate=${fromDate}`
      )
      if (res.statusCode === 200) {
        setTotalNumOfHoursWorkedStore((prev) => ({
          ...prev,
          [fromDate.toLocaleDateString()]: res.totalHoursWorked,
        }))
        setTeamStats((prev) => ({
          ...prev,
          totalNumOfWorkedHours: res.totalHoursWorked,
        }))
      }
      setLoadingStats(false)
    },
    [loadingStats, organizationId, totalNumOfHoursWorkedStore]
  )

  const updateRecentlyViewed = useCallback((update = []) => {
    setRecentlyViewedTeamMembers((prev) => [
      ...prev,
      ...update.filter(
        (upd) => JSON.stringify(prev).includes(upd._id) === false
      ),
    ])
  }, [])

  const updateTeamMembers = useCallback((update = []) => {
    setTeamMembers((prev) => [
      ...prev,
      ...update.filter(
        (upd) => JSON.stringify(prev).includes(upd._id) === false
      ),
    ])
  }, [])
  const removeArchivedRecentlyViewed = useCallback((user) => {
    setRecentlyViewedTeamMembers((prev) =>
      prev.filter((it) => it._id !== user?._id)
    )
  }, [])

  const removeArchivedTeamMember = useCallback((user) => {
    setTeamMembers((prev) => prev.filter((it) => it._id !== user?._id))
  }, [])

  return (
    <TeamContext.Provider
      value={{
        initialize,
        teamMembers,
        recentlyViewedTeamMembers,
        teamStats,
        hasInitialized,
        loading,
        loadingStats,
        fetchStatsForDuration,
        updateRecentlyViewed,
        updateTeamMembers,
        removeArchivedRecentlyViewed,
        removeArchivedTeamMember,
      }}
    >
      {children}
    </TeamContext.Provider>
  )
}
