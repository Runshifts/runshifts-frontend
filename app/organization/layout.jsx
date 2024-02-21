import { Inter } from "next/font/google"
import "../globals.css"
import GlobalLayout from "../_components/GlobalLayout"
import DashboardProvider from "../_providers/DashboardContext"
import UserProvider from "../_providers/UserProvider"
import OrganizationProvider from "../_providers/OrganizationProvider"
import LocationsProvider from "../_providers/LocationsProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Runshifts | Organizations",
  description: "Organization Dashboard",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalLayout>
          <UserProvider>
            <OrganizationProvider>
              <LocationsProvider>
                <DashboardProvider>{children}</DashboardProvider>
              </LocationsProvider>
            </OrganizationProvider>
          </UserProvider>
        </GlobalLayout>
      </body>
    </html>
  )
}
