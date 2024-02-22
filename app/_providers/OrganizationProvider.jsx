"use client"

import { createContext, useCallback, useEffect, useState } from "react"
import useAxios from "../_hooks/useAxios"
import DASHBOARD_URLS from "../organization/dashboardURLs"
import LocationsProvider from "../_providers/LocationsProvider"
import DepartmentsAndRolesProvider from "./DepartmentsAndRolesProvider"

export const OrganizationContext = createContext()

export default function OrganizationProvider({ children }) {
  const fetchData = useAxios()
  const [intiRetries, setInitRetries] = useState(0)
  const [organization, setOrganization] = useState(null)
  const [isFetchingOrganization, setIsFetchingOrganization] = useState(
    organization === null
  )

  const fetchOrganization = useCallback(async () => {
    const res = await fetchData(DASHBOARD_URLS.organization(), "get")
    if (res.statusCode === 200) {
      setOrganization(res.organization)
      setIsFetchingOrganization(false)
    } else setInitRetries((prev) => prev + 1)
  }, [])

  useEffect(() => {
    if (intiRetries <= 10) fetchOrganization()
  }, [fetchOrganization])

  return (
    <OrganizationContext.Provider
      value={{ organization, fetchOrganization, isFetchingOrganization }}
    >
      <LocationsProvider organizationId={organization?._id}>
        <DepartmentsAndRolesProvider
          organizationIndustry={organization?.industry}
        >
          {children}
        </DepartmentsAndRolesProvider>
      </LocationsProvider>
    </OrganizationContext.Provider>
  )
}
