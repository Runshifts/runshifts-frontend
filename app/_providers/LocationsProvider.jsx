"use client"

import { createContext, useCallback, useEffect, useState } from "react"
import useAxios from "../_hooks/useAxios"

export const LocationsContext = createContext()

export default function LocationsProvider({ children }) {

  const fetchData = useAxios()
  const [locations, setLocations] = useState([])

  const fetchLocations = useCallback(async(organizationId) => {
    const res = await fetchData(`/locations/${organizationId}`, "get")
    if(res.statusCode === 200) return res.locations
    else return null
  }, [])
  
  return (
    <LocationsContext.Provider value={{ fetchLocations }}>
      {children}
    </LocationsContext.Provider>
  )
}
