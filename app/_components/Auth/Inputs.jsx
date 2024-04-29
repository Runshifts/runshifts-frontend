import { useState } from "react"
import { FaRegEyeSlash } from "react-icons/fa"

export default function AuthInputAndLabel({
  inputProps = {},
  labelProps = {},
  labelText = "",
  icon,
  endAdornment,
}) {
  const [inputType, setInputType] = useState(() => inputProps.type)
  return (
    <label {...labelProps} className="flex flex-col gap-[4px]">
      <span className="first-letter:capitalize text-[#101928]">
        {labelText}
      </span>
      <span className={`${icon ? "pl-[34px]" : "pl-[8px]"} relative pl-[34px] py-4 w-full border-[#D0D5DD] border rounded-lg focus:outline-none focus:shadow-outline overflow-hidden`}>
        <span className="absolute inset-y-[50%] translate-y-[-50%] left-[16px] flex items-center pointer-events-none">
          {icon}
        </span>
        <input
          {...inputProps}
          type={inputType}
          className="w-full p-0 pl-[8px] border-0 ring-0 focus:ring-0 outline-none focus:outline-none"
        />
        <span className="absolute z-10 inset-y-[50%] translate-y-[-50%] right-[16px] flex items-center cursor-pointer">
          {endAdornment}
          {inputProps.type === "password" && (
            <button
              type="button"
              onClick={() =>
                setInputType((prev) =>
                  prev === "password" ? "text" : "password"
                )
              }
            >
              <FaRegEyeSlash size={20} />
            </button>
          )}
        </span>
      </span>
    </label>
  )
}

export function AuthLabelText({ children }) {
  return (
    <span className="first-letter:capitalize text-[#101928]">{children}</span>
  )
}

export function SubmitButton({
  children,
  loadingText,
  isLoading,
  onClick,
  isDisabled,
  type,
  style,
  className
}) {
  return (
    <button
      style={style}
      type={type || "submit"}
      onClick={onClick}
      disabled={isLoading || isDisabled}
      className={`${
        isLoading
          ? "bg-primary-500/50 cursor-not-allowed"
          : "cursor-pointer"
      } ${className || "bg-primary-500 text-white rounded-md font-[600] w-full px-6 py-4"}`}
    >
      {isLoading ? loadingText || "Loading..." : children}
    </button>
  )
}
