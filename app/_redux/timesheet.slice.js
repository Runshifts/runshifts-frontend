"use client"
import { createSlice } from "@reduxjs/toolkit"
import { fetchQueries, fetchTimeSheet } from "./thunks/timesheet.thunk"
import { mergeArrays } from "../_utils"
import toast from "react-hot-toast"

const initialState = {
  shifts: [],
  queries: [],
  cachedQueries: {},
  cache: {},
  loading: true,
  error: null,
}

export const timesheetSlice = createSlice({
  name: "timesheet",
  initialState,
  reducers: {
    updateShifts: (state, action) => {
      console.log(action.payload.shifts)
      state.shifts = mergeArrays(
        action.payload.shifts,
        [...state.shifts],
        "_id"
      )
      if (action.payload.date)
        state.cache = {
          ...state.cache,
          [new Date(action.payload.date).toDateString()]: true,
        }
    },
    reset: (state) => {
      state = initialState
    },
    removeError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTimeSheet.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchTimeSheet.fulfilled, (state, action) => {
        state.loading = false
        if (Array.isArray(action.payload.shifts)) {
          state.shifts = mergeArrays(state.shifts, action.payload.shifts, "_id")
          state.cache = {
            ...state.cache,
            [new Date(action.payload.date).toDateString()]: true,
          }
        }
      })
      .addCase(fetchTimeSheet.rejected, (state, action) => {
        state.loading = false
        toast.error("Something went wrong")
      })
      .addCase(fetchQueries.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchQueries.fulfilled, (state, action) => {
        state.loading = false
        if (Array.isArray(action.payload.shifts)) {
          state.queries = mergeArrays(state.queries, action.payload.shifts, "_id")
          state.cachedQueries = {
            ...state.cachedQueries,
            [new Date(action.payload.date).toDateString()]: true,
          }
        }
      })
      .addCase(fetchQueries.rejected, (state, action) => {
        console.log(action);
        state.loading = false
        toast.error("Something went wrong")
      })
  },
})

export const { updateShifts, removeError, reset } = timesheetSlice.actions
export const timesheetReducer = timesheetSlice.reducer
