"use client"

import AuthLayout from "../_components/Auth/Layout"
import FormHeading, { SubHeadingText } from "../_components/Auth/Heading"
import { SubmitButton } from "../_components/Auth/Inputs"
import PinInput from "../_components/AppComps/PinInput"
import useHandlePinInputState from "../_hooks/useHandlePinInputState"
import { useRouter } from "next/navigation"
import React, { useCallback, useEffect, useState } from "react"
import useAxios from "../_hooks/useAxios"
import toast from "react-hot-toast"

function Verify() {
  const router = useRouter()
  useEffect(() => {
    if (!sessionStorage.getItem("email")) router.push("/forgot-password")
  }, [])
  const {
    pinInputState,
    pinInputStateBoxReference,
    handleBackspaceAndEnter,
    handleChange,
    handlePaste,
  } = useHandlePinInputState({ pinLength: 6 })
  const fetchData = useAxios()
  const [loading, setLoading] = useState(false)

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      const code = pinInputState.join("")
      if (loading || !code) return
      setLoading(true)
      const res = await fetchData("/users/verify-password-reset-code", "post", {
        passwordResetCode: code,
        email: sessionStorage.getItem("email"),
      })
      if (res.statusCode === 200) {
        sessionStorage.setItem("passwordResetCode", code)
        router.push("/change-password")
      } else {
        toast.error(
          res.message || "An error occurred",
          { duration: 6000, position: "top-left", className: "mx-[8%]" }
        )
      }
      setLoading(false)
    },
    [pinInputState, loading, fetchData]
  )

  return (
    <AuthLayout bgClassName="bg-[url(/img/confirm_reset.png)]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <FormHeading>Provide the code sent to your mail box</FormHeading>
          <SubHeadingText>
            Please provide the six digit code sent to your email to reset your
            password
          </SubHeadingText>
        </div>
        <PinInput
          stateBoxReference={pinInputStateBoxReference}
          state={pinInputState}
          handleBackspaceAndEnter={handleBackspaceAndEnter}
          handlePaste={handlePaste}
          handleChange={handleChange}
        />
        <SubmitButton
          type="submit"
          isDisabled={loading}
          isLoading={loading}
          loadingText="Hang on..."
        >
          Confirm
        </SubmitButton>
      </form>
    </AuthLayout>
  )
}

export default Verify
