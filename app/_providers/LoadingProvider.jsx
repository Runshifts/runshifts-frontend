"use client"

import { createContext, useState } from "react"

export const LoadingContext = createContext()

export default function LoadingProvider({ children }) {
  const [loading, setLoading] = useState()

  return (
    <LoadingContext.Provider
      value={{ loading, updateLoading: (val) => setLoading(val) }}
    >
      {children}
    </LoadingContext.Provider>
  )
}
