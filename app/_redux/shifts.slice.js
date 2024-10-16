"use client"
import { createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import { fetchTodaysSnapshot, fetchWeeklySchedule } from "./thunks/shifts.thunk"
import { getWeekThatDateFallsIn, mergeArrays } from "../_utils"

/*
    todaysSnapshot, if not null, looks like 
    {   
      hoursOfWorkScheduledThisWeek: 0,
      hoursOfWorkScheduledToday: 0,
      pendingShiftApplications: 0,
      projectedLabourCostsThisWeek: 0,
      projectedLabourCostsToday: 0,
      shiftsClockedInToday: 0,
      unfilledOpenShifts: 0,
      usersCurrentlyOnBreak: 0,
      usersWithTimeOff: 0,
  }
*/

const initialState = {
  cache: {},
  loading: false,
  error: null,
  currentWeek: { start: new Date(Date.now()), end: new Date(Date.now()) },
  shifts: [],
  overtimes: [],
  cache: {},
  todaysSnapshot: null,
  activityData: {},
}

export const shiftsAndOvertimesSlice = createSlice({
  name: "shiftsAndOvertimes",
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
    addNewShifts: (state, action) => {
      if (Array.isArray(action.payload.shifts))
        state.shifts = mergeArrays(
          action.payload.shifts,
          [...state.shifts],
          "_id"
        )
    },
    updateSingleShift: (state, action) => {
      state.shifts = mergeArrays([action.payload], state.shifts, "_id")
    },
    acceptMultipleShifts: (state, action) => {
      const { start, end, assignee } = action.payload || {}
      state.shifts = state.shifts.map((shift) => {
        if (shift.assignee?._id !== assignee) return shift
        const startDate = new Date(start)
        const endDate = new Date(end)
        const shiftStartDate = new Date(shift.startTime)
        const shiftEndDate = new Date(shift.endTime)
        if (
          shiftStartDate.getTime() >= startDate.getTime() &&
          shiftEndDate.getTime() <= endDate.getTime()
        ) {
          return { ...shift, isAccepted: true }
        }
        return shift
      })
    },
    acceptAllShifts: (state, action) => {
      if (Array.isArray(action.payload.shifts))
        state.shifts = state.shifts.map((shift) => ({
          ...shift,
          isAccepted: shift.isDeclined === false,
        }))
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeeklySchedule.fulfilled, (state, action) => {
        state.overtimes = [
          ...action.payload.schedule.overtimes,
          ...state.overtimes,
        ]
        state.shifts = mergeArrays(
          [...action.payload.schedule.shifts],
          [...state.shifts],
          "_id"
        )
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
        state.todaysSnapshot = { ...(action.payload.snapshot || {}) }
      })
      .addCase(fetchTodaysSnapshot.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        toast.error(action.payload || "Something went wrong")
      })
  },
})

export const {
  updateLoading,
  removeError,
  setCurrentWeek,
  addNewShifts,
  updateSingleShift,
  acceptMultipleShifts,
} = shiftsAndOvertimesSlice.actions
export const shiftsAndOvertimesReducer = shiftsAndOvertimesSlice.reducer
