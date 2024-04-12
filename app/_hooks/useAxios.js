"use client"
import { useCallback } from "react"
import axios from "axios"

export default function useAxios() {
  const fetchData = useCallback(
    async (url, method = "get", body, headers = {}) => {
      axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_SERVER_URL
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
        console.log(`USEAXIOS | LINE 21: ${error.message}`)
        return error.response.data
      }
    },
    []
  )
  return fetchData
}
