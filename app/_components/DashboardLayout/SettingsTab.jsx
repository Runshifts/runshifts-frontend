"use client"
import React, { useMemo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Tabs({ links = [] }) {
  return (
    <div className="border-b-2 border-[#EBECF0]">
      <ul className="flex flex-wrap gap-4 -mb-[2px] text-[14px]">
        {links.map((link) => (
          <li key={link.href}>
            <SettingsTabLink href={link.href}>{link.children}</SettingsTabLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SettingsTabLink({ href, children }) {
  const pathname = usePathname()

  const isTabActive = useMemo(() => {
    return pathname === href
  }, [pathname, href])
  return (
    <Link
      href={href}
      className={`inline-block pt-[7.5px] pb-[9.5px] border-b-2 rounded-t-lg hover:text-primary-600 hover:border-primary-700 dark:hover:text-primary-500 font-[100] ${
        isTabActive
          ? "text-primary-700 border-[currentColor]"
          : "border-transparent text-info-500"
      }`}
    >
      {children}
    </Link>
  )
}
