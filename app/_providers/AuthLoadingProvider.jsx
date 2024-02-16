"use client"

import { createContext, useState } from "react"

export const AuthLoadingContext = createContext()

export default function AuthLoadingProvider({ children }) {
  const [loading, setLoading] = useState()

  return (
    <AuthLoadingContext.Provider
      value={{ loading, updateLoading: (val) => setLoading(val) }}
    >
      {children}
    </AuthLoadingContext.Provider>
  )
}
