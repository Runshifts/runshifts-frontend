"use client"

import { createContext, useCallback, useEffect, useState } from "react"
import useAxios from "../_hooks/useAxios"
import { usePathname, useRouter } from "next/navigation"
import path from "path"
import useRedirectUserByAccountType from "../_hooks/useRedirectUserByAccountType"

export const UserContext = createContext({
  user: null,
  updateUser: () => {},
})

export default function UserProvider({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const fetchData = useAxios()
  const [user, setUser] = useState(null)

  const redirectAwayFromDashboard = useCallback(() => {
    if (
      pathname.includes("/employee") ||
      pathname.includes("/organization") ||
      pathname.includes("/admin")
    )
      router.push("/")
  }, [router, pathname])

  const fetchUser = useCallback(async () => {
    if (!localStorage.getItem("token")) redirectAwayFromDashboard()
    const res = await fetchData("/users/me", "get")
    if (res.statusCode === 200) {
      setUser(res.user)
      localStorage.setItem("user", JSON.stringify(res.user))
    } else redirectAwayFromDashboard
  }, [router, fetchData, pathname, redirectAwayFromDashboard])

  const updateUser = useCallback((value) => {
    setUser(value)
    localStorage.setItem("user", value)
  }, [])

  useEffect(() => {
    const userInLocalStorage = JSON.parse(localStorage.getItem("user"))
    if (!userInLocalStorage) fetchUser()
    else setUser(userInLocalStorage)
  }, [fetchUser])

  const redirectUser = useRedirectUserByAccountType()

  useEffect(() => {
    if (user) {
      if (pathname === "/") redirectUser(user.type)
      if (
        !pathname.startsWith("/organization") &&
        !pathname.startsWith("/new-organization") &&
        !pathname.startsWith("/employee") &&
        !pathname.startsWith("/admin") &&
        !pathname.startsWith("/knowledge")
      )
        redirectUser(user.type)
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
  }, [user, pathname, redirectUser])
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
