"use client"

import { createContext, useCallback, useEffect, useState } from "react"
import useAxios from "../_hooks/useAxios"
import { usePathname, useRouter } from "next/navigation"
import path from "path"

export const UserContext = createContext({
  user: null,
  updateUser: () => {},
})

export default function UserProvider({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const fetchData = useAxios()
  const [user, setUser] = useState(null)

  const fetchUser = useCallback(async () => {
    const res = await fetchData("/users/me", "get")
    if (res.statusCode === 200) {
      setUser(res.user)
      localStorage.setItem("user", JSON.stringify(res.user))
    } else {
      if (
        pathname.includes("/employee") ||
        pathname.includes("/organization") ||
        pathname.includes("/admin")
      )
        router.push("/")
    }
  }, [router, fetchData, pathname])

  const updateUser = useCallback((value) => {
    setUser(value)
    localStorage.setItem("user", value)
  }, [])

  useEffect(() => {
    const userInLocalStorage = JSON.parse(localStorage.getItem("user"))
    if (!userInLocalStorage) fetchUser()
    else setUser(userInLocalStorage)
  }, [])

  useEffect(() => {
    if (user) {
      if (pathname === "/") {
        if (user.type === "employee") router.push("/employee")
        else if (user.type === "employee") router.push("/organization")
        else if (user.type === "admin") router.push("/admin")
      }
      if (
        pathname.toLowerCase().startsWith("/employee") &&
        user.type !== "employee"
      )
        router.push("/organization")
      else if (
        pathname.toLowerCase().startsWith("/organization") &&
        user.type !== "employer"
      )
        router.push("/employee")
    }
  }, [user, pathname])
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
