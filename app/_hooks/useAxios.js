import { useCallback } from "react"
import axios from "axios"

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_SERVER_URL

export default function useAxios() {
  const fetchData = useCallback(
    async (url, method = "get", body, headers = {}) => {
      try {
        const response = await axios({
          url,
          data: body,
          method,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            ...headers,
          },
        })
        return response.data
      } catch (error) {
        console.log("error", process.env.NEXT_PUBLIC_NODE_ENV === "dev" && error?.response?.data)
        return error.response.data
      }
    },
    []
  )
  return fetchData
}
