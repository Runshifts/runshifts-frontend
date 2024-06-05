"use client"

import { createContext, useCallback, useEffect, useState } from "react"
import useAxios from "../_hooks/useAxios"

export const DepartmentsAndPositionsContext = createContext()

export default function DepartmentsAndPositionsProvider({
  children,
  organizationIndustry,
}) {
  const fetchData = useAxios()
  const [departments, setDepartments] = useState([])
  const [positions, setPositions] = useState([])

  const getCachedDepartments = useCallback(
    (organizationIndustry) => {
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
    },
    [departments]
  )

  const getCachedPositions = useCallback(
    (organizationIndustry) => {
      let cachedPositions = localStorage.getItem(`${organizationIndustry}_positions`)
      if (cachedPositions) {
        cachedPositions = JSON.parse(cachedPositions)
        if (cachedPositions.length !== positions.length) {
          setPositions(cachedPositions)
          return true
        }
      }
      return false
    },
    [positions]
  )
  const fetchDepartmentsAndPositions = useCallback(async (organizationIndustry) => {
    if (!organizationIndustry) return
    const hasCachedDepartments = getCachedDepartments(organizationIndustry)
    const hasCachedPositions = getCachedPositions(organizationIndustry)
    const [departmentsResponse, positionsResponse] = await Promise.all([
      !hasCachedDepartments
        ? await fetchData(
            `/industries/${organizationIndustry?.name.toLowerCase()}/departments`,
            "get"
          )
        : {},
      !hasCachedPositions
        ? await fetchData(
            `/industries/${organizationIndustry?.name.toLowerCase()}/positions`,
            "get"
          )
        : {},
    ])
    if (departmentsResponse.statusCode === 200) {
      setDepartments(departmentsResponse.results)
      localStorage.setItem(
        `${organizationIndustry?.name}_departments`,
        JSON.stringify(departmentsResponse.results)
      )
    }
    if (positionsResponse.statusCode === 200) {
      setPositions(positionsResponse.results)
      localStorage.setItem(
        `${organizationIndustry?.name}_positions`,
        JSON.stringify(positionsResponse.results)
      )
    }
  }, [])

  useEffect(() => {
    fetchDepartmentsAndPositions(organizationIndustry)
  }, [fetchDepartmentsAndPositions, organizationIndustry])

  return (
    <DepartmentsAndPositionsContext.Provider value={{ positions, departments }}>
      {children}
    </DepartmentsAndPositionsContext.Provider>
  )
}
