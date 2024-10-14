import Image from "next/image"
import Modal from "../../../_components/AppComps/Modal"
import FormInputAndLabel, {
  FormLabelText,
} from "../../../_components/ScheduleComponents/NewShiftForm/FormInputAndLabel"
import PositionOrDepartmentInput from "./PositionOrDepartmentInput"
import FormLocationInput from "../../../_components/ScheduleComponents/NewShiftForm/FormLocationInput"
import { useCallback, useMemo, useState } from "react"
import DateInput from "../../../_components/AppComps/DateInput"
import toast from "react-hot-toast"
import useAxios from "../../../_hooks/useAxios"
import Spinner from "../../../_assets/svgs/Spinner"

export default function FormModal({
  show = false,
  onCancel = () => {},
  teamMemberFormData,
  organizationId,
  handleUserResponse,
  handleArchivedUser,
  type,
}) {
  if (type !== "employee" && type !== "volunteer") return null
  if (!teamMemberFormData) return null
  return (
    <Modal open={show}>
      {type === "employee" ? (
        <NewMemberForm
          onCancel={onCancel}
          teamMemberFormData={teamMemberFormData}
          organizationId={organizationId}
          handleUserResponse={handleUserResponse}
          handleArchivedUser={handleArchivedUser}
        />
      ) : (
        <NewVolunteerForm
          onCancel={onCancel}
          teamMemberFormData={teamMemberFormData}
          organizationId={organizationId}
          handleUserResponse={handleUserResponse}
          handleArchivedUser={handleArchivedUser}
        />
      )}
    </Modal>
  )
}
const NewMemberForm = ({
  teamMemberFormData,
  onCancel,
  organizationId,
  handleUserResponse,
  handleArchivedUser,
}) => {
  const [loading, setLoading] = useState({
    submit: false,
    archive: false,
  })
  const isEditMode = useMemo(
    () => teamMemberFormData?.isEdit === true,
    [teamMemberFormData?.isEdit]
  )
  const [formData, setFormData] = useState({
    firstName: isEditMode ? teamMemberFormData?.user?.firstName : "",
    lastName: isEditMode ? teamMemberFormData?.user?.lastName : "",
    email: isEditMode ? teamMemberFormData?.user?.email : "",
    location: isEditMode ? teamMemberFormData?.user?.location || null : null,
    department: isEditMode
      ? teamMemberFormData?.user?.department || null
      : null,
    position: isEditMode ? teamMemberFormData?.user?.position || null : null,
    hourlyEarnings: isEditMode
      ? teamMemberFormData?.user?.hourlyRate || ""
      : "",
    rightToWorkExpiry: isEditMode
      ? new Date(teamMemberFormData?.user?.rightToWorkExpiry || Date.now()) ||
        null
      : null,
    profileImage: isEditMode
      ? teamMemberFormData?.user?.profileImage || null
      : null,
  })

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  const profileImagePreview = useMemo(() => {
    if (formData.profileImage?.lastModifiedDate)
      return URL.createObjectURL(formData.profileImage)
    else if (formData.profileImage?.secure_url)
      return formData.profileImage?.secure_url
    return null
  }, [formData.profileImage])

  const fetchData = useAxios()
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      if (!formData.location) return toast.error("Please provide a location")
      if (!formData.department)
        return toast.error("Please provide a department")
      // if (!formData.position) return toast.error("Please provide a position")
      if (!formData.profileImage)
        return toast.error("Please provide a profile image")
      if (!formData.rightToWorkExpiry)
        return toast.error("Please input right to work date")
      setLoading((prev) => ({ ...prev, submit: true }))
      const body = new FormData()
      if (formData.profileImage?.lastModifiedDate)
        body.set("profileImage", formData.profileImage)
      body.set("locationId", formData.location?._id)
      body.set(
        "position",
        formData.position?.name || teamMemberFormData?.user?.position
      )
      body.set(
        "department",
        formData.department?.name || teamMemberFormData?.user?.department
      )
      body.set("hourlyRate", formData.hourlyEarnings)
      body.set("rightToWorkExpiry", formData.rightToWorkExpiry)
      body.set("firstName", formData.firstName)
      body.set("lastName", formData.lastName)
      body.set("email", formData.email)
      const url = isEditMode
        ? `/users/employees/${organizationId}/${teamMemberFormData?.user?._id}`
        : `/users/${organizationId}`
      const method = isEditMode ? "put" : "post"
      const res = await fetchData(url, method, body)
      if (res.statusCode === 200 || res.statusCode === 201) {
        handleUserResponse(res.teamMember)
        toast.success(
          isEditMode ? "Edited successfully!" : "Team Member added!",
          { className: "!bg-primary-400 !text-white" }
        )
        onCancel()
      } else toast.error(res.message)
      setLoading((prev) => ({ ...prev, submit: false }))
    },
    [
      formData,
      teamMemberFormData,
      isEditMode,
      organizationId,
      handleUserResponse,
      onCancel,
      fetchData,
    ]
  )

  const [showArchiveConfirmation, setShowArchiveConfirmation] = useState(false)
  const handleArchive = useCallback(async () => {
    setLoading((prev) => ({ ...prev, archive: true }))
    const res = await fetchData(
      `/users/employees/${organizationId}/${teamMemberFormData?.user?._id}`,
      "put",
      { isArchived: true }
    )
    if (res.statusCode === 200) {
      handleArchivedUser(res.teamMember)
      onCancel()
    } else toast.error(res.message)
    setLoading((prev) => ({ ...prev, archive: false }))
  }, [
    teamMemberFormData.user?._id,
    organizationId,
    handleArchivedUser,
    onCancel,
    fetchData,
  ])
  

  return (
<section className="w-[95dvw] my-2 max-h-[90vh] min-h-screen py-[24px] px-[24px] md:px-[35px] max-w-[320px] bg-white rounded-[16px] gap-y-[14px] flex flex-col overflow-y-auto">
<div className="flex flex-col gap-[14px] items-center justify-center">
        {!isEditMode && (
          <h3 className="text-center font-[600] text-[16px] text-[#1B1818] mb-[14px]">
            New Team Member
          </h3>
        )}
        <ImageInputSection
          preview={profileImagePreview}
          onChange={(profileImage) =>
            setFormData((prev) => ({ ...prev, profileImage }))
          }
        />
        {isEditMode && (
          <h3 className="text-center font-[600] text-[16px] text-[#1B1818] mb-[14px]">
            Edit profile
          </h3>
        )}
      </div>
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        <FormInputAndLabel
          label="First name"
          inputProps={{
            placeholder: "John",
            value: formData.firstName,
            name: "firstName",
            type: "text",
            onChange: handleChange,
            required: true,
          }}
        />
        <FormInputAndLabel
          label="Last name"
          inputProps={{
            placeholder: "Doe",
            value: formData.lastName,
            name: "lastName",
            type: "text",
            onChange: handleChange,
            required: true,
          }}
        />
        <FormInputAndLabel
          label="Email"
          inputProps={{
            placeholder: "Johndoe@email.com",
            value: formData.email,
            disabled: isEditMode,
            name: "email",
            type: "email",
            onChange: handleChange,
            required: true,
          }}
        />
        <FormLocationInput
          currentLocation={formData.location}
          updateCurrentValue={(location) =>
            setFormData((prev) => ({ ...prev, location }))
          }
        />
        <PositionOrDepartmentInput
          inputType="department"
          handleSelect={(department) =>
            setFormData((prev) => ({ ...prev, department }))
          }
          selectedOption={formData.department}
        />
        <PositionOrDepartmentInput
          inputType="position"
          handleSelect={(position) =>
            setFormData((prev) => ({ ...prev, position }))
          }
          selectedOption={formData.position}
        />
        <FormInputAndLabel
          label="Hourly earnings"
          inputProps={{
            placeholder: "£123",
            value: `${formData.hourlyEarnings}`,
            name: "hourlyEarnings",
            type: "number",
            onChange: handleChange,
            required: true,
          }}
        />
        <DateInput
          label={<FormLabelText>Right to work date</FormLabelText>}
          onChange={(rightToWorkExpiry) =>
            setFormData((prev) => ({ ...prev, rightToWorkExpiry }))
          }
          value={formData.rightToWorkExpiry}
        />
        {teamMemberFormData.isEdit && (
          <div className="flex gap-4">
            <FormInputAndLabel
              label="Total time worked"
              inputProps={{
                placeholder: "5000 hrs",
                disabled: true,
                value: `${teamMemberFormData.user?.totalTimeWorked} hrs`,
              }}
            />
            <FormInputAndLabel
              label="Total earnings"
              inputProps={{
                placeholder: "£4,000,000",
                disabled: true,
                value: `£${teamMemberFormData.user?.totalEarnings}`,
              }}
            />
          </div>
        )}
        {teamMemberFormData.isNew && (
          <div className="flex flex-col gap-[8px]">
            <button
              disabled={loading.submit}
              type="submit"
              className="bg-primary-500 disabled:bg-primary-300 disabled:cursor-not-allowed flex justify-center text-white flex-1 py-[8px] rounded-[3px]"
            >
              {loading.submit ? <Spinner /> : "Add new member"}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="text-[#1E1E1E] text-[14px] px-[8px] py-[4px] font-[500]"
            >
              Cancel
            </button>
          </div>
        )}
        {teamMemberFormData.isEdit && (
          <>
            <div className="flex gap-[8px] flex-wrap">
              <button
                type="submit"
                disabled={loading.submit}
                className="bg-primary-500 flex justify-center disabled:bg-primary-300 disabled:cursor-not-allowed text-[14px] text-white flex-1 py-[2px] px-[12px] rounded-[3px]"
              >
                {loading.submit ? <Spinner /> : "Save changes"}
              </button>
              <button
                type="button"
                disabled={loading.archive}
                onClick={() => setShowArchiveConfirmation(true)}
                className="bg-info-100 text-[14px] flex justify-center text-info-600 flex-1 py-[2px] px-[12px] rounded-[3px]"
              >
                {loading.archive ? <Spinner /> : "Archive"}
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="text-[#1E1E1E] text-[14px] px-[8px] font-[500] py-[4px] w-full"
              >
                Go Back
              </button>
            </div>
            <Modal zIndex={10001} open={showArchiveConfirmation}>
              <div
                role="alert"
                className="bg-white min-h-[92px] p-[10px] text-center w-[237px] rouded-[8px] flex flex-col gap-2 items-center justify-center rounded-[8px"
              >
                <p className="font-[500] text-gray-800 text-[12px]">
                  Are you sure you want to remove this profile?
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={handleArchive}
                    className="bg-danger-600 text-[14px] flex justify-center text-white flex-1 py-[2px] px-[12px] rounded-[3px]"
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowArchiveConfirmation(false)}
                    className="text-[#1E1E1E] text-[14px] px-[8px] py-[4px] w-full"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </Modal>
          </>
        )}
      </form>
    </section>
  )
}

