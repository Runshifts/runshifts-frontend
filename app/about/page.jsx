import React from 'react'
import CommonTitle from '../_components/homepageComps/CommonTitle'
import CommonHeader from '../_components/homepageComps/CommonHeader'
import CommonParagraph from '../_components/homepageComps/CommonParagraph'
import CommonButtons from '../_components/homepageComps/CommonButtons'
import InnerHeader from '../_components/homepageComps/InnerHeader'
import Layout from '../_components/homepageComps/Layout'
import Image from 'next/image'
import peoplehands from '../_assets/img/peoplehands.svg'
import Alex from '../_assets/img/Alex.svg'
import Manage from "../_assets/svgs/Manage";
import Secured from "../_assets/svgs/Secured";
import Support from "../_assets/svgs/Support";
import LinkedinColor from '../_assets/svgs/LinkedinColor';
import Twitter from '../_assets/svgs/Twitter';
import olivia from '../_assets/img/olivia.svg'
import baker from '../_assets/img/baker.svg'
import demi from '../_assets/img/demi.svg'
import lana from '../_assets/img/lana.svg'
import Link from 'next/link';

const features = [
    {
        icon: UserSvg,
        title: "Shift Scheduling",
        description: "Create and manage shifts effortlessly with our user-friendly interface."
    },
    {
        icon: Hearts,
        title: "Real-Time Updates",
        description: "Keep your team informed with instant notifications for any changes."
    },
    {
        icon: Conflicts,
        title: "Conflict Resolution",
        description: "Automatically detect and resolve scheduling conflicts to maintain smooth operations."
    },
    {
        icon: Time,
        title: "Time Tracking",
        description: "Monitor working hours and ensure accurate payroll processing."
    },
    {
        icon: Reports,
        title: "Reports and Analytics",
        description: "Gain insights into workforce efficiency with comprehensive reports."
    }
];

const teamMembers = [
    {
        name: "Olivia Steele",
        role: "CEO",
        description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
        image: olivia,
        alt: "img-team",
        socials: [
            { platform: "Twitter", icon: <Twitter /> },
            { platform: "LinkedIn", icon: <LinkedinColor /> }
        ]
    },
    {
        name: "Baker Hughes",
        role: "Engineering Manager",
        description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
        image: baker,
        alt: "img-team",
        socials: [
            { platform: "Twitter", icon: <Twitter /> },
            { platform: "LinkedIn", icon: <LinkedinColor /> }
        ]
    },
    {
        name: "Demi Carter",
        role: "Frontend Developer",
        description: "Former frontend dev for Linear, Coinbase, and Postscript.",
        image: demi,
        alt: "img-team",
        socials: [
            { platform: "Twitter", icon: <Twitter /> },
            { platform: "LinkedIn", icon: <LinkedinColor /> }
        ]
    },
    {
        name: "Lana Steiner",
        role: "Product Manager",
        description: "Former PM for Linear, Lambda School, and On Deck.",
        image: lana,
        alt: "img-team",
        socials: [
            { platform: "Twitter", icon: <Twitter /> },
            { platform: "LinkedIn", icon: <LinkedinColor /> }
        ]
    }
];

const testimonials = [
    {
        testimonial:
            "Runshifts has transformed the way we manage our workforce. The scheduling process is now faster and more efficient, and our team loves the real-time updates!",
        name: "Alex R.",
        position: "Operations Manager",
        image: Alex,
    },
    {
        testimonial:
            "The conflict resolution feature has been a game-changer for us. No more overlapping shifts or last-minute scrambles!",
        name: "Jessica M.",
        position: "HR Director",
        image: Alex,
    },
    {
        testimonial:
            "Since we started using Runshifts, our productivity has increased significantly. Highly recommend it!",
        name: "Michael T.",
        position: "Business Owner",
        image: Alex,
    },
];

