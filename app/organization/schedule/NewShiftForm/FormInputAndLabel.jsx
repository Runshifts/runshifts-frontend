
export default function FormInputAndLabel({
  inputProps = {},
  labelProps = {},
  label,
}) {
  return (
    <label {...labelProps} className="flex items-start flex-col gap-1">
      <FormLabelText>{label}</FormLabelText>
      <input
        {...inputProps}
        className="focus:outline-none border-2 border-solid border-[#DFE1E6] w-full p-[8px] rounded-[3px] placeholder:text-[#7A869A] text-[14px] leading-[20px] font-[400]"
      />
    </label>
  )
}

export function FormLabelText({ children }) {
  return (
    <span className="text-[#6B778C] text-[12px] leading-[16px] font-[100]">
      {children}
    </span>
  )
}
