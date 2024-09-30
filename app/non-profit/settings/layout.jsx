import SettingsPageLayout from "../../_components/DashboardLayout/SettingsPageLayout"

export default function Layout({ children }) {
  return (
    <>
      <SettingsPageLayout>{children}</SettingsPageLayout>
    </>
  )
}
