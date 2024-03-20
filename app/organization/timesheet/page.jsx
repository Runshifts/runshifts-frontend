"use client"
import ApproveAll from '../../_components/AppComps/ApproveAll'
// import FilterGroup from '../../_components/AppComps/FilterGroup'
import TimesheetTable from './TimesheetTable'

function Timesheet() {
  return (
    <section className='mx-2 p-3 h-screen'>
       <div className="flex items-center justify-between py-3">
        <h1 className="custom-h1">
          Timesheet
        </h1>
        <ApproveAll />       
        </div>
        
        {/* <FilterGroup /> */}

        <TimesheetTable />
    </section>
  )
}

export default Timesheet