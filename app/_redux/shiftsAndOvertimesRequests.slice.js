"use client"
import { createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import { fetchShiftsAndOvertimeRequests } from "./thunks/shiftsAndOvertimeRequests.thunk"

const initialState = {
  cache: {},
  loading: false,
  error: null,
  currentWeek: { start: new Date(Date.now()), end: new Date(Date.now()) },
  shifts: [],
  overtimes: [],
  cache: {},
  todaysSnapshot: null,
}

export const shiftsAndOvertimesSlice = createSlice({
  name: "shiftsAndOvertimeRequests",
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
      .addCase(fetchShiftAndOvertimeRequests.fulfilled, (state, action) => {
        console.log(action.payload)
      })
      .addCase(fetchShiftAndOvertimeRequests.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        toast.error(action.payload || "Something went wrong")
      })
  },
})

export const { updateLoading, removeError, setCurrentWeek } =
  shiftsAndOvertimesSlice.actions
export const shiftsAndOvertimesReducer = shiftsAndOvertimesSlice.reducer
