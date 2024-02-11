import React from "react"
import { StaffListData } from "../../_data/StaffListData"
import Link from "next/link"
import Image from "next/image"

function StaffListCards() {
  return (
    <section>
      <h1 className="text-sm text-[#252525] font-bold py-4">Recently viewed</h1>

      <div className="overflow-x-auto">
        <div className="flex md:grid grid-cols-6">
          {StaffListData.map((staff) => (
            <div
              key={staff.id}
              className="bg-white p-2 m-2 rounded-md shadow-md flex flex-col items-center"
            >
              <Image height={50} width={50}
                src={staff.icon}
                alt="profilepic"
                className="w-10 h-10 rounded-full mb-4"
              />
              <div className="text-center">
                <h1 className="text-sm font-semibold text-gray-700">
                  {staff.name}
                </h1>
                <p className="text-gray-400 text-xs">{staff.position}</p>
                <Link href="/viewprof">
                  <button className="bg-[#B2E89A] text-[#2D6316] text-sm px-2 py-1 mt-2 rounded-md">
                    {staff.view}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StaffListCards
