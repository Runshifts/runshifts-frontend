import { useState } from "react"
import { FaEye, FaTimes } from "react-icons/fa"
import EyeIcon, { EyeSlashIcon } from "../../../_assets/svgs/Eye"

export default function FormInputAndLabel({
  inputProps = {},
  labelProps = {},
  label,
  endAdornment,
  startAdornment,
}) {
  return (
    <label
      {...labelProps}
      className={`flex capitalize items-start flex-col gap-1 ${labelProps?.className}`}
    >
      <FormLabelText>{label}</FormLabelText>
      <div
        className={`${inputProps.className} flex items-center gap-2 relative overflow-auto focus:outline-none focus:border-[#DFE1E6] focus:ring-0 outline-none shadow-none focus:shadow-none border-2 border-solid border-[#DFE1E6] w-full rounded-[3px] focus-within:ring-1`}
      >
        {startAdornment && <div>{startAdornment}</div>}
        {inputProps.type === "textarea" ? (
          <textarea
            {...inputProps}
            className={`border-0 p-[8px] w-full disabled:text-[#7A869A] placeholder:text-[#7A869A] text-[14px] leading-[20px] font-[400] focus:ring-0 focus:outline-0 focus-visible:outline-0 focus-visible:ring-0`}
          />
        ) : (
          <input
            {...inputProps}
            className={`border-0 p-[8px] w-full disabled:text-[#7A869A] placeholder:text-[#7A869A] text-[14px] leading-[20px] font-[400] focus:ring-0 focus:outline-0 focus-visible:outline-0 focus-visible:ring-0`}
          />
        )}
        <div className="pr-[6px] flex items-center justify-center">{endAdornment}</div>
      </div>
    </label>
  )
}

export function FormMultipleSelectInputAndLabel({
  labelProps = {},
  label,
  placeholder,
  selectedOptions = [],
  handleDeselect = () => {},
  getDisplayValue = () => {},
}) {
  return (
    <label
      {...labelProps}
      onClick={(e) => e.preventDefault()}
      className={`flex items-start flex-col gap-1 ${labelProps?.className}`}
    >
      <FormLabelText>{label}</FormLabelText>
      <span
        onClick={(e) => e.preventDefault()}
        className="flex gap-[8px] scrollbar-minimized whitespace-nowrap overflow-auto focus:outline-none border-2 border-solid border-[#DFE1E6] w-full px-[8px] py-[7px] rounded-[3px] placeholder:text-[#7A869A] text-[14px] leading-[20px] font-[400]"
      >
        {selectedOptions.length === 0 && (
          <span className="text-[#7A869A] text-[14px] leading-[20px]">
            {placeholder}
          </span>
        )}
        {selectedOptions.map((option) => (
          <span
            key={option._id}
            onClick={(e) => e.preventDefault()}
            className="text-info-600 text-[14px] leading-[20px] flex items-center gap-[2px]"
          >
            {getDisplayValue(option)}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                handleDeselect(option)
              }}
            >
              <FaTimes className="opacity-80" />
            </button>
          </span>
        ))}
      </span>
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

export function FormPasswordInputAndLabel({ label, labelProps, inputProps }) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <FormInputAndLabel
      label={label}
      inputProps={{ ...inputProps, type: showPassword ? "text" : "password" }}
      labelProps={labelProps}
      endAdornment={
        <>
          <button
            type="button"
            className="w-[24px] h-[24px]"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
          </button>
        </>
      }
    />
  )
}
