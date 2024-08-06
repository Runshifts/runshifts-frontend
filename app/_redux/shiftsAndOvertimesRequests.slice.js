"use client"
import { createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import {
  fetchShiftAndOvertimeRequests,
  fetchSwapRequests,
} from "./thunks/shiftsAndOvertimeRequests.thunk"
import { mergeArrays } from "../_utils"

const initialState = {
  loading: true,
  error: null,
  shiftRequests: [],
  overtimeRequests: [],
  swapRequests: [],
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
    addNewShiftRequest: (state, action) => {
      state.shiftRequests = [action.payload, ...state.shiftRequests]
    },
    updateSingleShiftApplication: (state, action) => {
      state.shiftRequests = mergeArrays(
        [action.payload],
        [...state.shiftRequests],
        "_id"
      )
    },
    handleUpdatedRequest: (state, action) => {
      if (action.payload.type === "shift") {
        state.shiftRequests = mergeArrays(
          [action.payload.data],
          state.shiftRequests,
          "_id"
        )
      }
      if (action.payload.type === "overtime")
        state.overtimeRequests = mergeArrays(
          [action.payload.data],
          state.overtimeRequests,
          "_id"
        )
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
      .addCase(fetchSwapRequests.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.swapRequests = action.payload.swapRequests || []
        }
        state.loading = false
      })
      .addCase(fetchSwapRequests.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        toast.error(
          action.payload ||
            "Something went wrong with fetching shift swap requests"
        )
      })
  },
})

export const {
  updateLoading,
  removeError,
  handleUpdatedRequest,
  addNewShiftRequest,
  updateSingleShiftApplication,
} = shiftsAndOvertimesSlice.actions
export const shiftsAndOvertimeRequestsReducer = shiftsAndOvertimesSlice.reducer
