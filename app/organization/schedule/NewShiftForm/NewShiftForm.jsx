import { useCallback, useContext, useMemo, useState } from "react"
import { ShiftsManagementContext } from "../../../_providers/ShiftManagementContext"
import { OrganizationContext } from "../../../_providers/OrganizationProvider"
import FormLocationInput from "./FormLocationInput"
import FormRadio from "./FormRadio"
import ShiftDurationInputs from "./ShiftDurationInputs"
import FormInputAndLabel from "./FormInputAndLabel"
import { msToHourMinSecond } from "../../../_utils"
import toast from "react-hot-toast"
import useAxios from "../../../_hooks/useAxios"
import Spinner from "../../../_assets/svgs/Spinner"
import DropDown from "../../../_components/AppComps/Dropdown"
import { Option } from "../../../_components/AppComps/Select"

const getInitialState = () => ({
  location: null,
  schedule: "",
  startTime: null,
  endTime: null,
  note: "",
  isGeofencingEnabled: false,
  assignee: null,
  date: null,
})

export default function NewShiftForm({
  onCancel,
  newShiftDetails,
  handleNewShift,
  currentWeek,
}) {
  const fetchData = useAxios()
  const [loading, setLoading] = useState(false)
  const [shiftData, setShiftData] = useState(() => getInitialState())
  const { organization } = useContext(OrganizationContext)
  const { shiftManagements, customShiftManagements } = useContext(
    ShiftsManagementContext
  )
  const shiftDurationDate = useMemo(
    () => newShiftDetails?.shiftDate,
    [newShiftDetails?.shiftDate]
  )

  const updateDateOfShift = useCallback(
    (date) => {
      const update = {
        date,
        startTime: shiftData.startTime ? new Date(date) : shiftData.startTime,
        endTime: shiftData.endTime ? new Date(date) : shiftData.endTime,
      }
      if (update.startTime)
        update.startTime.setHours(
          shiftData.startTime.getHours(),
          shiftData.startTime.getMinutes(),
          shiftData.startTime.getSeconds(),
          shiftData.startTime.getMilliseconds()
        )
      if (update.endTime)
        update.endTime.setHours(
          shiftData.endTime.getHours(),
          shiftData.endTime.getMinutes(),
          shiftData.endTime.getSeconds(),
          shiftData.endTime.getMilliseconds()
        )
      setShiftData((prev) => ({ ...prev, ...update }))
    },
    [shiftData]
  )

  const handleScheduleSelection = useCallback(
    (selected) => {
      const shiftManagement = shiftManagements.find(
        (it) =>
          it._id === selected ||
          it.name.toLowerCase() === selected.toLowerCase()
      )
      if (!shiftManagement || (!shiftDurationDate && !shiftData.date))
        return null
      const startTime = new Date(shiftManagement.startTime)
      const dateOfShift = new Date(
        shiftDurationDate || new Date(shiftData.date)
      )
      startTime.setFullYear(
        dateOfShift.getFullYear(),
        dateOfShift.getMonth(),
        dateOfShift.getDate()
      )
      const endTime = new Date(shiftManagement.endTime)
      endTime.setFullYear(
        dateOfShift.getFullYear(),
        dateOfShift.getMonth(),
        dateOfShift.getDate()
      )
      setShiftData((prev) => ({
        ...prev,
        schedule: shiftManagement._id,
        startTime,
        endTime,
      }))
      return true
    },
    [shiftManagements, shiftDurationDate, shiftData.date]
  )

  const handleCancel = useCallback(() => {
    onCancel()
    setShiftData(getInitialState())
  }, [onCancel])

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      if (!shiftData.location)
        return toast.error("Please select a location for this shift")
      if (shiftData.date && !shiftData.assignee)
        return toast.error("Please select an employee for this shift")
      if (!shiftData.startTime || !shiftData.endTime)
        return toast.error("Please select a schedule for this shift")
      setLoading(true)
      const res = await fetchData(
        `/shifts/${organization?._id}/locations/${
          shiftData.location?._id
        }/users/${newShiftDetails?.assignee?._id || shiftData.assignee?._id}/${
          shiftData.schedule
        }`,
        "post",
        {
          date: shiftData.startTime,
          isGeofencingEnabled: shiftData.isGeofencingEnabled,
          note: shiftData.note,
        }
      )
      if (res.statusCode === 201) {
        toast.success("Shift created successfully")
        handleNewShift(res.shift)
        setShiftData(getInitialState())
        handleCancel()
      } else toast.error(res.message || "Something went wrong")
      setLoading(false)
    },
    [shiftData, fetchData, newShiftDetails?.assignee?._id, handleNewShift]
  )

  if (newShiftDetails === null) return null
  return (
    <section className="w-[95dvw] py-[24px] px-[24px] md:px-[40px] max-w-[576px] bg-white rounded-[16px]">
      <h3 className="text-center font-[600] text-[16px] text-[#1B1818] mb-[14px]">
        Create shift
      </h3>
      <form
        className="flex gap-y-[16px] flex-col items-start w-full"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 w-full gap-[16px]">
          <FormLocationInput
            currentLocation={shiftData.location}
            updateCurrentValue={(val) =>
              setShiftData((prev) => ({ ...prev, location: val }))
            }
          />
          <EmployeeInput
            selected={shiftData.assignee}
            handleSelect={(assignee) =>
              setShiftData((prev) => ({ ...prev, assignee }))
            }
            defaultAssignee={newShiftDetails.assignee}
          />
        </div>
        <div className="grid grid-cols-2 w-full gap-[16px]">
          <FormInputAndLabel
            label="Position"
            inputProps={{
              placeholder: "Choose position",
              readOnly: true,
              value: shiftData.assignee
                ? shiftData.assignee?.role?.name || ""
                : newShiftDetails.assignee?.role?.name || "",
            }}
          />
          <FormInputAndLabel
            label="Unpaid break"
            inputProps={{
              placeholder: "00:00",
              readOnly: true,
              value: msToHourMinSecond(
                organization?.breakDurationInMilliseconds
              ),
            }}
          />
        </div>
        <ShiftDurationInputs
          customShiftManagements={customShiftManagements}
          handleScheduleSelection={handleScheduleSelection}
          startTime={shiftData.startTime}
          endTime={shiftData.endTime}
          showDateInput={!newShiftDetails.shiftDate}
          handleDateSelection={updateDateOfShift}
          selectedDate={shiftData.date}
          currentWeek={currentWeek}
        />
        <div className="w-full">
          <FormInputAndLabel
            label="Note"
            inputProps={{
              placeholder: "This is a note...",
              value: shiftData.note,
              onChange: (e) =>
                setShiftData((prev) => ({ ...prev, note: e.target.value })),
            }}
          />
        </div>

        <FormRadio
          selected={shiftData.isGeofencingEnabled}
          label="Enable Geofencing"
          name={"enable geofencing"}
          handleChange={() =>
            setShiftData((prev) => ({
              ...prev,
              isGeofencingEnabled: !prev.isGeofencingEnabled,
            }))
          }
        />
        <div className="flex items-stretch gap-2 flex-col w-full -mt-[2px]">
          <button
            type="submit"
            className="bg-primary-500 disabled:bg-primary-100 disabled:text-primary-400 justify-center py-2 px-4 text-white rounded-lg disabled:opacity-70 flex gap-2 items-center"
            disabled={loading}
          >
            {loading && <Spinner />} {loading ? "Please wait..." : "Publish"}
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="text-[#1E1E1E] font-[500]"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  )
}

