import NavIcon from "../../_assets/svgs/NavIcon"
import Image from "next/image"
import Bell from "../../_assets/svgs/Bell"
import SearchIcon from "../../_assets/svgs/Search"
import Headphones from "../../_assets/svgs/Headphones"
import placeholderImage from "../../_assets/img/user.png"
import TooltipModal from "../../_components/AppComps/TooltipModal"
import EditIcon from "../../_assets/svgs/Pen"
import LogoutIcon from "../../_assets/svgs/Logout"
import RunshiftsLogo from "../../_assets/svgs/RunshiftsLogo"
import { UserContext } from "../../_providers/UserProvider"
import { useContext } from "react"
import GearIcon from "../../_assets/svgs/Gear"
import { useRouter } from "next/navigation"
import { getUserBasePathForDashboard } from "../../_utils"
import { useSelector } from "react-redux"

export default function DashboardHeader({ openNav }) {
  const { user } = useContext(UserContext)
  return (
    <div>
      <header className="sticky top-0 inset-x-0 h-[67px] lg:h-[56px] flex items-center justify-between w-full bg-white px-[18px]">
        <div className="flex items-center">
          <button className="lg:hidden" onClick={() => openNav()}>
            <NavIcon />
          </button>
          <span className="hidden lg:block">
            <NavIcon />
          </span>
          <RunshiftsLogo />
        </div>
        <div className="flex items-center gap-[9px] lg:gap-[16px]">
          <label className="hidden lg:inline-block focus-within:border-[#6B778C]/80 relative rounded-[5px] border-2 border-[#DFE1E6] grow w-[240px] px-[8px] py-[4.25px]">
            <span className="inline-block absolute top-1/2 -translate-y-1/2 left-[8px]">
              <SearchIcon />
            </span>
            <input
              name="search"
              className="w-full pl-[30px] placeholder:text-[14px] placeholder:text-[#6B778C] placeholder:font-[500] focus:outline-none focus:ring-0 focus:border-0"
              placeholder="Search"
            />
          </label>
          <button as="button" className="lg:hidden">
            <SearchIcon />
          </button>
          <button as="button">
            <Bell />
          </button>{" "}
          <button as="button" className="hidden lg:inline-block">
            <Headphones />
          </button>
          <button as="button" className="hidden lg:inline-block">
            <GearIcon />
          </button>
          <TooltipModal tooltipContent={<AvatarDropdown />}>
            <Image
              alt={user?.fullName || "User"}
              src={user?.profileImage?.secure_url || placeholderImage}
              width={32}
              height={32}
              className="w-[45px] h-[45px] lg:w-[32px] lg:h-[32px]  rounded-full object-cover"
            />
          </TooltipModal>
        </div>
      </header>
      <div
        className="h-[4px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(9, 30, 66, 0.13) 0%, rgba(9, 30, 66, 0.13) 25%, rgba(9, 30, 66, 0.08) 25.01%, rgba(9, 30, 66, 0.00) 100%)",
        }}
      ></div>
    </div>
  )
}

function AvatarDropdown() {
  const { user, logout } = useContext(UserContext)
  const basePath = getUserBasePathForDashboard(user?.type)
  const router = useRouter()
  return (
    <div className="p-[6px] flex flex-col items-start gap-[4px] bg-white rounded-[12px] bg-primary-100 shadow-[_1px_0px_0px_0px_rgba(0,_0,_0,_0.13)_inset,_-1px_0px_0px_0px_rgba(0,_0,_0,_0.13)_inset,_0px_-1px_0px_0px_rgba(0,_0,_0,_0.17)_inset,_0px_1px_0px_0px_rgba(204,_204,_204,_0.50)_inset,_0px_4px_6px_-2px_rgba(26,_26,_26,_0.20)]">
      <button
        onClick={() => router.push(`${basePath}/profile`)}
        className="min-w-max rounded-md flex items-center p-[6px] gap-[6px] hover:bg-info-100 hover:text-info-500 w-full"
      >
        <EditIcon /> <span>Edit Profile</span>
      </button>
      <button
        onClick={() => logout()}
        className="min-w-max rounded-md flex items-center p-[6px] gap-[6px] hover:bg-info-100 hover:text-info-500 w-full"
      >
        <LogoutIcon /> <span>Logout</span>
      </button>
    </div>
  )
}
