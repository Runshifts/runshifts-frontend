import { Inter } from "next/font/google"
import "../globals.css"
import AdminGlobalLayout from "../_components/AdminGlobalLayouts"
import AdminDashboardProvider from "../_providers/Admin/AdminDashboardProvider"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Runshifts - Admin",
  description: "",
}

export default function RootLayout({ children }) {
  return (
    <>
      <>
        <AdminDashboardProvider>
          <AdminGlobalLayout>{children}</AdminGlobalLayout>
        </AdminDashboardProvider>
      </>
    </>
  )
}
