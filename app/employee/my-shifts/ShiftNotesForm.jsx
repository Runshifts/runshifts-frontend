import { useCallback, useMemo, useState } from "react"
import { SubmitButton } from "../../_components/Auth/Inputs"

export default function ShiftNotesForm({ shift }) {
  const [note, setNote] = useState("")
  const [severity, setSeverity] = useState("")

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <fieldset className="flex gap-2 md:gap-4 items-center flex-wrap md:flex-nowrap">
          <NoteRadioInput
            severity="normal"
            value="normal"
            isSelected={severity === "normal"}
            handleSelect={() => setSeverity("normal")}
            name="severity"
          />
          <NoteRadioInput
            severity="attention needed"
            value="attention needed"
            isSelected={severity === "attention needed"}
            handleSelect={() => setSeverity("attention needed")}
            name="severity"
          />
          <NoteRadioInput
            severity="urgent"
            value="urgent"
            isSelected={severity === "urgent"}
            handleSelect={() => setSeverity("urgent")}
            name="severity"
          />
        </fieldset>
        <label className="flex flex-col items-start gap-[4px]font-[400] leading-[150%] text-[13px] text-[#303030]">
          <span>Leave a note</span>
          <textarea
            value={note}
            required
            onChange={(e) => setNote(e.target.value)}
            className="px-3 py-[6px] focus:ring-0 ring-0 resize-none w-full h-[128px] rounded-[8px] border-[0.66px] border-solid border-[#8A8A8A]"
          ></textarea>
        </label>
        <SubmitButton
          type="submit"
          style={{
            padding: "2px 12px",
            maxWidth: "100px",
            fontSize: "14px",
            color: "#2D6316",
            fontWeight: "500",
          }}
          loadingText="Sending"
        >
          Send note
        </SubmitButton>
      </form>
    </>
  )
}

function NoteRadioInput({ severity, isSelected, handleSelect, name, value }) {
  const bgColor = useMemo(() => {
    switch (severity.toLowerCase()) {
      case "normal":
        return "#7ED957"
      case "attention needed":
        return "#FFAB00"
      case "urgent":
        return "#DE350B"
      default:
        return "#7ED957"
    }
  }, [severity])
  return (
    <label className="flex items-center gap-[8px] cursor-pointer">
      <input
        type="radio"
        name={name}
        onChange={handleSelect}
        className="sr-only"
        value={value}
        checked={isSelected}
      />
      <span className="flex items-center justify-center rounded-full bg-[#F8F7FF] w-[1rem] h-[1rem] border border-solid border-[#9474FF]">
        <span
          className={`${
            isSelected ? "opacity-100 visible" : "opacity-0 invisible"
          } inline-block w-[8px] h-[8px] bg-[#9474FF] rounded-full transition-all`}
        ></span>
      </span>
      <span
        className="leading-[1rem] text-[12px] px-[6px] font-[400] rounded-[8px] inline-block text-white"
        style={{ background: bgColor }}
      >
        {value}
      </span>
    </label>
  )
}
