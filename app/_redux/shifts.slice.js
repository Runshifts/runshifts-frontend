"use client"
import { createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import { fetchTodaysSnapshot, fetchWeeklySchedule } from "./thunks/shifts.thunk"

const initialState = {
  cache: {},
  loading: false,
  error: null,
  currentWeek: { start: new Date(Date.now()), end: new Date(Date.now()) },
  shifts: [],
  overtimes: [],
  cache: {},
  todaysSnapshot: {
    hoursOfWorkScheduledThisWeek: 0,
    hoursOfWorkScheduledToday: 0,
    pendingShiftApplications: 0,
    projectedLabourCostsThisWeek: 0,
    projectedLabourCostsToday: 0,
    shiftsClockedInToday: 0,
    unfilledOpenShifts: 0,
    usersCurrentlyOnBreak: 0,
    usersWithTimeOff: 0,
  },
}

export const shiftsAndOvertimesSlice = createSlice({
  name: "shifts",
  initialState,
  reducers: {
    setCurrentWeek: (state, action) => {
      if (action.payload.start && action.payload.end)
        state.currentWeek = action.payload
    },
    removeError: (state) => {
      state.error = null
    },
    updateLoading: (state, action) => {
      state.loading =
        typeof action.payload === "boolean" ? action.payload : !state.loading
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeeklySchedule.fulfilled, (state, action) => {
        state.overtimes = [
          ...state.overtimes,
          ...action.payload.schedule.overtimes,
        ]
        state.shifts = [...state.shifts, ...action.payload.schedule.shifts]
        state.cache = {
          ...state.cache,
          [JSON.stringify(action.payload.date)]: true,
        }
      })
      .addCase(fetchWeeklySchedule.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        toast.error(action.payload || "Something went wrong")
      })
      .addCase(fetchTodaysSnapshot.fulfilled, (state, action) => {
        console.log(action.payload)
      })
      .addCase(fetchTodaysSnapshot.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        toast.error(action.payload || "Something went wrong")
      })
  },
})

export const { updateLoading, removeError, setCurrentWeek } =
  shiftsAndOvertimesSlice.actions
export const shiftsAndOvertimesReducer = shiftsAndOvertimesSlice.reducer
