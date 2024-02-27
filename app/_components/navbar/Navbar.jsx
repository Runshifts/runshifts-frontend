// import React from "react";
// import NavIcon from "./Nav-icon.png";
// import NavLogo from "./runshifts-logo.png";
// import profileAvatar from "./dp.png";

// function Navbar({ onToggle }) {
//   return (
//     <>
//       <section className="sticky top-0 z-50 bg-white">
//       <div className=" h-20 px-4 w-screen flex justify-between items-center border-b-2">
//           <div className="flex items-center justify-center">
//             <div className="cursor-pointer">
//               <img
//                 onClick={onToggle}
//                 src={NavIcon}
//                 alt="icon"
//                 className="toggle-btn"
//               />
//             </div>
//             <div className="">
//               <img src={NavLogo} alt="logo" width={86} />
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <form>
//               <div className="relative">
//                 <div className="start-5 md:absolute inset-y-0 start-1 flex items-center ps-3 pointer-events-none">
//                   <svg
//                     width="14"
//                     height="14"
//                     viewBox="0 0 14 14"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L9.47653 10.8907ZM10 6C10 8.20914 8.20914 10 6 10C3.79086 10 2 8.20914 2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6Z"
//                       fill="#6B778C"
//                     />
//                   </svg>
//                 </div>
//                 <input
//                   type="search"
//                   name="name"
//                   id="default-search"
//                   className="hidden md:block w-full mr-5 px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="Search"
//                   required
//                 />
//               </div>
//             </form>

//             <div className="px-2">
//               <svg
//                 width="30"
//                 height="30"
//                 viewBox="0 0 30 30"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M24.697 17.4561L23.3497 15.2146C23.0516 14.7258 22.7893 13.7839 22.7893 13.2116V10.982C22.7893 6.65405 19.2721 3.13683 14.9561 3.13683C10.6281 3.14875 7.11085 6.65405 7.11085 10.982V13.1997C7.11085 13.772 6.84855 14.7139 6.5624 15.2027L5.21513 17.4442C4.70245 18.3145 4.58322 19.3041 4.90513 20.1626C5.22705 21.0329 5.95434 21.7245 6.90816 22.0345C8.19583 22.4637 9.49541 22.7737 10.8188 23.0002C10.95 23.024 11.0811 23.036 11.2123 23.0598C11.3792 23.0837 11.5581 23.1075 11.7369 23.1314C12.0469 23.179 12.3569 23.2148 12.6788 23.2387C13.4299 23.3102 14.193 23.346 14.9561 23.346C15.7072 23.346 16.4583 23.3102 17.1975 23.2387C17.4718 23.2148 17.746 23.191 18.0083 23.1552C18.2229 23.1314 18.4375 23.1075 18.6521 23.0717C18.7833 23.0598 18.9144 23.036 19.0456 23.0121C20.3809 22.7975 21.7044 22.4637 22.992 22.0345C23.9101 21.7245 24.6135 21.0329 24.9473 20.1507C25.2812 19.2564 25.1858 18.2788 24.697 17.4561ZM15.8264 12.6154C15.8264 13.1162 15.421 13.5216 14.9203 13.5216C14.4195 13.5216 14.0141 13.1162 14.0141 12.6154V8.91938C14.0141 8.41862 14.4195 8.01325 14.9203 8.01325C15.421 8.01325 15.8264 8.41862 15.8264 8.91938V12.6154Z"
//                   fill="#42526E"
//                 />
//                 <path
//                   d="M18.3064 24.5502C17.8057 25.9332 16.4823 26.9228 14.9323 26.9228C13.9904 26.9228 13.0604 26.5413 12.4047 25.8617C12.0231 25.504 11.737 25.0271 11.5701 24.5382C11.7251 24.5621 11.8801 24.574 12.047 24.5979C12.3212 24.6336 12.6074 24.6694 12.8935 24.6932C13.5731 24.7528 14.2646 24.7886 14.9561 24.7886C15.6357 24.7886 16.3153 24.7528 16.983 24.6932C17.2334 24.6694 17.4838 24.6575 17.7222 24.6217C17.913 24.5979 18.1038 24.574 18.3064 24.5502Z"
//                   fill="#42526E"
//                 />
//               </svg>
//             </div>

//             <div  className="hidden md:block">
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M2.75 18.65C2.34 18.65 2 18.31 2 17.9V12.2C1.95 9.49 2.96 6.93 4.84 5.01C6.72 3.1 9.24 2.05 11.95 2.05C17.49 2.05 22 6.56 22 12.1V17.8C22 18.21 21.66 18.55 21.25 18.55C20.84 18.55 20.5 18.21 20.5 17.8V12.1C20.5 7.39 16.67 3.55 11.95 3.55C9.64 3.55 7.5 4.44 5.91 6.06C4.31 7.69 3.46 9.86 3.5 12.18V17.89C3.5 18.31 3.17 18.65 2.75 18.65Z"
//                   fill="#42526E"
//                 />
//                 <path
//                   d="M5.94 12.45H5.81C3.71 12.45 2 14.16 2 16.26V18.14C2 20.24 3.71 21.95 5.81 21.95H5.94C8.04 21.95 9.75 20.24 9.75 18.14V16.26C9.75 14.16 8.04 12.45 5.94 12.45Z"
//                   fill="#42526E"
//                 />
//                 <path
//                   d="M18.19 12.45H18.06C15.96 12.45 14.25 14.16 14.25 16.26V18.14C14.25 20.24 15.96 21.95 18.06 21.95H18.19C20.29 21.95 22 20.24 22 18.14V16.26C22 14.16 20.29 12.45 18.19 12.45Z"
//                   fill="#42526E"
//                 />
//               </svg>
//             </div>

