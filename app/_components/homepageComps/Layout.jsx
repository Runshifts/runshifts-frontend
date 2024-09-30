'use client'
import React from 'react'
import Header from './Header';
import Footer from './Footer'
import { usePathname } from 'next/navigation'


export default function Layout({ children }) {
      const pathname = usePathname()
    const isHomePage = pathname === '/'

    return (
        <div>
            <Header isTransparent={isHomePage} />
            <main className={isHomePage ? 'bg-gradient-to-b from-[#FD9] via-[#CBF0BC] to-white min-h-screen' : ''}>
            {children}
            </main>
            <Footer />
        </div>
    )
}
