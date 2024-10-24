import GlobalLayout from "../_components/GlobalLayout"
import OrganizationProvider from "../_providers/OrganizationProvider"
import DashboardProvider from "../_providers/Employer/DashboardContext"
import ShiftAndOvertimeRequestsProvider from "../_providers/Employer/ShiftAndOvertimeRequestsProvider"
import OrganizationHooksProvider from "../_providers/Employer/HooksProvider"
export const metadata = {
  title: "Runshifts | Organizations",
  description: "Organization Dashboard",
}

export default function RootLayout({ children }) {
  return (
    <>
      <>
        <OrganizationProvider>
          <DashboardProvider>
            <ShiftAndOvertimeRequestsProvider>
              <OrganizationHooksProvider>
                <GlobalLayout>{children}</GlobalLayout>
              </OrganizationHooksProvider>
            </ShiftAndOvertimeRequestsProvider>
          </DashboardProvider>
        </OrganizationProvider>
      </>
      <div id="modal-container" />
    </>
  )
}
