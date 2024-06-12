"use client"

import { useContext, useEffect } from "react"
import { useDispatch } from "react-redux"
import {
  fetchEmployees,
  fetchOrganization,
} from "../_redux/thunks/organization.thunk"
import { useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import { UserContext } from "../_providers/UserProvider"

export default function Layout({ children }) {
  const dispatch = useDispatch()
  const { user } = useContext(UserContext)
  const router = useRouter()
  const { organization } = useSelector((store) => store.organization)

  useEffect(() => {
    if (user)
      dispatch(fetchOrganization(user.organization)).then((res) => {
        if (typeof res.payload === "string") {
          if (res.payload.toLowerCase() === "organization not found")
            router.push("/new-organization?type=non-profit")
          else if (res.payload.toLowerCase() !== "unauthorized") {
            localStorage.clear()
            router.refresh()
            router.push("/signup?type=non-profit")
          }
        }
      })
  }, [dispatch, router])

  useEffect(() => {
    if (organization?._id) dispatch(fetchEmployees(organization?._id))
  }, [dispatch, organization?._id])

  return <>{children}</>
}
