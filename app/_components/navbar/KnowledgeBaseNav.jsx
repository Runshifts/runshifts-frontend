"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import runshiftsLogo from "./runshiftsLogo.svg";
import { KnowledgeBaseData } from "../../_data/KnowledgeBaseData";
import Link from "next/link";
import Button from "../AppComps/Button";

export default function KnowledgeBaseNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`border-gray-200 bg-[#000000] dark:bg-gray-800 dark:border-gray-700 ${
        isSticky ? "sticky top-0 z-50" : ""
      }`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Image
          src={runshiftsLogo}
          quality={100}
          className="h-8"
          alt="runshifts Logo"
        />
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col md:flex-row font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            {KnowledgeBaseData.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className="block py-2 px-3 text-white text-lg font-semibold leading-7 tracking-normal hover:text-[#449522] md:p-0 bg-[#449522] text-center md:bg-transparent md:text-[#ffffff] md:dark:text-[#ffffff] dark:bg-[#449522] md:dark:bg-transparent"
                  aria-current="page"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <button className="text-white bg-[#449522] hover:bg-[#348117] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <a href='/signup?type=for-profit'>
                Try for free
                </a>      
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
