import Modal from "../../_components/AppComps/Modal"
import UserHeader from "../../_components/AppComps/UserHeader"
import ShiftNotesForm from "../my-shifts/ShiftNotesForm"

export default function SendNoteAfterShiftForm({ shift, show, handleHide }) {
  return (
    <Modal open={show} zIndex={2000}>
      <div className="flex flex-col gap-4 p-4 max-w-[415px] bg-white rounded-[8px]">
        <UserHeader />
        <ShiftNotesForm shift={shift} onSubmit={handleHide} />
      </div>
    </Modal>
  )
}
