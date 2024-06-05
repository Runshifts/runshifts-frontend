import React, { useState } from "react"
import Image from "next/image"
import EyeIcon from "../../_assets/svgs/Eye"
import placeholderImg from "../../_assets/img/user.png"
import Modal from "../../_components/AppComps/Modal"
import FormInputAndLabel from "../../organization/schedule/NewShiftForm/FormInputAndLabel"

function Queries({ queries = [] }) {
  return (
    <div className="hidden md:block">
      <p className="text-[#292D32] text-base not-italic font-semibold mx-3 mt-5 mb-3">
        Queries
      </p>

      <div className="flex flex-col w-full gap-2">
        {queries.map((query) => (
          <QueriedShift key={query._id} shift={query} />
        ))}
      </div>
    </div>
  )
}

export default Queries

function QueriedShift({ shift }) {
  const [showQueryModal, setShowQueryModal] = useState(false)
  return (
    <div className="bg-white rounded-lg shadow-xl flex justify-between items-center p-4">
      <div className="flex justify-between items-center">
        <Image
          src={shift?.assignee?.profileImage?.secure_url || placeholderImg}
          alt=""
          className="w-6 h-6 rounded-full"
          height={24}
          width={24}
        />
        <p className="mx-4 text-sm not-italic font-normal leading-5">
          {shift?.assignee?.fullName ||
            `${shift?.assignee?.firstName} ${shift?.assignee?.lastName}`}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-sm text-[#42526E] not-italic font-normal leading-5 mx-8">
          {shift.queryReason}
        </p>
        <p className="text-sm text-[#42526E] not-italic font-normal leading-5 mx-8">
          {new Date(shift.queriedAt).toDateString()}
        </p>

        <button
          onClick={() => setShowQueryModal(true)}
          className="bg-[#5BC62D] rounded py-1 px-2 flex items-center text-center text-white text-sm mx-1 not-italic font-medium leading-5 gap-[4px]"
        >
          <EyeIcon />
          <>View</>
        </button>
      </div>
      <QueryOverviewModal
        shift={shift}
        open={showQueryModal}
        onClose={() => setShowQueryModal(false)}
      />
    </div>
  )
}

function QueryOverviewModal({ shift, open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <article className="flex flex-col items-center gap-[14px] bg-white p-4 rounded-[16px]">
        <h3 className="self-center mx-auto font-[600] text-[#1B1818] leading-[20px] text-[16px]">
          Query
        </h3>
        <Image
          className="w-[64px] h-[64px] rounded-full object-cover"
          src={shift.assignee?.profileImage?.secure_url || placeholderImg}
          width={30}
          height={30}
          alt=""
        />
        <h3 className="self-center mx-auto font-[600] text-[#1B1818] leading-[20px] text-[16px]">
          {shift?.assignee?.fullName ||
            `${shift?.assignee?.firstName} ${shift?.assignee?.lastName}`}
        </h3>
        <div className="w-full flex gap-4 flex-col">
          <div className="w-full flex gap-4">
            <FormInputAndLabel
              label="Day"
              inputProps={{
                readOnly: true,
                value: new Date(shift.startTime).toLocaleDateString("en-us", {
                  weekday: "long",
                  month: "short",
                  day: "numeric",
                }),
              }}
            />
            <FormInputAndLabel
              label="Shift"
              inputProps={{
                readOnly: true,
                value: `${new Date(shift.startTime).toLocaleTimeString("en-us", {
                  hour12: true,
                  minute: "2-digit",
                  hour: "2-digit",
                })} - ${new Date(shift.endTime).toLocaleTimeString("en-us", {
                  hour12: true,
                  minute: "2-digit",
                  hour: "2-digit",
                })}`,
              }}
            />
          </div>
          <FormInputAndLabel
            label="Query note"
            inputProps={{
              readOnly: true,
              value: shift.queryReason,
              className: "h-[163px] resize-none",
              type: "textarea"
            }}
          />
        </div>
      </article>
    </Modal>
  )
}
