"use client"

import AuthLayout from "../_components/Auth/Layout"
import FormHeading, { SubHeadingText } from "../_components/Auth/Heading"
import { AuthLabelText, SubmitButton } from "../_components/Auth/Inputs"
import PinInput from "../_components/AppComps/PinInput"
import useHandlePinInputState from "../_hooks/useHandlePinInputState"
import { useRouter } from "next/navigation"
import React, { useCallback, useState } from "react"
import DividerWithCenteredText from "../_components/DividerWithCenteredText"
import useAxios from "../_hooks/useAxios"
import toast from "react-hot-toast"

function CheckInvite() {
  const router = useRouter()
  const {
    pinInputState,
    pinInputStateBoxReference,
    handleBackspaceAndEnter,
    handleChange,
    handlePaste,
  } = useHandlePinInputState({ pinLength: 6 })
  const [loading, setLoading] = useState(false)
  const fetchData = useAxios()
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      if (pinInputState.join("").length < 6)
        return toast.error("Please enter invite code", {
          position: "top-left",
          className: "mx-[8%]",
        })
      if (loading) return
      setLoading(true)
      const res = await fetchData("/users/accept-invite", "post", {
        invitationCode: pinInputState.join(""),
      })
      if (res.statusCode === 200) {
        localStorage.setItem("token", res.token)
        router.push("/employee")
      } else {
        toast.error(
          res.message || "An error occurred while confirming your invitation",
          { position: "top-left", className: "mx-[8%]" }
        )
      }
      setLoading(false)
    },
    [pinInputState, fetchData, router, loading]
  )

  return (
    <>
      <AuthLayout bgClassName="bg-[url(/img/check_invite.png)]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <FormHeading>See if you&apos;ve been invited to a team</FormHeading>
          <SubHeadingText>
            Please provide the invite code that was sent to your work email
            address
          </SubHeadingText>
          <div>
            <AuthLabelText>Invite code</AuthLabelText>
            <PinInput
              stateBoxReference={pinInputStateBoxReference}
              state={pinInputState}
              handleBackspaceAndEnter={handleBackspaceAndEnter}
              handlePaste={handlePaste}
              handleChange={handleChange}
            />
          </div>
          <SubmitButton type="submit" isDisabled={loading} isLoading={loading}>
            Join organisation now
          </SubmitButton>
          <DividerWithCenteredText text="or" />
          <button
            type="button"
            className="border border-solid border-[#7ED957] text-base font-[600] text-black px-6 py-4 w-full rounded-[8px]"
            onClick={() => router.push("/signup?type=employee")}
          >
            Create a new account
          </button>
        </form>
      </AuthLayout>
    </>
  )
}

export default CheckInvite
