"use client"

import { useState, useEffect, useCallback } from "react"
import { IoMailOutline } from "react-icons/io5"
import { LuShieldCheck } from "react-icons/lu"
import { TbBuildingSkyscraper } from "react-icons/tb"
import Link from "next/link"
import { useRouter } from "next/navigation"
import AuthLayout from "../_components/Auth/Layout"
import useAxios from "../_hooks/useAxios"
import FormHeading from "../_components/Auth/Heading"
import AuthInputAndLabel, { SubmitButton } from "../_components/Auth/Inputs"
import Dropdown from "../_components/AppComps/Dropdown"
import { Option } from "../_components/AppComps/Select"
import TermsAndConditionsNotice from "../_components/Auth/TermsAndConditionsNotice"

function Signup() {
  const fetchData = useAxios()
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    organizationId: "",
  })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setError("")
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() })
  }

  const handleCreateAccount = useCallback(
    async (e) => {
      e.preventDefault()
      const formDataKeys = Object.keys(formData)
      if (formDataKeys.some((key) => formData[key].length === 0)) {
        setError("All fields are required")
        return
      }
      setLoading(true)
      const data = await fetchData("/users/employees", "post", formData)
      if (data.statusCode === 201) {
        sessionStorage.setItem("email", formData.email)
        router.push("/verify-email?type=employee")
      } else setError(data.message)
      setLoading(false)
    },
    [formData, fetchData, router]
  )
  return (
    <>
      <AuthLayout bgClassName="bg-[url(/img/employee_signup.png)]">
        <form onSubmit={handleCreateAccount} className="flex flex-col gap-8">
          <FormHeading>Lets get you setup with RunShifts</FormHeading>
          {error && <p className="text-red-500 text-center my-2">{error}</p>}
          <div className="flex flex-col gap-4">
            <OrganizationInput
              selectedId={formData.organizationId}
              handleOrganizationSelect={(org) =>
                setFormData((prev) => ({
                  ...prev,
                  organizationId: org?._id || "",
                }))
              }
            />
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

          <SubmitButton
            type="submit"
            isDisabled={loading}
            isLoading={loading}
            loadingText="Loading"
          >
            Create account
          </SubmitButton>

          <p className="text-[#645D5D] font-[400] text-base">
            Already have an account?&nbsp;
            <Link
              href="/login?type=employee"
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

export default Signup

function OrganizationInput({ handleOrganizationSelect, selectedId }) {
  const fetchData = useAxios()
  const [organizationName, setOrganizationName] = useState("")
  const [organizations, setOrganizations] = useState([])
  const [loadingOrgSearch, setLoadingOrgSearch] = useState(false)
  const handleCompanyNameChange = useCallback(
    (e) => {
      setOrganizationName((prev) => {
        if (e.target.value.length < prev.length && selectedId?.length > 0)
          return ""
        else return e.target.value
      })
      if (e.target.value.trim().length > 0) {
        handleOrganizationSelect(null)
        setLoadingOrgSearch(true)
      }
    },
    [selectedId]
  )

  const makeOrganizationsSearch = useCallback(
    async (searchText) => {
      const data = await fetchData(
        `/organizations?search=${searchText}&limit=20`,
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
      organizationName.trim().length > 0 &&
        makeOrganizationsSearch(organizationName.trim())
      organizationName.trim().length === 0 && setOrganizations([])
    }, 500)
    return () => clearTimeout(delayOrganizationSearchTimerId)
  }, [organizationName, makeOrganizationsSearch])

  return (
    <Dropdown
      dropDownTrigger={
        <AuthInputAndLabel
          labelText="Company name"
          inputProps={{
            value: organizationName,
            onChange: handleCompanyNameChange,
            name: "organizationName",
            autoComplete: "off",
          }}
          icon={<TbBuildingSkyscraper size={20} />}
        />
      }
      dropdownContent={
        <div className="relative w-full z-[20]">
          {organizations.length === 0 &&
            organizationName.length > 0 &&
            loadingOrgSearch === false && (
              <p className="text-center px-4 py-[6px]">
                Couldn&apos;t find your organization
              </p>
            )}
          {loadingOrgSearch === true && organizationName.length > 0 && (
            <p className="px-4 py-[6px]">Loading...</p>
          )}
          {organizations.map((org) => (
            <Option
              key={org._id}
              onClick={() => {
                handleOrganizationSelect(org)
                setOrganizationName(org.name)
              }}
            >
              {org.name}
            </Option>
          ))}
        </div>
      }
    />
  )
}
