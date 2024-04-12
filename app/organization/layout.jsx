import GlobalLayout from "../_components/GlobalLayout"
import OrganizationProvider from "../_providers/OrganizationProvider"
import DashboardProvider from "../_providers/Employer/DashboardContext"
import ShiftAndOvertimeRequestsProvider from "../_providers/Employer/ShiftAndOvertimeRequestsProvider"
import OrganizationHooksProvider from "../_providers/Employer/HooksProvider"
import NotesProvider from "../_providers/NotesProvider"
export const metadata = {
  title: "Runshifts | Organizations",
  description: "Organization Dashboard",
}

export default function RootLayout({ children }) {
  return (
    <>
      <GlobalLayout>
        <>
          <OrganizationProvider>
            <DashboardProvider>
              <ShiftAndOvertimeRequestsProvider>
                <NotesProvider>
                  <OrganizationHooksProvider>
                    {children}
                  </OrganizationHooksProvider>
                </NotesProvider>
              </ShiftAndOvertimeRequestsProvider>
            </DashboardProvider>
          </OrganizationProvider>
        </>
      </GlobalLayout>
      <div id="modal-container" />
    </>
  )
}
