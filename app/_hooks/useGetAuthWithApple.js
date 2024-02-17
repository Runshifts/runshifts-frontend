import { useCallback } from "react"
import useAxios from "./useAxios"

export default function useGetAuthWithApple(accountType, organizationId) {


  const fetchData = useAxios()

  const requestAuthWithApple = useCallback(
    async (code) => {
      console.log(code)
      if (!code) return console.log(code)
      const res = await fetchData("/users/apple", "post", {
        type: accountType,
        organization: organizationId,
        code,
      })
      if (res.statusCode === 201 || res.statusCode === 200)
        console.log("success", res)
      else console.log("err", res)
    },
    [accountType, organizationId, fetchData]
  )

  return requestAuthWithApple
}
