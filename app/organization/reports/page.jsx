import React from "react"
import LogExport from "../../_components/AppComps/LogExport"
import ReportFilterGroup from "../../_components/AppComps/ReportFilterGroup"
import Charts from './charts'
import Optioncard from '../userprofile/Optioncard'

function Reports() {
  return (
    <section className="mx-auto p-3 h-screen">
      <div className="flex items-center justify-between py-3">
        <h1 className="text-[#292D32] font-semibold  md:text-2xl ">Reports</h1>
        <LogExport />
      </div>

      <ReportFilterGroup />

      <div className="">
        <Charts />
      </div>
      {/* {showCard && <Optioncard onClose={handleCloseCard} />} */}

    </section>
  )
}

export default Reports
