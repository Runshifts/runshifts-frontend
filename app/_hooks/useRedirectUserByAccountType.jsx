import { usePathname, useRouter } from "next/navigation"
import { useCallback } from "react"
import toast from "react-hot-toast"
import { getUserBasePathForDashboard } from "../_utils"

export default function useRedirectUserByAccountType() {
  const router = useRouter()
  const pathname = usePathname()
  const redirectUser = useCallback(
    (accountType) => {
      let path = getUserBasePathForDashboard(accountType)
      if (!path) {
        path = "/"
        toast.error("Invalid account type. Please contact support")
      }
      if (pathname.startsWith(path) === false) router.push(path)
    },
    [router, pathname]
  )

  return redirectUser
}
