import React from 'react'
import TrackerFilterGroup from "../../_components/AppComps/TrackerFilterGroup"
import TrackerTable from './TrackerTable'

function Tracker() {
  return (
    <section className='mx-2 p-3 h-screen'>
       <div className="flex items-center justify-between py-3">
        <h1 className="text-[#292D32] font-semibold  md:text-2xl ">
          Tracker
        </h1>
        </div>
        <TrackerFilterGroup />

        <div>
        
          <TrackerTable />
        </div>

    </section>
  )
}

export default Tracker
