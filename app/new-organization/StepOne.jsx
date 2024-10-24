"use client"
import React, { useCallback, useState } from "react"
import FormHeading from "../_components/Auth/Heading"
import AuthInputAndLabel, { SubmitButton } from "../_components/Auth/Inputs"
import runshiftsLogo1 from "../_components/homepageComps/runshiftsLogo2.svg"
import Image from 'next/image'
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
    [businessName, onSubmit]
  )

  if (!isActive) return
  return (
    <>
          <Image src={runshiftsLogo1} alt='logo' height={47} width={163} className='block my-6 xl:hidden'/>
      <form onSubmit={handleSubmit} className="border rounded-xl p-4 flex flex-col gap-8 xl:border-none xl:p-0">
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
