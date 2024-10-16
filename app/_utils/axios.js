"use client"
import axios from "axios"

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL

export default async function axiosFetcher({
  url,
  method,
  body,
  headers,
  baseURL,
}) {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${globalThis?.localStorage.getItem("token")}`
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_SERVER_URL
  try {
    const response = await axios({
      url,
      data: body,
      method,
      headers: {
        Authorization: `Bearer ${globalThis?.localStorage?.getItem("token")}`,
        ...headers,
      },
    })
    return await response.data
  } catch (err) {
    if (err.message === "Network Error") {
      return {
        message: err.message,
        statusCode: 503,
      }
    }
    return err.response.data
  }
}
