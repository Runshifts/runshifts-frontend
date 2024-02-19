import { Inter } from "next/font/google"
import "./globals.css"
import GoogleOAuthProvider from "./_providers/GoogleAuth"
import AuthLoadingProvider from "./_providers/AuthLoadingProvider"

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
          <AuthLoadingProvider>{children}</AuthLoadingProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  )
}
