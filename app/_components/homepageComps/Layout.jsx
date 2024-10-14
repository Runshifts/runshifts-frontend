'use client'
import React from 'react'
import Header from './Header';
import Footer from './Footer'
import { usePathname } from 'next/navigation'
import { Poppins } from 'next/font/google';

export default function Layout({ children }) {
      const pathname = usePathname()
    const isHomePage = pathname === '/'

    const poppins = Poppins({
        weight: ['400', '700'],
        subsets: ['latin'],
        display: 'swap', 
      });
      
    return (
        <div className={poppins.className}>
            <Header isTransparent={isHomePage} />
            <main className={isHomePage ? 'bg-gradient-to-b from-[#FD9] via-[#CBF0BC] to-white min-h-screen' : ''}>
            {children}
            </main>
            <Footer />
        </div>
    )
}
