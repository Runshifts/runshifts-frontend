import StatisticsCard from "../../_components/AppComps/StatisticsCard"
import React from "react"

function ShiftsCards() {
  return (
    <>
      <section className="grid grid-cols-1 gap-4 my-4 md:grid-cols-4">
        <StatisticsCard text="Total shifts" title="642" mainBg="#E5F7DD" />
        <StatisticsCard text="Active shifts" title="43" mainBg="#E5F7DD" />
        <StatisticsCard text="Open disputes" title="4" mainBg="#E5F7DD" />
        <StatisticsCard text="Closed disputes" title="18" mainBg="#E5F7DD" />
      </section>
    </>
  )
}

export default ShiftsCards
