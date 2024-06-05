"use client"
import { createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import { fetchPayrollStats } from "./thunks/payroll.thunk"

const initialState = {
  totalEarnedWage: 0,
  cache: {},
  loading: true,
  error: null,
}

export const payrollSlice = createSlice({
  name: "payroll",
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
      .addCase(fetchPayrollStats.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPayrollStats.fulfilled, (state, action) => {
        state.loading = false
        if (typeof action.payload?.totalEarnedWage === "number") {
          state.totalEarnedWage = action.payload.totalEarnedWage
          state.cache = {
            ...state.cache,
            [new Date(action.payload.date).toDateString()]:
              action.payload.totalEarnedWage,
          }
        }
      })
      .addCase(fetchPayrollStats.rejected, (state) => {
        state.loading = false
        toast.error("Something went wrong")
      })
  },
})

export const { updateLoading, removeError, reset } = payrollSlice.actions
export const payrollReducer = payrollSlice.reducer
