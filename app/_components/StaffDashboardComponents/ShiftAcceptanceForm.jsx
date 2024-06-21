import { useCallback, useState } from "react"
import { formatDate, formatHourAsAmOrPm } from "../../_utils"
import { SubmitButton } from "../Auth/Inputs"
import FormInputAndLabel from "../../organization/schedule/NewShiftForm/FormInputAndLabel"
import useAxios from "../../_hooks/useAxios"
import toast from "react-hot-toast"
import MY_SHIFTS_URLS from "../../_urls/shiftsURLs"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { addNewShifts } from "../../_redux/shifts.slice"

export default function ShiftAcceptanceForm({ shift = {}, onFinish }) {
  const { organization } = useSelector((store) => store.organization)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState({
    accept: false,
    "drop-off": false,
  })
  const fetchData = useAxios()

  const handleAction = useCallback(
    async (action) => {
      if (
        loading.accept ||
        loading["drop-off"] ||
        (action !== "accept" && action !== "drop-off")
      )
        return
      if (action === "accept") setLoading({ accept: true, "drop-off": false })
      if (action === "drop-off") setLoading({ accept: false, "drop-off": true })
      const getUrl =
        action === "accept" ? MY_SHIFTS_URLS.accept : MY_SHIFTS_URLS.dropOff
      const res = await fetchData(getUrl(shift._id), "get")
      if (res.statusCode === 200) {
        dispatch(addNewShifts({ shifts: [res.shift] }))
        toast.success(
          res.message ||
            `shift ${action === "accept" ? "accepted" : "dropped off"}`
        )
        onFinish(action)
      } else toast.error(res.message || `Unable to ${action} shift.`)
      setLoading({ accept: false, "drop-off": false })
    },
    [shift, organization, loading, fetchData]
  )

  return (
    <div className="flex flex-col items-stretch gap-4">
      <h3 className="text-left font-[400] leading-[150%] text-[14px] text-[#303030]">
        Your shift details
      </h3>
      <FormInputAndLabel
        label="Full name"
        inputProps={{
          readOnly: true,
          value:
            shift.assignee?.fullName ||
            (shift.assignee?.firstName || " ") +
              " " +
              (shift.assignee?.lastName || "") ||
            "",
        }}
      />
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
      <FormInputAndLabel
        label="Location"
        inputProps={{
          readOnly: true,
          value: shift.location?.address || "",
        }}
      />
      {!shift.isAccepted && (
        <div className="flex items-center justify-start gap-[4px]">
          <SubmitButton
            style={{ padding: "6px 12px", maxWidth: "116px", fontSize: "14px" }}
            onClick={() => handleAction("accept")}
            isLoading={loading.accept}
            loadingText="Accepting"
            isDisabled={loading["drop-off"]}
          >
            Accept shift
          </SubmitButton>
          <SubmitButton
            style={{
              padding: "6px 12px",
              fontSize: "14px",
              background: "#091E420A",
              color: "#42526E",
              maxWidth: "109px",
            }}
            onClick={() => handleAction("drop-off")}
            loadingText="Dropping-off"
            isLoading={loading["drop-off"]}
            isDisabled={loading.accept}
          >
            Drop-off
          </SubmitButton>
        </div>
      )}
    </div>
  )
}
