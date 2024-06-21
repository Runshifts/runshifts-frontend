import { useContext, useEffect, useMemo } from "react"
import ShiftNotesForm, { SeverityPill } from "./ShiftNotesForm"
import { NotesContext } from "../../_providers/NotesProvider"
import UserHeader from "../AppComps/UserHeader"
import Image from "next/image"
import { UserContext } from "../../_providers/UserProvider"
import placeholderImage from "../../_assets/img/user.png"
import { timeAgo } from "../../_utils"
import NoteLikeChatSkeleton from "../Skeletons/NoteLikeChatSkeleton"

export default function ShiftNotesSection({ shift }) {
  return (
    <>
      <div className="flex flex-col items-stretch gap-4 w-full">
        <h3 className="modal-subheading sticky top-0 bg-white">Notes</h3>
        <div>
          <ShiftNotes shiftId={shift?._id} />
        </div>
        <div className="sticky bottom-0 bg-white">
          <ShiftNotesForm shiftId={shift?._id} />
        </div>
      </div>
    </>
  )
}

export function ShiftNotes({ shiftId, notesToDisplay }) {
  const { allNotes, fetchNotes, hasFetchedNotes, loadingNotes } =
    useContext(NotesContext)
  const notesForShift = useMemo(
    () =>
      notesToDisplay || allNotes.filter((note) => note.shift?._id === shiftId),
    [allNotes, shiftId, notesToDisplay]
  )
  const sortedNotes = useMemo(
    () =>
      (notesToDisplay || notesForShift).toSorted((a, b) => {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      }),
    [notesForShift, notesToDisplay]
  )

  useEffect(() => {
    if (notesForShift.length === 0 && !hasFetchedNotes) fetchNotes()
  }, [notesForShift])

  return (
    <>
      <div>
        <ul className="flex flex-col gap-4">
          {loadingNotes ? (
            <>
              <NoteLikeChatSkeleton shouldJustifyStart />
              <NoteLikeChatSkeleton />
              <NoteLikeChatSkeleton shouldJustifyStart />
            </>
          ) : (
            sortedNotes.map((note) => (
              <NoteLikeChat note={note} key={note._id} />
            ))
          )}
        </ul>
      </div>
    </>
  )
}

const NoteLikeChat = ({ note }) => {
  const { user } = useContext(UserContext)
  const isOwnNote = useMemo(() => note.creator?._id === user?._id, [note, user])

  return (
    <article
      className={`flex items-start gap-2 ${
        isOwnNote
          ? "justify-start"
          : "flex-row-reverse text-right justify-start"
      }`}
    >
      <Image
        src={note.creator?.profileImage?.secure_url || placeholderImage}
        width={34}
        height={34}
        alt=""
        className="rounded-full w-[34px] h-[34px]"
      />
      <div
        className={`${
          isOwnNote ? "items-start" : "items-end"
        } flex flex-col justify-start gap-2`}
      >
        <h4 className="flex flex-col gap-2 justify-start leading-[16px]">
          <span className="capitalize">
            {isOwnNote
              ? "You"
              : note?.creator?.firstName ||
                note?.creator?.lastName ||
                note?.creator?.fullName?.split(" ")[0] ||
                note?.creator?.email}
          </span>
          <span className="text-gray-700 text-[12px]">
            {timeAgo(new Date(note.createdAt))}
          </span>
        </h4>
        <SeverityPill severity={note?.severity}>{note?.severity}</SeverityPill>
        <p className="text-gray-700 text-[12px] min-h-8">{note.details}</p>
      </div>
    </article>
  )
}
