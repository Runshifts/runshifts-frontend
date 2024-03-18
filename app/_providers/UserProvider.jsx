"use client"

import { createContext, useCallback, useEffect, useState } from "react"
import useAxios from "../_hooks/useAxios"
import { useRouter } from "next/navigation"

export const UserContext = createContext({
  user: null,
  updateUser: () => {}
})

export default function UserProvider({ children }) {
  const router = useRouter()
  const fetchData = useAxios()
  const [user, setUser] = useState(null)

  const fetchUser = useCallback(async () => {
    const res = await fetchData("/users/me", "get")
    if (res.statusCode === 200) {
      setUser(res.user)
      localStorage.setItem("user", JSON.stringify(res.user))
    } else router.push("/login")
  }, [router, fetchData])

  const updateUser = useCallback((value) => {
    setUser(value)
    localStorage.setItem("user", value)
  }, [])

  useEffect(() => {
    const userInLocalStorage = JSON.parse(localStorage.getItem("user"))
    if (!userInLocalStorage) fetchUser()
    else setUser(userInLocalStorage)
  }, [])
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
