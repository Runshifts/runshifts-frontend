"use client";
import React from "react";
import { AdminSidebarData } from "../_data/AdminSidebarData";
import Link from "next/link";
import Image from "next/image";
import settings from "../_assets/adminIcons/settings.svg";
import { usePathname } from "next/navigation";

function AdminSidebar({ isOpen, onClose }) {
  const Pathname = usePathname();

  const activeLink =
    "hover:bg-green-100 text-[#449522] pl-4 my-0 mt-4 w-full flex justify-start items-center text-sm space-x-3 font-semibold bg-green-100";

  const normalLink =
    "hover:bg-green-100 hover:text-[#449522] pl-4 my-0 mt-4 w-full flex justify-start items-center text-sm space-x-3 font-semibold";

  return (
    <>
      <section className="parent-container h-screen">
        <div className={`sidebar-container ${isOpen ? "hidden" : ""}`}>
          <button className="block close-btn md:hidden" onClick={onClose}>
            <CloseSvg />
          </button>

          <div className="h-10  ">
            {AdminSidebarData.map((item, index) => {
              return (
                <div key={index}>
                  <Link
                    href={item.path}
                    className={Pathname === item.path ? activeLink : normalLink}
                  >
                    <span>
                      {" "}
                      <Image src={item.icon} alt="icon" />{" "}
                    </span>
                    <span className="text-sm mx-4 text-[#42526E] not-italic font-medium leading-10">
                      {" "}
                      {item.title}{" "}
                    </span>
                  </Link>
                </div>
              );
            })}
            <div className="text-sm text-center mt-16  text-gray-500">
              <Link
                href={"/admin/settings"}
                className={Pathname === settings ? activeLink : normalLink}
              >
                <span>
                  {" "}
                  <Image src={settings} alt="icon" />{" "}
                </span>
                <span className="text-sm text-[#42526E] not-italic font-medium leading-10">
                  {" "}
                  Settings{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminSidebar;

function CloseSvg() {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8063 21.157C12.5483 21.157 12.2903 21.062 12.0866 20.8583C11.6928 20.4645 11.6928 19.8127 12.0866 19.4189L19.7726 11.7329C20.1664 11.339 20.8183 11.339 21.2121 11.7329C21.6059 12.1267 21.6059 12.7785 21.2121 13.1723L13.526 20.8583C13.3359 21.062 13.0643 21.157 12.8063 21.157Z"
        fill="#42526E"
      />
      <path
        d="M20.4923 21.157C20.2343 21.157 19.9763 21.062 19.7726 20.8583L12.0866 13.1723C11.6928 12.7785 11.6928 12.1267 12.0866 11.7329C12.4804 11.339 13.1322 11.339 13.526 11.7329L21.2121 19.4189C21.6059 19.8127 21.6059 20.4645 21.2121 20.8583C21.0084 21.062 20.7504 21.157 20.4923 21.157Z"
        fill="#42526E"
      />
      <path
        d="M20.7231 30.8935H12.5754C5.20172 30.8935 2.05127 27.743 2.05127 20.3694V12.2216C2.05127 4.84796 5.20172 1.69751 12.5754 1.69751H20.7231C28.0968 1.69751 31.2473 4.84796 31.2473 12.2216V20.3694C31.2473 27.743 28.0968 30.8935 20.7231 30.8935ZM12.5754 3.73444C6.31524 3.73444 4.0882 5.96148 4.0882 12.2216V20.3694C4.0882 26.6295 6.31524 28.8566 12.5754 28.8566H20.7231C26.9833 28.8566 29.2103 26.6295 29.2103 20.3694V12.2216C29.2103 5.96148 26.9833 3.73444 20.7231 3.73444H12.5754Z"
        fill="#42526E"
      />
    </svg>
  );
}
