"use client"
import React, { useContext, useEffect, useMemo, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import AuthLayout from "../_components/Auth/Layout"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import { MdArrowBackIos } from "react-icons/md"
import { useSelector } from "react-redux"
import { UserContext } from "../_providers/UserProvider"

const backgrounds = {
  1: "bg-[url(/img/create_organization_step_one.png)]",
  2: "bg-[url(/img/create_organization_step_two.png)]",
  3: "bg-[url(/img/create_organization_step_three.png)]",
}

function Page() {
  const { user } = useContext(UserContext)
  const router = useRouter()
  const searchParams = useSearchParams()
  const organizationType = useMemo(
    () => searchParams.get("type"),
    [searchParams]
  )

  useEffect(() => {
    if (
      (organizationType !== "non-profit" &&
        organizationType !== "for-profit") ||
      (user && (user.type === "volunteer" || user.type === "employee"))
    ) {
      router.push("/")
    }
  }, [organizationType, router, user])

  const [currentStep, setCurrentStep] = useState(1)

  return (
    <>
      <AuthLayout
        bgClassName={backgrounds[currentStep]}
        cardMaxW="max-w-[600px]"
      >
        <div className="flex flex-col gap-[17px]">
          {currentStep === 2 && (
            <button
              onClick={() => setCurrentStep(1)}
              type="button"
              className="flex items-center justify-start gap-2 mb-3"
            >
              <MdArrowBackIos /> Back
            </button>
          )}
          <p className="uppercase text-base text-[#101928] leading-[150%]">
            Step {currentStep} of 3
          </p>
          <StepOne
            organizationType={organizationType}
            isActive={currentStep === 1}
            onSubmit={(name) => {
              console.log(name)
              sessionStorage.setItem("businessName", name)
              setCurrentStep(2)
            }}
          />
          <StepTwo
            organizationType={organizationType}
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

export default Page
