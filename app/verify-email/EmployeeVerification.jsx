"use client"

import AuthLayout from "../_components/Auth/Layout"
import FormHeading from "../_components/Auth/Heading"
import { AuthLabelText, SubmitButton } from "../_components/Auth/Inputs"
import PinInput from "../_components/AppComps/PinInput"
import useHandlePinInputState from "../_hooks/useHandlePinInputState"

function EmployeeVerification({ handleSubmit, loading }) {
  const {
    pinInputState,
    pinInputStateBoxReference,
    handleBackspaceAndEnter,
    handleChange,
    handlePaste,
  } = useHandlePinInputState({ pinLength: 6 })

  return (
    <>
      <AuthLayout bgClassName="bg-[url(/img/employee_verify_email.png)]">
        <form
          onSubmit={(e) => handleSubmit(e, pinInputState)}
          className="flex flex-col gap-8"
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
          </div>
          <SubmitButton type="submit" isDisabled={loading} isLoading={loading}>
            Verify email
          </SubmitButton>
        </form>
      </AuthLayout>
    </>
  )
}

export default EmployeeVerification
