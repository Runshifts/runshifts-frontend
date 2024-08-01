"use client"
import React, { useState, useEffect, useCallback } from "react"
import ColorPicker from "./ColorPicker"
import useAxios from "../../_hooks/useAxios"
import AddLocationInputs from "./AddLocationInputs"
import toast from "react-hot-toast"
import ShiftsManagementForm from "./ShiftsManagements"
import { useColor } from "react-color-palette"
import { useSelector } from "react-redux"
import DisplayImageInput from "../../_components/ProfileSettingsComponents/DisplayPictureInput"
import { useDispatch } from "react-redux"
import {
  updateLocations,
  updateOrganization,
  updateShiftManagements,
} from "../../_redux/organization.slice"

const GeneralSettings = () => {
  const dispatch = useDispatch()
  const fetchData = useAxios()
  const { locations, organization, shiftManagements } = useSelector(
    (store) => store.organization
  )

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
    setDefaultShiftManagementState(
      defaultShiftManagements.map((defaultShiftManagement) => {
        const startTime = new Date(defaultShiftManagement.startTime)
        let endHour = startTime.getHours() + 8
        if (endHour >= 24) endHour = endHour - 24
        return {
          ...defaultShiftManagement,
          startHour: startTime.getHours(),
          endHour,
          minutes: startTime.getMinutes(),
        }
      })
    )
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

  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData))
  }, [formData])

  const [color, setColor] = useColor("hex", "#121212")

  const handleFileChange = (event) => {
    setSelectedImage(event.target.files[0])
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
    if (shift.type === "custom") {
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

  const handleFormSubmit = useCallback(
    async (event) => {
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
        dispatch(updateOrganization(response.organization))
        dispatch(updateShiftManagements(response.shiftManagements))
        dispatch(updateLocations(response.locations))
      } else {
        toast.error(response.message || "Something went wrong")
      }
    },
    [
      organization,
      dispatch,
      defaultShiftManagementState,
      formData,
      selectedImage,
      officeAddress
    ]
  )

  return (
    <section>
      <div className="max-w-md bg-white px-3">
        <form onSubmit={handleFormSubmit}>
          <DisplayImageInput
            handleChange={handleFileChange}
            isImageRounded={false}
            uploadedImg={organization?.logo?.secure_url}
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
                <option value="">Select number of workers</option>
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

export default GeneralSettings
