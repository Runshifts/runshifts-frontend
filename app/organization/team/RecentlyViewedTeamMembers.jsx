import React from "react"
import Link from "next/link"
import Image from "next/image"
import placeholderImage from "../../_assets/img/user.png"
import { RecentlyViewedTeamMembersSkeleton } from "../../_components/Skeletons/TeamMembersSkeleton"

export default function RecentlyViewedTeamMembers({ users = [], loading }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-[16px] text-[#292D32] font-[600]">Recently viewed</h2>
      {loading && <RecentlyViewedTeamMembersSkeleton />}
      {!loading && (
        <div className="overflow-x-auto">
          <div className="flex gap-[16px] p-[2px]">
            {users.map((user) => (
              <RecentlyViewedTeamMember key={user._id} user={user} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

function RecentlyViewedTeamMember({ user = {} }) {
  return (
    <div className="bg-white px-2 py-[10px] w-full max-w-[146px] capitalize leading-[20px] font-[400] rounded-md shadow-[0px_2px_8px_0px_#0000001F] flex flex-col items-center gap-[8px] shrink-0">
      <Image
        height={50}
        width={50}
        src={user.profileImage?.secure_url || placeholderImage}
        alt=""
        className="w-[50px] h-[50px] rounded-full bg-green-300"
      />

      <h3 className="text-[16px] text-[#1D2433]">
        {(user.firstName + " " + user.lastName).trim() || user.fullName}
      </h3>
      <p className="text-gray-800 text-[12px]">{user.role?.name}</p>
      <Link
        href="#"
        className="bg-primary-300 text-primary-800 text-[14px] px-[12px] py-[2px] rounded-[2px]"
      >
        view
      </Link>
    </div>
  )
}