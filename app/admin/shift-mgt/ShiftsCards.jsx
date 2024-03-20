import React from 'react'

function ShiftsCards() {
  return (
    <section>
         <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-4">
        <div className="bg-[#E5F7DD] rounded-xl p-7">
          <h1 className="text-[#283142] text-2xl not-italic font-medium leading-10">
            642
          </h1>
          <p className="text-#42526E] text-xs not-italic font-medium leading-6">
            Total shifts
          </p>
        </div>

        <div className="bg-[#E5F7DD] rounded-xl p-7">
          <h1 className="text-[#283142] text-2xl not-italic font-medium leading-10">
            43
          </h1>
          <p className="text-[#42526E] text-xs not-italic font-medium leading-6">
          Active shifts
          </p>
        </div>

        <div className="bg-[#E5F7DD] rounded-xl p-7">
          <h1 className="text-[#283142] text-2xl not-italic font-medium leading-10">
            4
          </h1>
          <p className="text-[#42526E] text-xs not-italic font-medium leading-6">
            Closed disputes
          </p>
        </div>

        <div className="bg-[#E5F7DD] rounded-xl p-7">
          <h1 className="text-[#283142] text-2xl not-italic font-medium leading-10">
            18
          </h1>
          <p className="text-[#42526E] text-xs not-italic font-medium leading-6">
            Closed disputes
          </p>
        </div>
      </div>
    </section>
  )
}

export default ShiftsCards