"use client"

import React, { useCallback, useContext, useState } from "react"
import { useRouter } from "next/navigation"
import SocialProviders from "../_components/Auth/SocialProviders"
import { AuthLoadingContext } from "../_providers/AuthLoadingProvider"
import FormCard from "../_components/Auth/FormCard"
import Link from "next/link"
import useAxios from "../_hooks/useAxios"

const LoginForm = () => {
  const { loading, updateLoading } = useContext(AuthLoadingContext)
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
      const res = await fetchData(
        "http://localhost:2024/api/v1/users/login",
        "post",
        formData
      )
      if (res.statusCode === 200) {
        setFormData({
          email: "",
          password: "",
        })
        setError(null)
        localStorage.setItem("token", res.token)
        localStorage.setItem("user", res.user)
        router.push(
          res.user.type === "employer"
            ? "/organization"
            : "/organization?change to employee when it is ready"
        )
      } else if (res.statusCode === 302) router.push("/verify-email")
      else {
        console.error(res.message)
        setError(`Error logging in ${res.message || res.data}`)
      }
      updateLoading(false)
    },
    [formData, fetchData, router, updateLoading]
  )

  return (
    <>
      <div className="relative login-bg h-screen bg-cover bg-center flex items-center justify-start">
        <div className="absolute w-[90dvw] top-1/2 left-[5%] -translate-y-1/2 w-full">
          <FormCard headingText="Welcome Back">
            <form
              onSubmit={handleLogin}
              className="flex flex-col items-stretch gap-8"
            >
              <div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-semibold mb-2"
                  >
                    Company email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-semibold mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
              </div>
              <p className="font-normal text-[#645D5D] font-base flex gap-[4px]">
                Forgotten password?
                <Link
                  className="text-primary-500 font-semibold hover:underline"
                  href="/forgot-password"
                >
                  Reset here
                </Link>
              </p>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="bg-primary-500 text-white w-full p-4 rounded-lg focus:outline-none hover:bg-primary-600"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
              <SocialProviders />
            </form>
          </FormCard>
        </div>
      </div>
    </>
  )
}

export default LoginForm
