import { useContext, useMemo, useState } from "react"
import placeholderImage from "../../_assets/img/user.png"
import { HiOutlineTrash } from "react-icons/hi"
import Image from "next/image"
import ShareModal from "./ShareModal"
import { ShiftNotes } from "../my-shifts/ShiftNotesSection"
import { NotesContext } from "../../_providers/NotesProvider"
import ShiftNotesForm, { SeverityPill } from "../my-shifts/ShiftNotesForm"
import { timeAgo } from "../../_utils"
import Modal from "../../_components/AppComps/Modal"

export default function LogsContent({ notesGroupedByShifts = {} }) {
  const latestNotesOfShifts = useMemo(
    () => Object.values(notesGroupedByShifts).map((val) => val.latestNote),
    [notesGroupedByShifts]
  )
  const [shiftInFocus, setShiftInFocus] = useState(null)

  return (
    <section className="flex flex-col gap-2 md:flex-row gap-[12px]">
      <div className="grow lg:w-[45%] max-h-[80dvh] flex flex-col gap-2 overflow-auto gap-[10px]">
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
        <div className="relative bg-white w-screen h-screen max-w-[600px] max-h-[800px] rounded-lg p-4">
          <div className="h-full overflow-auto">
            <ShiftNotes notesDisplayStyle="section" shiftId={shiftInFocus} />
          </div>
          <div className="absolute w-full bottom-4 bg-white left-0 px-4 pt-4">
            <ShiftNotesForm shiftId={shiftInFocus} />
          </div>
        </div>
      </Modal>
      {shiftInFocus && (
        <div className="hidden lg:block grow lg:max-w-[48%] relative rounded-[8px] shadow-[0px_2px_8px_0px_#0000001F] p-4 lg:max-h-[75dvh] overflow-hidden">
          <div className="h-full overflow-auto">
            <ShiftNotes notesDisplayStyle="section" shiftId={shiftInFocus} />
          </div>
          <div className="absolute w-full bottom-4 bg-white left-0 px-4 pt-4">
            <ShiftNotesForm shiftId={shiftInFocus} />
          </div>
        </div>
      )}
    </section>
  )
}

export function NoteOverviewCard({ note, handleView }) {
  console.log(note)
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
          <h4 className="text-[12px] capitalize text-[#1D2433] font-[500]">
            {note.creator?.fullName ||
              (
                (note.creator?.firstName || "") +
                " " +
                (note.creator?.lastName || "")
              ).trim() ||
              note.creator?.email ||
              "--"}
          </h4>
          <p className="text-[#706763] leading-[20px] text-[12px] h-[40px] flex flex-col items-start">
            <span>{note.creator?.role || "--"}</span>
            <span>{note.creator?.location || "--"}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 grow max-w-[55%] md:max-w-[70%]">
        <div className="flex flex-col gap-2 md:max-w-[55%] grow">
          <p className="text-gray-700 text-[12px] text-ellipsis overflow-hidden grow w-full line-clamp-3">
            {note.details}
          </p>
          <SeverityPill severity={note.severity}>{note.severity}</SeverityPill>
        </div>
        <p className="text-gray-700 text-[12px] md:block hidden">
          {timeAgo(new Date(note.createdAt))}
        </p>
        <button
          onClick={handleView}
          className="bg-[#B2E89A] px-[12px] py-[2px] text-[#2D6316] text-[14px] capitalize md:block hidden"
        >
          view
        </button>
        <div className="md:flex justify-center items-center w-fit hidden">
          <ShareModal />
        </div>
        <button className="text-[#B22A09] font-bold md:block hidden">
          <HiOutlineTrash size={22} />
        </button>
      </div>
      <div className="md:hidden flex gap-2 items-center">
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
