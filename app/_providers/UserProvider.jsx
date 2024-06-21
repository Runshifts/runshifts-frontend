"use client"

import { createContext, useCallback, useEffect, useState } from "react"
import useAxios from "../_hooks/useAxios"
import { usePathname, useRouter } from "next/navigation"
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
  const redirectUser = useRedirectUserByAccountType()
  const redirectAwayFromDashboard = useCallback(() => {
    if (
      pathname.includes("/employee") ||
      pathname.includes("/organization") ||
      pathname.includes("/volunteer") ||
      pathname.includes("/non-profit") ||
      pathname.includes("/admin")
    )
      router.push("/")
  }, [router, pathname])

  const fetchUser = useCallback(async () => {
    if (user !== null && user?._id) return
    if (!localStorage.getItem("token")) redirectAwayFromDashboard()
    const res = await fetchData("/users/me", "get")
    if (res.statusCode === 200) {
      setUser(res.user)
      console.log(res)
      redirectUser(res.user.type)
      localStorage.setItem("user", JSON.stringify(res.user))
    } else {
      localStorage.clear()
      redirectAwayFromDashboard()
    }
  }, [
    router,
    fetchData,
    pathname,
    redirectAwayFromDashboard,
    redirectUser,
    user,
  ])

  const updateUser = useCallback((value) => {
    setUser(value)
    localStorage.setItem("user", JSON.stringify(value))
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
