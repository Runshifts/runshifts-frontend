"use client"

import AppleLogin from "react-apple-login"

export default function AuthWithAppleButton({ childComponent = () => <></>, onSuccess }) {
  return (
    <AppleLogin 
      clientId={process.env.NEXT_PUBLIC_APPLE_CLIENT_ID}
      redirectURI="https://runshifts.vercel.app"
      callback={onSuccess}
      scope="email name"
      responseMode="query"
      render={childComponent}
    />
  )
}
