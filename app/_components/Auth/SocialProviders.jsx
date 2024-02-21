import AppleIcon from "../_assets/icons/Apple"
import AuthWithAppleButton from "./AuthWithAppleButton"
import SocialProviderButton from "./SocialProviderButton"
import AuthWithGoogleButton from "./AuthWithGoogleButton"
import GoogleIcon from "../_assets/icons/Google"
import DividerWithCenteredText from "../DividerWithCenteredText"
import useGetAuthWithGoogle from "../_hooks/useGetAuthWithGoogle"
import useGetAuthWithApple from "../_hooks/useGetAuthWithApple"
import { Suspense, useCallback, useContext, useEffect, useMemo } from "react"
import { LoadingContext } from "../_providers/LoadingProvider"
import { useSearchParams } from "next/navigation"
import ErrorBoundary from "../_errorBoundaries"

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

  const { updateLoading } = useContext(LoadingContext)
  const requestGoogleAuth = useGetAuthWithGoogle(accountType)
  const requestAppleAuth = useGetAuthWithApple(accountType)

  const handleGoogleAuthSuccess = useCallback(
    (data) => {
      updateLoading(true)
      requestGoogleAuth(data.access_token)
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          onGoogleAuthSuccess(data)
          updateLoading(false)
        })
    },
    [onGoogleAuthSuccess, updateLoading, requestGoogleAuth]
  )

  const handleAppleAuthSuccess = useCallback(
    (code) => {
      updateLoading(true)
      requestAppleAuth(code)
        .catch((err) => console.log("appleauth", err))
        .finally(() => {
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
    }
  }, [searchParams, appleAuthCode, handleAppleAuthSuccess])
  return (
    <div className="flex flex-col w-full gap-8">
      <DividerWithCenteredText text="Continue with" />
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <div className="flex w-full gap-2 md:gap-3 justify-center">
          <AuthWithGoogleButton
            onSuccess={handleGoogleAuthSuccess}
            childComponent={(props) => (
              <SocialProviderButton
                {...props}
                Icon={GoogleIcon}
                text="Google"
              />
            )}
          />
          <AuthWithAppleButton
            path={redirectPath}
            onSuccess={handleAppleAuthSuccess}
            childComponent={(props) => (
              <SocialProviderButton
                {...props}
                Icon={AppleIcon}
                text="Apple ID"
              />
            )}
          />
        </div>
      </ErrorBoundary>
    </div>
  )
}
