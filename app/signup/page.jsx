"use client"
import React, { Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useMemo } from "react"

import EmployerSignup from "./EmployerSignup"
import EmployeeSignup from "./EmployeeSignup"
import ErrorBoundary from "../_errorBoundaries"

function Page() {
  return (
    <ErrorBoundary>
      <SignupPagesWrappedInSuspense />
    </ErrorBoundary>
  )
}
function SignupPagesWrappedInSuspense() {
  return (
    <Suspense>
      <SignupPages />
    </Suspense>
  )
}
function SignupPages() {
  const router = useRouter()
  const query = useSearchParams()
  const signupType = useMemo(() => {
    return query.get("type")
  }, [query])
  if (signupType === "employer") return <EmployerSignup />
  else if (signupType === "employee") return <EmployeeSignup />
  else return <EmployerSignup />
}
export default Page
