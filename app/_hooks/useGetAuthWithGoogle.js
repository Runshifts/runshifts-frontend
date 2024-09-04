"use client"
import { useCallback } from "react"
import useAxios from "./useAxios"
import { useRouter } from "next/navigation"
import { getUserBasePathForDashboard } from "../_utils"
import useRedirectUserByAccountType from "./useRedirectUserByAccountType"

export default function useGetAuthWithGoogle(accountType, organizationId) {
  const redirectUser = useRedirectUserByAccountType()
  const fetchData = useAxios()
  const router = useRouter()
  const requestAuthWithGoogleAccessToken = useCallback(
    async (googleAccessToken) => {
      const res = await fetchData("/users/google", "post", {
        googleAccessToken,
        type: accountType,
        organization: organizationId,
      })
      if (res.statusCode === 201 || res.statusCode === 200) {
        localStorage.setItem("user", JSON.stringify(res.user))
        if (res.statusCode === 200) {
          localStorage.setItem("token", res.token)
          redirectUser(res.user.type)
        } else {
          if (res.user.type === "employer") router.push("/welcome")
        }
      } else console.log("err", res)
    },
    [accountType, organizationId, fetchData, router, redirectUser]
  )

  return requestAuthWithGoogleAccessToken
}
