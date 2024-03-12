"use client"

import { createContext, useCallback, useEffect, useState } from "react"
import useAxios from "../_hooks/useAxios"
import DASHBOARD_URLS from "../_urls/dashboardURLs"
import LocationsProvider from "../_providers/LocationsProvider"
import DepartmentsAndRolesProvider from "./DepartmentsAndRolesProvider"
import ShiftsManagementProvider from "./ShiftManagementContext"
import TeamProvider from "./TeamProvider"
import { useRouter } from "next/navigation"

export const OrganizationContext = createContext({
  employees: [],
  organization: null,
})

export default function OrganizationProvider({ children }) {
  const router = useRouter()
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
    } else {
      setInitRetries((prev) => prev + 1)
      if (res.statusCode === 404) router.push("/welcome")
    }
  }, [router])

  const fetchEmployees = useCallback(async () => {
    if (!organization) return
    const res = await fetchData(
      DASHBOARD_URLS.employees(organization._id),
      "get"
    )
    if (res.statusCode === 200) {
      setEmployees(res.employees)
    }
  }, [organization?._id])

  const updateEmployees = useCallback((update = []) => {
    setEmployees((prev) => [
      ...prev,
      ...update.filter(
        (upd) => JSON.stringify(prev).includes(upd._id) === false
      ),
    ])
  }, [])
  const removeEmployee = useCallback((employee) => {
    setEmployees((prev) => prev.filter((it) => it._id !== employee?._id))
  }, [])

  useEffect(() => {
    if (initRetries <= 10) {
      fetchOrganization()
      fetchEmployees()
    }
  }, [fetchOrganization, fetchEmployees])

  return (
    <OrganizationContext.Provider
      value={{
        organization,
        fetchOrganization,
        isFetchingOrganization,
        employees,
        updateEmployees,
      }}
    >
      <LocationsProvider organizationId={organization?._id}>
        <DepartmentsAndRolesProvider
          organizationIndustry={organization?.industry}
        >
          <ShiftsManagementProvider organizationId={organization?._id}>
            <TeamProvider
              shouldAutoInitialize={false}
              organizationId={organization?._id}
              updateEmployees={updateEmployees}
              removeEmployee={removeEmployee}
            >
              {children}
            </TeamProvider>
          </ShiftsManagementProvider>
        </DepartmentsAndRolesProvider>
      </LocationsProvider>
    </OrganizationContext.Provider>
  )
}
