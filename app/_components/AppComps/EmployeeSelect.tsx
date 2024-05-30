import Image from "next/image"
import Avatar from "/public/dashboardImgs/reportAvatar.svg"
import PageSearchInput from "./PageSearchInput"

export default function EmployeeSelect() {
  return (
    <>
      <PageSearchInput />
      <div className="hidden md:flex justify-start bg-gray-100 pl-3 py-2 mr-2 text-gray-500 rounded-md">
        <Image src={Avatar} width={20} height={20} alt="dp" />
        <p className="text-blue-500">Andrea Jones</p>
        <p className="px-2">x</p>
      </div>
    </>
  )
}
