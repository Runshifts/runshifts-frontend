"use client"
import { useGoogleLogin } from "@react-oauth/google"

export default function AuthWithGoogleButton({ childComponent = () => <></> }) {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  })

  return <>{childComponent({ onClick: login })}</>
}
