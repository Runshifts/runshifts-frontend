import { useCallback } from "react"
import useAxios from "./useAxios"
import { useRouter } from "next/navigation"

export default function useGetAuthWithGoogle(accountType, organizationId) {
  const fetchData = useAxios()
  const router = useRouter()
  const requestAuthWithGoogleAccessToken = useCallback(
    async (googleAccessToken) => {
      const res = await fetchData("/users/google", "post", {
        googleAccessToken,
        type: accountType,
        organization: organizationId,
      })
      console.log(res, googleAccessToken)
      if (res.statusCode === 201 || res.statusCode === 200){
        localStorage.setItem("token", res.token)
        localStorage.setItem("user", res.user)
        router.push(res.user.type === "employee" ? "/employee" : "organization")
      } else console.log("err", res)
    },
    [accountType, organizationId]
  )

  return requestAuthWithGoogleAccessToken
}