import React from "react"
import profilepic from "/public/dashboardImgs/timesheet1.svg"
import Image from "next/image"
import Modal from "../../../_components/AppComps/Modal"
import FormInputAndLabel from "../../schedule/NewShiftForm/FormInputAndLabel"
import FormLocationInput from "../../schedule/NewShiftForm/FormLocationInput"

export default function FormModal({
  show = false,
  newShiftDetails,
  onCancel = () => {},
  handleNewShift,
  currentWeek,
}) {
  return (
    <Modal open={show}>
      <NewMemberForm
        newShiftDetails={newShiftDetails}
        onCancel={onCancel}
        handleNewShift={handleNewShift}
        currentWeek={currentWeek}
      />
    </Modal>
  )
}
const NewMemberForm = () => {
  return (
    <section className="w-[95dvw] py-[24px] px-[24px] md:px-[40px] max-w-[320px] bg-white rounded-[16px] gap-y-[14px] flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-center font-[600] text-[16px] text-[#1B1818] mb-[14px]">
          New Team Member
        </h3>
        <Image src={profilepic} alt="profile pic" />
      </div>
      <form className="flex flex-col gap-y-4">
        <FormInputAndLabel
          label="First name"
          inputProps={{
            placeholder: "John",
            readOnly: true,
            value: "",
          }}
        />
        <FormInputAndLabel
          label="Last name"
          inputProps={{
            placeholder: "Doe",
            readOnly: true,
            value: "",
          }}
        />
        <FormInputAndLabel
          label="Email"
          inputProps={{
            placeholder: "Johndoe@email.com",
            readOnly: true,
            value: "",
          }}
        />
        <FormLocationInput
          currentLocation={null}
          updateCurrentValue={() => {}}
        />
        <FormInputAndLabel
          label="Department"
          inputProps={{
            placeholder: "Department",
            readOnly: true,
            value: "",
          }}
        />
        <FormInputAndLabel
          label="Role"
          inputProps={{
            placeholder: "Role",
            readOnly: true,
            value: "",
          }}
        />
        <FormInputAndLabel
          label="Hourly earnings"
          inputProps={{
            placeholder: "£123",
            value: "",
          }}
        />
        <FormInputAndLabel
          label="Right to work date"
          inputProps={{
            placeholder: "02 / 24",
            readOnly: true,
            value: "",
          }}
        />
        <div className="flex gap-4">
          <FormInputAndLabel
            label="Total time worked"
            inputProps={{
              placeholder: "5000 hrs",
              readOnly: true,
              value: "",
            }}
          />
          <FormInputAndLabel
            label="Total earnings"
            inputProps={{
              placeholder: "£4,000,000",
              readOnly: true,
              value: "",
            }}
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <button className="bg-primary-500 text-white flex-1 py-[8px] rounded-[3px]">
            Submit
          </button>
          <button className="text-[#1E1E1E] text-[14px] px-[8px] py-[4px]">
            Cancel
          </button>
        </div>
        <div className="flex gap-[8px] flex-wrap">
          <button className="bg-primary-500 text-white flex-1 py-[2px] px-[12px] rounded-[3px]">
            Submit
          </button>
          <button className="bg-info-100 text-info-600 flex-1 py-[2px] px-[12px] rounded-[3px]">
            Archive
          </button>
          <button className="text-[#1E1E1E] text-[14px] px-[8px] py-[4px] w-full">
            Go Back
          </button>
        </div>
      </form>
    </section>
  )
}
