"use client"
import { useGoogleLogin } from "@react-oauth/google"

export default function AuthWithGoogleButton({
  childComponent = () => <></>,
  onSuccess = () => {},
}) {
  const login = useGoogleLogin({
    onSuccess: async (accessToken) => {
      if (typeof onSuccess === "function") onSuccess(accessToken)
    },
  })
  return <>{childComponent({ onClick: login })}</>
}
