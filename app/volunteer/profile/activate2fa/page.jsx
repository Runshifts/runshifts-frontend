'use client'

import React from 'react'
import { PiWarningCircleFill } from "react-icons/pi";
import Verify from './Verify';
import QrCode from './QrCode'

function Activate2Fa() {
  return (
<div className="max-w-md bg-white p-8 ">
      <h1 className="custom-h1">Activate 2FA</h1>  

      <div className="flex bg-[#DEEBFF] p-4 items-start justify-center">
      <div className="text-[#0747A6] mr-5">
      <PiWarningCircleFill className=" h-[24px] w-[24px]" />
      </div>
      <div>
        <p className="text-base not-italic font-thin leading-5">Google Authenticator</p>
        <p className="text-[#172B4D] text-xs not-italic font-normal leading-5">Scan the QR Code below with your Authenticator App and provide the code generated in your Authenticator App</p>
      </div>
    </div>

<div>
  <p className='my-5 text-[#42526E] text-sm not-italic font-semibold leading-5'>Step 1 - Scan QR code</p>
<QrCode />
</div>

<div>
<p className='my-5 text-[#42526E] text-sm not-italic font-semibold leading-5'>Step 2 - Provide 6 digit code</p>
<Verify />
</div>
    </div>
  )
}

export default Activate2Fa
