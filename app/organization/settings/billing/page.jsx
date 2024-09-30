"use client"
import React from 'react'
import SettingsTab from '../page'
import { PiWarningCircleFill } from 'react-icons/pi'

function Billing() {
  return (
    <div>
      <div className="min-w-sm w-[620px] h-[100px] mx-4 flex bg-[#DEEBFF] p-4 justify-start">
      <div className="text-[#0747A6] mr-5">
      <PiWarningCircleFill className='h-7 w-7'/>
      </div>
      <div>
        <p className="text-base not-italic font-thin leading-5">Active package</p>
        <p className="text-[#172B4D] text-sm not-italic font-normal leading-5">You are currently on the free trial. To start enjoying RunShifts full features subscribe to a package now.</p>
      </div>
    </div>
    </div>
  )
}

export default Billing