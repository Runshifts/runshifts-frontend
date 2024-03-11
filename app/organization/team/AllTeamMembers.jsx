import React from "react"
import placeholderImage from "../../_assets/img/user.png"
import Image from "next/image"
import Link from "next/link"

export default function AllTeamMembers({ users = [] }) {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-[16px] text-[#292D32] font-[600]">
        All team members
      </h1>
      <div className="flex flex-wrap p-[2px] gap-4">
        {users.map((user) => (
          <TeamMember user={user} key={user._id} />
        ))}
      </div>
    </section>
  )
}

function TeamMember({ user }) {
  return (
    <div className="bg-white px-[8px] py-[10px] w-full md:max-w-[309px] capitalize leading-[20px] font-[400] rounded-md shadow-[0px_2px_8px_0px_#0000001F] flex justify-between items-center gap-[16px] shrink-0">
      <Image
        height={50}
        width={50}
        src={user.profileImage?.secure_url || placeholderImage}
        alt={user.firstName || user.lastName || user.fullName}
        className="w-[50px] h-[50px] rounded-full"
      />
      <div className="flex justify-between grow ">
        <div className="">
          <h1 className="text-[16px] text-[#1D2433]">
            {(user.firstName + " " + user.lastName).trim() || user.fullName}
          </h1>
          <p className="text-gray-800 text-[12px]">{user.role?.name}</p>
        </div>
        <Link
          href="#"
          className="bg-primary-300 text-primary-800 text-[14px] px-[12px] py-[2px] rounded-[2px]"
        >
          View
        </Link>
      </div>
    </div>
  )
}
