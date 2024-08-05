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
import { fetchSwapRequests } from "../_redux/thunks/shiftsAndOvertimeRequests.thunk"
import StaffHooksProvider from "../_providers/StaffHooksProvider"
export default function Layout({ children }) {
  const dispatch = useDispatch()
  const router = useRouter()
  const { organization } = useSelector((store) => store.organization)
  const { user } = useContext(UserContext)
  useEffect(() => {
    if (user)
      dispatch(fetchOrganization(user?.organization)).then((res) => {
        if (typeof res.payload === "string") {
          if (
            res.payload.toLowerCase() === "organization not found" &&
            (user.type === "director" || user.type === "employer")
          )
            router.push("/new-organization?type=for-profit")
          else {
            localStorage.clear()
            router.refresh()
            router.push("/signup?type=for-profit")
          }
        }
      })
  }, [dispatch, router, user])

  useEffect(() => {
    if (organization?._id) dispatch(fetchEmployees(organization?._id))
  }, [dispatch, organization?._id])

  useEffect(() => {
    if (user?._id) dispatch(fetchSwapRequests())
  }, [dispatch, user?._id])

  useEffect(() => {
    if (organization?.industry)
      dispatch(fetchDepartmentsAndPositions(organization.industry?.name))
  }, [dispatch, organization?.industry])

  return (
    <StaffHooksProvider>
      <DashboardLayout
        sidebarContent={({ closeNav }) => (
          <DashboardLinksListGenerator
            variant="employee"
            onLinkClick={closeNav}
          />
        )}
      >
        {children}
      </DashboardLayout>
    </StaffHooksProvider>
  )
}
