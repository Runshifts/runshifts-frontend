"use client"

import { createContext, useCallback, useEffect, useState } from "react"
import useAxios from "../_hooks/useAxios"

export const DepartmentsAndRolesContext = createContext()

export default function DepartmentsAndRolesProvider({
  children,
  organizationIndustry,
}) {
  const fetchData = useAxios()
  const [departments, setDepartments] = useState([])
  const [roles, setRoles] = useState([])

  const getCachedDepartments = useCallback((organizationIndustry) => {
    let cachedDepartments = localStorage.getItem(
      `${organizationIndustry}_departments`
    )
    if (cachedDepartments) {
      cachedDepartments = JSON.parse(cachedDepartments)
      if (cachedDepartments.length !== departments.length) {
        setDepartments(cachedDepartments)
        return true
      }
    }
    return false
  }, [departments])

  const getCachedRoles = useCallback((organizationIndustry) => {
    let cachedRoles = localStorage.getItem(`${organizationIndustry}_roles`)
    if (cachedRoles) {
      cachedRoles = JSON.parse(cachedRoles)
      if (cachedRoles.length !== roles.length) {
        setRoles(cachedRoles)
        return true
      }
    }
    return false
  }, [roles])

  const fetchDepartmentsAndRoles = useCallback(async () => {
    if (!organizationIndustry) return
    const hasCachedDepartments = getCachedDepartments(organizationIndustry)
    const hasCachedRoles = getCachedRoles(organizationIndustry)

    const [departmentsResponse, rolesResponse] = await Promise.all([
      !hasCachedDepartments ? await fetchData(`industries/${organizationIndustry}/departments`, "get") : {},
      !hasCachedRoles ? await fetchData(`industries/${organizationIndustry}/roles`, "get") : {},
    ])
    console.log(departmentsResponse, rolesResponse)
    if (departmentsResponse.statusCode === 200) {
      setDepartments(departmentsResponse.results)
      localStorage.setItem(
        `${organizationIndustry}_departments`,
        JSON.stringify(departmentsResponse.results)
      )
    }
    if (rolesResponse.statusCode === 200) {
      setRoles(rolesResponse.results)
      localStorage.setItem(
        `${organizationIndustry}_roles`,
        JSON.stringify(rolesResponse.results)
      )
    }
  }, [organizationIndustry])

  useEffect(() => {
    fetchDepartmentsAndRoles()
  }, [fetchDepartmentsAndRoles])


  return (
    <DepartmentsAndRolesContext.Provider value={{ roles, departments }}>
      {children}
    </DepartmentsAndRolesContext.Provider>
  )
}
