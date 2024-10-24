"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import runshiftsLogo from "./runshiftsLogo.svg";
import { KnowledgeBaseData } from "../../_data/KnowledgeBaseData";

const KnowledgeBaseNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`relative border-gray-200 bg-black z-50 dark:bg-gray-800 dark:border-gray-700 ${
        isSticky ? "sticky top-0 z-50" : ""
      }`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href={'/'}>
        <Image
          src={runshiftsLogo}
          quality={100}
          className="h-8"
          alt="runshifts Logo"
        />
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-solid-bg"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:block md:w-auto">
          <ul className="flex flex-row font-medium space-x-8 rtl:space-x-reverse items-center">
            {KnowledgeBaseData.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className="text-white text-lg font-normal leading-7 tracking-normal hover:text-[#449522]"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/signup?type=for-profit"
                className="text-white bg-[#449522] hover:bg-[#348117] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Try for free
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 right-0 md:hidden bg-black shadow-lg`}
        >
          <ul className="py-2">
            {KnowledgeBaseData.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className="block px-4 py-2 text-white text-lg font-normal hover:bg-[#449522] transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li className="px-4 py-2">
              <Link
                href="/signup?type=for-profit"
                className="block w-[1/2] xl:w-full text-center text-white bg-[#449522] hover:bg-[#348117] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Try for free
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default KnowledgeBaseNav;
