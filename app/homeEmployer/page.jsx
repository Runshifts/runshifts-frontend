import React from "react";
import CommonTitle from "../_components/homepageComps/CommonTitle";
import CommonHeader from "../_components/homepageComps/CommonHeader";
import CommonParagraph from "../_components/homepageComps/CommonParagraph";
import CommonButtons from "../_components/homepageComps/CommonButtons";
import InnerHeader from "../_components/homepageComps/InnerHeader";
import Layout from "../_components/homepageComps/Layout";
import Image from "next/image";
import homeEmployer1 from "../_assets/img/homeEmployer1.svg";
import TimeSheet from "../_assets/svgs/TimeSheet";
import Signin from "../_assets/svgs/Signin";
import Organize from "../_assets/svgs/Organize";
import Access from "../_assets/svgs/Access";
import Informed from "../_assets/svgs/Informed";
import Feature from "../_assets/svgs/Feature";
import RightArrow from "../_assets/svgs/RightArrow";
import Plan from '../pricing/Plans'

const features = [
  {
    icon: Organize,
    title: "Organize your team with schedule",
    description: "Organize your team with intuitive scheduling Effortlessly create, manage, and update staff schedules to keep your operations running smoothly."
  },
  {
    icon: TimeSheet,
    title: "Timesheet management",
    description: "Streamline timesheet management Accurate time tracking and automated payroll integration to simplify workforce administration."
  },
  {
    icon: Access,
    title: "Manage your time with tracker",
    description: "Take control of your team's time with powerful tracking Monitor hours worked, identify inefficiencies, and ensure fair compensation for your employees."
  },
  {
    icon: Signin,
    title: "Real time communication with team members",
    description: "Enable real-time communication with your team Keep your staff informed and aligned with instant notifications and updates."
  },
  {
    icon: Informed,
    title: "Get informed data with reports",
    description: "Gain data-driven insights to optimize your workforce Comprehensive reporting and analytics provide the visibility to make informed business decisions."
  },
  {
    icon: Feature,
    title: "Manage your team with teams feature",
    description: "Centralized team management in one platform Oversee your entire workforce, resolve conflicts, and foster collaboration with Runshifts' all-in-one tools."
  },
];

export default function HomeEmployer() {
  return (
    <Layout>
    <div className=''>
      <div className="mx-8 px-4 mt-8 flex flex-col items-center justify-center">
        <CommonTitle>Employer</CommonTitle>
        <CommonHeader>Run your business with efficiency</CommonHeader>
        <CommonParagraph>
          We believe RunShifts should be accessible to all companies, no matter
          the size.
        </CommonParagraph>
      </div>

      <Image
        src={homeEmployer1}
        alt=""
        height={513}
        width={1298}
        className="rounded-2xl mx-auto mt-8"
      />

      <div className="bg-[#F9FAFB] my-5 px-8">
        <p className="text-left text-[#2D6316] text-sm not-italic font-medium leading-6 my-4 pt-8 md:text-xs">
          Features
        </p>
        <InnerHeader>
          <p className="text-left">
            Workforce Management Solutions for Your Business
          </p>
        </InnerHeader>
        <CommonParagraph className="text-left text-[#475467] text-sm not-italic font-medium leading-6 my-4 md:text-xs">
        Empower your team and optimize operations with Runshifts&apos; suite
          of employer-focused tools. Streamline scheduling, timekeeping,
          communication, and reporting to drive efficiency across your
          workforce.
        </CommonParagraph>
      

      <div className="flex flex-col items-center justify-center my-4 xl:my-10 ">
        <div className="grid grid-cols-1 gap-4 place-items-start justify-start mt-6 xl:grid-cols-3">
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
      </div>
      </div>
      <div>
        <InnerHeader>
          Get started now
        </InnerHeader>
        <Plan />
      </div>
    </div>
    </Layout>
  );
}
