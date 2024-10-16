"use client"
import { createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import {
  fetchAttendanceStats,
  fetchLabourCosts,
  fetchScheduleAdherence,
  fetchShiftPerformance,
  fetchWorkedHours,
} from "./thunks/reports.thunk"

const initialState = {
  totalEarnedWage: 0,
  cache: {},
  loadingAttendance: true,
  loadingLabourCosts: true,
  loadingScheduleAdherence: true,
  loadingShiftPerformance: true,
  loadingWorkedHours: true,
  error: null,
}

export const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    reset: (state) => {
      state = initialState
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
      .addCase(fetchAttendanceStats.pending, (state) => {
        state.loadingAttendance = true
      })
      .addCase(fetchAttendanceStats.fulfilled, (state, action) => {
        state.loadingAttendance = false
        if (action.payload.statusCode === 200) {
          state.cache = {
            ...state.cache,
            [action.payload.cacheKey]: {
              ...(state.cache?.[action.payload.cacheKey] || {}),
              attendance: action.payload.attendance,
            },
          }
        }
      })
      .addCase(fetchAttendanceStats.rejected, (state) => {
        state.loadingAttendance = false
        toast.error("Something went wrong")
      })
      .addCase(fetchLabourCosts.pending, (state) => {
        state.loadingLabourCosts = true
      })
      .addCase(fetchLabourCosts.fulfilled, (state, action) => {
        state.loadingLabourCosts = false
        if (action.payload.statusCode === 200) {
          state.cache = {
            ...state.cache,
            [action.payload.cacheKey]: {
              ...(state.cache?.[action.payload.cacheKey] || {}),
              labourCosts: action.payload.earnings,
            },
          }
        }
      })
      .addCase(fetchLabourCosts.rejected, (state) => {
        state.loadingLabourCosts = false
        toast.error("Something went wrong")
      })

      .addCase(fetchScheduleAdherence.pending, (state) => {
        state.loadingScheduleAdherence = true
      })
      .addCase(fetchScheduleAdherence.fulfilled, (state, action) => {
        state.loadingScheduleAdherence = false
        if (action.payload.statusCode === 200) {
          state.cache = {
            ...state.cache,
            [action.payload.cacheKey]: {
              ...(state.cache?.[action.payload.cacheKey] || {}),
              scheduleAdherence: {
                actualSchedules: action.payload.actualSchedules,
                plannedSchedules: action.payload.plannedSchedules,
                percentageOfScheduleAdherence:
                  action.payload.percentageOfScheduleAdherence,
              },
            },
          }
        }
      })
      .addCase(fetchScheduleAdherence.rejected, (state) => {
        state.loadingScheduleAdherence = false
        toast.error("Something went wrong")
      })
      .addCase(fetchShiftPerformance.pending, (state) => {
        state.loadingShiftPerformance = true
      })
      .addCase(fetchShiftPerformance.fulfilled, (state, action) => {
        state.loadingShiftPerformance = false
        if (action.payload.statusCode === 200) {
          state.cache = {
            ...state.cache,
            [action.payload.cacheKey]: {
              ...(state.cache?.[action.payload.cacheKey] || {}),
              shiftsPerformance: {
                percentageOfAcceptedShifts:
                  action.payload.percentageOfAcceptedShifts,
                percentageOfRejectedShifts:
                  action.payload.percentageOfRejectedShifts,
                percentageOfSwappedShifts:
                  action.payload.percentageOfSwappedShifts,
                percentageOfCompletedShifts:
                  action.payload.percentageOfCompletedShifts,
                percentageOfNonRespondedShifts:
                  action.payload.percentageOfNonRespondedShifts,
              },
            },
          }
        }
      })
      .addCase(fetchShiftPerformance.rejected, (state) => {
        state.loadingShiftPerformance = false
        toast.error("Something went wrong")
      })
      .addCase(fetchWorkedHours.pending, (state) => {
        state.loadingWorkedHours = true
      })
      .addCase(fetchWorkedHours.fulfilled, (state, action) => {
        state.loadingWorkedHours = false
        if (action.payload.statusCode === 200) {
          state.cache = {
            ...state.cache,
            [action.payload.cacheKey]: {
              ...(state.cache?.[action.payload.cacheKey] || {}),
              workedHours: action.payload.workedHours,
            },
          }
        }
      })
      .addCase(fetchWorkedHours.rejected, (state) => {
        state.loadingWorkedHours = false
        toast.error("Something went wrong")
      })
  },
})

export const { updateLoading, removeError, reset } = reportsSlice.actions
export const reportsReducer = reportsSlice.reducer
