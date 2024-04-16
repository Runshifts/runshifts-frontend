"use client"
import { configureStore } from "@reduxjs/toolkit"
import { timesheetReducer } from "./timesheet.slice"

export const store = configureStore({
  reducer: { timesheet: timesheetReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})
