import { useCallback, useContext, useMemo, useState } from "react"
import placeholderImage from "../../_assets/img/user.png"
import { HiOutlineTrash } from "react-icons/hi"
import Image from "next/image"
import ShareModal from "./ShareModal"
import { ShiftNotes } from "../../_components/StaffDashboardComponents/ShiftNotesSection"
import ShiftNotesForm, { SeverityPill } from "../../_components/StaffDashboardComponents/ShiftNotesForm"
import { timeAgo } from "../../_utils"
import Modal from "../../_components/AppComps/Modal"
import useOutsideClick from "../../_hooks/useOutsideClick"
import { UserContext } from "../../_providers/UserProvider"

export default function LogsContent({ notesGroupedByShifts = {} }) {
  const latestNotesOfShifts = useMemo(
    () => Object.values(notesGroupedByShifts).map((val) => val.latestNote),
    [notesGroupedByShifts]
  )

  const [shiftInFocus, setShiftInFocus] = useState(null)
  const shiftInFocusRef = useOutsideClick((event) => {
    typeof event.target.onclick !== "function" && setShiftInFocus(null)
  })

  const ShiftInFocusContent = useCallback(
    () => (
      <>
        <div className="h-[70%] overflow-auto pb-4">
          <div className="sticky top-0 flex mb-4 bg-[#354258] rounded-[8px] px-[12px] py-[10px] gap-3">
            <ShiftDetailsKeyValue
              keyText="Name"
              valueText={
                shiftInFocus?.assignee?.fullName ||
                `${shiftInFocus?.assignee?.firstName} ${shiftInFocus?.assignee?.lastName}`
              }
            />
            <ShiftDetailsKeyValue
              keyText="Day"
              valueText={new Date(shiftInFocus?.startTime).toLocaleDateString(
                "en-us",
                { weekday: "long" }
              )}
            />
            <ShiftDetailsKeyValue
              keyText="Duration"
              valueText={`${new Date(
                shiftInFocus?.startTime
              ).toLocaleTimeString("en-us", {
                hour: "2-digit",
                hour12: true,
              })}-${new Date(shiftInFocus?.endTime).toLocaleTimeString(
                "en-us",
                {
                  hour: "2-digit",
                  hour12: true,
                }
              )}`}
            />
            <ShiftDetailsKeyValue
              keyText="Location"
              valueText={shiftInFocus?.location?.address}
            />
          </div>
          <ShiftNotes
            notesToDisplay={notesGroupedByShifts[shiftInFocus?._id]?.notes}
            notesDisplayStyle="chat"
            shiftId={shiftInFocus?._id}
          />
        </div>
        <div className="sticky w-full h-[] bottom-0 bg-white left-0 pt-4">
          <ShiftNotesForm shiftId={shiftInFocus?._id} />
        </div>
      </>
    ),
    [shiftInFocus, notesGroupedByShifts]
  )
  return (
    <section className="flex flex-col gap-2 md:flex-row gap-[12px]">
      <div className="grow lg:w-[45%] max-h-[80dvh] flex flex-col gap-2 gap-[10px]">
        {latestNotesOfShifts.map((note) => (
          <NoteOverviewCard
            key={note._id}
            note={note}
            handleView={() => setShiftInFocus(note.shift)}
          />
        ))}
      </div>
      <Modal
        zIndex={2000}
        open={shiftInFocus !== null}
        onClose={() => setShiftInFocus(null)}
        modalClassNames="lg:hidden"
      >
        <div className="relative bg-white w-[95dvw] h-screen max-w-[600px] max-h-[800px] rounded-lg p-4">
          <ShiftInFocusContent />
        </div>
      </Modal>
      {shiftInFocus && (
        <div
          ref={shiftInFocusRef}
          className="hidden lg:block grow lg:max-w-[48%] relative rounded-[8px] shadow-[0px_2px_8px_0px_#0000001F] p-4 lg:max-h-[75dvh] overflow-hidden"
        >
          <ShiftInFocusContent />
        </div>
      )}
    </section>
  )
}

function ShiftDetailsKeyValue({ keyText, valueText }) {
  return (
    <p className="flex flex-col text-[12px] text-left gap-2 text-white">
      <b className="text-[14px]">{keyText}</b>
      {valueText}
    </p>
  )
}

export function NoteOverviewCard({ note, handleView }) {
  const { user } = useContext(UserContext)
  const isOwnNote = useMemo(() => note.creator?._id === user?._id, [note, user])
  return (
    <div className="bg-white w-full py-[10px] px-4 rounded-md shadow-[0px_2px_8px_0px_#0000001F] flex items-center justify-between flex-row flex-wrap md:flex-nowrap gap-2">
      <div className="grow max-w-[40%] md:max-w-[25%] col-start-1 flex gap-2 items-center">
        <Image
          src={note.profileImage?.secure_url || placeholderImage}
          width={50}
          height={50}
          alt="profilepic"
          className="w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] rounded-full"
        />
        <div>
          <h4 className="text-[12px] truncate max-w-[50px] capitalize text-[#1D2433] font-[500]">
            {isOwnNote
              ? "You"
              : note.creator?.fullName ||
                (
                  (note.creator?.firstName || "") +
                  " " +
                  (note.creator?.lastName || "")
                ).trim() ||
                note.creator?.email ||
                "--"}
          </h4>
          <p className="text-[#706763] leading-[20px] text-[12px] h-[40px] flex flex-col items-start">
            <span>{note.creator?.position || "--"}</span>
            <span>{note.creator?.location || "--"}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 grow max-w-[55%] md:max-w-[70%]">
        <div className="flex flex-col gap-2 md:max-w-[55%] grow">
          <p className="text-gray-700 text-[12px] text-ellipsis overflow-hidden grow w-full line-clamp-3">
            {note.details}
          </p>
          <SeverityPill severity={note.severity}>{note.severity}</SeverityPill>
        </div>
        <p className="text-gray-700 text-[12px] w-[75px] md:block hidden">
          {timeAgo(new Date(note.createdAt))}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation()
            typeof handleView === "function" && handleView()
          }}
          className="bg-[#B2E89A] px-[12px] py-[2px] text-[#2D6316] text-[14px] capitalize md:block hidden"
        >
          view
        </button>
        <div className="md:flex justify-center items-center w-fit hidden">
          <ShareModal />
        </div>
      </div>
      <div className="md:hidden flex gap-2 items-center w-full">
        <button
          onClick={handleView}
          className="bg-[#B2E89A] px-[12px] py-[2px] text-[#2D6316] text-[14px] capitalize"
        >
          view
        </button>
        <p className="text-gray-700 text-[12px]">
          {timeAgo(new Date(note.createdAt))}
        </p>
        <div className="justify-center items-center w-fit flex">
          <ShareModal />
        </div>
        <button className="text-[#B22A09] font-bold">
          <HiOutlineTrash size={22} />
        </button>
      </div>
    </div>
  )
}
