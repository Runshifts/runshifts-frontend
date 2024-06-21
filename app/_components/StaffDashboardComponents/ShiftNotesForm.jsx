import { useCallback, useContext, useMemo, useState } from "react"
import { SubmitButton } from "../Auth/Inputs"
import NOTES_URLS from "../../_urls/notesURLS"
import useAxios from "../../_hooks/useAxios"
import { OrganizationContext } from "../../_providers/OrganizationProvider"
import { NotesContext } from "../../_providers/NotesProvider"
import toast from "react-hot-toast"

export default function ShiftNotesForm({ shiftId, onSubmit = () => {} }) {
  const { organization } = useContext(OrganizationContext)
  const { updateAllNotes } = useContext(NotesContext)
  const [note, setNote] = useState("")
  const [severity, setSeverity] = useState("normal")
  const [submitting, setSubmitting] = useState(false)
  const fetchData = useAxios()

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      if (!shiftId) return
      if (!note) return toast.error("Please provide a note before submitting")
      setSubmitting(true)
      if (typeof onSubmit === "function") {
        onSubmit({ note, severity })
      } else {
        const res = await fetchData(
          NOTES_URLS.create(organization?._id, shiftId),
          "post",
          { note, severity }
        )
        if (res.statusCode === 201) {
          updateAllNotes([res.note])
          setNote("")
          setSeverity("normal")
          toast.success(res.message)
        } else {
          toast.error(res.message || "Something went wrong")
        }
      }
      setSubmitting(false)
    },
    [onSubmit, fetchData, organization, shiftId, updateAllNotes, note, severity]
  )

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <fieldset className="flex flex-wrap gap-2 md:gap-4 items-center flex-wrap lg:flex-nowrap">
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
          isLoading={submitting}
        >
          Send note
        </SubmitButton>
      </form>
    </>
  )
}

function NoteRadioInput({ severity, isSelected, handleSelect, name, value }) {
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
      <SeverityPill severity={severity}>{value}</SeverityPill>
    </label>
  )
}

export function SeverityPill({ children, severity }) {
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
    <p
      className="inline-flex justify-center items-center max-h-[1rem] w-fit first-letter:uppercase text-[12px] px-[6px] font-[400] rounded-[8px] text-white"
      style={{ background: bgColor }}
    >
      {children}
    </p>
  )
}
