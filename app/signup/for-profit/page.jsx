"use client"
import React, { Suspense, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useMemo } from "react"

import EmployerOrDirectorSignup from "../_components/EmployerOrDirectorSignup"
import StaffSignup from "../_components/StaffSignup"
import ErrorBoundary from "../../_errorBoundaries"

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

  useEffect(() => {
    if (!signupType || (signupType !== "employer" && signupType !== "employee"))
      router.push("/signup?type=for-profit")
  }, [signupType, router])

  if (signupType === "employer")
    return (
      <EmployerOrDirectorSignup
        organizationType="for-profit"
        ownerType="employer"
      />
    )
  else if (signupType === "employee") return <StaffSignup staffType="employee" />
  else return <>loading</>
}
export default Page
