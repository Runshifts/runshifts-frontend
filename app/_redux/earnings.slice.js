"use client"
import { createSlice } from "@reduxjs/toolkit"
import { fetchEarningsStats } from "./thunks/earnings.thunk"
import toast from "react-hot-toast"

const initialState = {
  cache: {},
  loading: true,
  error: null,
}

export const earningsSlice = createSlice({
  name: "earnings",
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
      .addCase(fetchEarningsStats.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchEarningsStats.fulfilled, (state, action) => {
        state.loading = false
        const { data, date } = action.payload
        state.cache = {
          ...state.cache,
          [new Date(date).toDateString()]: data,
        }
      })
      .addCase(fetchEarningsStats.rejected, (state) => {
        state.loading = false
        toast.error("Something went wrong")
      })
  },
})

export const { updateLoading, removeError, reset } = earningsSlice.actions
export const earningsReducer = earningsSlice.reducer
