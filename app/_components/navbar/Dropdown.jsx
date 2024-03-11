// Dropdown.js
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import profileAvatar from "../navbar/dp.png";

const Dropdown = () => {
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
          src={profileAvatar}
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
              href="/edit-profile"
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
