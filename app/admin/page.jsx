import React from 'react'
import TotalCards from './TotalCards'
import Complaints from './Complaints'

function page() {
  return (
    <section className="p-6 h-screen">
    <h1 className="text-[#292D32] mb-4 mt-2 text-2xl not-italic font-medium leading-7">
      Dashboard
    </h1>  

    <TotalCards />

    <Complaints />

    </section>
  )
}

export default page