"use client"

import React, { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import useAxios from "../_hooks/useAxios"
import AuthLayout from "../_components/Auth/Layout"
import AuthInputAndLabel, { SubmitButton } from "../_components/Auth/Inputs"
import FormHeading, { SubHeadingText } from "../_components/Auth/Heading"
import { LuShieldCheck } from "react-icons/lu"
import toast from "react-hot-toast"

const toastOptions = { position: "top-left", className: "mx-[8%]", duration: 3000 }
function ChangePassword() {
  const router = useRouter()

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const fetchData = useAxios()

  const isFormDataValid = useCallback(() => {
    let errorMessage
    if (!password || !confirmPassword)
      errorMessage = "Please fill in both password and confirm password fields"
    if (password !== confirmPassword)
      errorMessage = "Password and confirm password do not match"
    errorMessage && toast.error(errorMessage, toastOptions)
    return errorMessage ? false : true
  }, [password, confirmPassword])

  const handleChangePassword = useCallback(
    async (e) => {
      e.preventDefault()
      const canProceed = isFormDataValid()
      if (!canProceed) return
      if (loading) return
      setLoading(true)
      const res = await fetchData("/users/reset-password", "post", {
        newPassword: password,
        email: sessionStorage.getItem("email"),
        passwordResetCode: sessionStorage.getItem("passwordResetCode"),
      })
      if (res.statusCode === 200) {
        toast.success(res.message)
        router.push("/login")
      } else toast.error(res.message || "Error changing password", toastOptions)
      setLoading(false)
    },
    [password, confirmPassword, router, fetchData, isFormDataValid, loading]
  )

  return (
    <AuthLayout bgClassName="bg-[url(/img/reset_password.png)]">
      <>
        <form onSubmit={handleChangePassword} className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <FormHeading>Change your password</FormHeading>
            <SubHeadingText>Create a new password</SubHeadingText>
          </div>
          <div className="flex flex-col gap-4">
            <AuthInputAndLabel
              labelText="Password"
              inputProps={{
                name: "password",
                value: password,
                onChange: (e) => setPassword(e.target.value),
                required: true,
                type: "password",
              }}
              icon={<LuShieldCheck size={20} />}
            />
            <AuthInputAndLabel
              labelText="Confirm password"
              inputProps={{
                name: "confirmPassword",
                value: confirmPassword,
                onChange: (e) => setConfirmPassword(e.target.value),
                required: true,
                type: "password",
              }}
              icon={<LuShieldCheck size={20} />}
            />
          </div>
          <SubmitButton
            type="submit"
            isDisabled={loading}
            isLoading={loading}
            loadingText="Changing password..."
          >
            Change password
          </SubmitButton>
        </form>
      </>
    </AuthLayout>
  )
}

export default ChangePassword
