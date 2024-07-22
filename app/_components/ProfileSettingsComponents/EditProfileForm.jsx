"use client"
import React, { useState, useContext, useEffect } from "react"
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
import InfoIcon from "../../_assets/svgs/Info"
import TwoFAInfoBlock from "./TwoFAInfoBlock"

export default function EditProfileForm({ accountType }) {
  const fetchData = useAxios()

  const { user, updateUser } = useContext(UserContext)
  const { organization } = useContext(OrganizationContext)

  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem("formData")
    return savedFormData
      ? JSON.parse(savedFormData)
      : {
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
    console.log("my file", file)
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
    <div className="max-w-[534px] flex flex-col gap-4">
      <Heading as="h1">User profile</Heading>
      <div className="mt-[26px]">
        <DisplayImageInput />
        <h2 className="text-sm font-[600] leading-5 text-left text-[#42526E] py-2">
          Personal Information
        </h2>
        <form
          onSubmit={handleForm1Submit}
          className="flex flex-col w-full gap-4"
        >
          <div className="w-full flex gap-4">
            <FormInputAndLabel
              label="First Name"
              inputProps={{
                value: formData.firstName,
                onChange: handleInputChange,
                name: "firstName",
              }}
              labelProps={{ className: "grow" }}
            />
            <FormInputAndLabel
              label="Last Name"
              inputProps={{
                value: formData.lastName,
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
                value: formData.email,
                onChange: handleInputChange,
                name: "email",
              }}
              labelProps={{ className: "grow" }}
            />
            <FormInputAndLabel
              label="Phone Number"
              inputProps={{
                value: formData.phoneNumber,
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
                  value: formData.hourlyRate,
                  name: "hourlyRate",
                  readOnly: true,
                }}
                labelProps={{ className: "max-w-[20%]" }}
              />
            )}
            <FormInputAndLabel
              label="Home Address"
              inputProps={{
                value: formData.homeAddress,
                name: "homeAddress",
                onChange: handleInputChange,
              }}
              labelProps={{ className: "grow" }}
            />
          </div>
          <SubmitButton
            type="submit"
            className="bg-[#7ED957] rounded-[3px] text-[14px] text-white px-[12px] py-[6px] max-w-[121px]"
            loadingText="Saving..."
            isLoading={false}
          >
            Update profile
          </SubmitButton>
        </form>
      </div>
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
        <div className="flex justify-between items-center mt-4">
          <h3 className="text-[16px] font-[400] leading-[20px] text-left text-[#1D2433] mb-2">
            Enable 2FA
          </h3>
        </div>
        <TwoFAInfoBlock
          heading="Google Authenticator"
          text="You have linked your account to Google Authenticator."
        />
      </form>
    </div>
  )
}
