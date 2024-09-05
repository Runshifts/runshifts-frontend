import React from "react";
import CommonTitle from "../_components/homepageComps/CommonTitle";
import CommonHeader from "../_components/homepageComps/CommonHeader";
import CommonParagraph from "../_components/homepageComps/CommonParagraph";
import CommonButtons from "../_components/homepageComps/CommonButtons";
import InnerHeader from "../_components/homepageComps/InnerHeader";
import Layout from "../_components/homepageComps/Layout";
import Image from "next/image";
import homeEmployee from "../_assets/img/homeEmployee.svg";
import TimeSheet from "../_assets/svgs/TimeSheet";
import Signin from "../_assets/svgs/Signin";
import Organize from "../_assets/svgs/Organize";
import Access from "../_assets/svgs/Access";
import RightArrow from "../_assets/svgs/RightArrow";
import Link from 'next/link';

const features = [
  {
    icon: Organize,
    title: "Organize your shifts with schedule",
    description: "Stay on top of your work schedule with our user-friendly shift management tools. Easily view, swap, and request time off through the app."
  },
  {
    icon: TimeSheet,
    title: "Timesheet management",
    description: "Accurately track your hours and ensure you're paid for the work you do. Our timekeeping tools integrate seamlessly with payroll."
  },
  {
    icon: Access,
    title: "Access EWA",
    description: "Don't wait for payday - withdraw a portion of your earned wages anytime through our secure Earned Wage Access feature."
  },
  {
    icon: Signin,
    title: "Sign in and manage your time with tracker",
    description: "Clock in and out with a few taps, and monitor your hours worked to keep your schedule on track."
  },
];

export default function HomeEmployee() {
  return (
    <Layout>
    <div className=''>
      <div className="mx-8 px-4 my-8 flex flex-col items-center justify-center">
        <CommonTitle>Employee</CommonTitle>
        <CommonHeader>Work efficiently and earn more</CommonHeader>
        <CommonParagraph>
        We believe RunShifts should be accessible to all companies, no matter the size.
        </CommonParagraph>
      </div>

      <Image
        src={homeEmployee}
        alt=""
        height={513}
        width={1298}
        className="rounded-2xl mx-auto mt-8 mb-4"
      />

      <div className="bg-[#F9FAFB] px-8 my-5">
        <p className="text-left text-[#2D6316] text-sm not-italic font-medium leading-6 my-4 pt-8 md:text-xs">
          Features
        </p>
        <InnerHeader>
          <p className="text-left">
          Empower Your Workforce with Runshifts
          </p>
        </InnerHeader>
        <CommonParagraph>
        Runshifts puts the power in your hands. Manage your schedule, track your time, and access your earnings - all through our intuitive platform designed with employees in mind.
        </CommonParagraph>
      

      <div className="flex flex-col items-center justify-center px-4 my-4 xl:my-10 ">
        <div className="grid grid-cols-1 gap-4 place-items-start justify-start mt-6 xl:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-start mt-4"
            >
              <feature.icon />
              <h2 className="text-center text-[#101828] text-xl not-italic font-medium leading-7 my-2">
                {feature.title}
              </h2>
              <p className="text-left text-[#475467] text-sm not-italic font-medium leading-6 my-4 md:text-xs">
                {feature.description}
              </p>
              <button className="flex items-center text-[#2D6316] py-2 text-base not-italic font-semibold leading-6 mt-2">
                <p className="px-2">Learn More</p>
                <RightArrow />
              </button>
            </div>
          ))}
        </div>
        <Link href={'/signup?type=for-profit'} className=" mt-14 my-5">
        <CommonButtons>
          Log into your account
        </CommonButtons>
        </Link>       
        </div>
      </div>
    </div>
    </Layout>
  );
}
