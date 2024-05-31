import React from "react"
import ReportCard from "./ReportCard"
import useCountdown from "../../_hooks/useCountDown"

const RightToWorkDiplay = ({ employee }) => {
  console.log(employee)
  const rightToWorkExpiryDate = new Date(employee.rightToWorkExpiry)
  const timeLeftInMilliseconds = rightToWorkExpiryDate.getTime() - Date.now()
  const { years, months, days, hours } = useCountdown(
    employee.rightToWorkExpiry ? rightToWorkExpiryDate : Date.now()
  )

  return (
    <ReportCard heading="RIGHT TO WORK">
      <div className="flex flex-col items-center justify-center gap-[5px]">
        <p className="text-gray-600 text-center text-[12px] font-normal leading-[16px] my-2">
          Remaining Time
        </p>
        <div className="bg-[#354258] rounded-xl p-6">
          {timeLeftInMilliseconds > 0 ? (
            <div className="flex gap-6 items-center justify-between">
              <RightToWorkText value={years} title="Years" />
              <RightToWorkText value={months} title="Months" />
              <RightToWorkText value={days} title="Days" />
              <RightToWorkText value={hours} title="Hours" />
            </div>
          ) : (
            <p className="text-[24px] text-white font-normal leading-[32px]">Expired</p>
          )}
        </div>
      </div>
    </ReportCard>
  )
}

export default RightToWorkDiplay

function RightToWorkText({ title, value }) {
  return (
    <div className="text-white text-center flex flex-col w-min items-center">
      <p className="text-[32px] font-normal leading-[32px]">{value}</p>
      <p className="text-[11px] font-normal">{title}</p>
    </div>
  )
}
