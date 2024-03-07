import React from "react"
import { LogsData } from "../../_data/LogsData"
import LogsContentSide from "../../organization/logs/LogsContentSide"
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
              <div className="w-[20px] h-[20px] mx-2 ">
              <ShareSvg />
              </div>
               
              <button className="text-[#B22A09] font-bold">
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

function ShareSvg() {
    return(
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.05 18.0251C11.0667 18.0251 9.67502 17.3334 8.57502 14.0251L7.97502 12.2251L6.17502 11.6251C2.87502 10.5251 2.18335 9.13339 2.18335 8.15006C2.18335 7.17506 2.87502 5.77506 6.17502 4.66673L13.25 2.30839C15.0167 1.71673 16.4917 1.89173 17.4 2.79173C18.3083 3.69173 18.4833 5.17506 17.8917 6.94173L15.5333 14.0167C14.425 17.3334 13.0333 18.0251 12.05 18.0251ZM6.56668 5.85839C4.25002 6.63339 3.42502 7.55006 3.42502 8.15006C3.42502 8.75006 4.25002 9.66673 6.56668 10.4334L8.66668 11.1334C8.85002 11.1917 9.00002 11.3417 9.05835 11.5251L9.75835 13.6251C10.525 15.9417 11.45 16.7667 12.05 16.7667C12.65 16.7667 13.5667 15.9417 14.3417 13.6251L16.7 6.55006C17.125 5.26673 17.05 4.21673 16.5083 3.67506C15.9667 3.13339 14.9167 3.06673 13.6417 3.49173L6.56668 5.85839Z" fill="#42526E"/>
<path d="M8.62487 12C8.46654 12 8.3082 11.9416 8.1832 11.8166C7.94154 11.575 7.94154 11.175 8.1832 10.9333L11.1665 7.94163C11.4082 7.69996 11.8082 7.69996 12.0499 7.94163C12.2915 8.18329 12.2915 8.58329 12.0499 8.82496L9.06654 11.8166C8.94987 11.9416 8.7832 12 8.62487 12Z" fill="#42526E"/>
</svg>
    )
}
