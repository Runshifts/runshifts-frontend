import React from 'react'
import ApproveAll from '../../_components/AppComps/ApproveAll'
import FilterGroup from '../../_components/AppComps/FilterGroup'
import TimesheetTable from './TimesheetTable'

function Timesheet() {
  return (
    <section className='mx-2 p-3 h-screen'>
       <div className="flex items-center justify-between py-3">
        <h1 className="text-[#292D32] font-semibold  md:text-2xl ">
          Timesheet
        </h1>
        <ApproveAll />       
        </div>
        
        <FilterGroup />

        <TimesheetTable />
    </section>
  )
}

export default Timesheet