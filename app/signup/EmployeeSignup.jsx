"use client"

import { useState, useEffect, useCallback } from "react"
import { IoMailOutline } from "react-icons/io5"
import { LuShieldCheck } from "react-icons/lu"
import { FaRegEyeSlash, FaApple } from "react-icons/fa"
import { TbBuildingSkyscraper } from "react-icons/tb"
import { FcGoogle } from "react-icons/fc"
import Link from "next/link"
import { useRouter } from "next/navigation"
import useAxios from "../_hooks/useAxios"
import useOutsideClick from "../_hooks/useOutsideClick"

function Signup() {
  const fetchData = useAxios()
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    organizationId: "",
  })
  const [organizationName, setOrganizationName] = useState("")
  const [organizations, setOrganizations] = useState([])
  const [showOrgSearchDropdown, setShowOrgSearchDropdown] = useState(false)
  const [loadingOrgSearch, setLoadingOrgSearch] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const organizationListRef = useOutsideClick(() => setShowOrgSearchDropdown(false))

  const handleCompanyNameChange = useCallback((e) => {
    setError("")
    setOrganizationName(prev => {
      if(e.target.value.length < prev.length && formData.organizationId.length > 0) return ""
      else return e.target.value
    })
    if(e.target.value.trim().length > 0){
    setFormData(prev => ({ ...prev, organizationId: ""}))
    setLoadingOrgSearch(true)
    if(e.target.value.length === 0) setShowOrgSearchDropdown(false)
    else setShowOrgSearchDropdown(true)
    }
  }, [formData.organizationId])

  const handleInputChange = (e) => {
    setError("")
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() })
  }

  const handleCreateAccount = useCallback(async (e) => {
    e.preventDefault()
    const formDataKeys = Object.keys(formData)
    if(formDataKeys.some(key => formData[key].length === 0)){
      setError("All fields are required")
      return
    }
    setLoading(true)
    const data = await fetchData("http://localhost:2024/api/v1/users/employees", "post", formData)
    if(data.statusCode === 201){
      sessionStorage.setItem("email", formData.email)
      router.push("/verify-email")
    }else setError(data.message)
    setLoading(false)
  }, [formData, fetchData, router])

  const makeOrganizationsSearch = useCallback(
    async (searchText) => {
      const data = await fetchData(
        `http://localhost:2024/api/v1/organizations?search=${searchText}&limit=20`,
        "get"
      )    
      if (data.statusCode === 200) setOrganizations(data.results)
      else setOrganizations([])
      setLoadingOrgSearch(false)
    },
    [fetchData]
  )

  useEffect(() => {
    const delayOrganizationSearchTimerId = setTimeout(() => {
      organizationName.trim().length > 0 && makeOrganizationsSearch(organizationName.trim())
      organizationName.trim().length === 0 && setOrganizations([])
    }, 500)
    return () => clearTimeout(delayOrganizationSearchTimerId)
  }, [organizationName, makeOrganizationsSearch])

  return (
    <>
      <div className="">
        <div className="login-bg min-h-screen bg-cover bg-center flex items-center justify-start">
          <div className="mx-auto mr-4 pr-2 md:pl-8 ml-8 pt-8">
            <div className="w-full max-w-[430px]">
              <form
                onSubmit={handleCreateAccount}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <h1 className="py-4 text-3xl font-semibold leading-12 tracking-tight text-left text-[#1B1818]">
                  Create an account for employee
                </h1>
                {error && (
                  <p className="text-red-500 text-center my-2">{error}</p>
                )}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="text"
                  >
                    Company name
                  </label>
                  <div class="relative">
                    <input
                      type="text"
                      name="organizationName"
                      autoComplete="off"
                      value={organizationName}
                      onChange={handleCompanyNameChange}
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                    />
                    {showOrgSearchDropdown && (
                      <ul
                        ref={organizationListRef}
                        className="w-full bg-white absolute z-[10] shadow-md max-h-[400px] overflow-auto top-[125%] right-0 left-0 p-4"
                      >
                        {organizations.length > 0 &&
                          loadingOrgSearch === false && (
                            <>
                              {organizations.map((org) => (
                                <li key={org._id}>
                                  <button
                                    onClick={() => {
                                      setFormData((prev) => ({
                                        ...prev,
                                        organizationId: org._id,
                                      }))
                                      setShowOrgSearchDropdown(false)
                                      setOrganizationName(org.name)
                                    }}
                                    type="button"
                                    className="block my-2 hover:bg-green-300/10 py-2 w-full text-left px-3 pr-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                                  >
                                    {org.name}
                                  </button>
                                </li>
                              ))}
                            </>
                          )}
                        {organizations.length === 0 &&
                          organizationName.length > 0 &&
                          loadingOrgSearch === false && (
                            <p className="text-center">
                              Couldn&apos;t find your organization
                            </p>
                          )}
                        {loadingOrgSearch === true &&
                          organizationName.length > 0 && <p>Loading...</p>}
                      </ul>
                    )}
                    <div
                      className="absolute top-[15px] left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
                    >
                      <TbBuildingSkyscraper />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="email"
                  >
                    Company email
                  </label>
                  <div class="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
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
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                    />
                    <div className="absolute inset-y-0 left-[10px] flex items-center">
                      <div className="mr-2">
                        <LuShieldCheck />
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-[10px] flex items-center">
                      <div className="ml-2">
                        <FaRegEyeSlash />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
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
                    disabled={loading}
                    className={`${
                      loading ? "bg-[#7ED957]/50 cursor-not-allowed" : "bg-[#7ED957] cursor-pointer"
                    } text-white rounded-md w-full p-2 my-4`}
                  >
                    {loading ? "Loading..." : "Create account"}
                  </button>
                </div>
                <p className="text-gray-700 font-bold text-sm pl-3 text-center">
                  or
                </p>

                <p className="text-center text-gray-400">Continue with</p>

                <div className="flex justify-around items-center mt-5 mb-2 ">
                  <div className="border rounded-md flex items-center justify-around py-2 px-3">
                    <FcGoogle />
                    <p className="text-gray-700 font-bold text-sm pl-3">
                      Google
                    </p>
                  </div>
                  <div className="border rounded-md flex items-center justify-center py-2 px-3">
                    <FaApple />
                    <p className="text-gray-700 font-bold text-sm pl-3">
                      AppleID
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 font-semibold text-sm pl-3 mt-5">
                  Already have an account?{" "}
                  <span className="text-[#7ED957]">
                    <Link href="/login">Login here</Link>
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
