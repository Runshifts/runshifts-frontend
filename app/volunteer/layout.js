"use client"

import { useContext, useEffect } from "react"
import { useDispatch } from "react-redux"
import {
  fetchDepartmentsAndPositions,
  fetchEmployees,
  fetchOrganization,
} from "../_redux/thunks/organization.thunk"
import { useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import DashboardLayout from "../_components/DashboardLayout/DashboardLayout"
import DashboardLinksListGenerator from "../_components/DashboardLayout/DashboardLinksListGenerator"
import { UserContext } from "../_providers/UserProvider"

export default function Layout({ children }) {
  const dispatch = useDispatch()
  const router = useRouter()
  const { organization } = useSelector((store) => store.organization)
  const { user } = useContext(UserContext)

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
  }, [dispatch, router, user])

  useEffect(() => {
    if (organization?._id) dispatch(fetchEmployees(organization?._id))
  }, [dispatch, organization?._id])
  useEffect(() => {
    if (organization?.industry)
      dispatch(fetchDepartmentsAndPositions(organization.industry?.name))
  }, [dispatch, organization?.industry])

  return (
    <DashboardLayout
      sidebarContent={({ closeNav }) => (
        <DashboardLinksListGenerator
          variant="volunteer"
          onLinkClick={closeNav}
        />
      )}
    >
      {children}
    </DashboardLayout>
  )
}
