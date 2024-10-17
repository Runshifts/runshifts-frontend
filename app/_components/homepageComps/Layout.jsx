'use client'
import React from 'react'
import Header from './Header';
import Footer from './Footer'


export default function Layout({ children }) {

    return (
        <div style={{ fontFamily: 'Poppins, sans-serif' }}>
            <Header />
            <main className='bg-gradient-to-b from-[#FD9] via-[#CBF0BC] to-white min-h-screen'>
            {children}
            </main>
            <Footer />
        </div>
    )
}
