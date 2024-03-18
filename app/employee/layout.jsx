import { Inter } from "next/font/google"
import "../globals.css"
import EmployeeGlobalLayout from "../_components/EmployeeGlobalLayouts"
import EmployeeDashboardProvider from "../_providers/Employee/DashboardContext"
import OrganizationProvider from "../_providers/OrganizationProvider"
import LocationsProvider from "../_providers/LocationsProvider"
import UserProvider from "../_providers/UserProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Runshifts - Employee",
  description: "",
}

export default function RootLayout({ children }) {
  return (
    <>
      <>
        <UserProvider>
          <OrganizationProvider>
            <LocationsProvider>
              <EmployeeDashboardProvider>
                <EmployeeGlobalLayout>{children}</EmployeeGlobalLayout>
              </EmployeeDashboardProvider>
            </LocationsProvider>
          </OrganizationProvider>
        </UserProvider>
      </>
    </>
  )
}
