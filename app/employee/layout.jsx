import EmployeeGlobalLayout from "../_components/EmployeeGlobalLayouts"
import EmployeeDashboardProvider from "../_providers/Employee/EmployeeDashboardContext"
import OrganizationProvider from "../_providers/OrganizationProvider"
import LocationsProvider from "../_providers/LocationsProvider"
import ShiftAndOvertimeRequestsProvider from "../_providers/Employer/ShiftAndOvertimeRequestsProvider"

export const metadata = {
  title: "Runshifts - Employee",
  description: "",
}

export default function RootLayout({ children }) {
  return (
    <>
      <>
        <>
          <OrganizationProvider isEmployee={true}>
            <LocationsProvider>
              <ShiftAndOvertimeRequestsProvider>
                <EmployeeDashboardProvider>
                  <EmployeeGlobalLayout>{children}</EmployeeGlobalLayout>
                </EmployeeDashboardProvider>
              </ShiftAndOvertimeRequestsProvider>
            </LocationsProvider>
          </OrganizationProvider>
        </>
      </>
    </>
  )
}
