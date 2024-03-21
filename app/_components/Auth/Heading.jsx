export default function FormHeading({ children }) {
  return (
    <h1 className="text-[24px] md:text-[36px] leading-[120%] font-semibold text-left text-[#1B1818]">
      {children}
    </h1>
  )
}

export function SubHeadingText({ children }) {
  return (
    <p className="text-base leading-[23.5px] text-[#645D5D] font-[400]">
      {children}
    </p>
  )
}
