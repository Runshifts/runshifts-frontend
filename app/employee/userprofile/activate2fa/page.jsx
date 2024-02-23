'use client'

import Image from 'next/image';
import React from 'react'
import { PiWarningCircleFill } from "react-icons/pi";
// import QRCode from 'react-qr-code';
import qrcode from './qrcode.png'
import Verify from './Verify';

function Activate2Fa() {
  return (
<div className="max-w-md bg-white p-8 ">
      <h1 className="text-2xl mb-6 mt-3 font-medium leading-7">Activate 2FA</h1>  

      <div className="flex bg-[#DEEBFF] p-4 items-start justify-center">
      <div className="text-[#0747A6] mr-5">
      <PiWarningCircleFill />
      </div>
      <div>
        <p className="text-base not-italic font-thin leading-5">Google Authenticator</p>
        <p className="text-[#172B4D] text-sm not-italic font-normal leading-5">You have linked your account to Google Authenticator.</p>
      </div>
    </div> 

<div>
  <p className='my-5 text-[#42526E] text-sm not-italic font-semibold leading-5'>Step 1 - Scan QR code</p>
<Image src={qrcode} height={200} width={200} alt='qr' />    
</div>

<div>
<p className='my-5 text-[#42526E] text-sm not-italic font-semibold leading-5'>Step 2 - Provide 6 digit code</p>
<Verify />
</div>
    </div>
  )
}

export default Activate2Fa
