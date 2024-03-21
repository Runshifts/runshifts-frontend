"use client"

import React, { useCallback, useContext, useState, Suspense } from "react"
import { redirect, useRouter, useSearchParams } from "next/navigation"
import SocialProviders from "../_components/Auth/SocialProviders"
import { LoadingContext } from "../_providers/LoadingProvider"
import Link from "next/link"
import useAxios from "../_hooks/useAxios"
import AuthLayout from "../_components/Auth/Layout"
import AuthInputAndLabel, { SubmitButton } from "../_components/Auth/Inputs"
import FormHeading from "../_components/Auth/Heading"
import { IoMailOutline } from "react-icons/io5"
import { LuShieldCheck } from "react-icons/lu"
import toast from "react-hot-toast"
import useRedirectUserByAccountType from "../_hooks/useRedirectUserByAccountType"

const LoginForm = () => {
  const redirectUser = useRedirectUserByAccountType()
  const searchParams = useSearchParams()
  const { loading, updateLoading } = useContext(LoadingContext)
  const fetchData = useAxios()
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState(null)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault()
      updateLoading(true)
      const res = await fetchData(`/users/login`, "post", formData)
      if (res.statusCode === 200) {
        setFormData({
          email: "",
          password: "",
        })
        setError(null)
        localStorage.setItem("token", res.token)
        localStorage.setItem("user", JSON.stringify(res.user))
        redirectUser(res.user.type)
      } else if (res.statusCode === 302) {
        sessionStorage.setItem("email", formData.email)
        router.push("/verify-email")
      } else {
        console.error(res.message)
        toast.error(`Error logging in: ${res.message || res.data}`, {
          position: "top-left",
          className: "mx-[8%]",
        })
      }
      updateLoading(false)
    },
    [formData, fetchData, router, updateLoading, redirectUser]
  )

  return (
    <>
      <AuthLayout bgClassName="bg-[url(/img/login.png)]">
        <>
          <form onSubmit={handleLogin} className="flex flex-col gap-8">
            <FormHeading>Welcome Back</FormHeading>
            <div className="flex flex-col gap-4">
              <AuthInputAndLabel
                labelText="Company email"
                inputProps={{
                  name: "email",
                  value: formData.email,
                  onChange: handleInputChange,
                  required: true,
                  type: "email",
                }}
                icon={<IoMailOutline size={20} />}
              />
              <AuthInputAndLabel
                labelText="Password"
                inputProps={{
                  name: "password",
                  value: formData.password,
                  onChange: handleInputChange,
                  required: true,
                  type: "password",
                }}
                icon={<LuShieldCheck size={20} />}
              />
            </div>
            <p className="text-[#645D5D] font-[400] text-base">
              Forgotten password?&nbsp;
              <Link
                href="/forgot-password"
                className="font-[600] text-primary-500"
              >
                Reset here
              </Link>
            </p>
            {error && <p className="text-red-500">{error}</p>}
            <SubmitButton
              type="submit"
              isDisabled={loading}
              isLoading={loading}
              loadingText="Logging in..."
            >
              Login
            </SubmitButton>
            <SocialProviders
              accountType={searchParams.get("type")}
              redirectPath="login"
            />
          </form>
        </>
      </AuthLayout>
    </>
  )
}

export default function Page() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
