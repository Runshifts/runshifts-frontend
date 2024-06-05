"use client"
import React, { Suspense, useEffect, useMemo } from "react"
import { useRouter, useSearchParams } from "next/navigation"
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
  const query = useSearchParams()
  const signupType = useMemo(() => {
    return query.get("type")
  }, [query])
  const router = useRouter()

  useEffect(() => {
    if (
      !signupType ||
      (signupType !== "director" && signupType !== "volunteer")
    )
      router.push("/signup?type=non-profit")
  }, [signupType, router])

  if (signupType === "director")
    return (
      <EmployerOrDirectorSignup
        organizationType="non-profit"
        ownerType="director"
      />
    )
  else if (signupType === "volunteer") return <StaffSignup staffType="volunteer" />
  else return <>Loading</>
}
export default Page
