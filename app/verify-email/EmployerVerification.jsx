"use client"

import AuthLayout from "../_components/Auth/Layout"
import FormHeading from "../_components/Auth/Heading"
import { AuthLabelText, SubmitButton } from "../_components/Auth/Inputs"
import PinInput from "../_components/AppComps/PinInput"
import useHandlePinInputState from "../_hooks/useHandlePinInputState"
import { useCallback, useState } from "react"
import useAxios from "../_hooks/useAxios"
import USER_URLS from "../_urls/userURLs"
import toast, { LoaderIcon } from "react-hot-toast"
import { Timer } from "../_hooks/useCountDown"
import runshiftsLogo1 from "../_components/homepageComps/runshiftsLogo2.svg"
import Image from 'next/image'

function EmployerVerification({ handleSubmit, loading }) {
  const [countDownTime, setCountDownTime] = useState(0)
  const [resendingCode, setResendingCode] = useState(false)
  const {
    pinInputState,
    pinInputStateBoxReference,
    handleBackspaceAndEnter,
    handleChange,
    handlePaste,
  } = useHandlePinInputState({ pinLength: 6 })

  const fetchData = useAxios()

  const resendCode = useCallback(async () => {
    if (countDownTime) {
      return
    }
    setResendingCode(true)
    const res = await fetchData(USER_URLS.resendVerificationEmail(), "post", {
      email: sessionStorage.getItem("email"),
    })
    if (res.statusCode === 200) {
      const enableResendCodeTime = new Date(Date.now())
      enableResendCodeTime.setMinutes(enableResendCodeTime.getMinutes() + 3)
      setCountDownTime((enableResendCodeTime.getTime() - Date.now()) / 1000)
      toast.success(
        res.message ||
          "A new verification code has been sent to your email address"
      )
    } else {
      toast.error(
        res.message ||
          "Unable to resend the verification code, something went wrong!"
      )
    }
    setResendingCode(false)
  }, [fetchData, countDownTime])

  return (
    <>
      <AuthLayout bgClassName="bg-white flex flex-col items-center justify-start xl:bg-[url(/img/employer_verify_email.png)] xl:flex-row">
      <Image src={runshiftsLogo1} alt='logo' height={47} width={163} className='block my-6 xl:hidden'/>
        <form
          onSubmit={(e) => handleSubmit(e, pinInputState)}
          className="border rounded-xl p-4 flex flex-col gap-8 xl:border-none xl:p-0"
        >
          <FormHeading>Verify Account</FormHeading>
          <div>
            <AuthLabelText>
              Input the 6 six digit code sent to your email
            </AuthLabelText>
            <PinInput
              stateBoxReference={pinInputStateBoxReference}
              state={pinInputState}
              handleBackspaceAndEnter={handleBackspaceAndEnter}
              handlePaste={handlePaste}
              handleChange={handleChange}
            />
            <button
              disabled={countDownTime || resendingCode === true}
              className="mt-2 flex items-center gap-2 text-[14px] text-info-600 disabled:cursor-not-allowed disabled:text-info-600/20 underline"
              type="button"
              onClick={() => resendCode()}
            >
              {resendingCode && <LoaderIcon />}
              {countDownTime ? (
                <span className="no-underline">
                  <Timer
                    seconds={countDownTime}
                    onEnd={() => setCountDownTime(0)}
                  />
                </span>
              ) : null}
              Resend code
            </button>
          </div>
          <SubmitButton
            type="submit"
            isDisabled={loading || pinInputState.some((it) => it.length === 0)}
            isLoading={loading}
          >
            Verify email
          </SubmitButton>
        </form>
      </AuthLayout>
    </>
  )
}

export default EmployerVerification
