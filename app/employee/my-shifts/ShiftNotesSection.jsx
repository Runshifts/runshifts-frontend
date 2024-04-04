import { useContext, useEffect, useMemo } from "react"
import ShiftNotesForm, { SeverityPill } from "./ShiftNotesForm"
import { NotesContext } from "../../_providers/NotesProvider"
import UserHeader from "../../_components/AppComps/UserHeader"
import Image from "next/image"
import { UserContext } from "../../_providers/UserProvider"
import placeholderImage from "../../_assets/img/user.png"
import { timeAgo } from "../../_utils"
import NoteLikeChatSkeleton from "../../_components/Skeletons/NoteLikeChatSkeleton"

export default function ShiftNotesSection({ shift }) {
  return (
    <>
      <div className="flex flex-col items-stretch gap-4 w-full">
        <h3 className="modal-subheading sticky top-0 bg-white">Notes</h3>
        <div>
          <ShiftNotes shiftId={shift?._id} notesDisplayStyle={"chat"} />
        </div>
        <div className="sticky bottom-0 bg-white">
          <ShiftNotesForm shiftId={shift?._id} />
        </div>
      </div>
    </>
  )
}

export function ShiftNotes({
  notesDisplayStyle = "chat" || "section",
  shiftId,
}) {
  const { allNotes, fetchNotes, hasFetchedNotes, loadingNotes } =
    useContext(NotesContext)
  const notesForShift = useMemo(
    () => allNotes.filter((note) => note.shift === shiftId),
    [allNotes, shiftId]
  )
  const sortedNotes = useMemo(
    () =>
      notesForShift.toSorted((a, b) => {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      }),
    [notesForShift]
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
            sortedNotes.map((note) =>
              notesDisplayStyle === "chat" ? (
                <ChatLikeNote note={note} key={note._id} />
              ) : (
                <SectionLikeNote note={note} key={note._id} />
              )
            )
          )}
        </ul>
      </div>
    </>
  )
}

const SectionLikeNote = ({ note }) => {
  return (
    <div>
      <UserHeader user={note.creator} />
      {note.creator?.fullName}
      {note.severity}
      {note.details}mnbbm,
    </div>
  )
}

const ChatLikeNote = ({ note }) => {
  const { user } = useContext(UserContext)
  const isOwnNote = useMemo(() => note.creator?._id === user?._id, [note, user])

  return (
    <article
      className={`flex items-start gap-2 max-w-[279px] ${
        isOwnNote ? "justify-start" : "flex-row-reverse  justify-end"
      }`}
    >
      <Image
        src={note.creator?.profileImage?.secure_url || placeholderImage}
        width={34}
        height={34}
        alt=""
        className="rounded-full w-[34px] h-[34px]"
      />
      <div className="flex flex-col items-start justify-start gap-2">
        <h4 className="flex gap-2 justify-start leading-[16px]">
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
