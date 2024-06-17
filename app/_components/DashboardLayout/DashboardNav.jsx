import { useSelector } from "react-redux"
import { NavCloseButton } from "../../_assets/svgs/NavIcon"
import Image from "next/image"
import PseudoLogo from "../../_assets/svgs/PseudoLogo"
import Link from "next/link"

export default function DashboardNav({ closeNav, showNav, children }) {
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
        <div className="w-full flex text-center items-center gap-2 gap-[10px] mb-6 lg:mb-4">
          {organization?.logo?.secure_url ? (
            <Image
              src={organization?.logo?.secure_url}
              alt=""
              width={40}
              height={40}
              className="rounded-[3px] w-[54px] h-[54px] lg:w-[40px] lg:h-[40px]"
            />
          ) : (
            <div className="rounded-[3px]">
              <PseudoLogo />
            </div>
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
        <div className="w-full">{children}</div>
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
            "linear-gradient(270deg, #091E42 -340.65%, rgba(9, 30, 66, 0.55) -207.28%, rgba(9, 30, 66, 0.17) -96.18%, rgba(9, 30, 66, 0.00) 97.56%)",
        }}
      ></div>
    </nav>
  )
}
