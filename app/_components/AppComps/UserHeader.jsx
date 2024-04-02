import Image from "next/image"
import placeholderImage from "../../_assets/img/user.png"
export default function UserHeader({ user = {} }) {
  return (
    <header className="flex gap-2 bg-primary-100 px-[8px] py-[4px] items-center">
      <Image
        width={50}
        height={50}
        alt=""
        src={user.profileImage?.secure_url || placeholderImage}
        className="rounded-full w-[50px] h-[50px] border border-white"
      />
      <div>
        <h4 className="text-base text-[#1D2433]">
          {user.fullName ||
            ((user.firstName || "") + " " + (user.lastName || "")).trim() ||
            user.email ||
            "Test Heading"}
        </h4>
        <p className="text-[#706763] leading-[20px] text-[12px] h-[40px] flex flex-col items-start">
          <span>{user.role || "No Assigned role"}</span>
          <span>{user.role || "No assigned location"}</span>
        </p>
      </div>
    </header>
  )
}
