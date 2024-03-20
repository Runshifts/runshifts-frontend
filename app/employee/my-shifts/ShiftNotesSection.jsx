import ShiftNotesForm from "../ShiftNotesForm"

export default function ShiftNotesSection({ shift }) {
  return (
    <>
      <div className="flex flex-col items-stretch gap-4 w-full">
        <h3 className="text-left font-[400] leading-[150%] text-[14px] text-[#303030]">
          Notes
        </h3>
        <ShiftNotesForm shift={shift} />
      </div>
    </>
  )
}
