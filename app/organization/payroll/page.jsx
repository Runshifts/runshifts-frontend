"use client"
import BagSvg from "../../_assets/svgs/Bag"
import SendIcon from "../../_assets/svgs/Send"
import MoneyTime from "../../_assets/svgs/MoneyTime"
import Money from "../../_assets/svgs/Money"
import DateRangePicker from "../../_components/AppComps/Datepicker"
import StatisticsCard from "../../_components/AppComps/StatisticsCard"
import { SubmitButton } from "../../_components/Auth/Inputs"
import Heading from "../../_components/Headings"
import { useContext, useEffect, useMemo } from "react"
import { useDispatch } from "react-redux"
import { fetchPayrollStats } from "../../_redux/thunks/payroll.thunk"
import { OrganizationContext } from "../../_providers/OrganizationProvider"
import { useSelector } from "react-redux"
import useGetWeekRanges from "../../_hooks/useGetWeekRanges"
import { ONE_HOUR_IN_MILLISECONDS } from "../../_utils"

function Payroll() {
  const dispatch = useDispatch()
  const { organization } = useContext(OrganizationContext)
  const { cache, loading } = useSelector((store) => store.payroll)
  const { goToNextWeek, goToPrevWeek, currentWeek } = useGetWeekRanges(
    new Date(),
    7
  )
  const isNextWeekFuture = useMemo(() => {
    return (
      Date.now() <
      new Date(currentWeek.end).getTime() + ONE_HOUR_IN_MILLISECONDS * 24
    )
  }, [currentWeek])
  useEffect(() => {
    if (typeof cache[currentWeek.start.toDateString()] !== "number") {
      if (organization)
        dispatch(
          fetchPayrollStats({
            date: new Date(currentWeek.start),
            organizationId: organization?._id,
          })
        )
    }
  }, [dispatch, organization?._id, currentWeek.start, cache])

  return (
    <section className="h-screen w-full px-[12px] md:px-[40px] flex flex-col gap-4 items-start">
      <div className="flex justify-between items-center py-6 w-full">
        <Heading as="h1">Payroll</Heading>
        <SubmitButton className="flex items-center gap-[4px] bg-primary-500 text-white rounded-md font-[500] text-[14px] leading-[20px] px-[12px] py-[4px]">
          <BagSvg /> Add funds
        </SubmitButton>
      </div>
      <div className="flex flex-col gap-6 justify-between items-start w-full">
        <DateRangePicker
          currentWeek={currentWeek}
          goToNextWeek={goToNextWeek}
          goToPrevWeek={goToPrevWeek}
          isNextDisabled={isNextWeekFuture}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
          <StatisticsCard
            isLoading={loading}
            mainBg="#E5F7DD"
            iconBg="#CBF0BC"
            textColor="#42526E"
            titleColor="#283142"
            icon={<Money />}
            title={Number(
              cache[currentWeek.start.toDateString()]
            )?.toLocaleString("en-gb", {
              currency: "eur",
              style: "currency",
              currency: "GBP",
            })}
            text="Total earned wage"
          />
          <StatisticsCard
            isLoading={!true}
            mainBg="#E5F7DD"
            iconBg="#CBF0BC"
            textColor="#42526E"
            titleColor="#283142"
            icon={<MoneyTime />}
            title={"£193,923"}
            text="Requested EWA"
          />
          <StatisticsCard
            isLoading={!true}
            mainBg="#E5F7DD"
            iconBg="#CBF0BC"
            textColor="#42526E"
            titleColor="#283142"
            icon={<SendIcon />}
            title={"£193,923"}
            text="Next due"
          />
        </div>
      </div>
    </section>
  )
}

export default Payroll
