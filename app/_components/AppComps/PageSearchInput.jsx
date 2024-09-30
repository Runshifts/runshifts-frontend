import { forwardRef } from "react"

const PageSearchInput = forwardRef(function PageSearchInput(
  { className, ...rest },
  ref
) {
  return (
    <input
      className={`${className} bg-[#F4F5F7] focus:outline-none focus:ring-[#000000] border-none focus:shadow-none text-[14px] placeholder:text-inherit text-[#7A869A] px-2 py-[6px] rounded-[3px]`}
      {...rest}
      ref={ref}
    />
  )
})
export default PageSearchInput
