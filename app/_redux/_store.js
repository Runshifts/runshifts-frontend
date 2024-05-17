"use client"
import { configureStore } from "@reduxjs/toolkit"
import { timesheetReducer } from "./timesheet.slice"
import { earningsReducer } from "./earnings.slice"
import { payrollReducer } from "./payroll.slice"

export const store = configureStore({
  reducer: {
    timesheet: timesheetReducer,
    earnings: earningsReducer,
    payroll: payrollReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})
