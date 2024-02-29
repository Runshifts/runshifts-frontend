"use client"

import { createContext, useCallback, useEffect, useState } from "react"
import useAxios from "../_hooks/useAxios"
import DASHBOARD_URLS from "../_urls/dashboardURLs"
import LocationsProvider from "../_providers/LocationsProvider"
import DepartmentsAndRolesProvider from "./DepartmentsAndRolesProvider"
import ShiftsManagementProvider from "./ShiftManagementContext"

export const OrganizationContext = createContext({
  employees: [],
  organization: null,
})

export default function OrganizationProvider({ children }) {
  const fetchData = useAxios()
  const [initRetries, setInitRetries] = useState(0)
  const [organization, setOrganization] = useState(null)
  const [employees, setEmployees] = useState([])
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

  const fetchEmployees = useCallback(async () => {
    if(!organization) return
    const res = await fetchData(DASHBOARD_URLS.employees(organization._id), "get")
    if (res.statusCode === 200) {
      setEmployees(res.employees)
    }
  }, [organization?._id])

  useEffect(() => {
    if (initRetries <= 10){
      fetchOrganization()
      fetchEmployees()
    }
  }, [fetchOrganization, fetchEmployees])

  return (
    <OrganizationContext.Provider
      value={{ organization, fetchOrganization, isFetchingOrganization, employees }}
    >
      <LocationsProvider organizationId={organization?._id}>
        <DepartmentsAndRolesProvider
          organizationIndustry={organization?.industry}
        >
          <ShiftsManagementProvider organizationId={organization?._id}>
            {children}
          </ShiftsManagementProvider>
        </DepartmentsAndRolesProvider>
      </LocationsProvider>
    </OrganizationContext.Provider>
  )
}
