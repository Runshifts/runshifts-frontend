"use client"

import { createContext, useCallback, useEffect, useState } from "react"
import useAxios from "../_hooks/useAxios"

export const LocationsContext = createContext()

export default function LocationsProvider({ children, organizationId }) {
  const fetchData = useAxios()
  const [locations, setLocations] = useState([])

  const fetchLocations = useCallback(async () => {
    if (!organizationId) return
    const res = await fetchData(`/locations/${organizationId}`, "get")
    if (res.statusCode === 200) setLocations(res.locations)
  }, [organizationId, fetchData])

  useEffect(() => {
    fetchLocations()
  }, [fetchLocations])

  return (
    <LocationsContext.Provider
      value={{
        locations,
        updateLocations: (update) =>
          Array.isArray(update) && setLocations(update),
      }}
    >
      {children}
    </LocationsContext.Provider>
  )
}
