"use client"

import React, { Suspense, useEffect, useMemo } from "react"
import companyIcon from "../_components/Assets/img/comp.png"
import user from "../_components/Assets/img/user.png"
import SignupTypeCard from "./_components/SignupTypeCard"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import Heading from "../_components/Headings"
import ErrorBoundary from "../_errorBoundaries"
import runshiftsLogo1 from "../_components/homepageComps/runshiftsLogo2.svg"
import Image from 'next/image'

const textValuesBySignupType = {
  "non-profit": {
    organization: {
      heading: "As a Non-Profit?",
      body: "Set up a new non-profit organisation",
      path: "/signup/non-profit?type=director",
    },
    staff: {
      heading: "As a volunteer?",
      body: "Create your account",
      path: "/signup/non-profit?type=volunteer",
    },
  },
  "for-profit": {
    organization: {
      heading: "As an organization?",
      body: "Set up a new organization",
      path: "/signup/for-profit?type=employer",
    },
    staff: {
      heading: "As an employee?",
      body: "Create your account",
      path: "/signup/for-profit?type=employee",
    },
  },
}
const Home = () => {
  const router = useRouter()
  const query = useSearchParams()
  const signupType = useMemo(() => {
    return query.get("type")
  }, [query])

  useEffect(() => {
    if (
      !signupType ||
      (signupType !== "non-profit" && signupType !== "for-profit")
    )
      router.push("/")
  }, [signupType, router])

  return (
    <div className="bg-white xl:bg-[url(/img/homepage.png)] h-screen bg-cover bg-center flex flex-col xl:flex-row items-center xl:justify-end ">
      <Image src={runshiftsLogo1} alt='logo' height={47} width={163} className='block my-6 xl:hidden'/>
      <div className="border mx-6 rounded-xl xl:border-none">
      <div className="flex flex-col gap-4 px-6 md:px-8 py-[24px] bg-white rounded-[16px] w-[90dvw] max-w-[534px] xl:py-[64px]">
        <div className="text-gray-800 gap-8 flex flex-col">
          <Heading
            as="h1"
            size="base"
            className="text-[40px] leading-[48px] font-[600] text-[#1B1818] text-center xl:text-left"
          >
            Sign up
          </Heading>
          <SignupTypeCard
            heading={textValuesBySignupType[signupType]?.organization.heading}
            body={textValuesBySignupType[signupType]?.organization.body}
            imageSrc={companyIcon}
            onClick={() =>
              router.push(textValuesBySignupType[signupType]?.organization.path)
            }
          />
          {/* <SignupTypeCard
            heading={textValuesBySignupType[signupType]?.staff.heading}
            body={textValuesBySignupType[signupType]?.staff.body}
            imageSrc={user}
            onClick={() =>
              router.push(textValuesBySignupType[signupType]?.staff.path)
            }
          /> */}
        </div>

        <p className="text-center text-[#645D5D] text-base">Or</p>

        <Link
          className="bg-primary-500 text-white text-base leading-[145%] font-[600] text-center rounded-md w-full px-6 py-4"
          href="/login"
        >
          Login
        </Link>
      </div>
      </div>
    </div>
  )
}

function Page() {
  return (
    <ErrorBoundary>
      <SignupViewsWrappedInSuspense />
    </ErrorBoundary>
  )
}
function SignupViewsWrappedInSuspense() {
  return (
    <Suspense>
      <Home />
    </Suspense>
  )
}

export default Page
