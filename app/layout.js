import { Inter } from "next/font/google"
import "./globals.css"
import GoogleOAuthProvider from "./_providers/GoogleAuth"
import LoadingProvider from "./_providers/LoadingProvider"
import { Toaster } from "react-hot-toast"
import UserProvider from "./_providers/UserProvider"
import ReduxProvider from "./_providers/ReduxProvider"
import { Suspense } from "react"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Runshifts",
  description: "",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"
          defer
        ></script>
        <Suspense fallback={<></>}>
          <GoogleOAuthProvider>
            <LoadingProvider>
              <UserProvider>
                <ReduxProvider>{children}</ReduxProvider>
              </UserProvider>
            </LoadingProvider>
          </GoogleOAuthProvider>
          <Toaster
            position="top-center"
            reverseOrder={false}
            containerStyle={{
              zIndex: 9000000000000000,
            }}
          />
        </Suspense>
      </body>
    </html>
  )
}