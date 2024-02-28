"use client"
import React, { useState } from "react"
import Navbar from "./navbar/Navbar"
import Sidebar from "./AdminSidebar"

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

      <div className="relative">
        <div className="grid grid-cols-12">
          <div className="sticky top-0 bg-[#fafbfc] col-span-1 h-screen pl-2 border-r md:col-span-3">
            <Sidebar isOpen={!isSidebarOpen} onClose={toggleSidebar} />
          </div>

          <div className="main-content col-span-11 bg-white h-screen pl-2 md:col-span-9">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
