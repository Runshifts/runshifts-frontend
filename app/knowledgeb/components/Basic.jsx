import React from 'react'
import InfoCardsSkeleton from './InfoCardsSkeleton'

function Basic() {
  return (
    <div>
<p className="text-xl text-[#706763] font-medium leading-6 tracking-normal text-left mb-4 pb-1 relative">
  <span className="relative z-10">
    <span className="relative">
      Ba
    </span>
    <span className="absolute left-0 bottom-0 h-0.5 w-7 bg-[#EFEDED]"></span>
  </span>
  sic
</p>
        <InfoCardsSkeleton
        title='Get started'
        content='Get introduced to the basic concepts of our editor, how to create projects and navigate between all the platform functionalities.'
        />
    </div>
  )
}

export default Basic