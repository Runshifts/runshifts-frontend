"use client"
import React, { useState } from "react"
import Navbar from "./navbar/EmployeeNav"
import Sidebar from "./EmployeeSidebar"

export default function GlobalLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="relative">
      <div className="sticky top-0 z-50">
        <Navbar onToggle={toggleSidebar} />
      </div>

      <div className="relative md:grid grid-cols-12">
        {/* <div className=""> */}
        <div
          className={`fixed md:sticky z-[1000] top-0 col-span-1 h-screen md:col-span-3 ${
            isSidebarOpen ? "visible opacity-100" : "invisible opacity-0 md:opacity-100 md:visible"
          }`}
        >
          <div className="bg-[#fafbfc] pr-2  border-r-[1px] border-r-[#d1d5db] border-r-solid  h-screen fixed">
            <Sidebar isOpen={!isSidebarOpen} onClose={toggleSidebar} />
          </div>
        </div>

        <div className="col-span-11 bg-white h-screen md:col-span-9">
          {children}
        </div>
      </div>
    </div>
  )
}
