"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import AuthLayout from "../_components/Auth/Layout"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"

const backgrounds = {
  1: "bg-[url(/img/create_organization_step_one.png)]",
  2: "bg-[url(/img/create_organization_step_two.png)]",
  3: "bg-[url(/img/create_organization_step_three.png)]",
}

function Welcome() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <>
      <AuthLayout
        bgClassName={backgrounds[currentStep]}
        cardMaxW="max-w-[600px]"
      >
        <div className="flex flex-col gap-[17px]">
          <p className="uppercase text-base text-[#101928] leading-[150%]">
            Step {currentStep} of 3
          </p>
          <StepOne
            isActive={currentStep === 1}
            onSubmit={(name) => {
              console.log(name)
              sessionStorage.setItem("businessName", name)
              setCurrentStep(2)
            }}
          />
          <StepTwo
            isActive={currentStep === 2}
            onSubmit={(organization) => {
              localStorage.setItem("organization", JSON.stringify(organization))
              setCurrentStep(3)
            }}
          />
          <StepThree
            isActive={currentStep === 3}
            onSubmit={() => router.push("/welcome")}
          />
        </div>
      </AuthLayout>
    </>
  )
}

export default Welcome
