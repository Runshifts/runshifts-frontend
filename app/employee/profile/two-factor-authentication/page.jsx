"use client"

import Image from "next/image"
import React from "react"
import qrcode from "./qrcode.png"
import Verify from "./Verify"
import TwoFAInfoBlock from "../../../_components/ProfileSettingsComponents/TwoFAInfoBlock"

function Activate2Fa() {
  return (
    <div className="max-w-md bg-white p-8 ">
      <h1 className="text-2xl mb-6 mt-3 font-medium leading-7">Activate 2FA</h1>
      <TwoFAInfoBlock
        heading="Scan QR Code"
        text="Scan the QR Code below with your Authenticator App and provide the code generated in your Authenticator App"
      />

      <div>
        <p className="my-5 text-[#42526E] text-sm not-italic font-semibold leading-5">
          Step 1 - Scan QR code
        </p>
        <Image src={qrcode} height={200} width={200} alt="qr" />
      </div>

      <div>
        <p className="my-5 text-[#42526E] text-sm not-italic font-semibold leading-5">
          Step 2 - Provide 6 digit code
        </p>
        <Verify />
      </div>
    </div>
  )
}

export default Activate2Fa
