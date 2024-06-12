"use client"
import { createSlice } from "@reduxjs/toolkit"
import { fetchEmployees, fetchOrganization } from "./thunks/organization.thunk"
import toast from "react-hot-toast"

const initialState = {
  cache: {},
  loading: false,
  error: null,
  organization: null,
  employees: [],
  shiftManagements: [],
  locations: [],
  departments: [],
  positions: [],
  isLoadingOrganization: true,
  isLoadingEmployees: true,
}

export const organizationSlice = createSlice({
  name: "organization",
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
      .addCase(fetchOrganization.fulfilled, (state, action) => {
        state.loading = false
        state.organization = action.payload.organization
        state.shiftManagements =
          action.payload.organization.shiftManagements || []
        state.locations = action.payload.organization.locations || []
        state.isLoadingOrganization = false
      })
      .addCase(fetchOrganization.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        toast.error(action.payload || "Something went wrong")
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false
        state.employees = action.payload.employees
        state.isLoadingEmployees = false
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        toast.error(action.payload || "Something went wrong")
      })
  },
})

export const { updateLoading, removeError, reset } = organizationSlice.actions
export const organizationReducer = organizationSlice.reducer
