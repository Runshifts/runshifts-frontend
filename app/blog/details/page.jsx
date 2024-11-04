import React from 'react'
import Layout from './../../_components/homepageComps/Layout';
import CommonHeader from '../../_components/homepageComps/CommonHeader';
import CommonParagraph from '../../_components/homepageComps/CommonParagraph';
import Frame1 from "../../_assets/img/Frame1.png"
import Image from 'next/image'
import Linkedin from './../../_assets/svgs/Linkedin';
import Fb from './../../_assets/svgs/Fb';
import Whatsapp from './../../_assets/svgs/Whatsapp';
import Twitter from './../../_assets/svgs/Twitter';
import Ig from './../../_assets/svgs/Ig';
import RelatedPost from './RelatedPost'

export default function Blog() {
    return (
        <Layout>
            <div className=' my-8'>
                <div className='flex flex-col items-center justify-center'>
                    <CommonHeader>
                        <div className='text-center w-[368px] xl:w-[668px]'>
                            30 Best Team Management Tools for 2024
                        </div>
                    </CommonHeader>
                    <CommonParagraph>
                        <div className='text-center w-[298px] xl:w-[668px]'>
                            Discover the 30 best team management software tools for 2024 and elevate your team’s productivity and efficiency
                        </div>
                    </CommonParagraph>

                    <div className="relative rounded-lg px-4 xl:px-10 mt-6 mb-10">
                        <Image
                            src={Frame1}
                            alt='background'
                            height={1216}
                            width={423}
                            className="w-[398px] h-[423px] object-cover rounded-lg xl:w-[1216px] xl:h-[423px]"
                        />
                        <div className="absolute inset-0" />
                        <div className="absolute left-7 xl:left-14 bottom-6">
                            <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                                Team productivity
                            </span>
                        </div>
                    </div>
                </div>

                <div className='bg-[#F9FAFB] px-0 py-2 xl:px-14 xl:py-8'>
                    <div className='grid grid-cols-1 gap-6 px-4 xl:grid-cols-4'>
                        <div className='hidden xl:block col-span-1'>
                            <h2 className='text-2xl not-italic font-semibold text-[#1A212C] '>
                                Table of Contents
                            </h2>
                            <h4 className='text-base not-italic font-bold text-[#1A212C] '>
                                30 Best Team Management Tools for ...
                            </h4>
                            <ul>
                                <li className='list-disc'>The Cream of the Crop: Your 2024 Must-Have Tools</li>
                                    <li className='list-disc'>Runshifts: The New King of Team Management</li>
                                    <li className='list-disc'>  Slack: Still the Communication Champion</li>
                                    <li className='list-disc'>Asana: Where Work Flows Like Magic</li>
                                    <li className='list-disc'>Monday.com: The Visual Virtuoso</li>
                                    <li className='list-disc'>Trello: The Kanban King</li>
                                    <li className='list-disc'>Making the Right Choice: Your Game Plan</li>
                                    <li className='list-disc'>🎯 Know Your Non-Negotiables</li>
                                    <li className='list-disc'>💡 Pro Tips for Tool Selection</li>
                                    <li className='list-disc'>The Bottom Line</li>
                                    <li className='list-disc'>Ready to Transform Your Team?</li>
                                    <li className='list-disc'>Over to You</li>
                            </ul>
                        </div>

                        <div className='col-span-3'>
                            <div>
                                <p className='text-gray-900 text-xl not-italic font-semibold leading-8 mb-4'>
                                    30 Best Team Management Tools for 2024: Transform How Your Team Works<br />
                                </p>
                                Remember the days when team management meant endless email chains and sticky notes plastered across your desk? Yeah, we&apos;ve come a long way! In 2024, we&apos;re seeing a revolution in how teams work together, and I&apos;m here to guide you through the absolute best tools that are changing the game.<br />
                                <p className='text-gray-900 text-xl not-italic font-semibold leading-8 py-6'>
                                    Why Your Choice of Management Tool Matters More Than Ever <br />
                                </p>
                                With remote and hybrid work becoming the new normal, having the right team management tool isn&apos;t just a nice-to-have – it&apos;s essential for survival. But here&apos;s the thing: with hundreds of options out there, finding the perfect fit can feel like searching for a needle in a digital haystack. Don&apos;t worry, I&apos;ve done the heavy lifting for you!<br />

                                <p className='text-gray-900 text-xl not-italic font-semibold leading-8 py-6'>
                                    The Cream of the Crop: Your 2024 Must-Have Tools<br />
                                </p>
                                <p className='text-gray-900 text-xl not-italic font-semibold leading-8 pb-6'>
                                    1. Runshifts: The New King of Team Management<br />
                                </p>
                                Listen up, because this is the tool that&apos;s got everyone talking in 2024. Runshifts isn&apos;t just another management tool – it&apos;s your virtual command center for everything team-related. What makes it special? Imagine having a crystal ball that helps you predict staffing needs, an AI assistant that handles scheduling conflicts, and a communication hub that keeps everyone in sync.<br />

                                <p className='text-gray-900 text-xl not-italic font-semibold leading-8 py-6'>
                                    Why teams are falling in love with Runshifts:<br />
                                </p>
                                Say goodbye to scheduling headaches with smart shift management
                                Keep your team in the loop with real-time updates
                                Track attendance without breaking a sweat
                                Handle payroll like a pro
                                Get insights that actually make sense
                            </div>

                            <div className='flex flex-col items-start justify-start my-6'>
                                <h2 className='text-base not-italic font-semibold'>
                                    Share post
                                </h2>

                                <div className="flex items-center ml-0 my-3 xl:ml-2">
                                    <div className="bg-[#D5DBE6] p-1 rounded-full w-fit ">
                                        <Linkedin />
                                    </div>
                                    <div className="bg-[#D5DBE6] p-1 rounded-full w-fit mx-2">
                                        <Fb />
                                    </div>
                                    <div className="bg-[#D5DBE6] p-1 rounded-full w-fit ">
                                        <Ig />
                                    </div>
                                    <div className="bg-[#D5DBE6] p-1 rounded-full w-fit mx-2">
                                        <Whatsapp />
                                    </div>
                                    <div className="bg-[#D5DBE6] p-1 rounded-full w-fit ">
                                        <Twitter />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="w-full max-w-[1280px] flex flex-col items-center justify-center my-8 xl:my-20">
                    <button className="bg-[#B2E89A] text-[#17320B] rounded-full px-2 py-0.5 text-base not-italic font-normal leading-6 mt-3 text-center xl:mt-0 xl:text-start">
                        Related posts
                    </button>
                    <div className="w-full px-4 my-4 xl:my-8">
                        <RelatedPost />
                    </div>
                </div>
            </div>
        </Layout>
    )
}