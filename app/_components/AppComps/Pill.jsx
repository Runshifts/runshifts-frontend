export default function Pill({ colorClassName, children, className, style }) {
  return (
    <p style={style} className={`${colorClassName || "text-[#303030] bg-[#FFC6C6]"} ${className} p-[4px] text-center text-[10px] capitalize rounded-[50px] whitespace-nowrap`}>
      {children}
    </p>
  )
}
