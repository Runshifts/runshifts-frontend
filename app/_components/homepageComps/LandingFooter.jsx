import React from 'react';
import Image from 'next/image';
import runshiftsLogo from './runshiftsLogo2.svg';
import CommonButtons from './CommonButtons';
import Link from 'next/link';
import Linkedin from './../../_assets/svgs/Linkedin';
import Fb from './../../_assets/svgs/Fb';
import Whatsapp from './../../_assets/svgs/Whatsapp';
import Twitter from './../../_assets/svgs/Twitter';
import Ig from './../../_assets/svgs/Ig';


const footerData = {
    logo: {
        href: "/",
        src: runshiftsLogo,
        alt: "runshifts Logo",
    },
    sections: [
        {
            title: "Platform",
            links: [
                { label: "Pricing", href: "https://flowbite.com/" },
                { label: "Employers", href: "/homeEmployer" },
                { label: "Employees", href: "/homeEmployee" },
                { label: "Non-profit", href: "/nonProfit" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "Blog", href: "/" },
                { label: "Careers", href: "/" },
                { label: "News", href: "/" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "Knowledge base", href: '/knowledgebase' },
            ],
        },
    ],
    bottomLinks: [
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Cookies", href: "#" },
    ],
    copyright: {
        year: 2024,
        text: "www.runshifts.com",
        href: "https://runshifts.com/",
    },
};

export default function Footer() {
    return (
        <div>
            <footer className="bg-[#F7F9FC] dark:bg-gray-900 mt-16">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">

                    <div className='flex flex-col items-start justify-between md:flex-row'>
                        <h2 className='text-black text-2xl not-italic font-semibold'>
                            Join our newsletter to<br /> keep up to date with us!
                        </h2>

                        <div className='flex flex-col items-start mt-3 xl:flex-row'>
                            <div class="relative mb-6 mr-2">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                    </svg>
                                </div>
                                <input type="text" id="input-group-1" class="w-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[360px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" />
                            </div>

                            <CommonButtons>
                                <div className='max-w-screen xl:w-full'>
                                Subscribe
                                </div>
                            </CommonButtons>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center mb-6 xl:mb-0">
                            <a href={footerData.logo.href} className="flex items-center">
                                <Image src={footerData.logo.src} alt={footerData.logo.alt} />
                            </a>
                            <p className='hidden xl:block ml-2 text-base not-italic font-normal'>
                            Less Toil, More Productivity
                            </p>
                            <div className='flex items-center justify-center ml-0 my-3 xl:ml-2'>
                                <div className='bg-[#D5DBE6] p-1 rounded-full w-fit '>
                                    <Linkedin />
                                </div>
                                <div className='bg-[#D5DBE6] p-1 rounded-full w-fit mx-2'>
                                    <Fb />
                                </div>
                                <div className='bg-[#D5DBE6] p-0.2 rounded-full w-fit '>
                                    <Ig />
                                </div>
                                <div className='bg-[#D5DBE6] p-1 rounded-full w-fit mx-2'>
                                    <Whatsapp />
                                </div>
                                <div className='bg-[#D5DBE6] p-0.5 rounded-full w-fit '>
                                    <Twitter />
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="flex items-center justify-center gap-2 text-sm text-[#040505CC]">
                            © {footerData.copyright.year}{" "}
                            <a href={footerData.copyright.href} className="hover:underline">
                                {footerData.copyright.text}
                            </a>
                        </span>
                        <div className="flex mt-4 items-center justify-center sm:mt-0">
                            {footerData.bottomLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-[#040505CC] text-xs hover:text-gray-900 dark:hover:text-white ms-5"
                                >
                                    <p>{link.label}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