//             <div className="hidden md:block">
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M20.1 9.22C18.29 9.22 17.55 7.94 18.45 6.37C18.97 5.46 18.66 4.3 17.75 3.78L16.02 2.79C15.23 2.32 14.21 2.6 13.74 3.39L13.63 3.58C12.73 5.15 11.25 5.15 10.34 3.58L10.23 3.39C9.78 2.6 8.76 2.32 7.97 2.79L6.24 3.78C5.33 4.3 5.02 5.47 5.54 6.38C6.45 7.94 5.71 9.22 3.9 9.22C2.86 9.22 2 10.07 2 11.12V12.88C2 13.92 2.85 14.78 3.9 14.78C5.71 14.78 6.45 16.06 5.54 17.63C5.02 18.54 5.33 19.7 6.24 20.22L7.97 21.21C8.76 21.68 9.78 21.4 10.25 20.61L10.36 20.42C11.26 18.85 12.74 18.85 13.65 20.42L13.76 20.61C14.23 21.4 15.25 21.68 16.04 21.21L17.77 20.22C18.68 19.7 18.99 18.53 18.47 17.63C17.56 16.06 18.3 14.78 20.11 14.78C21.15 14.78 22.01 13.93 22.01 12.88V11.12C22 10.08 21.15 9.22 20.1 9.22ZM12 15.25C10.21 15.25 8.75 13.79 8.75 12C8.75 10.21 10.21 8.75 12 8.75C13.79 8.75 15.25 10.21 15.25 12C15.25 13.79 13.79 15.25 12 15.25Z"
//                   fill="#42526E"
//                 />
//               </svg>
//             </div>

//             <div className="px-2">
//               <img src={profileAvatar} alt="dp" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Navbar;

"use client";
import React, { useState } from "react";
import NavIcon from "./Nav-icon.svg";
import NavLogo from "./runshifts-logo.svg";
import profileAvatar from "./dp.png";
import Image from "next/image";
import Link from "next/link";
import Optioncard from "/app/organization/userprofile/Optioncard.jsx";

function Navbar({ onToggle, onImageClick }) {
  const [showCard, setShowCard] = useState(false);

  const handleImageClick = () => {
    setShowCard(true);
  };

  const handleCloseCard = () => {
    setShowCard(false);
  };
  return (
    <>
      <section>
        <div className="bg-white h-20 px-4 min-w-screen flex justify-between items-center border-b-2">
          <div className="flex items-center justify-around">
            <div className="cursor-pointer">
              <Image
                height={50}
                width={50}
                onClick={onToggle}
                src={NavIcon}
                alt="icon"
                className="toggle-btn"
              />
            </div>
            <div className="">
              <Image height={86} width={86} src={NavLogo} alt="logo" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <form>
            <div className="relative">
  <div className="md:absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <SearchIcon />
  </div>
  <input
    type="search"
    name="name"
    id="default-search"
    className="hidden md:block cursor-pointer w-full px-4 py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
    placeholder="Search"
    required
  />
</div>

            </form>

            <div className="px-2 cursor-pointer">
              <Link href={'/organization/notification'}>
              <BellSvg />
              </Link>
            </div>

            <div className="hidden md:block cursor-pointer">
              <HeadphoneSvg />
            </div>

            <div className="hidden md:block mx-2 cursor-pointer">
              <Link href={'/organization/settings'}>
              <SettingsSvg />
              </Link>
            </div>

            <div className="px-2">
              <Image
                onClick={handleImageClick}
                style={{ cursor: "pointer" }}
                height={40}
                width={40}
                src={profileAvatar}
                alt="dp"
              />
            </div>
            {showCard && <Optioncard onClose={handleCloseCard} />}
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;

function SearchIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L9.47653 10.8907ZM10 6C10 8.20914 8.20914 10 6 10C3.79086 10 2 8.20914 2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6Z"
        fill="#6B778C"
      />
    </svg>
  );
}

