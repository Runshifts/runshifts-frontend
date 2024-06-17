import NavIcon from "../../_assets/svgs/NavIcon"
import Image from "next/image"
import Bell from "../../_assets/svgs/Bell"
import SearchIcon from "../../_assets/svgs/Search"
import Headphones from "../../_assets/svgs/Headphones"
import placeholderImage from "../../_assets/img/user.png"
import RunshiftsLogo from "../../_assets/svgs/RunshiftsLogo"
import { UserContext } from "../../_providers/UserProvider"
import { useContext } from "react"

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
          <Image
            alt={user?.fullName || "User"}
            src={user?.profileImage?.secure_url || placeholderImage}
            width={32}
            height={32}
            className="w-[45px] h-[45px] lg:w-[32px] lg:h-[32px]  rounded-full object-cover"
          />
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
