"use client"
import { useState } from "react"
import { IoMailOutline } from "react-icons/io5"
import { LuShieldCheck } from "react-icons/lu"
import { FaRegEyeSlash } from "react-icons/fa"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import SocialProviders from "../_components/Auth/SocialProviders"

function Signup() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCreateAccount = async (e) => {
    e.preventDefault()
    setLoading(true)

    const URL = "/users/employers"
    let data

    try {
      const response = await axios.post(URL, formData)
      console.log(response)
      data = response.data
    } catch (err) {
      console.error(
        "Error creating account:",
        err.message || err.response?.data
      )
      data = err.response?.data || {}
    } finally {
      setLoading(false)
    }

    if (data?.statusCode === 201) {
      console.log("successful response", data)
      sessionStorage.setItem("email", formData.email)
      router.push("/verify-email")
    } else {
      console.log("bad response", data)
    }
  }

  return (
    <>
      <div className="">
        <div className="create-bg h-screen bg-cover bg-center flex items-center justify-start">
          <div className="mx-auto mr-4 pr-2 md:pl-8 ml-8 pt-8">
            <div className="w-full max-w-sm ">
              <form
                onSubmit={handleCreateAccount}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <h1 className="py-4 text-3xl font-semibold leading-12 tracking-tight text-left text-[#1B1818]">
                  Create an account
                </h1>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="email"
                  >
                    Company email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                    />
                    <div
                      className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
                    >
                      <IoMailOutline />
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <div className="mr-2">
                        <LuShieldCheck />
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <div className="ml-2">
                        <FaRegEyeSlash />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <input
                    type="checkbox"
                    name="accept"
                    checked={formData.accept}
                    onChange={handleInputChange}
                  />
                  <p className="text-gray-600 font-bold text-xs pl-3">
                    By clicking create account, you accept our{" "}
                    <span className="text-blue-500">
                      <Link href="/terms">Terms</Link>
                    </span>{" "}
                    &
                    <span className="text-blue-500">
                      <Link href="/policy">Policy</Link>
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    onClick={handleCreateAccount}
                    className="bg-[#7ED957] text-white rounded-md w-full p-2 my-4 "
                  >
                    Create account
                  </button>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <SocialProviders accountType="employer" redirectPath="signup" />
                <p className="text-gray-700 font-semibold text-sm pl-3 mt-5">
                  Already have an account?{" "}
                  <span className="text-[#7ED957]">
                    <Link href="/login?type=employer">Login here</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
