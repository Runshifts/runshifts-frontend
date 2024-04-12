"use client"
import { useContext, useEffect } from "react"
import ApproveAll from "../../_components/AppComps/ApproveAll"
// import FilterGroup from '../../_components/AppComps/FilterGroup'
import TimesheetTable from "./TimesheetTable"
import { useSelector, useDispatch } from "react-redux"
import { fetchTimeSheet } from "../../_redux/thunks/timesheet.thunk"
import { OrganizationContext } from "../../_providers/OrganizationProvider"

function Timesheet() {
  const { organization } = useContext(OrganizationContext)
  const { shifts, cache } = useSelector((store) => store.timesheet)
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (cache[new Date().toDateString()] !== true)
      dispatch(
        fetchTimeSheet({
          date: new Date(),
          organizationId: organization?._id,
        })
      )
  }, [dispatch, organization?._id])

  return (
    <section className="mx-2 p-3 h-screen">
      <div className="flex items-center justify-between py-3">
        <h1 className="custom-h1">Timesheet</h1>
        <ApproveAll />
      </div>

      {/* <FilterGroup /> */}

      <TimesheetTable />
    </section>
  )
}

export default Timesheet
