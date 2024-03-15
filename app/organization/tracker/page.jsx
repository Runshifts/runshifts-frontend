"use client"
import { useContext, useEffect, useState } from "react"
import TrackerTable from "./TrackerTable"
import { TrackerContext } from "../../_providers/TrackerProvider"
import DateInput from "../../_components/AppComps/DateInput"
import Calender from "../../_assets/svgs/CalenderIcon"
import useRenderShiftFilters from "../../_hooks/useRenderShiftFilters"
import PageSearchInput from "../../_components/AppComps/PageSearchInput"
import Heading from "../../_components/Headings"
import { BREAKDOWN_VARIANTS } from "./Breakdown"

const DateInputOptions = {
  datepickerClassNames: "",

  maxDate: Date.now(),
  minDate: new Date("2000-01-01"),
  theme: {
    background: "",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "opacity-10",
    input:
      "focus:outline-none  text-[#7A869A] p-0 border-0 focus:border-0 bg-transparent focus:ring-0 ring-0 text-[14px] leading-[20px] relative z-1 w-full cursor-pointer bg-[#F4F5F7] text-[#7A869A]  py-[4px] px-[8px]",
    inputIcon: "hidden",
    selected:
      "bg-transparent border-b-2 border-b-solid border-b-blue-600 font-bold !text-blue-600 text-center rounded-[0]",
  },
  inputDateFormatProp: {
    month: "numeric",
    year: "numeric",
    day: "numeric",
  },
  inputNameProp: "date",
  inputPlaceholderProp: "Calender",
}

function Tracker() {
  const [search, setSearch] = useState("")
  const {
    loading,
    initialize,
    hasInitialized,
    dateFilter,
    updateDateFilter,
    shiftsInSelectedDate,
  } = useContext(TrackerContext)

  useEffect(() => {
    if (hasInitialized === false) initialize()
  }, [initialize, hasInitialized])

  const { renderShiftFilters, filteredShifts } = useRenderShiftFilters(
    [
      ...shiftsInSelectedDate.clockedIn.map((it) => ({
        ...it,
        filter: BREAKDOWN_VARIANTS.CLOCKED_IN,
      })),
      ...shiftsInSelectedDate.clockedOut.map((it) => ({
        ...it,
        filter: BREAKDOWN_VARIANTS.CLOCKED_OUT,
      })),
      ...shiftsInSelectedDate.usedBreak.map((it) => ({
        ...it,
        filter: BREAKDOWN_VARIANTS.ON_BREAK,
      })),
    ].filter((shift) =>
      `${shift.assignee?.firstName} ${shift.assignee?.lastName} ${shift.assignee?.fullName} ${shift.assignee?.email}`
        .trim()
        .toLowerCase()
        .includes(search.trim().toLowerCase())
    )
  )

  return (
    <section className="mx-2 h-screen flex flex-col gap-4">
      <div className="flex flex-col gap-4 justify-between pt-[24px] pb-4">
        <Heading as="h1">Tracker</Heading>
        <ul className="flex gap-[8px]">
          <PageSearchInput
            type="text"
            placeholder="Search members..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name="members"
          />
          {renderShiftFilters({ showRoleFilter: false })}
          <div className="flex items-center max-w-[120px] rounded-[3px] relative">
            <DateInput
              onClose={() => setCalendarOpen(true)}
              value={dateFilter}
              onChange={updateDateFilter}
              options={DateInputOptions}
            />
            <span className="absolute z-[0] right-[8px]">
              <Calender />
            </span>
          </div>
        </ul>
      </div>
      <TrackerTable
        clockedInShifts={filteredShifts.filter(
          (shift) => shift.filter === BREAKDOWN_VARIANTS.CLOCKED_IN
        )}
        clockedOutShifts={filteredShifts.filter(
          (shift) => shift.filter === BREAKDOWN_VARIANTS.CLOCKED_OUT
        )}
        usedBreakShifts={filteredShifts.filter(
          (shift) => shift.filter === BREAKDOWN_VARIANTS.ON_BREAK
        )}
        isCurrentDate={dateFilter.toDateString() === new Date().toDateString()}
        loading={loading}
      />
    </section>
  )
}

export default Tracker
