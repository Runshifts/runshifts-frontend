import { forwardRef } from "react"

const PageSearchInput = forwardRef(function PageSearchInput(props = {}, ref) {
  return (
    <input
      className="bg-[#F4F5F7] focus:outline-none focus:ring-[#000000] border-none focus:shadow-none text-[14px] placeholder:text-inherit text-[#7A869A] px-2 py-[6px] rounded-[3px]"
      {...props}
      ref={ref}
    />
  )
})
export default PageSearchInput
