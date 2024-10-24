
import React from 'react'

export default function CommonButtons({ children }) {
  return (
    <button className='bg-[#449522] rounded-lg text-white px-4 py-2 text-sm not-italic font-semibold leading-6 xl:text-base '>
        {children}
    </button>
  )
}
