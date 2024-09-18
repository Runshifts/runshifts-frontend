// "use client"

// import React from "react"
// import companyIcon from "./_components/Assets/img/comp.png"
// import user from "./_components/Assets/img/user.png"
// import Image from "next/image"
// import { useRouter } from "next/navigation"
// import Link from "next/link"
// import Heading from "./_components/Headings"

// const Home = () => {
//   const router = useRouter()

//   return (
//     <div className="bg-[url(/img/homepage.png)] h-screen bg-cover bg-center flex items-center px-[8%] justify-end">
//       <div className="flex flex-col gap-4 px-6 xl:px-8 py-[64px] bg-white rounded-[16px] w-[90dvw] max-w-[534px]">
//         <div className="text-gray-800 gap-8 flex flex-col">
//           <Heading
//             as="h1"
//             size="base"
//             className="text-[40px] leading-[48px] font-[600] text-[#1B1818]"
//           >
//             Sign up
//           </Heading>
//           <SignupType
//             heading="As an organization?"
//             body="Set up a new organization"
//             imageSrc={companyIcon}
//             onClick={() => router.push("/signup?type=employer")}
//           />
//           {/* <SignupType
//             heading="As an employee?"
//             body="Create your account"
//             imageSrc={user}
//             onClick={() => router.push("/signup?type=employee")}
//           /> */}
//         </div>

//         <p className="text-center text-[#645D5D] text-base">Or</p>

//         <Link
//           className="bg-primary-500 text-white text-base leading-[145%] font-[600] text-center rounded-md w-full px-6 py-4"
//           href="/login"
//         >
//           Login
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Home

// function SignupType({ imageSrc, heading, body, onClick }) {
//   return (
//     <div
//       className="border border-[#B8B8B8] rounded-md hover:shadow-md transition-all flex items-center gap-[15px] px-[12px] py-[18px] xl:py-[24px] xl:px-[42px] cursor-pointer text-left"
//       name="signupType"
//       value="employer"
//       onClick={onClick}
//     >
//       <Image height={64} width={64} src={imageSrc} alt="" className="" />
//       <div>
//         <h3 className="text-base xl:text-[24px] leading-[150%] text-[#000000CC] font-medium leading-9 tracking-tighter">
//           {heading}
//         </h3>
//         <p className="text-[12px] xl:text-base text-[#000000CC] font-sm leading-6 tracking-tighter">{body}</p>
//       </div>
//     </div>
//   )
// }


'use client'
import Image from "next/image";
import { useRef } from 'react';
import runshiftsLogo from "./_components/homepageComps/runshiftsLogo2.svg";
import CommonButtons from "./_components/homepageComps/CommonButtons";
import LandingFooter from './_components/homepageComps/LandingFooter';
import App from './_assets/img/App.svg'
import Playstore from './_assets/img/Playstore.svg' 

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
    <div>
    <div className="bg-gradient-radial from-[#FD9] via-[#CBF0BC] to-white min-h-screen ">
      <div className="flex items-center justify-between py-4 px-8">
        <a href="/home" className="flex items-center">
          <Image src={runshiftsLogo} alt="runshifts" />
        </a>
        <CommonButtons>
          <div onClick={scrollToForm}>
          Join waitlist
          </div>
          </CommonButtons>
      </div>

      <div className="relative min-h-screen mt-4 xl:mt-16 px-10">
        {/* Background image with opacity */}
        <div className="absolute inset-0 bg-[url('../public/img/landingPage.png')] opacity-50"></div>

        {/* Content with no opacity */}
        <div className="relative z-10">
          <div className="mt-8 xl:mt-90">
            <h1 className="text-2xl not-italic font-extrabold text-[#36322F] pt-2 xl:text-5xl xl:pt-20">
              Revolutionise Your <br /> Workforce Management
            </h1>
            <p className="text-base not-italic font-normal leading-7 text-[#475467] my-5">
              Seamless scheduling, real-time updates, and powerful analytics
              in one platform.
            </p>

            <div className="mt-16 xl:mt-24">
              <p className="text-base not-italic font-semibold leading-7 text-[#475467]">
                Coming soon to your app stores
              </p>
              <div className="flex flex-col items-start justify-start xl:flex-row">
                <Image src={App} alt="download" height={52} width={180} className='mr-0 xl:mr-2 my-2' />
                <Image src={Playstore} alt="download" height={52} width={180} className='ml-0 xl:ml-2' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center min-h-screen mt-10 xl:mt-0">
      <div className="grid grid-cols-1 gap-6 justify-items-center mx-4 xl:grid-cols-3 xl:m-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#E5F7DD] p-6 flex flex-col items-center justify-center rounded-lg h-60 w-80"
          >
            {feature.icon}
            <h3 className="text-center text-xl not-italic font-medium leading-7 text-[#101828] pt-4 py-2">
              {feature.title}
            </h3>
            <p className="text-center text-base not-italic font-normal leading-6 text-[#475467]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Waitlist Form */}
    <div ref={formRef}>
      <div className="my-10 px-16">
        <h1 className="text-center text-2xl not-italic font-semibold text-[#101828] xl:text-5xl ">
          Join Our Exclusive Waitlist
        </h1>
        <p className="text-center text-sm not-italic font-normal leading-7 text-[#475467] mx-2 xl:text-xl xl:mx-60">
          Be the first to experience the future of workforce management and
          enjoy 3 months of free access to our platform.
        </p>
      </div>

      <div className="shadow-lg rounded-2xl p-2 px-6 xl:py-16 mx-auto max-w-screen-sm">
      <form action="#" className="space-y-4 xl:space-y-8">
            <div className="flex flex-col gap-4 w-[100%] xl:flex-row">
              <div className="w-[100%] xl:w-[50%] ">
                <label
                  for="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="w-[100%] xl:w-[50%] ">
                <label
                  for="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="you@company.com"
                required
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Company name
              </label>
              <input
                type="comapny"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="ABC Company"
                required
              />
            </div>
            <div>
              <label
                for="industries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Industry
              </label>
              <select
                id="industries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected value="US">
                  Tech
                </option>
                <option value="CA">Fashion</option>
                <option value="FR">Agriculture</option>
              </select>
            </div>
            <div>
              <label
                for="companysize"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Company size
              </label>
              <select
                id="companysize"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected value="US">
                  1-10
                </option>
                <option value="CA">11-50</option>
                <option value="FR">100+</option>
              </select>
            </div>

            <div className="">
              <div class="flex items-center">
                <button
                  id="dropdown-phone-button"
                  data-dropdown-toggle="dropdown-phone"
                  class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                  type="button"
                >
                  +234
                </button>
                <div
                  id="dropdown-phone"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-phone-button"
                  >
                    <li>
                      <button
                        type="button"
                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <span class="inline-flex items-center">
                          Nigeria (+234)
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <span class="inline-flex items-center">
                          United States (+1)
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <span class="inline-flex items-center">
                          United Kingdom (+44)
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <span class="inline-flex items-center">
                          Australia (+61)
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <span class="inline-flex items-center">
                          Germany (+49)
                        </span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <span class="inline-flex items-center">
                          France (+33)
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <label
                  for="phone-input"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Phone number:
                </label>
                <div class="relative w-full">
                  <input
                    type="text"
                    id="phone-input"
                    class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-456-7890"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="w-full">
            <CommonButtons>
             Join waitlist
            </CommonButtons>
            </div>
          </form>
      </div>
    </div>
    <LandingFooter/>
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
