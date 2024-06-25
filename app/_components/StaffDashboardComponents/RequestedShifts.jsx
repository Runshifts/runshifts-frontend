import RequestedShiftCard from "./RequestedShiftCard"
import { useContext } from "react"
import { UserContext } from "../../_providers/UserProvider"
import { useSelector } from "react-redux"

function RequestedShifts() {
  const { user } = useContext(UserContext)
  const { shiftRequests } = useSelector(
    (store) => store.shiftsAndOvertimeRequests
  )

  return (
    <div className="bg-white">
      <h2 className="font-semibold text-lg text-[#292D32] py-2 ">
        Requested shifts
      </h2>

      <div className="flex flex-wrap gap-[8px]">
        {shiftRequests.map((shiftRequest) => (
          <RequestedShiftCard
            key={shiftRequest._id}
            shiftRequest={shiftRequest}
          />
        ))}
      </div>
    </div>
  )
}

export default RequestedShifts
