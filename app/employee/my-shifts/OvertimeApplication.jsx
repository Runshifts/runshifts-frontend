"use client"
import Modal from "../../_components/AppComps/Modal"
import ShiftApplicationForm from "./ShiftApplicationForm"

export default function OvertimeApplicationFormModal({
  requestableOvertimeShifts,
  show,
  handleHide,
}) {
  return (
    <Modal zIndex={5000} open={show} onClose={() => handleHide()}>
      <ShiftApplicationForm
        onFinish={() => handleHide()}
        isOvertimeApplication={true}
        requestableOvertimeShifts={requestableOvertimeShifts}
      />
    </Modal>
  )
}
