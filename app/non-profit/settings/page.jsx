"use client"
import React, { useState, useContext, useEffect } from "react"
import Image from "next/image"
import SettingTab from "./page"
import ColorPicker from "./ColorPicker"
import useAxios from "../../_hooks/useAxios"
import { OrganizationContext } from "../../_providers/OrganizationProvider"
import AddLocationInputs from "./general/AddLocationInputs"
import toast from "react-hot-toast"
import ShiftsManagementForm from "./general/ShiftsManagements"
import { LocationsContext } from "../../_providers/LocationsProvider"
import { ShiftsManagementContext } from "../../_providers/ShiftManagementContext"
import { useColor } from "react-color-palette"
import { useSelector } from "react-redux"
import DisplayImageInput from "../../_components/ProfileSettingsComponents/DisplayPictureInput"

const General = () => {
  const fetchData = useAxios()
  const {
    locations,
    updateLocations,
    organization,
    updateOrganization,
    shiftManagements,
  } = useSelector((store) => store.organization)

  const { default: defaultShiftManagements, custom: customShiftManagements } =
    shiftManagements

  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem("formData")
    return savedFormData
      ? JSON.parse(savedFormData)
      : {
          businessName: organization?.name || "",
          numberOfWorkers: "",
          officeAddress: [""],
          breakDuration: 0,
          logo: null,
        }
  })

  const [officeAddress, setOfficeAddress] = useState(
    locations.length > 0 ? [...locations] : [{ address: "" }]
  )

  useEffect(() => {
    setOfficeAddress([...locations])
  }, [locations])

  useEffect(() => {
    if (organization) {
      setFormData((prev) => {
        return {
          ...prev,
          numberOfWorkers: `${organization.employeesCount.minimum}${
            organization.employeesCount.maximum
              ? `-${organization.employeesCount.maximum}`
              : "+"
          }`,
        }
      })
    }
  }, [organization])

  const [shiftManagementEnabled, setShiftManagementEnabled] = useState(true)

  const [defaultShiftManagementState, setDefaultShiftManagementState] =
    useState([])

  const [customShiftManagementState, setCustomShiftManagementState] = useState(
    []
  )

  const deleteCustomShift = (index) => {
    const newCustomShiftManagementState = [...customShiftManagementState]
    newCustomShiftManagementState.splice(index, 1)
    setCustomShiftManagementState(newCustomShiftManagementState)
  }

  const addCustomShift = () => {
    setCustomShiftManagementState([
      ...customShiftManagementState,
      {
        startHour: "00",
        minutes: "00",
        type: "custom",
        name: "custom",
        id: Date.now(),
        startTime: new Date(),
      },
    ])
  }

  useEffect(() => {
    setDefaultShiftManagementState([
      [
        { ...(defaultShiftManagements.morning || {}) },
        { ...(defaultShiftManagements.afternoon || {}) },
        { ...(defaultShiftManagements.evening || {}) },
      ].map((defaultShiftManagement) => {
        const startTime = new Date(defaultShiftManagement.startTime)
        let endHour = startTime.getHours() + 8
        if (endHour >= 24) endHour = endHour - 24
        return {
          ...defaultShiftManagement,
          startHour: startTime.getHours(),
          endHour,
          minutes: startTime.getMinutes(),
        }
      }),
    ])
  }, [defaultShiftManagements])

  useEffect(() => {
    setCustomShiftManagementState([
      ...customShiftManagements.map((customs) => {
        const startTime = new Date(customs.startTime)
        let endHour = startTime.getHours() + 8
        if (endHour >= 24) endHour = endHour - 24
        return {
          startHour: startTime.getHours(),
          endHour,
          minutes: startTime.getMinutes(),
          type: "custom",
          name: "custom",
          id: Date.now(),
          ...customs,
        }
      }),
    ])
  }, [customShiftManagements])

  const calculateStopTime = (startTime, numberOfHours) => {
    if (startTime && numberOfHours) {
      const start = new Date(startTime)
      const stop = new Date(start.getTime() + numberOfHours * 60 * 60 * 1000)
      return stop
    }
    return ""
  }

  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData))
  }, [formData])

  const [color, setColor] = useColor("hex", "#121212")

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setSelectedImage(file)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    const updatedFormData = { ...formData, [name]: value }
    setFormData(updatedFormData)

    localStorage.setItem("formData", JSON.stringify(updatedFormData))
  }

  const handleNumberOfWorkers = (event) => {
    setFormData((prev) => {
      return { ...prev, numberOfWorkers: event.target.value }
    })
  }

  const handleBreakDuration = (event) => {
    setFormData((prev) => {
      return { ...prev, breakDuration: event.target.value }
    })
  }

  const timeChange = (value) => {
    const [hour, minutes] = value.split(":")
    let endHour = Number(hour) + 8
    if (endHour >= 24) endHour = endHour - 24
    return { startHour: hour, endHour, minutes }
  }

  const handleShiftTimeChange = (shift, value) => {
    const [hour, minutes] = value.split(":")

    setDefaultShiftManagementState((prev) => {
      return prev.map((defaultShift) => {
        if (defaultShift._id === shift.id) {
          return { ...defaultShift, startHour: hour, minutes }
        } else {
          return defaultShift
        }
      })
    })

    const isDefaultShift = defaultShiftManagements.some(
      (defaultShift) => defaultShift._id === shift.id
    )

    if (!isDefaultShift) {
      setCustomShiftManagementState((prev) => {
        return prev.map((shiftManagement) => {
          if (
            shiftManagement._id === shift.id ||
            shiftManagement._id === shift._id
          ) {
            return {
              ...shiftManagement,
              startHour: hour,
              endHour: Number(hour) + 8,
              minutes,
            }
          } else {
            return shiftManagement
          }
        })
      })
      // setCustomShiftManagementState((prev) => {
      //   return [
      //     ...prev,
      //     { startHour: hour, endHour: Number(hour) + 8, minutes },
      //   ]
      // })
    }
  }

  const handleAddressChange = (index, value) => {
    setOfficeAddress((prevofficeAddress) => {
      return prevofficeAddress.map((address, addressIndex) => {
        if (index === addressIndex) {
          return { ...address, address: value }
        } else {
          return address
        }
      })
    })
  }

  const handleAddAddress = () => {
    setOfficeAddress((prev) => [...prev, { address: "" }])
  }

  const handleRemoveAddress = (index) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this location?"
    )
    if (isConfirmed) {
      setOfficeAddress((prev) =>
        prev.filter((address, addressIndex) => addressIndex !== index)
      )
    }
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    const numberOfWorkers = formData.numberOfWorkers.split("-")
    const minStaffCount = numberOfWorkers?.[0]
    const maxStaffCount = numberOfWorkers?.[1]

    const formDataWithImage = new FormData()

    formDataWithImage.append("minStaffCount", minStaffCount)
    formDataWithImage.append("maxStaffCount", maxStaffCount)
    formDataWithImage.append("logo", selectedImage)
    formDataWithImage.append("brandColor", color)
    formDataWithImage.append(
      "allottedBreakTimeInMilliseconds",
      +formData.breakDuration * 60000 // convert to milliseconds
    )
    defaultShiftManagementState
      .map((defaultShift) => {
        const startTime = new Date(Date.now())
        startTime.setHours(
          Number(defaultShift.startHour),
          Number(defaultShift.minutes)
        )
        return { ...defaultShift, startTime }
      })
      .forEach((defaultShift) => {
        formDataWithImage.append(
          "shiftManagements",
          JSON.stringify(defaultShift)
        )
      })
    customShiftManagementState
      .map((customShift) => {
        console.log(customShift)
        const startTime = new Date(Date.now())
        startTime.setHours(
          Number(customShift.startHour),
          Number(customShift.minutes)
        )
        return { ...customShift, startTime, type: "custom", name: "custom" }
      })
      .forEach((customShift) => {
        formDataWithImage.append(
          "shiftManagements",
          JSON.stringify(customShift)
        )
      })

    officeAddress.forEach((address) =>
      formDataWithImage.append("locations", JSON.stringify(address))
    )
    const response = await fetchData(
      `/organizations/${organization?._id}`,
      "put",
      formDataWithImage
    )

    if (response.statusCode === 200) {
      toast.success(response.message || "Successfully updated settings")
    } else {
      toast.error(response.message || "Something went wrong")
    }

    console.log(response, "this is response")
    updateOrganization(response.organization)
    updateShiftManagements(response.shiftManagements)
    updateLocations(response.locations)
  }

  return (
    <section>
      <div className="max-w-md bg-white px-3">
        <form onSubmit={handleFormSubmit}>
          <DisplayImageInput
            handleChange={handleFileChange}
            isImageRounded={false}
            labelText="Upload your logo"
          />
          <div className="mb-4 flex space-x-2">
            <div className="w-1/2">
              <label
                htmlFor="businessName"
                className="text-xs font-thin my-2 leading-4"
              >
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={organization?.name}
                placeholder={organization?.name}
                readOnly
                disabled
                className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433]"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="numberOfWorkers"
                className="text-xs font-thin my-2 leading-4"
              >
                Number of Workers
              </label>
              <select
                onChange={handleNumberOfWorkers}
                value={formData.numberOfWorkers}
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="" disabled selected>
                  Select number of workers
                </option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-150">51-150</option>
                <option value="151-499">151-499</option>
                <option value="500">500+</option>
              </select>
            </div>
          </div>

          <label
            htmlFor="officeAddress"
            className="text-xs font-thin my-2 leading-4"
          >
            Office Address
          </label>

          <AddLocationInputs
            officeAddress={officeAddress}
            handleAddressChange={handleAddressChange}
            handleAddAddress={handleAddAddress}
            handleRemoveAddress={handleRemoveAddress}
          />

          <ShiftsManagementForm
            shiftManagementEnabled={shiftManagementEnabled}
            setShiftManagementEnabled={setShiftManagementEnabled}
            handleShiftTimeChange={handleShiftTimeChange}
            deleteCustomShift={deleteCustomShift}
            addCustomShift={addCustomShift}
            defaultShiftManagements={defaultShiftManagementState}
            customShiftManagements={customShiftManagementState}
            setShiftManagement={setCustomShiftManagementState}
            timeChange={timeChange}
          />

          <div>
            <h1 className="m-2 text-sm font-semibold leading-5">
              Break Duration
            </h1>
            <div className="w-full">
              <label
                htmlFor="breakDuration"
                className="text-xs font-thin m-2 leading-4"
              >
                Minutes
              </label>
              <input
                type="number"
                id="breakDuration"
                name="breakDuration"
                value={formData.breakDuration}
                onChange={handleBreakDuration}
                className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433]"
                placeholder="30 minutes"
              />
            </div>
          </div>

          <div className="m-2">
            <ColorPicker color={color} setColor={setColor} />
          </div>

          <div className="flex justify-between items-center mx-2 my-4">
            <div>
              <p>Enable Geofencing</p>
            </div>
            <div>
              <label className="relative inline-flex items-end me-5 cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#7ED957] text-white rounded-md px-4 py-2 mt-4"
          >
            Save Changes
          </button>
        </form>
      </div>
    </section>
  )
}

