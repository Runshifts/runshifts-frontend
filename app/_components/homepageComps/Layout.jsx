'use client'
import React from 'react'
import Header from './Header';
import Footer from './Footer'


export default function Layout({ children }) {

    return (
        <div style={{ fontFamily: 'Poppins, sans-serif' }}>
            <Header />
            <main className='min-h-screen'>
            {children}
            </main>
            <Footer />
        </div>
    )
}
