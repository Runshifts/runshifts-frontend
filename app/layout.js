import { Inter } from "next/font/google"
import "./globals.css"
import GoogleOAuthProvider from "./_providers/GoogleAuth"
import LoadingProvider from "./_providers/LoadingProvider"

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
        <GoogleOAuthProvider>
          <LoadingProvider>{children}</LoadingProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  )
}
