"use client"
import { useContext, useState } from "react"
import NavIcon, { NavCloseButton } from "../_assets/svgs/NavIcon"
import { useSelector } from "react-redux"
import Image from "next/image"
import PseudoLogo from "../_assets/svgs/PseudoLogo"
import Bell from "../_assets/svgs/Bell"
import SearchIcon from "../_assets/svgs/Search"
import Headphones from "../_assets/svgs/Headphones"
import placeholderImage from "../_assets/img/user.png"
import RunshiftsLogo from "../_assets/svgs/RunshiftsLogo"
import Link from "next/link"
import { UserContext } from "../_providers/UserProvider"

export default function DashboardLayout({ children, sidebarContent }) {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className="h-[100dvh] overflow-hidden">
      <DashboardHeader openNav={() => setShowNav(true)} />
      <div className="grid grid-cols-12 h-[calc(100dvh-60px)] lg:h-[calc(100dvh-73px)] overflow-hidden">
        <DashboardNav showNav={showNav} closeNav={() => setShowNav(false)}>
          {sidebarContent}
        </DashboardNav>
        <main className="col-span-12 lg:col-span-9 h-[calc(100dvh-60px)] lg:h-[calc(100dvh-73px)] overflow-auto w-full">
          <div className="h-[1000vh] bg-white w-full px-[17.5px] lg:px-[40px] pt-[21px] lg:pt-[24px]">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

function DashboardHeader({ openNav }) {
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

function DashboardNav({ closeNav, showNav, children }) {
  const { organization } = useSelector((store) => store.organization)
  return (
    <nav
      className={`fixed lg:sticky top-0 h-full lg:col-span-3 col-start-1 flex overflow-hidden lg:max-w-full transition-width duration-[350ms] ${
        showNav
          ? "max-w-[100dvw] sm:max-w-[328px] whitespace-nowrap"
          : "max-w-0 whitespace-nowrap"
      }`}
    >
      <div className="bg-[#42526E] w-full lg:bg-[#FAFBFC] flex items-start flex-col px-[22px] py-[20px] gap-[11px]">
        <button onClick={() => closeNav()} className="lg:hidden ml-auto">
          <NavCloseButton />
        </button>
        <div className="w-full flex text-center items-center gap-2 gap-[10px]">
          {organization?.logo?.secure_url ? (
            <Image
              src={organization?.logo?.secure_url}
              alt=""
              width={40}
              height={40}
              className="rounded-[3px] w-[54px] h-[54px] lg:w-[40px] lg:h-[40px]"
            />
          ) : (
            <PseudoLogo />
          )}
          <p className="flex items-start flex-col gap-[.8px]">
            <span className="text-[19px] lg:text-[14px] lg:text-[#42526E] text-white font-[700] capitalize">
              {organization ? organization.name : "---"}
            </span>
            <span className="font-[500] text-[#ACB8CD] lg:text-[#6B778C] text-[16px] lg:text-[12px] capitalize">
              {organization ? organization.industry?.name : "----"}
            </span>
          </p>
        </div>
        <div className="w-full">{children}s</div>
        <div className="w-full text-[14.9px] text-center leading-[19px] flex flex-col items-center gap-[11px] mt-auto">
          <small className="lg:text-[#42526E] whitespace-normal text-slate-500  text-[14.94px] font-normal">
            You&apos;re in a team management made easy
          </small>
          <Link href="#" className="text-[#5E6C84]">
            Learn more
          </Link>
        </div>
      </div>
      <div
        className="w-[6px] h-full"
        style={{
          opacity: 0.5,
          background:
            "linear-gradient(270deg, #091E42 -340.65%, rgba(9, 30, 66, 0.55) -207.28%, rgba(9, 30, 66, 0.17) -96.18%, rgba(9, 30, 66, 0.00) 97.56%);",
        }}
      ></div>
    </nav>
  )
}
