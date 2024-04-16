import EmployeeGlobalLayout from "../_components/EmployeeGlobalLayouts"
import EmployeeDashboardProvider from "../_providers/Employee/EmployeeDashboardContext"
import OrganizationProvider from "../_providers/OrganizationProvider"
import LocationsProvider from "../_providers/LocationsProvider"
import NotesProvider from "../_providers/NotesProvider"
import ShiftAndOvertimeRequestsProvider from "../_providers/Employer/ShiftAndOvertimeRequestsProvider"
import EmployeeHooksProvider from "../_providers/Employee/HooksProvider"

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
                    <EmployeeHooksProvider>
                      <EmployeeGlobalLayout>{children}</EmployeeGlobalLayout>
                    </EmployeeHooksProvider>
                </EmployeeDashboardProvider>
              </ShiftAndOvertimeRequestsProvider>
            </LocationsProvider>
          </OrganizationProvider>
        </>
      </>
    </>
  )
}