export default function About() {
    return (
        <Layout>
            <div>
                <div className='px-4 my-8 flex flex-col items-center justify-center'>
                    <CommonTitle>About us</CommonTitle>
                    <CommonHeader>
                        <div className='w-[325px] xl:w-[745px]'>
                            Empowering Businesses and Teams
                        </div>
                    </CommonHeader>
                    {/* <CommonParagraph>Learn more about Runshifts and the team behind it</CommonParagraph> */}
                </div>

                <div className='px-4 flex flex-col-reverse items-center justify-between mx-2 xl:flex-row xl:mx-16'>
                    <div className='flex flex-col items-center justify-center mx-2 xl:items-start xl:justify-start'>
                        <CommonHeader>
                            <div className='text-center xl:text-left'>
                            Who we are
                            </div>
                            </CommonHeader>
                        <CommonParagraph>
                            <div className='w-[328px] text-center xl:text-left xl:w-[501px]'>
                                At Runshifts, we believe in making workforce management as seamless and efficient as possible. Our team of experts has created an innovative platform that addresses the common challenges of scheduling and shift management. Whether you&apos;re a small business or a large enterprise, Runshifts provides the tools you need to optimize your operations.
                            </div>
                        </CommonParagraph>
                        <Link href="/signup?type=for-profit">
                            <button className="bg-[#283142] text-[#fff] rounded-lg px-4 py-2 text-base not-italic font-semibold leading-6 my-5">
                                Start using Runshifts
                            </button>
                        </Link>
                    </div>
                    <Image src={peoplehands} alt='' height={313} width={513} className='xl:ml-8' />
                </div>

                <div className='flex flex-col items-center justify-center px-4 my-14 bg-[#F9FAFB] py-8 xl:py-24'>
                    <div>
                        <p className="text-center text-[#2D6316] text-sm not-italic font-medium leading-6 my-4 md:text-xs">
                            Services
                        </p>
                        <InnerHeader>What we offer</InnerHeader>
                    </div>
                    <div className="w-full max-w-7xl">
                        <div className="flex flex-wrap justify-center gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col items-center justify-center mt-4 w-full sm:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)] max-w-xs">
                                    <feature.icon />
                                    <h2 className="text-center text-[#101828] text-xl not-italic font-medium leading-7 mt-2">
                                        {feature.title}
                                    </h2>
                                    <p className="text-center text-[#475467] text-sm not-italic font-medium leading-6 my-2 mx-8 md:text-xs">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='mx-4 xl:mx-8'>
                    <div>
                        <InnerHeader>How it works</InnerHeader>
                        <p className="text-center text-[#475467] text-sm not-italic font-medium leading-6 my-4 mx-8 md:text-xs">
                            Streamline Your Shift Management in 3 Easy Steps
                        </p>
                    </div>

                    <div className="flex justify-center items-center gap-4 flex-col md:flex-row">
                        <div className="p-5 rounded-xl">
                            <Manage />
                            <h2 className="text-lg not-italic font-bold leading-6 text-[#18181B] py-4">Sign up</h2>
                            <p className="text-base not-italic font-normal leading-6 text-[#52525B] py-2">
                                Create your account and set up your organization’s profile.
                            </p>
                        </div>

                        <div className="p-2 border border-dashed rounded-xl mx-3 xl:p-5">
                            <Secured />
                            <h2 className="text-lg not-italic font-bold leading-6 text-[#18181B] py-4">Create Schedules</h2>
                            <p className="text-base not-italic font-normal leading-6 text-[#52525B] py-2">
                                Use our intuitive tools to design and manage your shift schedules.
                            </p>
                        </div>

                        <div className="p-5 rounded-xl">
                            <Support />
                            <h2 className="text-lg not-italic font-bold leading-6 text-[#18181B] py-4">Communicate</h2>
                            <p className="text-base not-italic font-normal leading-6 text-[#52525B] py-2">
                                Keep your team updated with real-time notifications and messages.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className="text-center text-[#475467] text-sm not-italic font-medium leading-6 my-4 mx-8 md:text-xs">
                            Experience hassle-free shift management with Runshifts.
                        </p>
                        <CommonButtons>
                            <Link href={'/signup?type=for-profit'}>
                                Get started
                            </Link>
                        </CommonButtons>
                    </div>
                </div>

                <div className='bg-[#F9FAFB] px-10 py-16 my-16'>
                    <div>
                        <p className="text-center text-[#2D6316] text-sm not-italic font-medium leading-6 my-4 md:text-xs">
                            Testimonials
                        </p>
                        <InnerHeader>What Our Clients Say</InnerHeader>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-4 mx-2 md:flex-row md:mx-8 mt-3">
                        {testimonials.map((item, index) => (
                            <div key={index} className="relative flex flex-col justify-center items-start">
                                
                                <p className="w-full h-full xl:w-[365px] xl:h-[116px] bg-[#F0F0F0] p-3 rounded-2xl mb-2 text-black text-sm not-italic font-normal relative before:content-[''] before:absolute before:bottom-[-10px] before:left-4 before:w-0 before:h-0 before:border-l-[10px] before:border-r-[10px] before:border-t-[10px] before:border-l-transparent before:border-r-transparent before:border-t-[#F0F0F0]">
                                    &apos;{item.testimonial}&apos;
                                </p>
                                <div className="flex mt-2">
                                    <Image src={item.image} alt={item.name} height={50} width={50} />
                                    <div className="ml-3">
                                        <h2 className="text-sm not-italic font-normal text-[#040505]">
                                            {item.name}
                                        </h2>
                                        <p className="text-sm not-italic font-normal text-[#040505]">
                                            {item.position}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className='my-10'>
                    <div>
                        <InnerHeader>Meet our team</InnerHeader>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between mx-3 xl:px-16'>
                        {teamMembers.map((member, index) => (
                            <div key={index} className='bg-[#F9FAFB] flex flex-col items-center justify-center p-6 rounded mx-2'>
                                <Image src={member.image} alt={member.alt} height={80} width={80} className='rounded-full' />
                                <h3 className='text-center text-lg not-italic font-semibold leading-7 text-[#101828] my-2'>{member.name}</h3>
                                <h3 className='text-center text-lg not-italic font-semibold leading-7 text-[#449522] mt-2'>{member.role}</h3>
                                <p className='text-center text-sm not-italic font-normal leading-7 text-[#475467]'>
                                    {member.description}
                                </p>
                                <div className='flex items-center my-2'>
                                    {member.socials.map((social, i) => (
                                        <div key={i} className='mr-3'>
                                            {social.icon}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}



function UserSvg() {
    return (
        <svg
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect y="0.730469" width="48" height="48" rx="24" fill="#CBF0BC" />
            <path
                d="M29 33.7305V31.7305C29 30.6696 28.5786 29.6522 27.8284 28.902C27.0783 28.1519 26.0609 27.7305 25 27.7305H17C15.9391 27.7305 14.9217 28.1519 14.1716 28.902C13.4214 29.6522 13 30.6696 13 31.7305V33.7305M35 33.7305V31.7305C34.9993 30.8442 34.7044 29.9832 34.1614 29.2828C33.6184 28.5823 32.8581 28.082 32 27.8605M28 15.8605C28.8604 16.0808 29.623 16.5812 30.1676 17.2828C30.7122 17.9844 31.0078 18.8473 31.0078 19.7355C31.0078 20.6236 30.7122 21.4865 30.1676 22.1882C29.623 22.8898 28.8604 23.3902 28 23.6105M25 19.7305C25 21.9396 23.2091 23.7305 21 23.7305C18.7909 23.7305 17 21.9396 17 19.7305C17 17.5213 18.7909 15.7305 21 15.7305C23.2091 15.7305 25 17.5213 25 19.7305Z"
                stroke="#449522"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function Hearts() {
    return (
        <svg
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect y="0.730469" width="48" height="48" rx="24" fill="#CBF0BC" />
            <path
                d="M32.84 17.3403C32.3292 16.8293 31.7228 16.424 31.0554 16.1474C30.3879 15.8709 29.6725 15.7285 28.95 15.7285C28.2275 15.7285 27.5121 15.8709 26.8446 16.1474C26.1772 16.424 25.5708 16.8293 25.06 17.3403L24 18.4003L22.94 17.3403C21.9083 16.3086 20.509 15.7291 19.05 15.7291C17.591 15.7291 16.1917 16.3086 15.16 17.3403C14.1283 18.372 13.5487 19.7713 13.5487 21.2303C13.5487 22.6894 14.1283 24.0886 15.16 25.1203L16.22 26.1803L24 33.9603L31.78 26.1803L32.84 25.1203C33.351 24.6096 33.7563 24.0032 34.0329 23.3357C34.3095 22.6682 34.4518 21.9528 34.4518 21.2303C34.4518 20.5079 34.3095 19.7924 34.0329 19.125C33.7563 18.4575 33.351 17.8511 32.84 17.3403V17.3403Z"
                stroke="#449522"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function Conflicts() {
    return (
        <svg
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect y="0.730469" width="48" height="48" rx="24" fill="#CBF0BC" />
            <path
                d="M35 18.7305L25.5 28.2305L20.5 23.2305L13 30.7305M35 18.7305H29M35 18.7305V24.7305"
                stroke="#449522"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function Time() {
    return (
        <svg
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect y="0.730469" width="48" height="48" rx="24" fill="#CBF0BC" />
            <path
                d="M20 26.7305C20 26.7305 21.5 28.7305 24 28.7305C26.5 28.7305 28 26.7305 28 26.7305M21 21.7305H21.01M27 21.7305H27.01M34 24.7305C34 30.2533 29.5228 34.7305 24 34.7305C18.4772 34.7305 14 30.2533 14 24.7305C14 19.2076 18.4772 14.7305 24 14.7305C29.5228 14.7305 34 19.2076 34 24.7305Z"
                stroke="#449522"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
function Reports() {
    return (
        <svg
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect y="0.730469" width="48" height="48" rx="24" fill="#CBF0BC" />
            <path
                d="M25 14.7305L15 26.7305H24L23 34.7305L33 22.7305H24L25 14.7305Z"
                stroke="#449522"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}