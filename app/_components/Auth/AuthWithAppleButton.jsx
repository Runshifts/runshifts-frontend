"use client"
import { useCallback } from "react"
import { appleAuthHelpers, useScript } from "react-apple-signin-auth"

// import AppleLogin from "react-apple-login"

// export default function AuthWithAppleButton({ childComponent = () => <></>, onSuccess, path= "" }) {
//   return (
//     <AppleLogin
//       clientId={process.env.NEXT_PUBLIC_APPLE_CLIENT_ID}
//       redirectURI={`${process.env.NEXT_PUBLIC_BASE_URI}/${path}`}
//       callback={onSuccess}
//       usePopup
//       scope="email name"
//       responseMode="query"
//       render={childComponent}
//     />
//   )
// }

export default function AuthWithAppleButton({
  childComponent = () => <></>,
  onSuccess,
  path = "",
}) {
  useScript(
    "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"
  )

  const authOptions = {
    clientId: process.env.NEXT_PUBLIC_APPLE_CLIENT_ID,
    scope: "email name",
    redirectURI: `${process.env.NEXT_PUBLIC_BASE_URI}/${path}`,
    /** State string that is returned with the apple response */
    state: "employer",
    usePopup: false,
  }

  const handleClick = useCallback(async () => {
    console.log("kjhgfddfghj")
    try {
      const response = await appleAuthHelpers.signIn({
        authOptions,
        onError: (error) => console.error(error),
      })

      if (response) {
        console.log(response)
      } else {
        console.error("Error performing apple signin.", response)
      }
    } catch (err) {
      console.log("\n\n\n\n\nn\n\nn\n\n\n\n\n\n\n\nn\n\n")
      console.log("Apple Auth error", err)
    }
  }, [authOptions,])
  return <>{childComponent({ onClick: handleClick })}</>
}
