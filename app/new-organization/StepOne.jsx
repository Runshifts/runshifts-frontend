"use client"
import React, { useCallback, useState } from "react"
import FormHeading from "../_components/Auth/Heading"
import AuthInputAndLabel, { SubmitButton } from "../_components/Auth/Inputs"

export default function StepOne({
  isActive,
  onSubmit = () => {},
  organizationType,
}) {
  const [businessName, setBusinessName] = useState("")

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      onSubmit(businessName)
    },
    [businessName]
  )

  if (!isActive) return
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-[17px]">
          <FormHeading>Welcome to RunShifts</FormHeading>
          <AuthInputAndLabel
            labelText={`What is ${
              organizationType === "for-profit"
                ? "your organization's name?"
                : "your non-profit called?"
            }`}
            inputProps={{
              value: businessName,
              onChange: (e) => setBusinessName(e.target.value),
              required: true,
              type: "text",
              placeholder: `${
                organizationType === "for-profit"
                  ? "Business name"
                  : "Non-profit name"
              }`,
              min: 4,
            }}
          />
        </div>
        <SubmitButton type="submit">Next</SubmitButton>
      </form>
    </>
  )
}
