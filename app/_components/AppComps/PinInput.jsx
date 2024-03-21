export default function PinInput({
  state = [],
  handlePaste,
  handleBackspaceAndEnter,
  stateBoxReference,
  handleChange,
  inputClassName = "px-2 py-4 md:p-4 text-center w-full border-[#D0D5DD] border rounded-lg focus:outline-none focus:shadow-0 ring-0 focus:ring-0",
  containerClassName = "flex gap-[8px]",
}) {
  return (
    <div className={containerClassName}>
      {state.map((digit, index) => (
        <input
          className={inputClassName}
          key={index}
          onPaste={(e) => handlePaste(e, index)}
          value={digit}
          maxLength={1}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
          autoFocus={index === 0}
          onFocus={(e) => {
            e.preventDefault()
            stateBoxReference.current[index - 1] &&
              stateBoxReference.current[index - 1]?.value === "" &&
              e.target.blur()
          }}
          ref={(reference) => (stateBoxReference.current[index] = reference)}
        />
      ))}
    </div>
  )
}