function ImageInputSection({ preview, onChange }) {
  return (
    <label className="flex items-center justify-center object-cover text-center text-gray-700 w-[69px] h-[69px] bg-[#D9D9D9] rounded-full text-[10px] leading-[14.5px] font-[600]">
      <input
        type="file"
        className="sr-only"
        accept="image/*"
        onChange={(e) => {
          typeof preview === "string" && URL.revokeObjectURL(preview)
          onChange(e.target.files?.[0])
        }}
      />
      {typeof preview === "string" ? (
        <Image
          width={69}
          height={69}
          src={preview}
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <span className="inline-block p-1">Upload image</span>
      )}
    </label>
  )
}

const NewVolunteerForm = ({
  teamMemberFormData,
  onCancel,
  organizationId,
  handleUserResponse,
  handleArchivedUser,
}) => {
  const [loading, setLoading] = useState({
    submit: false,
    archive: false,
  })
  const isEditMode = useMemo(
    () => teamMemberFormData?.isEdit === true,
    [teamMemberFormData?.isEdit]
  )
  const [formData, setFormData] = useState({
    firstName: isEditMode ? teamMemberFormData?.user?.firstName || "" : "",
    lastName: isEditMode ? teamMemberFormData?.user?.lastName || "" : "",
    email: isEditMode ? teamMemberFormData?.user?.email : "",
    location: isEditMode ? teamMemberFormData?.user?.location || null : null,
    department: isEditMode
      ? teamMemberFormData?.user?.department || null
      : null,
    position: isEditMode ? teamMemberFormData?.user?.position || null : null,
    hourlyEarnings: isEditMode
      ? teamMemberFormData?.user?.hourlyRate || ""
      : "",
    rightToWorkExpiry: isEditMode
      ? new Date(teamMemberFormData?.user?.rightToWorkExpiry || Date.now()) ||
        null
      : null,
    profileImage: isEditMode
      ? teamMemberFormData?.user?.profileImage || null
      : null,
  })

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  const profileImagePreview = useMemo(() => {
    if (formData.profileImage?.lastModifiedDate)
      return URL.createObjectURL(formData.profileImage)
    else if (formData.profileImage?.secure_url)
      return formData.profileImage?.secure_url
    return null
  }, [formData.profileImage])

  const fetchData = useAxios()
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      if (!formData.location) return toast.error("Please provide a location")
      if (!formData.profileImage)
        return toast.error("Please provide a profile image")
      setLoading((prev) => ({ ...prev, submit: true }))
      const body = new FormData()
      if (formData.profileImage?.lastModifiedDate)
        body.set("profileImage", formData.profileImage)
      body.set("locationId", formData.location?._id)
      body.set("firstName", formData.firstName)
      body.set("lastName", formData.lastName)
      !isEditMode && body.set("email", formData.email)
      const url = isEditMode
        ? `/users/employees/${organizationId}/${teamMemberFormData?.user?._id}`
        : `/users/${organizationId}`
      const method = isEditMode ? "put" : "post"
      const res = await fetchData(url, method, body)
      if (res.statusCode === 200 || res.statusCode === 201) {
        handleUserResponse(res.teamMember, teamMemberFormData.isEdit)
        toast.success(
          isEditMode ? "Edited successfully!" : "Team Member added!",
          { className: "!bg-primary-400 !text-white" }
        )
        onCancel()
      } else toast.error(res.message)
      setLoading((prev) => ({ ...prev, submit: false }))
    },
    [
      formData,
      teamMemberFormData,
      isEditMode,
      organizationId,
      handleUserResponse,
      onCancel,
      fetchData,
    ]
  )

  const [showArchiveConfirmation, setShowArchiveConfirmation] = useState(false)
  const handleToggleArchive = useCallback(async () => {
    setLoading((prev) => ({ ...prev, archive: true }))
    const res = await fetchData(
      `/users/employees/${organizationId}/${teamMemberFormData?.user?._id}`,
      "put",
      { isArchived: !teamMemberFormData.user.isArchived }
    )
    if (res.statusCode === 200) {
      handleArchivedUser(res.teamMember)
      onCancel()
    } else toast.error(res.message)
    setLoading((prev) => ({ ...prev, archive: false }))
  }, [
    teamMemberFormData.user?._id,
    organizationId,
    handleArchivedUser,
    onCancel,
    teamMemberFormData.user?.isArchived,
    fetchData,
  ])

  return (
    <section className="w-[95dvw] py-[24px] px-[24px] md:px-[35px] max-w-[336px] bg-white rounded-[16px] gap-y-[14px] flex flex-col">
      <div className="flex flex-col gapp-[14px] items-center justify-center">
        {!isEditMode && (
          <h3 className="text-center font-[600] text-[16px] text-[#1B1818] mb-[14px]">
            New volunteer
          </h3>
        )}
        <ImageInputSection
          preview={profileImagePreview}
          onChange={(profileImage) =>
            setFormData((prev) => ({ ...prev, profileImage }))
          }
        />
        {isEditMode && (
          <h3 className="text-center font-[600] text-[16px] text-[#1B1818] mt-2 mb-[14px]">
            {teamMemberFormData.user?.isArchived ? "Archived " : "Edit "}{" "}
            profile
          </h3>
        )}
      </div>
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        <FormInputAndLabel
          label="First name"
          inputProps={{
            placeholder: "John",
            value: formData.firstName,
            name: "firstName",
            type: "text",
            onChange: handleChange,
            required: true,
            disabled: teamMemberFormData.user?.isArchived,
          }}
        />
        <FormInputAndLabel
          label="Last name"
          inputProps={{
            placeholder: "Doe",
            value: formData.lastName,
            name: "lastName",
            type: "text",
            onChange: handleChange,
            required: true,
            disabled: teamMemberFormData.user?.isArchived,
          }}
        />
        <FormInputAndLabel
          label="Email"
          inputProps={{
            placeholder: "Johndoe@email.com",
            value: formData.email,
            disabled: isEditMode,
            name: "email",
            type: "email",
            onChange: handleChange,
            required: true,
          }}
        />
        <FormLocationInput
          currentLocation={formData.location}
          updateCurrentValue={(location) =>
            setFormData((prev) => ({ ...prev, location }))
          }
        />
        {teamMemberFormData.isNew && (
          <div className="flex flex-col gap-[8px]">
            <button
              disabled={loading.submit}
              type="submit"
              className="bg-primary-500 shrink disabled:bg-primary-300 disabled:cursor-not-allowed flex justify-center text-white flex-1 py-[8px] rounded-[3px]"
            >
              {loading.submit ? <Spinner /> : "Add new volunteer"}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="text-[#1E1E1E] text-[14px] px-[8px] py-[4px] font-[500]"
            >
              Cancel
            </button>
          </div>
        )}
        {teamMemberFormData.isEdit && (
          <>
            <div className="flex gap-[8px] flex-wrap">
              <button
                type={teamMemberFormData.user.isArchived ? "button" : "submit"}
                onClick={() =>
                  teamMemberFormData.user.isArchived && handleToggleArchive()
                }
                disabled={loading.submit}
                className="bg-primary-500 shrink flex justify-center disabled:bg-primary-300 disabled:cursor-not-allowed text-[14px] text-white py-[2px] px-[12px] rounded-[3px]"
              >
                {loading.submit ? (
                  <Spinner />
                ) : teamMemberFormData.user.isArchived ? (
                  "Unarchive"
                ) : (
                  "Save changes"
                )}
              </button>
              {teamMemberFormData.user.isArchived ? (
                <button
                  type="button"
                  disabled={loading.archive}
                  onClick={() => setShowArchiveConfirmation(true)}
                  className="bg-[#DE350B] text-[14px] flex justify-center text-white flex-1 py-[2px] px-[12px] grow rounded-[3px]"
                >
                  {loading.archive ? <Spinner /> : "Delete permanently"}
                </button>
              ) : (
                <button
                  type="button"
                  disabled={loading.archive}
                  onClick={() => handleToggleArchive()}
                  className="bg-info-100 text-[14px] flex justify-center text-info-600 flex-1 py-[2px] px-[12px] rounded-[3px]"
                >
                  {loading.archive ? <Spinner /> : "Archive"}
                </button>
              )}
              <button
                type="button"
                onClick={onCancel}
                className="text-[#1E1E1E] text-[14px] text-[14px] px-[8px] font-[500] py-[4px] w-full"
              >
                Go Back
              </button>
            </div>
            <Modal zIndex={10001} open={showArchiveConfirmation}>
              <div
                role="alert"
                className="bg-white min-h-[92px] p-[10px] text-center w-[237px] rouded-[8px] flex flex-col gap-2 items-center justify-center rounded-[8px"
              >
                <p className="font-[500] text-gray-800 text-[12px]">
                  Are you sure you want to remove this profile?
                </p>
                <div className="flex gap-2">
                  <button
                    // onClick={handleDelete}
                    className="bg-danger-600 text-[14px] flex justify-center text-white flex-1 py-[2px] px-[12px] rounded-[3px]"
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowArchiveConfirmation(false)}
                    className="text-[#1E1E1E] text-[14px] text-[14px] px-[8px] py-[4px] w-full"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </Modal>
          </>
        )}
      </form>
    </section>
  )
}
