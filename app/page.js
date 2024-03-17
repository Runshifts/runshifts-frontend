"use client"

import React from "react"
import companyIcon from "./_components/Assets/img/comp.png"
import user from "./_components/Assets/img/user.png"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Heading from "./_components/Headings"

const Home = () => {
  const router = useRouter()

  return (
    <div className="home-bg h-screen bg-cover bg-center flex items-center px-[8%] justify-end">
      <div className="flex flex-col gap-4 px-6 md:px-8 py-[64px] bg-white rounded-[16px] w-[90dvw] max-w-[534px]">
        <div className="text-gray-800 gap-8 flex flex-col">
          <Heading
            as="h1"
            size="base"
            className="text-[40px] leading-[48px] font-[600] text-[#1B1818]"
          >
            Sign up
          </Heading>
          <SignupType
            heading="As an organization?"
            body="Set up a new organization"
            imageSrc={companyIcon}
            onClick={() => router.push("/signup?type=employer")}
          />
          <SignupType
            heading="As an employee?"
            body="Create your account"
            imageSrc={user}
            onClick={() => router.push("/signup?type=employee")}
          />
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
  )
}

export default Home

function SignupType({ imageSrc, heading, body, onClick }) {
  return (
    <div
      className="border border-[#B8B8B8] rounded-md hover:shadow-md transition-all flex items-center gap-[15px] px-[12px] py-[18px] md:py-[24px] md:px-[42px] cursor-pointer text-left"
      name="signupType"
      value="employer"
      onClick={onClick}
    >
      <Image height={64} width={64} src={imageSrc} alt="" className="" />
      <div>
        <h3 className="text-base md:text-[24px] leading-[150%] text-[#000000CC] font-medium leading-9 tracking-tighter">
          {heading}
        </h3>
        <p className="text-[12px] md:text-base text-[#000000CC] font-sm leading-6 tracking-tighter">{body}</p>
      </div>
    </div>
  )
}
