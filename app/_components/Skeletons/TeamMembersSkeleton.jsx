import Image from "next/image"
import placeholderImage from "../../_assets/img/user.png"

export default function TeamMembersSkeleton() {
  return (
    <>
      <div className="animate-pulse flex flex-wrap p-[2px] gap-4">
        <SingleTeamMemberSkeleton />
        <SingleTeamMemberSkeleton />
        <SingleTeamMemberSkeleton />
        <SingleTeamMemberSkeleton />
      </div>
    </>
  )
}

function SingleTeamMemberSkeleton() {
  return (
    <div className="bg-white px-[8px] py-[10px] w-full md:max-w-[309px] rounded-md shadow-[0px_2px_8px_0px_#0000001F] flex justify-between items-center gap-[16px] shrink-0">
      <Image
        height={50}
        width={50}
        src={placeholderImage}
        alt=""
        className="w-[50px] h-[50px] rounded-full"
      />
      <div className="flex fl justify-between grow">
        <div className="flex flex-col gap-1">
          <h3 className="w-[98px] h-[10px] bg-[#1D2433]/10"></h3>
          <p className="bg-gray-800/20 w-[98px] h-[8px]"></p>
        </div>
        <div className="w-[56px] h-[24px] bg-primary-300/80"></div>
      </div>
    </div>
  )
}

export function RecentlyViewedTeamMembersSkeleton() {
  return (
    <>
      <div className="overflow-x-auto">
        <div className="animate-pulse flex gap-[16px] p-[2px]">
          <SingleRecentlyViewedTeamMemberSkeleton />
          <SingleRecentlyViewedTeamMemberSkeleton />
          <SingleRecentlyViewedTeamMemberSkeleton />
          <SingleRecentlyViewedTeamMemberSkeleton />
          <SingleRecentlyViewedTeamMemberSkeleton />
          <SingleRecentlyViewedTeamMemberSkeleton />
        </div>
      </div>
    </>
  )
}

function SingleRecentlyViewedTeamMemberSkeleton() {
  return (
    <div className="bg-white px-[8px] py-[10px] w-full max-w-[145px] rounded-md shadow-[0px_2px_8px_0px_#0000001F] flex flex-col items-center gap-[8px] shrink-0">
      <Image
        height={50}
        width={50}
        src={placeholderImage}
        alt={""}
        className="w-[50px] h-[50px] rounded-full"
      />
      <h3 className="w-[98px] h-[10px] bg-[#1D2433]/10"></h3>
      <p className="bg-gray-800/20 w-[98px] h-[8px]"></p>
      <div className="w-[56px] h-[24px] bg-primary-300"></div>
    </div>
  )
}
