import React from 'react'

function Cards() {
  return (
    <section>
         <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-3">
        <div className="bg-[#E5F7DD] rounded-xl p-7">
          <h1 className="text-[#283142] text-2xl not-italic font-medium leading-10">
            49
          </h1>
          <p className="text-[#42526E] text-xs not-italic font-medium leading-6">
            Open disputes
          </p>
        </div>

        <div className="bg-[#E5F7DD] rounded-xl p-7">
          <h1 className="text-[#283142] text-2xl not-italic font-medium leading-10">
            10 Mins
          </h1>
          <p className="text-[#42526E] text-xs not-italic font-medium leading-6">
          Avg. turn around time
          </p>
        </div>

        <div className="bg-[#E5F7DD] rounded-xl p-7">
          <h1 className="text-[#283142] text-2xl not-italic font-medium leading-10">
            340
          </h1>
          <p className="text-[#42526E] text-xs not-italic font-medium leading-6">
            Closed disputes
          </p>
        </div>
      </div>
    </section>
  )
}

export default Cards