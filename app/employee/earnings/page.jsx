"use client"
import BagSvg from "../../_assets/svgs/Bag"
import Timer from "../../_assets/svgs/Timer"
import MoneyTime from "../../_assets/svgs/MoneyTime"
import Money from "../../_assets/svgs/Money"
import DateRangePicker from "../../_components/AppComps/Datepicker"
import StatisticsCard from "../../_components/AppComps/StatisticsCard"
import { SubmitButton } from "../../_components/Auth/Inputs"
import Heading from "../../_components/Headings"
import { TextWithToggleableView } from "../../_components/StaffDashboardComponents/MyActivities"
import { useContext, useEffect, useMemo } from "react"
import { useDispatch } from "react-redux"
import { OrganizationContext } from "../../_providers/OrganizationProvider"
import { useSelector } from "react-redux"
import useGetWeekRanges from "../../_hooks/useGetWeekRanges"
import { ONE_HOUR_IN_MILLISECONDS } from "../../_utils"
import { fetchEarningsStats } from "../../_redux/thunks/earnings.thunk"

function Page() {
  const dispatch = useDispatch()
  const { organization } = useContext(OrganizationContext)
  const { cache, loading } = useSelector((store) => store.earnings)
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
    if (!cache[currentWeek.start.toDateString()]) {
      if (organization)
        dispatch(
          fetchEarningsStats({
            date: new Date(currentWeek.start),
            organizationId: organization?._id,
          })
        )
    }
  }, [dispatch, currentWeek.start, cache, organization])

  return (
    <section className="h-screen w-full px-[12px] md:px-[40px] flex flex-col gap-4 items-start">
      <div className="flex justify-between items-center py-6 w-full">
        <Heading as="h1">Earnings</Heading>
        <SubmitButton className="flex items-center gap-[4px] bg-primary-500 text-white rounded-md font-[500] text-[14px] leading-[20px] px-[12px] py-[4px]">
          <BagSvg /> Request EWA
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
            icon={<MoneyTime />}
            title={
              <TextWithToggleableView
                text={Number(
                  cache[currentWeek.start.toDateString()]?.totalEarnings
                )?.toLocaleString("en-gb", {
                  currency: "eur",
                  style: "currency",
                  currency: "GBP",
                })}
                color="#2D6316"
              />
            }
            text="Total Earnings"
          />
          <StatisticsCard
            isLoading={!true}
            mainBg="#E5F7DD"
            iconBg="#CBF0BC"
            textColor="#42526E"
            titleColor="#283142"
            icon={<Timer />}
            title={
              <TextWithToggleableView
                text={Number(
                  cache[currentWeek.start.toDateString()]?.amountAvailableForEwa
                )?.toLocaleString("en-gb", {
                  currency: "eur",
                  style: "currency",
                  currency: "GBP",
                })}
                color="#2D6316"
              />
            }
            text="Amount Available for EWA"
          />
          <StatisticsCard
            isLoading={!true}
            mainBg="#E5F7DD"
            iconBg="#CBF0BC"
            textColor="#42526E"
            titleColor="#283142"
            icon={<Money />}
            title={<TextWithToggleableView text="£193,923" color="#2D6316" />}
            text="Available Funds for Withdrawal"
          />
        </div>
      </div>
    </section>
  )
}

export default Page
