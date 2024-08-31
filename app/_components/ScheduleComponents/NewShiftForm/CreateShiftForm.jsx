import Modal from "../../../_components/AppComps/Modal"
import FormLocationInput from "./FormLocationInput"
import ShiftDurationInputs from "./ShiftDurationInputs"
import FormInputAndLabel from "./FormInputAndLabel"
import FormRadio from "./FormRadio"
import EmployeeInput from "./EmployeeInput"
import DateSelectInput from "./DateSelectInput"
import Spinner from "../../../_assets/svgs/Spinner"
import { useCallback, useMemo, useState } from "react"
import { getWeekThatDateFallsIn, msToHourMinSecond } from "../../../_utils"
import { useSelector } from "react-redux"
import toast from "react-hot-toast"
import useAxios from "../../../_hooks/useAxios"

export default function CreateShiftFormModal({
  show = false,
  onCancel = () => {},
  currentWeek,
}) {
  return (
    <Modal open={show} zIndex={2000}>
      <CreateShiftForm onCancel={onCancel} currentWeek={currentWeek} />
    </Modal>
  )
}

export function CreateShiftForm({ onCancel }) {
  const fetchData = useAxios()
  const [location, setLocation] = useState(null)
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const [selectedShiftManagement, setSelectedShiftManagement] = useState(null)
  const [selectedDates, setSelectedDates] = useState([
    new Date(Date.now()).toDateString(),
  ])
  const [assignees, setAssignees] = useState([])
  const [note, setNote] = useState("")
  const [isGeofencingEnabled, setIsGeofencingEnabled] = useState(false)

  const [loading, setLoading] = useState(false)

  const { organization, shiftManagements, employees } = useSelector(
    (store) => store.organization
  )
  const defaultShiftManageMents = useMemo(
    () =>
      shiftManagements.default ? Object.values(shiftManagements.default) : [],
    [shiftManagements]
  )
  const customShiftManagements = useMemo(
    () => [...shiftManagements.custom],
    [shiftManagements]
  )
  const handleSelectEmployee = useCallback((assignee) => {
    setAssignees((prev) => [...prev, assignee])
  }, [])
  const handleRemoveEmployee = useCallback((assignee) => {
    setAssignees((prev) => prev.filter((it) => it._id !== assignee._id))
  }, [])

  const handleDateChange = useCallback((idx, val) => {
    let previousSelectedDates = []
    const newDate = new Date(val).toDateString()
    setSelectedDates((prev) => {
      previousSelectedDates = [...prev]
      if (!prev.includes(newDate))
        return prev.map((date, dateIdx) => (dateIdx === idx ? newDate : date))
      else {
        return prev
      }
    })
    if (previousSelectedDates.includes(newDate))
      toast.error(`The date ${newDate} has already been selected`)
  }, [])
  const handleRemoveDate = useCallback((idx) => {
    setSelectedDates((prev) => prev.filter((_, dateIdx) => dateIdx !== idx))
  }, [])

  const handleScheduleSelection = useCallback(
    (selectedShiftManagement) => {
      if (!selectedShiftManagement || !selectedDates[0]) return null
      const startTime = new Date(selectedShiftManagement.startTime)
      const dateOfShift = new Date(selectedDates[0])
      startTime.setFullYear(
        dateOfShift.getFullYear(),
        dateOfShift.getMonth(),
        dateOfShift.getDate()
      )
      const endTime = new Date(selectedShiftManagement.startTime)
      endTime.setHours(
        endTime.getHours() + selectedShiftManagement.numberOfHours,
        endTime.getMinutes(),
        endTime.getSeconds(),
        endTime.getMilliseconds()
      )
      endTime.setFullYear(
        dateOfShift.getFullYear(),
        dateOfShift.getMonth(),
        dateOfShift.getDate()
      )
      setStartTime(startTime)
      setEndTime(endTime)
      setSelectedShiftManagement(selectedShiftManagement._id)
      return true
    },
    [shiftManagements, selectedDates]
  )
  const resetForm = useCallback(() => {
    setSelectedDates([new Date(Date.now()).toDateString()])
    setAssignees([])
    setEndTime(null)
    setStartTime(null)
    setIsGeofencingEnabled(false)
    setLocation(null)
    setSelectedShiftManagement(null)
    setNote("")
  }, [])
  const handleCancel = useCallback(() => {
    if (!loading) {
      resetForm()
      onCancel()
    }
  }, [loading, onCancel])
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      if (selectedDates.some((date) => !date))
        return toast.error(
          "Please fill in all the date fields or delete empty ones"
        )
      if (!location) return toast.error("Please select a location")
      if (!startTime || !endTime || !selectedShiftManagement)
        return toast.error("Please select a schedule")
      const body = {
        assignees: assignees.map((it) => it._id),
        dates: selectedDates,
        isGeofencingEnabled,
        note,
      }
      try {
        setLoading(true)
        const res = await fetchData(
          `/shifts/${organization?._id}/locations/${location._id}/${selectedShiftManagement}`,
          "post",
          body
        )
        if (res.statusCode === 201) {
          toast.success(res.message)
          setLoading(false)
          return handleCancel()
        } else
          toast.error(
            res.message || "Unable to create shifts, Something went wrong."
          )
      } catch (err) {
        toast.error(
          err.message || "Unable to create shifts, Something went wrong."
        )
      }
      setLoading(false)
    },
    [
      assignees,
      startTime,
      endTime,
      selectedDates,
      selectedShiftManagement,
      location,
      isGeofencingEnabled,
      note,
      handleCancel,
      organization,
    ]
  )

  return (
    <>
      <section className="w-[95dvw] overflow-auto max-h-[90dvh] py-[24px] px-[24px] md:px-[40px] max-w-[576px] bg-white rounded-[16px]">
        <h3 className="text-center font-[600] text-[16px] text-[#1B1818] mb-[14px]">
          Create shift
        </h3>
        <form
          className="flex gap-y-[16px] flex-col items-start w-full"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-2 w-full gap-[16px]">
            <div className="w-full relative z-[20]">
              <FormLocationInput
                currentLocation={location || {}}
                updateCurrentValue={(val) => setLocation(val)}
              />
            </div>
            <EmployeeInput
              selectedUsers={assignees}
              handleSelect={handleSelectEmployee}
              deselectUser={handleRemoveEmployee}
              selectedPositions={[]}
            />
          </div>
          {selectedDates.map((date, idx) => (
            <div key={date + idx} className="w-full">
              <div className="grid grid-cols-2 w-full gap-[16px]">
                <DateSelectInput
                  value={date}
                  handleSelectDate={(value) => handleDateChange(idx, value)}
                />
                <FormInputAndLabel
                  label="Unpaid break"
                  inputProps={{
                    placeholder: "00:00",
                    readOnly: true,
                    value: msToHourMinSecond(
                      organization?.allottedBreakTimeInMilliseconds
                    ),
                  }}
                />
              </div>
              {idx > 0 && (
                <button
                  type="button"
                  onClick={() => handleRemoveDate(idx)}
                  className="w-fit mt-[10px] block ml-auto text-[#B22A09] underline text-[14px] font-[400] leading-[142%]"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => setSelectedDates((prev) => [...prev, ""])}
            className="text-[#4689FF] underline text-[14px] font-[400] leading-[142%]"
          >
            Add another date
          </button>
          <ShiftDurationInputs
            customShiftManagements={customShiftManagements}
            defaultShiftManageMents={defaultShiftManageMents}
            handleScheduleSelection={handleScheduleSelection}
            startTime={startTime}
            endTime={endTime}
            showDateInput={!selectedDates[0]}
            selectedDate={new Date(selectedDates[0])}
            currentWeek={{ start: new Date(), end: new Date() }}
          />
          <div className="w-full">
            <FormInputAndLabel
              label="Note"
              inputProps={{
                placeholder: "This is a note...",
                value: note,
                onChange: (e) => setNote(e.target.value),
              }}
            />
          </div>

          <FormRadio
            selected={isGeofencingEnabled}
            label="Enable Geofencing"
            name={"enable geofencing"}
            disabled={!location}
            handleChange={() => setIsGeofencingEnabled((prev) => !prev)}
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
    </>
  )
}
