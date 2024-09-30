"use client"
import PageSearchInput from "../../_components/AppComps/PageSearchInput"
import Heading from "../../_components/Headings"
import { getUserBasePathForDashboard } from "../../_utils"
import SettingsTab from "./SettingsTab"
import { useContext } from "react"
import { UserContext } from "../../_providers/UserProvider"

class SettingsLink {
  constructor({ basePath, path, children }) {
    this.children = children
    this.href = `${basePath}/settings${path}`
  }
}
export default function SettingsPageLayout({ children }) {
  const { user } = useContext(UserContext)
  const basePath = getUserBasePathForDashboard(user?.type)
  const employerOnlyLinks =
    user?.type === "employer"
      ? [
          new SettingsLink({ basePath, path: "/billing", children: "Billing" }),
          new SettingsLink({ basePath, path: "/plans", children: "Plans" }),
        ]
      : []
  const settingsLinks = [
    new SettingsLink({ basePath, path: "", children: "General" }),
    ...employerOnlyLinks,
    new SettingsLink({
      basePath,
      path: "/notifications",
      children: "Notifications",
    }),
  ]
  return (
    <>
      <>
        <div className="flex flex-col gap-[32px] mb-[32px]">
          <div className="flex flex-col gap-[24px]">
            <Heading as="h1">Settings</Heading>
            <PageSearchInput
              type="text"
              placeholder="Search settings..."
              name="settingsSearch"
              className="max-w-[200px]"
            />
          </div>
          <SettingsTab links={settingsLinks} />
        </div>
        {children}
      </>
    </>
  )
}
