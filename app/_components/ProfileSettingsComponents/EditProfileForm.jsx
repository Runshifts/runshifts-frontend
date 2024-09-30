"use client"
import React, { useState, useContext, useEffect, useCallback } from "react"
import useAxios from "../../_hooks/useAxios"
import { UserContext } from "../../_providers/UserProvider"
import { OrganizationContext } from "../../_providers/OrganizationProvider"
import toast from "react-hot-toast"
import DisplayImageInput from "./DisplayPictureInput"
import Heading from "../Headings"
import FormInputAndLabel, {
  FormPasswordInputAndLabel,
} from "../ScheduleComponents/NewShiftForm/FormInputAndLabel"
import { SubmitButton } from "../Auth/Inputs"
import TwoFAInfoBlock from "./TwoFAInfoBlock"
import { useSelector } from "react-redux"

export default function EditProfileForm({ accountType }) {
  return (
    <div className="max-w-[534px] flex flex-col gap-4">
      <Heading as="h1">User profile</Heading>
      <div className="mt-[26px]">
        <ProfileForm accountType={accountType} />
      </div>
      <ChangePasswordForm />
      <div className="flex justify-between items-center mt-4">
        <h3 className="text-[16px] font-[400] leading-[20px] text-left text-[#1D2433] mb-2">
          Enable 2FA
        </h3>
      </div>
      <TwoFAInfoBlock
        heading="Google Authenticator"
        text="You have linked your account to Google Authenticator."
      />
    </div>
  )
}

function ProfileForm({ accountType }) {
  const fetchData = useAxios()
  const [isUpdating, setIsUpdating] = useState(false)
  const { organization } = useSelector((store) => store.organization)
  const { user, updateUser } = useContext(UserContext)

  const [formData, setFormData] = useState(() => ({
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    hourlyRate: user?.hourlyRate,
    address: user?.address,
  }))

  const [selectedFile, setSelectedFile] = useState()

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleFileChange = useCallback((event) => {
    const file = event.target.files[0]
    if (file) setSelectedFile(file)
  }, [])

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      const formDataWithImage = new FormData()
      formDataWithImage.append("firstName", formData.firstName)
      formDataWithImage.append("lastName", formData.lastName)
      formDataWithImage.append("phoneNumber", formData.phoneNumber)
      formDataWithImage.append("homeAddress", formData.homeAddress)
      if (selectedFile) formDataWithImage.append("profileImage", selectedFile)
      if (isUpdating) return
      setIsUpdating(true)
      const response = await fetchData(
        `/users/${organization?._id}/${user?._id}`,
        "put",
        formDataWithImage
      )
      if (response.statusCode === 200) {
        updateUser(response.user)
        toast.success(response.message || "Successfully updated profile")
      } else {
        toast.error(response.message || "Something went wrong")
      }
      setIsUpdating(false)
    },
    [
      formData,
      fetchData,
      selectedFile,
      isUpdating,
      organization,
      user,
      updateUser,
    ]
  )
  useEffect(() => {
    setFormData({ ...user })
  }, [user])
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
      <DisplayImageInput
        handleChange={handleFileChange}
        uploadedImg={user?.profileImage?.secure_url}
        isImageRounded
        labelText="Upload your profile image"
      />
      <h2 className="text-sm font-[600] leading-5 text-left text-[#42526E] py-2">
        Personal Information
      </h2>
      <div className="w-full flex gap-4">
        <FormInputAndLabel
          label="First Name"
          inputProps={{
            value: formData.firstName || "",
            onChange: handleInputChange,
            name: "firstName",
          }}
          labelProps={{ className: "grow" }}
        />
        <FormInputAndLabel
          label="Last Name"
          inputProps={{
            value: formData.lastName || "",
            onChange: handleInputChange,
            name: "lastName",
          }}
          labelProps={{ className: "grow" }}
        />
      </div>
      <div className="flex gap-4">
        <FormInputAndLabel
          label="Email"
          inputProps={{
            value: user?.email || "",
            name: "email",
            readOnly: true,
            type: "email",
            disabled: true,
          }}
          labelProps={{ className: "grow" }}
        />
        <FormInputAndLabel
          label="Phone Number"
          inputProps={{
            value: formData.phoneNumber || "",
            onChange: handleInputChange,
            name: "phoneNumber",
          }}
          labelProps={{ className: "grow" }}
        />
      </div>
      <div className="flex gap-4">
        {accountType === "employee" && (
          <FormInputAndLabel
            label="Hourly rate"
            inputProps={{
              value: Number(user?.hourlyRate || 0).toLocaleString("en-gb", {
                style: "currency",
                currency: "EUR",
              }),
              name: "hourlyRate",
              readOnly: true,
              disabled: true,
            }}
            labelProps={{ className: "max-w-[20%]" }}
          />
        )}
        <FormInputAndLabel
          label="Home Address"
          inputProps={{
            value: formData.homeAddress || "",
            name: "homeAddress",
            type: "tel",
            onChange: handleInputChange,
          }}
          labelProps={{ className: "grow" }}
        />
      </div>
      <SubmitButton
        type="submit"
        className="bg-[#7ED957] rounded-[3px] text-[14px] text-white px-[12px] py-[6px] max-w-[121px]"
        loadingText="Saving..."
        isLoading={isUpdating}
      >
        Update profile
      </SubmitButton>
    </form>
  )
}

