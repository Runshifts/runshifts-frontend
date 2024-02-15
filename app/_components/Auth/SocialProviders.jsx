import AppleIcon from "@/app/_assets/icons/Apple"
import AuthWithAppleButton from "./AuthWithAppleButton"
import SocialProviderButton from "./SocialProviderButton"
import AuthWithGoogleButton from "./AuthWithGoogleButton"
import GoogleIcon from "@/app/_assets/icons/Google"
import DividerWithCenteredText from "../DividerWithCenteredText"

export default function SocialProviders() {
  return (
    <div className="flex flex-col w-full gap-8">
      <DividerWithCenteredText text="Continue with" />
      <div className="flex w-full gap-3">
        <AuthWithGoogleButton
          childComponent={(props) => (
            <SocialProviderButton {...props} Icon={GoogleIcon} text="Google" />
          )}
        />
        <AuthWithAppleButton
          childComponent={(props) => (
            <SocialProviderButton {...props} Icon={AppleIcon} text="Apple ID" />
          )}
        />
      </div>
    </div>
  )
}
