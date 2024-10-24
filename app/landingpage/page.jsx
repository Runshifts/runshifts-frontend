
'use client'
import Image from "next/image";
import { useRef } from 'react';
import runshiftsLogo from "../_components/homepageComps/runshiftsLogo2.svg";
import CommonButtons from "../_components/homepageComps/CommonButtons";
import LandingFooter from '../_components/homepageComps/LandingFooter';
import App from '../_assets/img/App.svg'
import Playstore from '../_assets/img/Playstore.svg'
import ContactForm from './ContactForm';

export default function Main() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
};

  const features = [
    {
      icon: <User />,
      title: "Shift Scheduling",
      description:
        "Create and manage shifts effortlessly with our user-friendly interface.",
    },
    {
      icon: <Heart />,
      title: "Real-Time Updates",
      description:
        "Keep your team informed with instant notifications for any changes.",
    },
    {
      icon: <Chart />,
      title: "Conflict Resolution",
      description:
        "Automatically detect and resolve scheduling conflicts to maintain smooth operations.",
    },
    {
      icon: <Emoji />,
      title: "Time Tracking",
      description:
        "Monitor working hours and ensure accurate payroll processing.",
    },
    {
      icon: <Bolt />,
      title: "Reports and Analytics",
      description:
        "Gain insights into workforce efficiency with comprehensive reports.",
    },
  ];

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }} className="">
      <div className="bg-gradient-radial from-[#FD9] via-[#CBF0BC] to-white min-h-screen  ">
        <div className="">
        <div className="flex items-center justify-between py-4 px-4  xl:px-16 ">
          <a href="/home" className="">
            <Image src={runshiftsLogo} alt="runshifts" />
          </a>
          <CommonButtons>
            <div onClick={scrollToForm}>
              Join waitlist
            </div>
          </CommonButtons>
        </div>

        <div className="relative min-h-screen mt-4 pl-4  xl:pl-16 xl:mt-16 ">
          {/* Background image with opacity */}
          <div className="absolute inset-0 bg-[url('../public/img/landingPage.png')] opacity-50"></div>

          {/* Content with no opacity */}
          <div className="relative z-10">
            <div className="mt-2 xl:mt-90">
              <h1 className="text-[26px] not-italic font-extrabold text-[#36322F] pt-2 xl:text-5xl xl:pt-20">
                Revolutionise Your <br/> Workforce Management
              </h1>
              <p className="text-base not-italic  font-normal leading-7 text-[#475467] my-5">
                Seamless scheduling, real-time updates, and powerful analytics
                in one platform.
              </p>

              <div className="mt-16 xl:mt-24">
                <p className="text-base not-italic font-semibold leading-7 text-[#475467]">
                  Coming soon to your app stores
                </p>
                <div className="flex items-start justify-start gap-3">
                  <Image src={App} alt="download" height={52} width={165} className='mr-0 xl:mr-2 my-2' />
                  <Image src={Playstore} alt="download" height={52} width={165} className='ml-0 xl:ml-2 my-2' />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen mt-10 xl:mt-0">
        <h2 className="text-3xl font-bold mb-8">Why choose us</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-[1200px] w-full px-4">
          <div className="flex flex-col gap-4 justify-center w-full xl:flex-row">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="bg-[#E5F7DD] p-6 flex flex-col items-center justify-center rounded-lg h-60 w-80 mx-2"
              >
                {feature.icon}
                <h3 className="text-center text-xl font-medium leading-7 text-[#101828] pt-4 py-2">
                  {feature.title}
                </h3>
                <p className="text-center text-base font-normal leading-6 text-[#475467]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 justify-center w-full xl:flex-row">
            {features.slice(3, 5).map((feature, index) => (
              <div
                key={index + 3}
                className="bg-[#E5F7DD] p-6 flex flex-col items-center justify-center rounded-lg h-60 w-80 mx-2"
              >
                {feature.icon}
                <h3 className="text-center text-xl font-medium leading-7 text-[#101828] pt-4 py-2">
                  {feature.title}
                </h3>
                <p className="text-center text-base font-normal leading-6 text-[#475467]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
      <ContactForm formType="landing" formRef={formRef} />
        </div>
      <LandingFooter />
    </div>
  );
}



function User() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill="#17320B" />
      <path
        d="M29 33V31C29 29.9391 28.5786 28.9217 27.8284 28.1716C27.0783 27.4214 26.0609 27 25 27H17C15.9391 27 14.9217 27.4214 14.1716 28.1716C13.4214 28.9217 13 29.9391 13 31V33M35 33V31C34.9993 30.1137 34.7044 29.2528 34.1614 28.5523C33.6184 27.8519 32.8581 27.3516 32 27.13M28 15.13C28.8604 15.3503 29.623 15.8507 30.1676 16.5523C30.7122 17.2539 31.0078 18.1168 31.0078 19.005C31.0078 19.8932 30.7122 20.7561 30.1676 21.4577C29.623 22.1593 28.8604 22.6597 28 22.88M25 19C25 21.2091 23.2091 23 21 23C18.7909 23 17 21.2091 17 19C17 16.7909 18.7909 15 21 15C23.2091 15 25 16.7909 25 19Z"
        stroke="#CBF0BC"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function Heart() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill="#17320B" />
      <path
        d="M32.8401 16.61C32.3294 16.099 31.7229 15.6936 31.0555 15.4171C30.388 15.1405 29.6726 14.9982 28.9501 14.9982C28.2276 14.9982 27.5122 15.1405 26.8448 15.4171C26.1773 15.6936 25.5709 16.099 25.0601 16.61L24.0001 17.67L22.9401 16.61C21.9084 15.5783 20.5092 14.9987 19.0501 14.9987C17.5911 14.9987 16.1918 15.5783 15.1601 16.61C14.1284 17.6417 13.5488 19.041 13.5488 20.5C13.5488 21.959 14.1284 23.3583 15.1601 24.39L16.2201 25.45L24.0001 33.23L31.7801 25.45L32.8401 24.39C33.3511 23.8792 33.7565 23.2728 34.033 22.6053C34.3096 21.9379 34.4519 21.2225 34.4519 20.5C34.4519 19.7775 34.3096 19.0621 34.033 18.3946C33.7565 17.7272 33.3511 17.1208 32.8401 16.61V16.61Z"
        stroke="#CBF0BC"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function Chart() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill="#17320B" />
      <path
        d="M35 18L25.5 27.5L20.5 22.5L13 30M35 18H29M35 18V24"
        stroke="#CBF0BC"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function Emoji() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill="#17320B" />
      <path
        d="M20 26C20 26 21.5 28 24 28C26.5 28 28 26 28 26M21 21H21.01M27 21H27.01M34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z"
        stroke="#CBF0BC"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function Bolt() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill="#17320B" />
      <path
        d="M25 14L15 26H24L23 34L33 22H24L25 14Z"
        stroke="#CBF0BC"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

