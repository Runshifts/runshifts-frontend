import { useCallback, useContext, useMemo, useState } from "react"
import { formatDate, formatHourAsAmOrPm } from "../../_utils"
import { SubmitButton } from "../Auth/Inputs"
import FormInputAndLabel from "../ScheduleComponents/NewShiftForm/FormInputAndLabel"
import useAxios from "../../_hooks/useAxios"
import toast from "react-hot-toast"
import MY_SHIFTS_URLS from "../../_urls/shiftsURLs"
// import { EmployeeDashboardContext } from "../../_providers/Employee/EmployeeDashboardContext"
import DropDown from "../AppComps/Dropdown"
import { Option } from "../AppComps/Select"
import { UserContext } from "../../_providers/UserProvider"
import { useSelector } from "react-redux"
import useManageFetchWeeklySchedule from "../../_hooks/useManageFetchWeeklySchedule"
import { useDispatch } from "react-redux"
import { addNewSwapRequest } from "../../_redux/shiftsAndOvertimesRequests.slice"
const dateFormatOptions = {
  day: "numeric",
  weekday: "long",
  month: "long",
}
export default function ShiftSwapForm({
  showHeader,
  centerButton,
  currentShift,
  idOfUserToShowShiftOptions,
  employee,
}) {
  const { user } = useContext(UserContext)
  // const { updateAllSwapRequests } = useContext(EmployeeDashboardContext)
  const dispatch = useDispatch()
  const { currentWeek } = useSelector((store) => store.shiftsAndOvertimes)
  const { listOfShiftsInCurrentWeek } = useManageFetchWeeklySchedule()
  const { employees } = useSelector((store) => store.organization)
  const [loading, setLoading] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState(employee || null)
  const [selectedShift, setSelectedShift] = useState(null)

  const employeeOptions = useMemo(
    () => employees.filter((employee) => employee._id !== user?._id),
    [employees, user]
  )
  const shiftsOptions = useMemo(
    () =>
      listOfShiftsInCurrentWeek.filter(
        (shift) =>
          shift.isDroppedOff === false &&
          currentWeek.start.getTime() <= new Date(shift.startTime).getTime() &&
          new Date().getTime() <= new Date(shift.startTime).getTime() &&
          currentShift?._id !== shift._id &&
          (idOfUserToShowShiftOptions
            ? shift.assignee?._id === idOfUserToShowShiftOptions
            : shift.assignee?._id === selectedEmployee?._id)
      ),
    [
      listOfShiftsInCurrentWeek,
      selectedEmployee,
      idOfUserToShowShiftOptions,
      currentShift,
    ]
  )
  const fetchData = useAxios()

  const submitSwapRequest = useCallback(
    async (e) => {
      e.preventDefault()
      let receiver, senderShift, receiverShift
      if (employee) {
        receiver = employee
        senderShift = selectedShift
        receiverShift = currentShift
        if (!receiver || !senderShift || !receiverShift)
          return toast.error("All fields are required!")
      } else if (!employee) {
        receiver = selectedEmployee
        senderShift = currentShift
        receiverShift = selectedShift
        if (!receiver || !senderShift || !receiverShift)
          return toast.error("All fields are required!")
      }
      setLoading(true)
      const body = {
        receiverId: receiver?._id,
        sender: senderShift?.assignee?.firstName,
        receiverShiftId: receiverShift?._id,
      }
      const res = await fetchData(
        MY_SHIFTS_URLS.requestSwap(senderShift?._id),
        "post",
        body
      )
      if (res.statusCode === 200) {
        toast.success(res.message || "Swap request sent!")
        dispatch(addNewSwapRequest(res.request))
      } else toast.error(res.message || "Unable to send swap request")
      setLoading(false)
    },
    [
      dispatch,
      employee,
      selectedEmployee,
      currentShift,
      selectedShift,
      fetchData,
    ]
  )

  return (
    <form
      onSubmit={submitSwapRequest}
      className="flex flex-col items-stretch gap-4"
    >
      {showHeader && (
        <h3 className="text-left font-[400] leading-[150%] text-[14px] text-[#303030]">
          Swap shift
        </h3>
      )}
      <DropDown
        disabled={Boolean(employee)}
        dropDownTrigger={
          <FormInputAndLabel
            label="Full name"
            inputProps={{
              readOnly: true,
              value:
                selectedEmployee?.firstName || selectedEmployee?.fullName || "",
              placeholder: "Co-worker name",
            }}
          />
        }
        dropdownContent={
          <>
            {employeeOptions.map((employee) => (
              <Option
                onClick={() => setSelectedEmployee(employee)}
                key={employee?._id}
                isSelected={selectedEmployee?._id === employee._id}
              >
                {employee.fullName ||
                  employee.firstName ||
                  employee.lastName ||
                  employee.email}
              </Option>
            ))}
          </>
        }
      />

      <div className="flex flex-col gap-[8px]">
        <h3 className="modal-subheading w-full">Current shift</h3>
        <div className="flex gap-4">
          <FormInputAndLabel
            label="Day"
            inputProps={{
              readOnly: true,
              disabled: true,
              value: formatDate(
                new Date(currentShift?.startTime),
                dateFormatOptions
              ),
            }}
          />
          <FormInputAndLabel
            label="Duration"
            inputProps={{
              readOnly: true,
              disabled: true,
              value: `${formatHourAsAmOrPm(
                new Date(currentShift?.startTime).getHours()
              )}-${formatHourAsAmOrPm(
                new Date(currentShift?.endTime).getHours()
              )}`,
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <h3 className="modal-subheading w-full">Select day to swap</h3>
        <div className="flex gap-4">
          <DropDown
            dropDownTrigger={
              <FormInputAndLabel
                label="Day"
                inputProps={{
                  readOnly: true,
                  value: selectedShift
                    ? formatDate(
                        new Date(selectedShift?.startTime),
                        dateFormatOptions
                      )
                    : "--",
                }}
              />
            }
            dropdownContent={
              <>
                {shiftsOptions.map((shift) => (
                  <Option
                    key={shift._id}
                    onClick={() => setSelectedShift(shift)}
                    isSelected={selectedEmployee?._id === shift._id}
                  >
                    {shift.startTime
                      ? formatDate(new Date(shift.startTime), dateFormatOptions)
                      : "--"}{" "}
                    &mdash; {shift.schedule?.name}
                  </Option>
                ))}
              </>
            }
          />
          <FormInputAndLabel
            label="Duration"
            inputProps={{
              readOnly: true,
              value: `${
                (selectedShift &&
                  formatHourAsAmOrPm(
                    new Date(selectedShift?.startTime).getHours()
                  )) ||
                ""
              }-${
                (selectedShift &&
                  formatHourAsAmOrPm(
                    new Date(selectedShift?.endTime).getHours()
                  )) ||
                "-"
              }`,
            }}
          />
        </div>
      </div>

      <SubmitButton
        isLoading={loading}
        style={{
          padding: "6px 12px",
          maxWidth: loading ? "150px" : "129px",
          fontSize: "14px",
          margin: `0 ${centerButton ? "auto" : ""}`,
        }}
        loadingText="Sending request.."
        type="submit"
      >
        Request swap
      </SubmitButton>
    </form>
  )
}
