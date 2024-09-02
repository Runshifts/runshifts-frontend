"use client"
import React, { useCallback, useState } from "react"
import FormHeading from "../_components/Auth/Heading"
import AuthInputAndLabel, { SubmitButton } from "../_components/Auth/Inputs"
import { RiUserLine } from "react-icons/ri"
import { IoClose, IoMailOutline } from "react-icons/io5"
import toast from "react-hot-toast"
import useAxios from "../_hooks/useAxios"
import Link from "next/link"

const toastOptions = {
  position: "top-left",
  className: "mx-[8%]",
}

export default function StepOne({ isActive, onSubmit = () => {} }) {
  const fetchData = useAxios()
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [teamMembers, setTeamMembers] = useState([])

  const addTeamMember = useCallback(() => {
    if (!email || !fullName)
      return toast.error("All fields are required", toastOptions)
    const hasAlreadyAddedTeamMember = teamMembers.some(
      (teamMember) => teamMember.email.toLowerCase() === email.toLowerCase()
    )
    if (hasAlreadyAddedTeamMember)
      return toast.error("Team member already added!", toastOptions)
    setTeamMembers((prev) => [...prev, { email, fullName }])
    setEmail("")
    setFullName("")
  }, [teamMembers, email, fullName])

  const removeTeamMember = useCallback(
    (email) => {
      setTeamMembers((prev) =>
        prev.filter((it) => it.email.toLowerCase() !== email?.toLowerCase())
      )
    },
    []
  )

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      if (teamMembers.length === 0 && (!fullName.trim() || !email.trim()))
        return toast.error("All fields are required", toastOptions)
      const body = {
        teamMembers: [...teamMembers, { email, fullName }],
      }
      const res = await fetchData("/users/employees/invite", "post", body)
      if (res.statusCode === 200) onSubmit()
      else toast.error(res.message || "Error sending invite", toastOptions)
    },
    [teamMembers, email, fullName, fetchData, onSubmit]
  )

  if (!isActive) return
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[49px]">
        <div className="flex flex-col gap-[17px]">
          <FormHeading>Invite team members</FormHeading>
          {teamMembers.length > 0 && (
            <ul className="flex gap-2 flex-wrap">
              {teamMembers.map((teamMember) => (
                <TeamMemberButton
                  key={teamMember.email}
                  handleDelete={() => removeTeamMember(teamMember.email)}
                  text={teamMember.email}
                />
              ))}
            </ul>
          )}
          <div className="flex flex-col gap-[17px]">
            <AuthInputAndLabel
              labelText="Full name"
              inputProps={{
                value: fullName,
                onChange: (e) => setFullName(e.target.value),
                required: true,
                type: "text",
                placeholder: "",
              }}
              icon={<RiUserLine />}
            />
            <AuthInputAndLabel
              labelText="email"
              inputProps={{
                value: email,
                onChange: (e) => setEmail(e.target.value),
                required: true,
                type: "email",
                placeholder: "",
              }}
              icon={<IoMailOutline />}
            />
          </div>
          <button
            onClick={() => addTeamMember()}
            type="button"
            className="border border-black border-dashed py-4 px-3 md:px-6 font-semibold text-center rounded-md"
          >
            Add another team member
          </button>
        </div>
        <div className="flex flex-col gap-[17px]">
          <SubmitButton type="submit">Next</SubmitButton>
          <Link
            href="/welcome"
            className="text-center w-full text-base text-[#201D1D] font-[600]"
          >
            Do this later
          </Link>
        </div>
      </form>
    </>
  )
}

function TeamMemberButton({ text, handleDelete }) {
  return (
    <li className="text-[12px] flex items-center gap-[8px] max-w-[200px] justify-between items-center p-[4px] rounded-lg border border-[#201D1D]/20 text-[#201D1D]/80 whitespace-nowrap overflow-hidden text-ellipsis">
      {text}
      <button onClick={handleDelete} type="button">
        <IoClose size={10} />
      </button>
    </li>
  )
}