export default General

function HomeSvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0.5 right-2 text-gray-400"
    >
      <path
        d="M15.65 21.4102C15.22 21.4102 14.79 21.3202 14.44 21.1502L9.19004 18.5202C8.89004 18.3702 8.30004 18.3802 8.01004 18.5502L5.65004 19.9002C4.63004 20.4802 3.58004 20.5602 2.79004 20.0902C1.99004 19.6302 1.54004 18.6902 1.54004 17.5102V7.79016C1.54004 6.88016 2.14004 5.85016 2.93004 5.40016L7.26004 2.92016C7.99004 2.50016 9.10004 2.47016 9.85004 2.85016L15.1 5.48016C15.4 5.63016 15.98 5.61016 16.28 5.45016L18.63 4.11016C19.65 3.53016 20.7 3.45016 21.49 3.92016C22.29 4.38016 22.74 5.32016 22.74 6.50016V16.2302C22.74 17.1402 22.14 18.1702 21.35 18.6202L17.02 21.1002C16.64 21.3002 16.14 21.4102 15.65 21.4102ZM8.64004 16.9202C9.07004 16.9202 9.50004 17.0102 9.85004 17.1802L15.1 19.8102C15.4 19.9602 15.98 19.9402 16.28 19.7802L20.61 17.3002C20.93 17.1202 21.24 16.5802 21.24 16.2202V6.49016C21.24 5.86016 21.06 5.39016 20.73 5.21016C20.41 5.03016 19.91 5.10016 19.37 5.41016L17.02 6.75016C16.29 7.17016 15.18 7.20016 14.43 6.82016L9.18004 4.19016C8.88004 4.04016 8.30004 4.06016 8.00004 4.22016L3.67004 6.70016C3.35004 6.88016 3.04004 7.42016 3.04004 7.79016V17.5202C3.04004 18.1502 3.22004 18.6202 3.54004 18.8002C3.86004 18.9902 4.36004 18.9102 4.91004 18.6002L7.26004 17.2602C7.65004 17.0302 8.15004 16.9202 8.64004 16.9202Z"
        fill="#706763"
      />
      <path
        d="M8.56006 17.75C8.15006 17.75 7.81006 17.41 7.81006 17V4C7.81006 3.59 8.15006 3.25 8.56006 3.25C8.97006 3.25 9.31006 3.59 9.31006 4V17C9.31006 17.41 8.97006 17.75 8.56006 17.75Z"
        fill="#706763"
      />
      <path
        d="M15.73 20.7501C15.32 20.7501 14.98 20.4101 14.98 20.0001V6.62012C14.98 6.21012 15.32 5.87012 15.73 5.87012C16.14 5.87012 16.48 6.21012 16.48 6.62012V20.0001C16.48 20.4101 16.14 20.7501 15.73 20.7501Z"
        fill="#706763"
      />
    </svg>
  )
}
