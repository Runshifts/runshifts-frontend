import { useCallback, useState } from "react"
import { formatDate, formatHourAsAmOrPm } from "../../_utils"
import { SubmitButton } from "../Auth/Inputs"
import FormInputAndLabel from "../ScheduleComponents/NewShiftForm/FormInputAndLabel"
import useAxios from "../../_hooks/useAxios"
import toast from "react-hot-toast"
import MY_SHIFTS_URLS from "../../_urls/shiftsURLs"
import DropDown from "../AppComps/Dropdown"
import { Option } from "../AppComps/Select"
import { useSelector } from "react-redux"
import { addNewShiftRequest } from "../../_redux/shiftsAndOvertimesRequests.slice"
import { useDispatch } from "react-redux"

export default function ShiftApplicationForm({
  shift = {},
  onFinish,
  isOvertimeApplication = false,
  requestableOvertimeShifts = [],
}) {
  const { organization } = useSelector((store) => store.organization)
  const [selectedOvertimeShift, setSelectedOvertimeShift] = useState(null)
  const [loading, setLoading] = useState(false)
  const fetchData = useAxios()
  const dispatch = useDispatch()

  const handleShiftApplication = useCallback(
    async (shift) => {
      if (loading || !shift) return
      setLoading(true)
      const url = isOvertimeApplication
        ? MY_SHIFTS_URLS.requestOvertime(organization?._id)
        : MY_SHIFTS_URLS.apply(organization?._id, shift._id)
      const res = await fetchData(url, "post", { shiftId: shift?._id })
      if (res.statusCode === 201) {
        dispatch(addNewShiftRequest(res.shiftApplication))
        toast.success(res.message || "Application sent!")
        onFinish()
      } else {
        if (res.message) toast.error(res.message)
        else
          toast.error(
            isOvertimeApplication
              ? "Unable to request overtime"
              : "Unable to apply for shift."
          )
      }
      setLoading(false)
    },
    [organization, loading, fetchData, isOvertimeApplication, shift, dispatch]
  )

  const getShiftDayInput = useCallback((shift) => {
    return (
      <FormInputAndLabel
        label="Day"
        inputProps={{
          readOnly: true,
          value: shift
            ? formatDate(new Date(shift.startTime), {
                day: "numeric",
                weekday: "long",
                month: "long",
              })
            : "",
        }}
      />
    )
  }, [])

  const getShiftTimeInput = useCallback((shift) => {
    return (
      <FormInputAndLabel
        label="Duration"
        inputProps={{
          readOnly: true,
          value: shift
            ? `${formatHourAsAmOrPm(
                new Date(shift?.startTime).getHours()
              )}-${formatHourAsAmOrPm(new Date(shift?.endTime).getHours())}`
            : "",
        }}
      />
    )
  }, [])

  return (
    <div className="flex flex-col items-center gap-[14px] p-4 bg-white rounded-[16px] max-w-[288px]">
      <h3 className="text-center font-[600] leading-[125%] text-[16px] text-[#1B1818]">
        Apply for shift
      </h3>
      <div className="flex gap-4">
        {isOvertimeApplication ? (
          <DropDown
            dropDownTrigger={<>{getShiftDayInput(selectedOvertimeShift)}</>}
            dropdownContent={
              <ul>
                {requestableOvertimeShifts.map((overtimeShift) => (
                  <Option
                    key={overtimeShift._id}
                    onClick={() => setSelectedOvertimeShift(overtimeShift)}
                  >
                    {formatDate(new Date(overtimeShift.startTime), {
                      day: "numeric",
                      weekday: "long",
                      month: "long",
                    })}
                  </Option>
                ))}
              </ul>
            }
          />
        ) : (
          <>{getShiftDayInput(shift)}</>
        )}
        {isOvertimeApplication
          ? getShiftTimeInput(selectedOvertimeShift)
          : getShiftTimeInput(shift)}
      </div>
      <SubmitButton
        style={{ padding: "6px 12px", maxWidth: "83px", fontSize: "14px" }}
        onClick={() =>
          handleShiftApplication(
            isOvertimeApplication ? selectedOvertimeShift : shift
          )
        }
        isLoading={loading}
        loadingText="Applying"
      >
        Apply
      </SubmitButton>
    </div>
  )
}
