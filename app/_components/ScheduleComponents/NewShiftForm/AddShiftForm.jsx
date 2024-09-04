import { useCallback, useMemo, useState } from "react"
import FormLocationInput from "./FormLocationInput"
import FormRadio from "./FormRadio"
import ShiftDurationInputs from "./ShiftDurationInputs"
import FormInputAndLabel from "./FormInputAndLabel"
import { msToHourMinSecond } from "../../../_utils"
import toast from "react-hot-toast"
import useAxios from "../../../_hooks/useAxios"
import Spinner from "../../../_assets/svgs/Spinner"
import Modal from "../../../_components/AppComps/Modal"
import { useSelector } from "react-redux"
import EmployeeInput from "./EmployeeInput"
import PositionInput from "./PositionInput"

const getInitialState = (initialState = {}) => ({
  location: null,
  schedule: "",
  startTime: null,
  endTime: null,
  note: "",
  isGeofencingEnabled: false,
  assignees: [],
  date: null,
  ...initialState,
})

export default function AddShiftFormModal({
  show = false,
  newShiftDetails,
  onCancel = () => {},
  handleNewShift,
  currentWeek,
}) {
  return (
    <Modal open={show} zIndex={2000}>
      <AddShiftForm
        newShiftDetails={newShiftDetails}
        onCancel={onCancel}
        handleNewShift={handleNewShift}
        currentWeek={currentWeek}
      />
    </Modal>
  )
}

function AddShiftForm({
  onCancel,
  newShiftDetails,
  handleNewShift,
  currentWeek,
}) {
  const fetchData = useAxios()
  const [loading, setLoading] = useState(false)
  const [shiftData, setShiftData] = useState(() =>
    getInitialState({ location: newShiftDetails?.assignee?.location })
  )
  const { organization, employees, shiftManagements } = useSelector(
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
  const shiftDurationDate = useMemo(
    () => newShiftDetails?.shiftDate,
    [newShiftDetails?.shiftDate]
  )

  const isMultipleCreateMode = useMemo(
    () => newShiftDetails?.createMultiple === true,
    [newShiftDetails?.createMultiple]
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
    (selectedShiftManagement) => {
      if (!selectedShiftManagement || (!shiftDurationDate && !shiftData.date))
        return null
      const startTime = new Date(selectedShiftManagement.startTime)
      const dateOfShift = new Date(
        shiftDurationDate || new Date(shiftData.date)
      )
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
      setShiftData((prev) => ({
        ...prev,
        schedule: selectedShiftManagement._id,
        startTime,
        endTime,
      }))
      return true
    },
    [shiftDurationDate, shiftData.date]
  )

  const handleCancel = useCallback(() => {
    onCancel()
    setShiftData(getInitialState())
  }, [onCancel])

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      let requestBody = { ...shiftData }
      if (!requestBody.location)
        return toast.error("Please select a location for this shift")
      if (isMultipleCreateMode && requestBody.assignees.length === 0) {
        requestBody.assignees = null
        requestBody.numberOfShiftsToCreate = employees.length || 7
      }
      if (!shiftData.startTime || !shiftData.endTime)
        return toast.error("Please select a schedule for this shift")
      setLoading(true)
      const url =
        isMultipleCreateMode > 0
          ? `/shifts/${organization?._id}/locations/${shiftData.location?._id}/${shiftData.schedule}`
          : `/shifts/${organization?._id}/locations/${shiftData.location?._id}/users/${newShiftDetails?.assignee?._id}/${shiftData.schedule}`
      const res = await fetchData(url, "post", {
        date: requestBody.startTime,
        isGeofencingEnabled: shiftData.isGeofencingEnabled,
        note: requestBody.note,
        users: requestBody.assignees,
        numberOfShiftsToCreate: requestBody.numberOfShiftsToCreate,
      })
      if (res.statusCode === 201) {
        toast.success(res.message || "Shift(s) created successfully")
        res.shift && handleNewShift(res.shift)
        setShiftData(getInitialState())
        handleCancel()
      } else toast.error(res.message || "Something went wrong")
      setLoading(false)
    },
    [
      handleCancel,
      shiftData,
      fetchData,
      newShiftDetails?.assignee?._id,
      handleNewShift,
      isMultipleCreateMode,
      employees,
      organization?._id,
    ]
  )

  const handleSelectEmployee = useCallback(
    (assignee) =>
      setShiftData((prev) => ({
        ...prev,
        assignees: [...prev.assignees, assignee],
      })),
    []
  )

  const handleRemoveEmployee = useCallback(
    (assignee) =>
      setShiftData((prev) => ({
        ...prev,
        assignees: shiftData.assignees.filter((it) => it._id !== assignee._id),
      })),
    [shiftData.assignees]
  )

  const [selectedPositions, setSelectedPositions] = useState([])

  const handleSelectPosition = useCallback(
    (position) => setSelectedPositions((prev) => [...prev, position]),
    []
  )

  const handleRemovePosition = useCallback(
    (position) =>
      setSelectedPositions((prev) =>
        prev.filter((it) => it._id !== position._id)
      ),
    []
  )
  if (newShiftDetails === null) return null
  return (
    <section className="w-[95dvw] py-[24px] px-[24px] md:px-[40px] max-w-[576px] bg-white rounded-[16px]">
      <h3 className="text-center font-[600] text-[16px] text-[#1B1818] mb-[14px]">
        {isMultipleCreateMode ? "Create" : "Add"} shift
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
            selectedUsers={shiftData.assignees}
            handleSelect={handleSelectEmployee}
            deselectUser={handleRemoveEmployee}
            defaultAssignee={newShiftDetails.assignee}
            selectedPositions={selectedPositions}
          />
        </div>
        <div className="grid grid-cols-2 w-full gap-[16px]">
          <PositionInput
            selectedPositions={selectedPositions}
            handleSelect={handleSelectPosition}
            deselectPosition={handleRemovePosition}
            defaultAssignee={newShiftDetails.assignee}
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
        <ShiftDurationInputs
          customShiftManagements={customShiftManagements}
          defaultShiftManageMents={defaultShiftManageMents}
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
          disabled={!shiftData.location}
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
