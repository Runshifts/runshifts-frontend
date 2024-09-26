import React, { useCallback, useRef, useState } from "react"
import PlusIcon from "../../_assets/svgs/Plus"
import MoreIcon from "../../_assets/svgs/More"
import ImportIcon from "../../_assets/svgs/Import"
import useAxios from "../../_hooks/useAxios"
import USER_URLS from "../../_urls/userURLs"
import toast, { LoaderIcon } from "react-hot-toast"

function TeamAppgroup({ openNewMemberModal = () => {}, buttonTitle }) {
  return (
    <section>
      <div className="flex items-center justify-center ">
        <button
          onClick={openNewMemberModal}
          className="bg-[#5BC62D] text-white px-2 rounded-sm flex items-center jusitfy-center text-sm mx-1 px-2 py-1"
        >
          <PlusIcon />
          <span>{buttonTitle ? buttonTitle : "Add New"}</span>
        </button>
        <ImportTeamButton />
        <ExportTeamButton />
      </div>
    </section>
  )
}

export default TeamAppgroup

function ImportTeamButton() {
  const inputRef = useRef(null)
  const fetchData = useAxios()
  const [loading, setLoading] = useState()

  const handleCsvImport = useCallback(async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setLoading(true)
    const formData = new FormData()
    formData.append("csvFile", file)
    const res = await fetchData(
      `${USER_URLS.inviteTeamMembers()}`,
      "post",
      formData
    )
    if (res.statusCode === 200) {
      toast.success(res.message)
    } else toast.error(res.message)
    inputRef.current.value = ""
    setLoading(false)
  }, [])

  return (
    <>
      <button
        disabled={loading}
        type="button"
        onClick={() => inputRef.current?.click()}
        className="hidden disabled:opacity-40 disabled:cursor-not-allowed md:flex items-center justify-center rounded bg-[#091E420A] text-gray-600  text-sm font-semibold mx-2 px-2 py-1"
      >
        {loading ? <LoaderIcon /> : <ImportIcon />}
        <p className="px-2 text-xs text-[#42526E]">Import from csv</p>
      </button>
      <input
        type="file"
        onChange={handleCsvImport}
        ref={inputRef}
        name="upload csv file"
        className="sr-only"
        accept=".csv"
      />
    </>
  )
}

function ExportTeamButton() {
  return (
    <button aria-label="export as csv">
      <MoreIcon />
    </button>
  )
}
