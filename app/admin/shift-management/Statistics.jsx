"use client"
import StatisticsCard from "../../_components/AppComps/StatisticsCard"
import React, { useContext } from "react"
import { AdminDashboardContext } from "../../_providers/Admin/AdminDashboardProvider"

function Statistics() {
  const { stats, loading } = useContext(AdminDashboardContext)
  return (
    <>
      <section className="grid grid-cols-1 gap-4 my-4 md:grid-cols-4">
        <StatisticsCard
          isLoading={loading}
          text="Total shifts"
          title={stats.totalNumberOfShifts}
          mainBg="#E5F7DD"
          iconBg="#CBF0BC"
        />
        <StatisticsCard
          isLoading={loading}
          text="Active shifts"
          title={stats.totalNumberOfActiveShifts}
          mainBg="#E5F7DD"
          iconBg="#CBF0BC"
        />
        <StatisticsCard
          isLoading={loading}
          text="Open disputes"
          title="4"
          mainBg="#E5F7DD"
          iconBg="#CBF0BC"
        />
        <StatisticsCard
          isLoading={loading}
          text="Closed disputes"
          title="18"
          mainBg="#E5F7DD"
          iconBg="#CBF0BC"
        />
      </section>
    </>
  )
}

export default Statistics
