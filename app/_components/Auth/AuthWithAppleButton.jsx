"use client"

import AppleLogin from "react-apple-login"

export default function AuthWithAppleButton({ childComponent = () => <></>, onSuccess }) {
  return (
    <AppleLogin 
      clientId={process.env.NEXT_PUBLIC_APPLE_CLIENT_ID}
      redirectURI={process.env.NEXT_PUBLIC_BASE_URI}
      callback={onSuccess}
      scope="email name"
      responseMode="query"
      render={childComponent}
    />
  )
}
