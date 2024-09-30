"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import useAxios from "../_hooks/useAxios"
import DASHBOARD_URLS from "../_urls/dashboardURLs"
import LocationsProvider from "../_providers/LocationsProvider"
import DepartmentsAndPositionsProvider from "./DepartmentsAndPositionsProvider"
import ShiftsManagementProvider from "./ShiftManagementContext"
import TrackerProvider from "./Employer/TrackerProvider"
import TeamProvider from "./Employer/TeamProvider"
import { useRouter } from "next/navigation"
import { UserContext } from "./UserProvider"

export const OrganizationContext = createContext({
  employees: [],
  organization: null,
})

export default function OrganizationProvider({ children, isEmployee = false }) {
  const router = useRouter()
  const fetchData = useAxios()
  const { user } = useContext(UserContext)
  const [initRetries, setInitRetries] = useState(0)
  const [organization, setOrganization] = useState(null)
  const [employees, setEmployees] = useState([])
  const [isFetchingOrganization, setIsFetchingOrganization] = useState(
    organization === null
  )
  const fetchOrganization = useCallback(async () => {
    if (isEmployee && !user?.organization) return
    const res = await fetchData(
      DASHBOARD_URLS.organization(isEmployee ? user?.organization : null),
      "get"
    )
    if (res.statusCode === 200) {
      setOrganization(res.organization)
      setIsFetchingOrganization(false)
    } else {
      setInitRetries((prev) => prev + 1)
      if (res.statusCode === 404) router.push("/new-organization")
      else if (res.statusCode === 403) {
        router.push("/")
        localStorage.clear()
        router.refresh()
      }
    }
  }, [router, isEmployee, user?.organization, fetchData])

  const fetchEmployees = useCallback(async () => {
    if (!organization) return
    const res = await fetchData(
      DASHBOARD_URLS.employees(organization._id),
      "get"
    )
    if (res.statusCode === 200) {
      setEmployees(res.employees)
    }
  }, [organization, fetchData])

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
  }, [fetchOrganization, fetchEmployees, initRetries])

  return (
    <OrganizationContext.Provider
      value={{
        organization,
        fetchOrganization,
        isFetchingOrganization,
        employees,
        updateEmployees,
        updateOrganization: (value) => value && setOrganization(value),
      }}
    >
      <LocationsProvider organizationId={organization?._id}>
        <DepartmentsAndPositionsProvider
          organizationIndustry={organization?.industry}
        >
          <ShiftsManagementProvider organizationId={organization?._id}>
            <TeamProvider
              shouldAutoInitialize={false}
              organizationId={organization?._id}
              updateEmployees={updateEmployees}
              removeEmployee={removeEmployee}
            >
              <TrackerProvider
                shouldAutoInitialize={false}
                organizationId={organization?._id}
              >
                {children}
              </TrackerProvider>
            </TeamProvider>
          </ShiftsManagementProvider>
        </DepartmentsAndPositionsProvider>
      </LocationsProvider>
    </OrganizationContext.Provider>
  )
}
