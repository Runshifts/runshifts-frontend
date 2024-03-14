import React from 'react'

function Cards() {
  return (
    <section>
         <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-3">
        <div className="bg-[#E5F7DD] rounded-xl p-7">
          <h1 className="text-[#283142] text-2xl not-italic font-medium leading-10">
            672
          </h1>
          <p className="text-[#42526E] text-xs not-italic font-medium leading-6">
            Total shifts (hours)
          </p>
        </div>

        <div className="bg-[#E5F7DD] rounded-xl p-7">
          <h1 className="text-[#283142] text-2xl not-italic font-medium leading-10">
            4,367
          </h1>
          <p className="text-[#42526E] text-xs not-italic font-medium leading-6">
          Total no of users
          </p>
        </div>

        <div className="bg-[#E5F7DD] rounded-xl p-7">
          <h1 className="text-[#283142] text-2xl not-italic font-medium leading-10">
            4,235
          </h1>
          <p className="text-[#42526E] text-xs not-italic font-medium leading-6">
          Total no of active users
          </p>
        </div>


        <div className="bg-[#E5F7DD] rounded-xl p-7">
          <h1 className="text-[#283142] text-2xl not-italic font-medium leading-10">
          $ 3,434,656
          </h1>
          <p className="text-[#42526E] text-xs not-italic font-medium leading-6">
          Total income
          </p>
        </div>

        <div className="bg-[#E5F7DD] rounded-xl p-7">
          <h1 className="text-[#283142] text-2xl not-italic font-medium leading-10">
            654
          </h1>
          <p className="text-[#42526E] text-xs not-italic font-medium leading-6">
          Total no of tickets
          </p>
        </div>
        <div className="bg-[#E5F7DD] rounded-xl p-7">
          <h1 className="text-[#283142] text-2xl not-italic font-medium leading-10">
            4,367
          </h1>
          <p className="text-[#42526E] text-xs not-italic font-medium leading-6">
          Total no of users
          </p>
        </div>
      </div>
    </section>
  )
}

export default Cards