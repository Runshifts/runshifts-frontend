import ShiftNotesForm from "../ShiftNotesForm"

export default function ShiftNotesSection({ shift }) {
  return (
    <>
      <div className="flex flex-col items-stretch gap-4 w-full">
        <h3 className="modal-subheading">Notes</h3>
        <ShiftNotesForm shift={shift} />
      </div>
    </>
  )
}
