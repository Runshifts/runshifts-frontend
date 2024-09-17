"use client"
import React, { useCallback, useState } from "react"
import FormHeading from "../_components/Auth/Heading"
import AuthInputAndLabel, { SubmitButton } from "../_components/Auth/Inputs"
import { RiUserLine } from "react-icons/ri"
import { IoClose, IoMailOutline } from "react-icons/io5"
import toast, { LoaderIcon } from "react-hot-toast"
import useAxios from "../_hooks/useAxios"
import Link from "next/link"
import Cloud from "../_assets/svgs/Cloud"
import { useRouter } from "next/navigation"
import USER_URLS from "../_urls/userURLs"

const toastOptions = {
  position: "top-left",
  className: "mx-[8%]",
}

export default function StepThree({ isActive, onSubmit = () => {} }) {
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

  const removeTeamMember = useCallback((email) => {
    setTeamMembers((prev) =>
      prev.filter((it) => it.email.toLowerCase() !== email?.toLowerCase())
    )
  }, [])

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      if (teamMembers.length === 0 && (!fullName.trim() || !email.trim()))
        return toast.error("All fields are required", toastOptions)
      const body = {
        teamMembers: [...teamMembers, { email, fullName }],
      }
      const res = await fetchData(
        `${USER_URLS.inviteTeamMembers()}`,
        "post",
        body
      )
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
      <BulkUploadForm />
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

function BulkUploadForm() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const fetchData = useAxios()
  const router = useRouter()

  const handleSubmit = useCallback(
    async (csvFile) => {
      if (loading) return
      setSelectedFile(csvFile)
      setLoading(true)
      const formData = new FormData()
      formData.append("csvFile", csvFile)
      const res = await fetchData(
        `${USER_URLS.inviteTeamMembers()}`,
        "post",
        formData
      )
      if (res.statusCode === 200) {
        toast.success(res.message)
        router.push("/welcome")
      } else {
        toast.error(
          res.message ||
            "Unable to process file, Something went wrong. Please try again"
        )
      }
      setLoading(false)
    },
    [fetchData, router, loading]
  )
  return (
    <>
      <Link
        href="/csv-templates/Runshifts Team Members Template - Sheet2.csv"
        download={true}
        target="_blank"
        className="text-[#4779CE] mx-auto block underline font-[500]"
      >
        Download CSV template
      </Link>
      <label className="disabled:opacity-40 cursor-pointer text-[#9A928D] flex items-center justify-center gap-2 border border-[#BAB4B1] border-dashed py-6 px-4 font-semibold text-center rounded-md">
        <input
          disabled={loading}
          onChange={(e) => {
            if (e.target.files) handleSubmit(e.target.files[0])
          }}
          type="file"
          accept=".csv"
          className="sr-only"
        />
        {loading && <LoaderIcon />}
        <span className="max-w-[70%] whitespace-nowrap truncate">
          {selectedFile ? selectedFile.name : "Upload csv"}
        </span>{" "}
        <Cloud />
      </label>
    </>
  )
}
