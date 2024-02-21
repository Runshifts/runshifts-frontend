import { createElement } from "react"

const sizes = {
  default: "leading-[28px] text-[20px] md:text-[24px]",
  base: "",
  sm: "",
  md: "",
  lg: "",
  xl: "",
  xxl: "",
}
export default function Heading({
  as,
  children,
  color = "text-info-700",
  size = "default",
  fontWeight = "font-[500]",
  ...props
}) {
  const sharedProps = {
    ...props,
    className: `${sizes[size]} ${props.className} ${color} ${fontWeight}`,
  }
  if (as) {
    return createElement(as, { ...sharedProps }, children)
  } else return <h1 {...sharedProps}>{children}</h1>
}