function EmployeeInput({ defaultAssignee, selected, handleSelect }) {
  const { employees } = useContext(OrganizationContext)

  const InputDisplay = useCallback(
    ({ value }) => (
      <FormInputAndLabel
        label="Select employee"
        inputProps={{
          placeholder: "Select employee",
          value,
          readOnly: true,
          role: defaultAssignee ? "select" : "input",
        }}
      />
    ),
    []
  )

  if (defaultAssignee)
    return (
      <InputDisplay
        value={
          `${defaultAssignee?.firstName || ""} ${
            defaultAssignee?.lastName || ""
          }`.trim() ||
          defaultAssignee?.email ||
          ""
        }
      />
    )
  return (
    <DropDown
      dropDownTrigger={
        <InputDisplay
          value={
            `${selected?.firstName || ""} ${selected?.lastName || ""}`.trim() ||
            selected?.email ||
            ""
          }
        />
      }
      dropdownContent={
        <>
          {employees.map((emp) => (
            <Option
              key={emp._id}
              onClick={() => handleSelect(emp)}
              isSelected={selected?._id === emp._id}
            >
              {`${emp.firstName || ""} ${emp.lastName || ""}`.trim() ||
                emp.email ||
                ""}
            </Option>
          ))}
        </>
      }
    />
  )
}