function BellSvg() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.697 17.4561L23.3497 15.2146C23.0516 14.7258 22.7893 13.7839 22.7893 13.2116V10.982C22.7893 6.65405 19.2721 3.13683 14.9561 3.13683C10.6281 3.14875 7.11085 6.65405 7.11085 10.982V13.1997C7.11085 13.772 6.84855 14.7139 6.5624 15.2027L5.21513 17.4442C4.70245 18.3145 4.58322 19.3041 4.90513 20.1626C5.22705 21.0329 5.95434 21.7245 6.90816 22.0345C8.19583 22.4637 9.49541 22.7737 10.8188 23.0002C10.95 23.024 11.0811 23.036 11.2123 23.0598C11.3792 23.0837 11.5581 23.1075 11.7369 23.1314C12.0469 23.179 12.3569 23.2148 12.6788 23.2387C13.4299 23.3102 14.193 23.346 14.9561 23.346C15.7072 23.346 16.4583 23.3102 17.1975 23.2387C17.4718 23.2148 17.746 23.191 18.0083 23.1552C18.2229 23.1314 18.4375 23.1075 18.6521 23.0717C18.7833 23.0598 18.9144 23.036 19.0456 23.0121C20.3809 22.7975 21.7044 22.4637 22.992 22.0345C23.9101 21.7245 24.6135 21.0329 24.9473 20.1507C25.2812 19.2564 25.1858 18.2788 24.697 17.4561ZM15.8264 12.6154C15.8264 13.1162 15.421 13.5216 14.9203 13.5216C14.4195 13.5216 14.0141 13.1162 14.0141 12.6154V8.91938C14.0141 8.41862 14.4195 8.01325 14.9203 8.01325C15.421 8.01325 15.8264 8.41862 15.8264 8.91938V12.6154Z"
        fill="#42526E"
      />
      <path
        d="M18.3064 24.5502C17.8057 25.9332 16.4823 26.9228 14.9323 26.9228C13.9904 26.9228 13.0604 26.5413 12.4047 25.8617C12.0231 25.504 11.737 25.0271 11.5701 24.5382C11.7251 24.5621 11.8801 24.574 12.047 24.5979C12.3212 24.6336 12.6074 24.6694 12.8935 24.6932C13.5731 24.7528 14.2646 24.7886 14.9561 24.7886C15.6357 24.7886 16.3153 24.7528 16.983 24.6932C17.2334 24.6694 17.4838 24.6575 17.7222 24.6217C17.913 24.5979 18.1038 24.574 18.3064 24.5502Z"
        fill="#42526E"
      />
    </svg>
  );
}

function HeadphoneSvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.75 18.65C2.34 18.65 2 18.31 2 17.9V12.2C1.95 9.49 2.96 6.93 4.84 5.01C6.72 3.1 9.24 2.05 11.95 2.05C17.49 2.05 22 6.56 22 12.1V17.8C22 18.21 21.66 18.55 21.25 18.55C20.84 18.55 20.5 18.21 20.5 17.8V12.1C20.5 7.39 16.67 3.55 11.95 3.55C9.64 3.55 7.5 4.44 5.91 6.06C4.31 7.69 3.46 9.86 3.5 12.18V17.89C3.5 18.31 3.17 18.65 2.75 18.65Z"
        fill="#42526E"
      />
      <path
        d="M5.94 12.45H5.81C3.71 12.45 2 14.16 2 16.26V18.14C2 20.24 3.71 21.95 5.81 21.95H5.94C8.04 21.95 9.75 20.24 9.75 18.14V16.26C9.75 14.16 8.04 12.45 5.94 12.45Z"
        fill="#42526E"
      />
      <path
        d="M18.19 12.45H18.06C15.96 12.45 14.25 14.16 14.25 16.26V18.14C14.25 20.24 15.96 21.95 18.06 21.95H18.19C20.29 21.95 22 20.24 22 18.14V16.26C22 14.16 20.29 12.45 18.19 12.45Z"
        fill="#42526E"
      />
    </svg>
  );
}

function SettingsSvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.1 9.22C18.29 9.22 17.55 7.94 18.45 6.37C18.97 5.46 18.66 4.3 17.75 3.78L16.02 2.79C15.23 2.32 14.21 2.6 13.74 3.39L13.63 3.58C12.73 5.15 11.25 5.15 10.34 3.58L10.23 3.39C9.78 2.6 8.76 2.32 7.97 2.79L6.24 3.78C5.33 4.3 5.02 5.47 5.54 6.38C6.45 7.94 5.71 9.22 3.9 9.22C2.86 9.22 2 10.07 2 11.12V12.88C2 13.92 2.85 14.78 3.9 14.78C5.71 14.78 6.45 16.06 5.54 17.63C5.02 18.54 5.33 19.7 6.24 20.22L7.97 21.21C8.76 21.68 9.78 21.4 10.25 20.61L10.36 20.42C11.26 18.85 12.74 18.85 13.65 20.42L13.76 20.61C14.23 21.4 15.25 21.68 16.04 21.21L17.77 20.22C18.68 19.7 18.99 18.53 18.47 17.63C17.56 16.06 18.3 14.78 20.11 14.78C21.15 14.78 22.01 13.93 22.01 12.88V11.12C22 10.08 21.15 9.22 20.1 9.22ZM12 15.25C10.21 15.25 8.75 13.79 8.75 12C8.75 10.21 10.21 8.75 12 8.75C13.79 8.75 15.25 10.21 15.25 12C15.25 13.79 13.79 15.25 12 15.25Z"
        fill="#42526E"
      />
    </svg>
  );
}
