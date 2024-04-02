import { useState, useContext } from "react"
import Link from "next/link"
import Image from "next/image"
import placeholderImage from "../../_assets/img/user.png"
import { UserContext } from "../../_providers/UserProvider"

const Dropdown = () => {
  const { user } = useContext(UserContext)

  console.log("the image ", user)
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative inline-block text-left">
      <div className="cursor-pointer" onClick={toggleDropdown}>
        <Image
          src={user?.profileImage.secure_url || placeholderImage}
          height={50}
          width={50}
          alt=""
          className="w-8 h-8 rounded-full bg-red-400"
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
              href="/employee/userprofile"
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
  )
}

export default Dropdown
