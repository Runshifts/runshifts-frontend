export default function Pill({ colorClassName, children, className, style }) {
  return (
    <p style={style} className={`${colorClassName || "text-[#303030] bg-[#FFC6C6]"} ${className} py-[4px] px-[10px] text-center text-[0.625rem] leading-normal capitalize rounded-[50px] whitespace-`}>
      {children}
    </p>
  )
}
