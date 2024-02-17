import AppleIcon from "@/app/_assets/icons/Apple"
import AuthWithAppleButton from "./AuthWithAppleButton"
import SocialProviderButton from "./SocialProviderButton"
import AuthWithGoogleButton from "./AuthWithGoogleButton"
import GoogleIcon from "@/app/_assets/icons/Google"
import DividerWithCenteredText from "../DividerWithCenteredText"
import useGetAuthWithGoogle from "@/app/_hooks/useGetAuthWithGoogle"
import useGetAuthWithApple from "@/app/_hooks/useGetAuthWithApple"
import { Suspense, useCallback, useContext, useEffect, useMemo } from "react"
import { AuthLoadingContext } from "@/app/_providers/AuthLoadingProvider"
import { useSearchParams } from "next/navigation"

export default function SocialProvidersWrappedInSuspense(
  props = {
    onGoogleAuthSuccess: () => {},
    onAppleAuthSuccess: () => {},
    accountType,
    redirectPath: "",
  }
) {
  return (
    <Suspense>
      <SocialProviders {...props} />
    </Suspense>
  )
}
function SocialProviders({
  onGoogleAuthSuccess = () => {},
  onAppleAuthSuccess = () => {},
  accountType,
  redirectPath = "",
}) {
  const searchParams = useSearchParams()
  const appleAuthCode = useMemo(() => searchParams.get("code"), [searchParams])

  const { updateLoading } = useContext(AuthLoadingContext)
  const requestGoogleAuth = useGetAuthWithGoogle(accountType)
  const requestAppleAuth = useGetAuthWithApple(accountType)

  const handleGoogleAuthSuccess = useCallback(
    (data) => {
      updateLoading(true)
      requestGoogleAuth(data.access_token).finally(() => {
        onGoogleAuthSuccess(data)
        updateLoading(false)
      })
    },
    [onGoogleAuthSuccess, updateLoading, requestGoogleAuth]
  )

  const handleAppleAuthSuccess = useCallback(
    (code) => {
      updateLoading(true)
      requestAppleAuth(code).finally(() => {
        onAppleAuthSuccess(code)
        updateLoading(false)
      })
    },
    [onAppleAuthSuccess, updateLoading, requestAppleAuth]
  )

  useEffect(() => {
    if (appleAuthCode) {
      console.log(appleAuthCode)
      handleAppleAuthSuccess(appleAuthCode)
      searchParams.delete("code")
    }
  }, [searchParams, appleAuthCode, handleAppleAuthSuccess])
  return (
    <div className="flex flex-col w-full gap-8">
      <DividerWithCenteredText text="Continue with" />
      <div className="flex w-full gap-2 md:gap-3 justify-center">
        <AuthWithGoogleButton
          onSuccess={handleGoogleAuthSuccess}
          childComponent={(props) => (
            <SocialProviderButton {...props} Icon={GoogleIcon} text="Google" />
          )}
        />
        <AuthWithAppleButton
          path={redirectPath}
          onSuccess={handleAppleAuthSuccess}
          childComponent={(props) => (
            <SocialProviderButton {...props} Icon={AppleIcon} text="Apple ID" />
          )}
        />
      </div>
    </div>
  )
}
