"use client"

import { useState, useCallback } from "react"
import AuthLayout from "../../_components/Auth/Layout"
import useAxios from "../../_hooks/useAxios"
import FormHeading from "../../_components/Auth/Heading"
import AuthInputAndLabel, { SubmitButton } from "../../_components/Auth/Inputs"
import TermsAndConditionsNotice from "../../_components/Auth/TermsAndConditionsNotice"
import { IoMailOutline } from "react-icons/io5"
import { LuShieldCheck } from "react-icons/lu"
import Link from "next/link"
import { useRouter } from "next/navigation"
import SocialProviders from "../../_components/Auth/SocialProviders"
import toast from "react-hot-toast"

export default function EmployerOrDirectorSignup({
  organizationType,
  ownerType,
}) {
  const router = useRouter()
  const fetchData = useAxios()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCreateAccount = useCallback(
    async (e) => {
      e.preventDefault()
      setLoading(true)
      const res = await fetchData("/users/employers", "post", {
        ...formData,
        type: ownerType,
      })
      if (res?.statusCode === 201) {
        sessionStorage.setItem("email", formData.email)
        router.push("/verify-email?type=employer")
      } else
        toast.error(res?.message || "Something went wrong", {
          position: "top-left",
          className: "mx-[8%]",
        })
      setLoading(false)
    },
    [formData, fetchData, ownerType, router]
  )

  return (
    <>
      <AuthLayout bgClassName="bg-[url(/img/employer_signup.png)]">
        <form onSubmit={handleCreateAccount} className="flex flex-col gap-8">
          <FormHeading>Create an account</FormHeading>
          <div className="flex flex-col gap-4">
            <AuthInputAndLabel
              labelText="Company email"
              inputProps={{
                type: "email",
                name: "email",
                onChange: handleInputChange,
                value: formData.email,
              }}
              icon={<IoMailOutline size={20} />}
            />
            <AuthInputAndLabel
              labelText="Password"
              inputProps={{
                type: "password",
                name: "password",
                onChange: handleInputChange,
                value: formData.password,
              }}
              icon={<LuShieldCheck size={20} />}
            />
            <TermsAndConditionsNotice />
          </div>

          <SubmitButton type="submit" isDisabled={loading} isLoading={loading}>
            Create account
          </SubmitButton>
          <SocialProviders accountType="employer" redirectPath="signup" />
          <p className="text-[#645D5D] font-[400] text-base">
            Already have an account?&nbsp;
            <Link
              href={`/login?type=${ownerType}`}
              className="font-[600] text-primary-500"
            >
              Login here
            </Link>
          </p>
        </form>
      </AuthLayout>
    </>
  )
}
