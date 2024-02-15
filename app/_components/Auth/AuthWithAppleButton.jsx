"use client"

import AppleLogin from "react-apple-login"

export default function AuthWithAppleButton({ childComponent = () => <></> }) {
  return (
    <AppleLogin 
      clientId="runshifts_service_id_primary"
      redirectURI="https://runshifts.vercel.app"
      callback={console.log}
      scope="email name"
      responseMode="query"
      render={childComponent}
    />
  )
}
