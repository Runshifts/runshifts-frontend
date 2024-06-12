"use client"

import { useRouter, useSearchParams } from "next/navigation"
import React, {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import EmployerVerification from "./EmployerVerification"
import EmployeeVerification from "./EmployeeVerification"
import ErrorBoundary from "../_errorBoundaries"
import useAxios from "../_hooks/useAxios"
import toast from "react-hot-toast"

export default function Page() {
  return (
    <ErrorBoundary>
      <Verify />
    </ErrorBoundary>
  )
}

function Verify() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  useEffect(() => {
    const email = sessionStorage.getItem("email")
    if (!email) router.push("/")
    else setEmail(email)
  }, [router])

  const query = useSearchParams()
  const accountType = useMemo(() => {
    return query.get("type")
  }, [query])
  const [loading, setLoading] = useState(false)
  const fetchData = useAxios()

  const handleSubmit = useCallback(
    async (e, codeList = []) => {
      e.preventDefault()
      if (loading) return
      setLoading(true)
      const URL = "/users/verify-email"
      const res = await fetchData(URL, "post", {
        emailVerificationCode: codeList.join(""),
        email,
      })
      if (res.statusCode === 200) {
        localStorage.setItem("token", res.token)
        localStorage.setItem("user", JSON.stringify(res.user))
        if (res.user.type === "employee" || res.user.type === "volunteer")
          router.push("/welcome")
        else
          router.push(
            `/new-organization?type=${
              res.user.type === "employer" ? "for-profit" : "non-profit"
            }`
          )
      } else toast.error(res.message || "Unable to verify your email")
      setLoading(false)
    },
    [email, router, fetchData]
  )

  return (
    <>
      <Suspense>
        {accountType === "employee" ? (
          <EmployerVerification handleSubmit={handleSubmit} loading={loading} />
        ) : (
          <EmployeeVerification handleSubmit={handleSubmit} loading={loading} />
        )}
      </Suspense>
    </>
  )
}
