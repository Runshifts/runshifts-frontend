import React from 'react'
import Export from '../../_components/AppComps/Export'
import FilterGroup from '../../_components/AppComps/FilterGroup'
import ScheduleTable from './ScheduleTable'
import ShiftReq from './ShiftReq'

function Dashboard() {
  return (
    <section className="p-3 h-screen">
      <div className="flex items-center justify-between py-3">
        <h1 className="text-[#292D32] font-semibold  md: text-2xl ">
          Schedule
        </h1>
        <Export />
        
        </div>
        <FilterGroup />
        <div>
          <ScheduleTable />
        </div>

        <div>
          <ShiftReq />
        </div>
    </section>
  )
}

export default Dashboard