function ChangePasswordForm() {
  const fetchData = useAxios()

  const { user, updateUser } = useContext(UserContext)
  const { organization } = useContext(OrganizationContext)

  const [formData, setFormData] = useState(() => {
    return {
      phoneNumber: "",
      homeAddress: "",
      image: "",
      hourRate: "",
    }
  })

  const [isSecurityEnabled, setIsSecurityEnabled] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)

  const [showOldPassword, setShowOldPassword] = useState(false)
  const [shownewPassword, setShownewPassword] = useState(false)

  const handleToggle = () => {
    setIsSecurityEnabled((prev) => !prev)
  }

  const handleOldPasswordChange = () => {
    setShowOldPassword((prev) => !prev)
  }

  const handlenewPasswordChange = () => {
    setShownewPassword((prev) => !prev)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setSelectedFile(file)
  }

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData))
  }, [formData])

  const handleForm1Submit = async (event) => {
    event.preventDefault()
    const formDataWithImage = new FormData()
    formDataWithImage.append("phoneNumber", formData.phoneNumber)
    formDataWithImage.append("homeAddress", formData.homeAddress)
    formDataWithImage.append("profileImage", selectedFile)

    const response = await fetchData(
      `/users/${organization?._id}/${user?._id}`,
      "put",
      formDataWithImage
    )
    if (response.statusCode === 200) {
      updateUser(response.user)
      toast.success(response.message || "Successfully updated profile")
    } else {
      toast.error(response.message || "Something went wrong")
    }
  }

  const handleChangePasswordFormSubmit = async (event) => {
    event.preventDefault()

    const response = await fetchData(
      `/users/${organization?._id}/${user?._id}`,
      "put",
      formDataWithImage
    )
    if (response.statusCode === 200) {
      updateUser(response.user)
    }
  }
  return (
    <form onSubmit={handleChangePasswordFormSubmit}>
      <h3 className="text-[16px] font-[400] leading-[20px] text-left text-[#1D2433] mb-2">
        Security
      </h3>
      <hr className="border-[0.5px] border-[#BAB4B1] border-solid" />
      <h4 className="text-[14px] font-[600] leading-5 text-left text-[#42526E] pb-[4px]">
        Personal Information
      </h4>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <FormPasswordInputAndLabel
            label="Old Password"
            inputProps={{
              value: formData.email,
              onChange: handleInputChange,
              name: "oldPassword",
              type: "password",
            }}
            labelProps={{ className: "grow" }}
          />
          <FormPasswordInputAndLabel
            label="New Password"
            inputProps={{
              value: formData.phoneNumber,
              onChange: handleInputChange,
              name: "newPassword",
              type: "password",
            }}
            labelProps={{ className: "grow" }}
          />
        </div>
        <SubmitButton
          type="submit"
          className="bg-[#7ED957] rounded-[3px] text-[14px] text-white px-[12px] py-[6px] max-w-max"
          loadingText="Saving..."
          isLoading={false}
        >
          Change password
        </SubmitButton>
      </div>
    </form>
  )
}
