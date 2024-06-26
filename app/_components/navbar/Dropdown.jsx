'use client'
import { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import profileAvatar from "../navbar/dp.png";
import { OrganizationContext } from "../../_providers/OrganizationProvider.jsx"
import placeholderImage from "../../_assets/img/user.png"

const Dropdown = () => {
  const { organization } = useContext(OrganizationContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="cursor-pointer">
        <Image
          height={50}
          width={50}
          onClick={toggleDropdown}
          src={organization?.logo?.secure_url || placeholderImage}
          alt="icon"
          className="toggle-btn"
        />
      </div>

      {/* Dropdown menu, show/hide based on menu state */}
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <Link
              href="/organization/userprofile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Edit Profile
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
