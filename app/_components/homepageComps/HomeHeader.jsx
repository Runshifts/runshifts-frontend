'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import runshiftsLogo1 from './runshiftsLogo2.svg';
import CommonButtons from './CommonButtons';
import { MdOutlineCancel } from 'react-icons/md';

const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    {
        label: 'Solution',
        dropdown: [
            { label: 'Employer', href: '/homeEmployer' },
            { label: 'Employee', href: '/homeEmployee' },
            { label: 'Non-profit', href: '/homeNonprofits' },
        ],
    },
    { label: 'Knowledge base', href: '/knowledgeb' },
    { label: 'Contact', href: '/contact' },
    { label: 'Get started for free', href: '/signup?type=for-profit', isButton: true },
];

export default function Header({ isTransparent = false }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) { 
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleOverlayClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div>
            <nav className="text-[#000] relative z-20">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
                    <a href="/home" className="flex justify-start items-left">
                        <Image src={runshiftsLogo1} className="h-8" height={200} width={204} alt="runshifts Logo" />
                    </a>
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <div className={`w-full xl:block xl:w-auto ${isMobileMenuOpen ? '' : 'hidden'}`} id="navbar-dropdown">
                        <ul className="flex flex-col items-start justify-center font-medium p-4 xl:p-0 mt-4 border border-gray-100 rounded-lg xl:flex-row xl:items-center xl:justify-center xl:space-x-8 rtl:space-x-reverse xl:mt-0 xl:border-0">
                            {menuItems.map((item, index) => (
                                <li key={index} className={item.dropdown ? 'relative' : ''}>
                                    {!item.isButton ? (
                                        <div className="flex items-center py-2 px-3 text-[#000] rounded xl:bg-transparent xl:p-0">
                                            <a href={item.href}>{item.label}</a>
                                            {item.dropdown && (
                                                <button
                                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                    className="flex items-center justify-between w-full py-2 px-3 text-[#000] rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:p-0 xl:w-auto"
                                                >
                                                    <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                    ) : (
                                        <CommonButtons>
                                            <a href={item.href}>{item.label}</a>
                                        </CommonButtons>
                                    )}
                                    {isDropdownOpen && item.dropdown && (
                                        <div className="absolute left-0 top-full mt-2 z-10 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow">
                                            <ul className="py-2 text-sm text-[#000]">
                                                {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                                    <li key={dropdownIndex}>
                                                        <a href={dropdownItem.href} className="block px-4 py-2 hover:bg-gray-100">
                                                            {dropdownItem.label}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
    <div className="fixed inset-0 z-30 bg-black bg-opacity-75" onClick={handleOverlayClick}>
        <div 
            className="absolute top-0 left-0 w-4/5 h-full bg-white opacity-75 p-4 shadow-lg" 
            onClick={(e) => e.stopPropagation()}
        >
            {/* Cancel button in the top-right corner */}
            <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
                <svg
                    className="w-6 h-6 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            {/* Mobile Menu */}
            <nav className="flex flex-col space-y-4">
                <ul className="text-black">
                    {menuItems.map((item, index) => (
                        <li key={index} className={item.dropdown ? 'relative' : ''}>
                            {!item.isButton ? (
                                <div className="flex items-center">
                                    <a href={item.href} className="block py-2 px-3">
                                        {item.label}
                                    </a>
                                    {item.dropdown && (
                                        <button
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className="flex items-center justify-between w-full py-2 px-3"
                                        >
                                            <svg
                                                className="w-2.5 h-2.5 ml-2.5"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 10 6"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m1 1 4 4 4-4"
                                                />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            ) : (
                                <CommonButtons>{item.label}</CommonButtons>
                            )}
                            {isDropdownOpen && item.dropdown && (
                                <div className="absolute left-0 top-full mt-2 z-40 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow">
                                    <ul className="py-2 text-sm text-black">
                                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                            <li key={dropdownIndex}>
                                                <a href={dropdownItem.href} className="block px-4 py-2 hover:bg-gray-100">
                                                    {dropdownItem.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </div>
)}

        </div>
    );
}