"use client"
import { useState } from "react"
import DashboardHeader from "./DashboardHeader"
import DashboardNav from "./DashboardNav"
export default function DashboardLayout({
  children,
  sidebarContent = () => {},
}) {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className="h-[100dvh] overflow-hidden">
      <DashboardHeader openNav={() => setShowNav(true)} />
      <div className="grid grid-cols-12 h-[calc(100dvh-60px)] lg:h-[calc(100dvh-73px)] overflow-hidden">
        <DashboardNav showNav={showNav} closeNav={() => setShowNav(false)}>
          {typeof sidebarContent === "function"
            ? sidebarContent({ closeNav: () => setShowNav(false) })
            : sidebarContent}
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
