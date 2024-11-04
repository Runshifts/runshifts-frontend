import React from 'react'
import Layout from './../_components/homepageComps/Layout';
import CommonHeader from './../_components/homepageComps/CommonHeader';
import CommonTitle from "../_components/homepageComps/CommonTitle";
import CommonParagraph from "../_components/homepageComps/CommonParagraph";
import HomeBlog from "../_components/homepageComps/HomeBlog";
import Frame1 from "../_assets/img/Frame1.png"
import Frame2 from "../_assets/img/Frame2.png"
import Frame3 from "../_assets/img/Frame3.png"
import Image from 'next/image';
import Link from 'next/link';
import BlogProd from "../_assets/img/BlogProd.svg"
import Others from './Others'

const categories = [
    {
        title: 'Team productivity',
        id: 1,
        imageUrl: Frame1
    },
    {
        title: 'Time management',
        id: 2,
        imageUrl: Frame2
    },
    {
        title: 'Business growth',
        id: 3,
        imageUrl: Frame3
    },
];

export default function Blog() {
    return (
        <Layout>
            <div className='px-4 my-8 flex flex-col items-center justify-center'>
                <CommonHeader>
                    <div className='text-center w-[368px] xl:w-[568px]'>
                        Blogs on team
                    </div>
                </CommonHeader>
                <CommonHeader>
                    <div className='text-center w-[368px] xl:w-[768px] mt-0'>
                        management and productivity
                    </div>
                </CommonHeader>

                {/* Categories Section */}
                <div className='w-full max-w-[1280px] flex flex-col items-center justify-center mt-10 mb-4 px-0 xl:px-4'>
                    <CommonTitle>Read by category</CommonTitle>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6 mt-8">
                        {categories.map(({ id, title, imageUrl }) => (
                            <div key={id} className="relative rounded-lg">
                                <Image
                                    src={imageUrl}
                                    alt={title}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                <div className="absolute inset-0" />
                                <div className="absolute left-6 bottom-6">
                                    <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                                        {title}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Featured Blogs Section */}
                <div className="w-full max-w-[1280px] flex flex-col items-center justify-center my-8 xl:my-20">
                    <CommonTitle>
                        <div className='text-center'>
                            Featured blogs
                        </div>
                    </CommonTitle>
                    <div className="w-full my-4 xl:my-8">
                        <HomeBlog />
                    </div>
                </div>

                <div className='flex flex-col-reverse items-center justify-between xl:flex-row'>
                    <div className='flex flex-col items-center justify-center xl:items-start xl:justify-start'>
                        <button className="bg-[#B2E89A] text-[#17320B] rounded-full px-4 py-2 text-base not-italic font-normal leading-6 mt-3 text-center xl:mt-0 xl:text-start">
                            Team productivity
                        </button>
                        <CommonHeader>
                            <div className='text-center xl:text-left w-[328px] xl:w-[591px] '>
                                Types of Feedback: Exploring Feedback Types with Examples
                            </div>
                        </CommonHeader>
                        <CommonParagraph>
                            <div className='w-[328px] text-center xl:text-left xl:w-[501px]'>
                                Explore the 11 types of feedback, including positive, negative, and constructive, with real-life examples.
                            </div>
                        </CommonParagraph>
                        <Link href="/signup?type=for-profit">
                            <button className="bg-[#283142] text-[#fff] rounded-lg px-4 py-2 text-base not-italic font-semibold leading-6 my-5">
                                Start using Runshifts
                            </button>
                        </Link>
                    </div>
                    <Image src={BlogProd} alt='' height={313} width={513} className='rounded-xl ml-0 xl:ml-8' />
                </div>

                <div>
                    <Others />
                </div>
            </div>
        </Layout>
    )
}