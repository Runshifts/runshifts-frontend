import { ShiftRequest } from "./ShiftRequest"
import { CardSkeletonLoader } from "@/app/_components/Skeletons/CardSkeleton"

export default function ShiftRequestsSection({ shiftRequests = [], loading }) {
  return (
    <section className="w-full">
      <h1 className="font-[600] text-[#292D32] text-4 leading-normal mb-[8px]">
        Shift Requests
      </h1>
      <h1 className="font-[600] text-[#36322F]/70 text-[14px] leading-[20px] mb-[8px]">
        Incoming Requests
      </h1>
      {loading ? (
        <CardSkeletonLoader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 w-full">
          {shiftRequests.map((shiftReq) => (
            <ShiftRequest key={shiftReq._id} shiftRequest={shiftReq} />
          ))}
        </div>
      )}
    </section>
  )
}
