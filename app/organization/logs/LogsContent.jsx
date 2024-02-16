import React from "react"
import { LogsData } from "../../_data/LogsData"
import LogsContentSide from "./LogsContentSide"
import { HiOutlineTrash } from "react-icons/hi"
import Image from "next/image"

function LogsContent() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <div className="flex flex-col items-center justify-center">
          {LogsData.map((log) => (
            <div
              key={log.id}
              className="bg-white p-2 m-1 rounded-md shadow-lg flex items-center  flex-row"
            >
              <Image
                src={log.avatar}
                width={80}
                height={80}
                alt="profilepic"
                className="w-10 h-10 rounded-full"
              />
              <div className="pl-2">
                <h1 className="text-xs font-semibold text-gray-700">
                  {log.name}
                </h1>
                <p className="text-gray-400 text-[10px]">{log.position}</p>
                <p className="text-gray-400 text-[10px]">{log.location}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">{log.details}</p>
                <p className="bg-[#FFAB00] rounded-full w-fit my-2 px-1 text-white text-xs">
                  {log.condition}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">{log.date}</p>
                <p className="text-gray-400 text-xs">{log.time}</p>
              </div>
              <button className="bg-[#B2E89A] w-14 h-6 text-[#2D6316] text-xs rounded-md">
                {log.view}
              </button>
              <button className="text-[#B22A09] font-bold pl-2">
                <HiOutlineTrash />
              </button>
            </div>
          ))}
        </div>
      </div>

      <LogsContentSide />
    </section>
  )
}

export default LogsContent
