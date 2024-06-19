"use client"
import { createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import { fetchShiftAndOvertimeRequests } from "./thunks/shiftsAndOvertimeRequests.thunk"

const initialState = {
  loading: true,
  error: null,
  shiftRequests: [],
  overtimeRequests: [],
  hasFetchedRequests: false,
}

export const shiftsAndOvertimesSlice = createSlice({
  name: "shiftsAndOvertimeRequests",
  initialState,
  reducers: {
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
        if (action.payload.success) {
          state.overtimeRequests = action.payload.overtimeRequests || []
          state.shiftRequests = action.payload.shiftRequests || []
        }
        state.loading = false
      })
      .addCase(fetchShiftAndOvertimeRequests.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        toast.error(
          action.payload ||
            "Something went wrong with fetching shift and overtime requests"
        )
      })
  },
})

export const { updateLoading, removeError } = shiftsAndOvertimesSlice.actions
export const shiftsAndOvertimeRequestsReducer = shiftsAndOvertimesSlice.reducer
