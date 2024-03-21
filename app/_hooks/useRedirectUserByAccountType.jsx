import { useRouter } from "next/navigation"
import { useCallback } from "react"
import toast from "react-hot-toast"

export default function useRedirectUserByAccountType() {
  const router = useRouter()
  const redirectUser = useCallback(
    (accountType) => {
      let path = getUserBasePathForDashboard(accountType)
      if (!path) {
        path = "/"
        toast.error("Invalid account type. Please contact support")
      }
      router.push(path)
    },
    [router]
  )

  return redirectUser
}
