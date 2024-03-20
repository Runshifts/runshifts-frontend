import { useCallback, useContext, useState } from "react"
import { formatDate, formatHourAsAmOrPm } from "../../_utils"
import { SubmitButton } from "../../_components/Auth/Inputs"
import FormInputAndLabel from "../../organization/schedule/NewShiftForm/FormInputAndLabel"
import useAxios from "../../_hooks/useAxios"
import toast from "react-hot-toast"
import MY_SHIFTS_URLS from "../../_urls/myShiftsURLs"
import { OrganizationContext } from "../../_providers/OrganizationProvider"

export default function ShiftApplicationForm({ shift = {}, onFinish }) {
  const { organization } = useContext(OrganizationContext)
  const [loading, setLoading] = useState(false)
  const fetchData = useAxios()

  const handleShiftApplication = useCallback(async () => {
    if (loading) return
    setLoading(true)
    const res = await fetchData(
      MY_SHIFTS_URLS.apply(organization?._id, shift._id),"post"
    )
    console.log(res)
    if (res.statusCode === 201) {
      toast.success(res.message || "Application sent!")
      onFinish()
    } else toast.error(res.message || "Unable to apply for shift.")
    setLoading(false)
  }, [shift, organization, loading])

  return (
    <div className="flex flex-col items-center gap-[14px] p-4 bg-white rounded-[16px] max-w-[288px]">
      <h3 className="text-center font-[600] leading-[125%] text-[16px] text-[#1B1818]">
        Apply for shift
      </h3>
      <div className="flex gap-4">
        <FormInputAndLabel
          label="Day"
          inputProps={{
            readOnly: true,
            value: formatDate(new Date(shift.startTime), {
              day: "numeric",
              weekday: "long",
              month: "long",
            }),
          }}
        />
        <FormInputAndLabel
          label="Duration"
          inputProps={{
            readOnly: true,
            value: `${formatHourAsAmOrPm(
              new Date(shift.startTime).getHours()
            )}-${formatHourAsAmOrPm(new Date(shift.endTime).getHours())}`,
          }}
        />
      </div>
      <SubmitButton
        style={{ padding: "6px 12px", maxWidth: "83px", fontSize: "14px" }}
        onClick={handleShiftApplication}
        isLoading={loading}
        loadingText="Applying"
      >
        Apply
      </SubmitButton>
    </div>
  )
}
