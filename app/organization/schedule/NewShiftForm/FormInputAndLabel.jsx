import { FaTimes } from "react-icons/fa"

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
      className="flex items-start flex-col gap-1 "
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
