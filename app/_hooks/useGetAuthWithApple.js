import { useCallback } from "react"
import useAxios from "./useAxios"

export default function useGetAuthWithApple(accountType, organizationId) {
  const fetchData = useAxios()

  const requestAuthWithApple = useCallback(
    async (data) => {
      console.log(data)
      if (data.error) return console.log(data)
      const res = await fetchData("/users/apple", "post", {
        ...data,
        type: accountType,
        organization: organizationId,
      })
      if (res.statusCode === 201 || res.statusCode === 200)
        console.log("success", res)
      else console.log("err", res)
    },
    [accountType, organizationId, fetchData]
  )

  return requestAuthWithApple
}
