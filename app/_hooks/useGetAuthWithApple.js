"use client"
import { useCallback } from "react"
import useAxios from "./useAxios"
import useRedirectUserByAccountType from "./useRedirectUserByAccountType"
import toast from "react-hot-toast"

export default function useGetAuthWithApple(accountType, organizationId) {
  const fetchData = useAxios()
  const redirectUser = useRedirectUserByAccountType()
  const requestAuthWithApple = useCallback(
    async (code) => {
      console.log(code)
      if (!code) return console.log(code)
      const res = await fetchData("/users/apple", "post", {
        type: accountType,
        organization: organizationId,
        code,
      })
      if (res.statusCode === 201 || res.statusCode === 200) {
        localStorage.setItem("token", res.token)
        localStorage.setItem("user", res.user)
        redirectUser(res.user.type)
      } else {
        toast.error(res.message)
        console.log("err", res)
      }
    },
    [accountType, organizationId, fetchData, redirectUser]
  )

  return requestAuthWithApple
}
