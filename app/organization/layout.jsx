import "../globals.css"
import GlobalLayout from "../_components/GlobalLayout"
import UserProvider from "../_providers/UserProvider"
import OrganizationProvider from "../_providers/OrganizationProvider"
import DashboardProvider from "../_providers/DashboardContext"

export const metadata = {
  title: "Runshifts | Organizations",
  description: "Organization Dashboard",
}

export default function RootLayout({ children }) {
  return (
    <>
      <GlobalLayout>
        <UserProvider>
          <OrganizationProvider>
            <DashboardProvider>{children}</DashboardProvider>
          </OrganizationProvider>
        </UserProvider>
      </GlobalLayout>
      <div id="modal-container"/>
    </>
  )
}
