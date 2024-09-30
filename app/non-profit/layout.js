"use client"

import { useEffect } from "react"
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
import OrganizationHooksProvider from "../_providers/Employer/HooksProvider"

export default function Layout({ children }) {
  const dispatch = useDispatch()
  const router = useRouter()
  const { organization } = useSelector((store) => store.organization)

  useEffect(() => {
    dispatch(fetchOrganization()).then((res) => {
      if (typeof res.payload === "string") {
        if (
          res.payload.toLowerCase() === "organization not found" &&
          (user.type === "director" || user.type === "employer")
        )
          router.push("/new-organization?type=non-profit")
        else {
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

  useEffect(() => {
    if (organization?.industry)
      dispatch(fetchDepartmentsAndPositions(organization.industry?.name))
  }, [dispatch, organization?.industry])

  return (
    <OrganizationHooksProvider>
      <DashboardLayout
        sidebarContent={({ closeNav }) => (
          <DashboardLinksListGenerator
            variant="non-profit"
            onLinkClick={closeNav}
          />
        )}
      >
        {children}
      </DashboardLayout>
    </OrganizationHooksProvider>
  )
}
