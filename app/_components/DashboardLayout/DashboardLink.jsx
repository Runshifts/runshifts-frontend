import { usePathname, useRouter } from "next/navigation"

export default function DashboardLink({
  icon,
  children,
  href,
  onClick = () => {},
}) {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <>
      <button
        onClick={() => {
          router.push(href)
          typeof onClick === "function" && onClick()
        }}
        className={`w-full flex items-center gap-[15px] pl-[10px] pt-[10px] pb-[6px] text-[14px] hover:text-[#449522] ${
          pathname === href ? "text-[#449522] bg-[#E5F7DD]" : ""
        }`}
      >
        {icon} <span>{children}</span>
      </button>
    </>
  )
}
