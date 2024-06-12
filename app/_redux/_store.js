"use client"
import { configureStore } from "@reduxjs/toolkit"
import { timesheetReducer } from "./timesheet.slice"
import { earningsReducer } from "./earnings.slice"
import { payrollReducer } from "./payroll.slice"
import { reportsReducer } from "./reports.slice"
import { organizationReducer } from "./organization.slice"

export const store = configureStore({
  reducer: {
    timesheet: timesheetReducer,
    earnings: earningsReducer,
    payroll: payrollReducer,
    reports: reportsReducer,
    organization: organizationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})
