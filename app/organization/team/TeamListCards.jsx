import React from "react"
import { TeamListData } from "../../_data/StaffListData"
import Image from "next/image"

function TeamListCards() {
  return (
    <section>
      <h1 className="text-sm text-[#252525] font-bold py-4">
        All team members
      </h1>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {TeamListData.map((team) => (
            <div
              key={team.id}
              className="bg-white p-2 m-2 rounded-md shadow-lg flex flex-row justify-between items-center"
            >
              <Image height={50} width={50}
                src={team.icon}
                alt="profilepic"
                className="w-10 h-10 rounded-full mx-"
              />
              <div className="">
                <h1 className="text-sm font-semibold text-gray-700">
                  {team.name}
                </h1>
                <p className="text-gray-400 text-xs">{team.position}</p>
              </div>
              <button className="bg-[#B2E89A] text-[#2D6316] text-sm px-2 py-1 mt-2 rounded-md">
                {team.view}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamListCards
