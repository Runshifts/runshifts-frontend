'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import runshiftsLogo1 from './runshiftsLogo1.svg';
import { MdOutlineCancel } from 'react-icons/md';
import Link from 'next/link';

const menuItems = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'About us',
        href: '/about',
    },
    {
        label: 'Pricing',
        href: '/pricing',
    },
    {
        label: 'Solution',
        dropdown: [
            { label: 'Employer', href: '/homeEmployer' },
            { label: 'Employee', href: '/homeEmployee' },
            { label: 'Non-profit', href: '/homeNonprofits' },
        ],
    },
    {
        label: 'Knowledge base',
        href: '/knowledgeb',
    },
    {
        label: 'Contact',
        href: '/contact',
    },
    {
        label: 'Get started for free',
        href: '/signup?type=for-profit',
        isButton: true,
    },
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

        // Close dropdown when clicking outside
        const handleClickOutside = (event) => {
            if (!event.target.closest('.solution-menu')) {
                setIsDropdownOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('click', handleClickOutside);
        
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleOverlayClick = () => {
        setIsMobileMenuOpen(false);
    };

    const handleSolutionClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const bgClass = isTransparent ? 'bg-transparent' : 'bg-[#1A212C]';
    const textColorClass = isTransparent ? 'text-gray-800' : 'text-white';

    return (
        <div>
            <nav className={`${bgClass} ${textColorClass} border-gray-20 relative z-20`}>
                <div className="max-w-screen-xl flex items-center justify-between px-2 py-4">
                    <a href="/" className="flex justify-start items-start pl-1 xl:pl-10">
                        <Image src={runshiftsLogo1} className="" quality={100} height={150} width={150} alt="runshifts Logo" />
                    </a>

                    <div className="flex justify-start items-left mr-4">
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
                    </div>

                    {/* Desktop Menu */}
                    <div className={`w-full xl:block xl:w-auto ${isMobileMenuOpen ? '' : 'hidden'}`} id="navbar-dropdown">
                        <ul className="flex flex-col items-start justify-center font-medium p-4 xl:p-0 mt-4 border border-gray-100 rounded-lg xl:flex-row xl:items-center xl:justify-center xl:space-x-8 rtl:space-x-reverse xl:mt-0 xl:border-0">
                            {menuItems.map((item, index) => (
                                <li key={index} className={item.dropdown ? 'relative solution-menu' : ''}>
                                    {!item.isButton ? (
                                        item.dropdown ? (
                                            // Solution dropdown menu
                                            <div 
                                                className="flex items-center py-2 px-3 text-white rounded xl:bg-transparent xl:p-0 cursor-pointer"
                                                onClick={handleSolutionClick}
                                            >
                                                <span>{item.label}</span>
                                                <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                </svg>
                                            </div>
                                        ) : (
                                            // Regular menu items
                                            <div className="flex items-center py-2 px-3 text-white rounded xl:bg-transparent xl:p-0">
                                                <a href={item.href}>{item.label}</a>
                                            </div>
                                        )
                                    ) : (
                                        <Link href='/signup?type=for-profit'>
                                            <button className='bg-[#449522] rounded-lg text-white p-2 whitespace-nowrap text-sm not-italic font-normal leading-6 xl:text-base'>
                                                Get Started for <span className='font-bold'>free</span>
                                            </button>
                                        </Link>
                                    )}
                                    {isDropdownOpen && item.dropdown && (
                                        <div className="absolute left-0 top-full mt-2 z-10 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow">
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
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-30 bg-black bg-opacity-75" onClick={handleOverlayClick}>
                    <div className="absolute top-0 left-0 w-3/4 h-full bg-white p-4" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-4 right-4 text-gray-500"
                            onClick={handleOverlayClick}
                        >
                            <MdOutlineCancel size={24} />
                        </button>
                        <nav className="flex flex-col space-y-4">
                            <ul className="text-black">
                                {menuItems.map((item, index) => (
                                    <li key={index} className={item.dropdown ? 'relative' : ''}>
                                        {!item.isButton ? (
                                            item.dropdown ? (
                                                <div 
                                                    className="flex items-center cursor-pointer"
                                                    onClick={handleSolutionClick}
                                                >
                                                    <span className="block py-2 px-3">{item.label}</span>
                                                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                    </svg>
                                                </div>
                                            ) : (
                                                <div className="flex items-center">
                                                    <a href={item.href} className="block py-2 px-3">
                                                        {item.label}
                                                    </a>
                                                </div>
                                            )
                                        ) : (
                                            <Link href='/signup?type=for-profit'>
                                                <button className='bg-[#449522] rounded-lg text-white p-2 whitespace-nowrap text-sm not-italic font-normal leading-6 xl:text-base'>
                                                    Get Started for <span className='font-bold'>free</span>
                                                </button>
                                            </Link>
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