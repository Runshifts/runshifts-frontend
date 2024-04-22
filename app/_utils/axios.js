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
  ] = `Bearer ${localStorage.getItem("token")}`
  try {
    const response = await axios[method](url, body, {
      ...headers,
      baseURL: baseURL || process.env.NEXT_PUBLIC_SERVER_URL,
    })
    return await response.data
  } catch (err) {
    console.log(err)
    if (err.message === "Network Error") {
      return {
        message: err.message,
        statusCode: 503,
      }
    }
    return err.response.data
  }
}