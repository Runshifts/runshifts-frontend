import { useCallback, useState } from "react"
import useAxios from "../../_hooks/useAxios"
import MY_SHIFTS_URLS from "../../_urls/shiftsURLs"
import toast from "react-hot-toast"
import Spinner from "../../_assets/svgs/Spinner"

export default function AcceptAllShiftsButton({
  currentWeek,
  organizationId,
  isDisabled,
  handleSuccess,
}) {
  const [loading, setLoading] = useState(false)
  const fetchData = useAxios()
  const handleAcceptAllShifts = useCallback(async () => {
    setLoading(true)
    const res = await fetchData(
      MY_SHIFTS_URLS.acceptAll(organizationId),
      "put",
      {
        fromDate: currentWeek.start,
        toDate: currentWeek.end,
      }
    )
    if (res.statusCode === 200) {
      handleSuccess()
      toast.success(res.message || "Shifts accepted successfully")
    } else toast.error(res.message || "Unable to accept all shifts")
    setLoading(false)
  }, [currentWeek, organizationId, handleSuccess])
  return (
    <button
      onClick={handleAcceptAllShifts}
      disabled={isDisabled || loading}
      className="px-[12px] py-[6px] disabled:opacity-[.5] disabled:cursor-not-allowed first-letter:capitalize flex items-center gap-[4px] rounded-sm bg-primary-600 text-white leading-[20px] font-[500]"
    >
      {loading ? (
        <>
          <Spinner /> Accepting...
        </>
      ) : (
        "Accept all shifts"
      )}
    </button>
  )
}
