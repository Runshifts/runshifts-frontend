import RequestedShiftCard from "./RequestedShiftCard"
import { useContext, useMemo } from "react"
import { EmployeeDashboardContext } from "../../_providers/Employee/EmployeeDashboardContext"
import { UserContext } from "../../_providers/UserProvider"
import { ShiftAndOvertimeRequestsContext } from "../../_providers/Employer/ShiftAndOvertimeRequestsProvider"

function RequestedShifts() {
  const { user } = useContext(UserContext)
  const { shiftRequests } = useContext(ShiftAndOvertimeRequestsContext)

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
