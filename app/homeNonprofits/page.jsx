import React from "react";
import CommonTitle from "../_components/homepageComps/CommonTitle";
import CommonHeader from "../_components/homepageComps/CommonHeader";
import CommonParagraph from "../_components/homepageComps/CommonParagraph";
import CommonButtons from "../_components/homepageComps/CommonButtons";
import InnerHeader from "../_components/homepageComps/InnerHeader";
import Layout from "../_components/homepageComps/Layout";
import Image from "next/image";
import nonprofits from "../_assets/img/nonprofit.svg";
import TimeSheet from "../_assets/svgs/TimeSheet";
import Signin from "../_assets/svgs/Signin";
import Organize from "../_assets/svgs/Organize";
import Access from "../_assets/svgs/Access";
import Informed from "../_assets/svgs/Informed";
import Feature from "../_assets/svgs/Feature";
import RightArrow from "../_assets/svgs/RightArrow";
import GreenCheck from "../_assets/svgs/GreenCheck";

const features = [
  {
    icon: Organize,
    title: "Organize your team with intuitive scheduling",
    description: "Easily create, update, and coordinate shifts to keep your operations running smoothly, even with a dynamic volunteer or part-time workforce."
  },
  {
    icon: TimeSheet,
    title: "Streamlined timesheet management",
    description: "Accurate time tracking and automated payroll integration simplifies administrative tasks, freeing up your team to focus on your cause."
  },
  {
    icon: Access,
    title: "Manage your time with powerful tracking",
    description: "Monitor volunteer and employee hours, identify inefficiencies, and ensure fair compensation for your dedicated workforce."
  },
  {
    icon: Signin,
    title: "Enable real-time communication with your team",
    description: "Keep your staff and volunteers informed and aligned with instant notifications, updates, and centralized messaging."
  },
  {
    icon: Informed,
    title: "Gain data-driven insights to optimize your operations",
    description: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
  },
  {
    icon: Feature,
    title: "Centralized team management in one platform",
    description: "Oversee your entire workforce, resolve scheduling conflicts, and foster collaboration with Runshifts' all-in-one nonprofit-tailored tools."
  },
];

const plans = [
    {
      price: "0/Forever",
      planName: "Non-Profits",
      billingCycle: "",
      features: [
        "Access to all basic features",
        "Reporting and analytics",
        "1 - 10 team members",
        "Basic chat and email support",
      ],
      buttonText: "Get started for free",
      href: "/signup?type=non-profit",
    },
]

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
        src={nonprofits}
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
          Optimized Workforce Management for Non-Profits and Charities
          </p>
        </InnerHeader>
        <CommonParagraph className="text-left text-[#475467] text-sm not-italic font-medium leading-6 my-4 md:text-xs">
        Empower your mission-driven organization with Runshifts&apos; tailored workforce management tools. Streamline scheduling, timekeeping, and team collaboration to maximize your impact.
        </CommonParagraph>
      

      <div className="flex flex-col items-center justify-center my-4 xl:my-10 pb-8 ">
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
      <div className='mt-8'>
        <InnerHeader>
          Pricing
        </InnerHeader>

        <div className="grid grid-cols-1 place-items-center place-content-center left-0 top-0 gap-4 mx-6 xl:mx-12 mb-28">
        {plans.map((plan, index) => (
        <div 
          key={index} 
          className="p-4 border shadow-xl rounded-xl flex flex-col justify-between h-full"
        >
          <div>
            <h1 
              className={`text-center not-italic font-semibold rounded-full my-2 md:my-4 ${
                plan.price === "Request Quote" 
                  ? "text-xl md:text-3xl" 
                  : "text-2xl md:text-5xl"
              } text-[#36322F]`}
            >
              {plan.price.split("/")[0]}
              {plan.price !== "Request Quote" && (
                <span className="text-sm xl:text-2xl">
                  /{plan.price.split("/")[1]}
                </span>
              )}
            </h1>
            <p className="text-center text-xl not-italic font-semibold leading-7 text-[#101828]">
              {plan.planName}
            </p>
            <p className="text-center text-base not-italic font-normal leading-6 text-[#475467]">
              {plan.billingCycle}
            </p>
            <div className="flex flex-col items-start justify-center my-8">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center justify-center mb-3">
                  <GreenCheck />
                  <p className="text-center text-base not-italic font-normal leading-6 text-[#475467] ml-2">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-auto mx-auto mb-2">
            <CommonButtons>
              <a href={plan.href} className="block px-3 rounded-md text-center">
                {plan.buttonText}
              </a>
            </CommonButtons>
          </div>
        </div>
      ))}
      </div>

      </div>
    </div>
    </Layout>
  );
}
