import ShiftNotesForm from "./ShiftNotesForm"

export default function ShiftNotesSection({ shift, notesDisplayStyle }) {
  return (
    <>
      <div className="flex flex-col items-stretch gap-4 w-full">
        <h3 className="modal-subheading">Notes</h3>
        <div>
          <ShiftNotes notesDisplayStyle={notesDisplayStyle || "chat"} />
        </div>
        <ShiftNotesForm shift={shift} />
      </div>
    </>
  )
}

function ShiftNotes({ notesDisplayStyle = "chat" || "section" }) {
  return <></>
}
