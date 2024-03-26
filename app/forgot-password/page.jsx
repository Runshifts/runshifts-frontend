"use client"
import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import SocialProviders from "../_components/Auth/SocialProviders"
import useAxios from "../_hooks/useAxios"
import AuthLayout from "../_components/Auth/Layout"
import AuthInputAndLabel, { SubmitButton } from "../_components/Auth/Inputs"
import FormHeading, { SubHeadingText } from "../_components/Auth/Heading"
import { IoMailOutline } from "react-icons/io5"
import toast from "react-hot-toast"

function Reset() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [email, setEmail] = useState("")
  const fetchData = useAxios()

  const handleRequestReset = useCallback(
    async (e) => {
      e.preventDefault()
      if (loading) return
      if (!email.trim())
        return toast.error("Please provide your email address", {
          position: "top-left",
          className: "mx-[8%]",
        })
      setLoading(true)
      const res = await fetchData("/users/request-password-reset", "post", {
        email,
      })
      if (res.statusCode === 200) {
        sessionStorage.setItem("email", email)
        router.push("/confirm-reset")
        toast.success(
          res.message || "Reset instructions have been sent to your email."
        )
      } else
        toast.error(
          res.message ||
            "Something went wrong. Please try again at a later time"
        )
      setLoading(false)
    },
    [email, fetchData, router, loading]
  )

  return (
    <>
      <AuthLayout bgClassName="bg-[url(/img/forgot_password.png)]">
        <>
          <form onSubmit={handleRequestReset} className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <FormHeading>Let&apos;s reset your password</FormHeading>
              <SubHeadingText>
                Please provide your email to reset your password
              </SubHeadingText>
            </div>
            <AuthInputAndLabel
              labelText="Email address"
              inputProps={{
                name: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                required: true,
                type: "email",
              }}
              icon={<IoMailOutline size={20} />}
            />
            <SubmitButton
              type="submit"
              isDisabled={loading}
              isLoading={loading}
              loadingText="Hang on..."
            >
              Request reset
            </SubmitButton>
          </form>
        </>
      </AuthLayout>
    </>
  )
}

export default Reset
