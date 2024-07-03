"use client"
import { createSlice } from "@reduxjs/toolkit"
import {
  fetchDepartmentsAndPositions,
  fetchEmployees,
  fetchOrganization,
  fetchTeamData,
  fetchStatsForDuration,
  fetchArchivedTeamMembers,
} from "./thunks/organization.thunk"
import toast from "react-hot-toast"
import { getPastNumOfDays, mergeArrays } from "../_utils"

const initialState = {
  cache: {},
  loading: false,
  error: null,
  organization: null,
  employees: [],
  shiftManagements: { default: {}, custom: [] },
  locations: [],
  departments: [],
  positions: [],
  isLoadingOrganization: true,
  isLoadingEmployees: true,
  recentlyViewedEmployees: [],
  archivedTeamMembers: [],
  teamStats: {
    totalNumOfActiveEmployees: null,
    totalNumOfWorkedHours: null,
  },
  loadingTeamStats: true,
  loadingTeamData: true,
  teamMembers: [],
  teamStatsCache: {},
  hasInitializedTeam: false,
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
    updateTeamStats: (state, action) => {
      state.teamStats = { ...state.teamStats, ...(action.payload || {}) }
    },
    updateRecentlyViewed: (state, action) => {
      state.recentlyViewedEmployees = mergeArrays(
        action.payload || [],
        state.recentlyViewedEmployees,
        "_id"
      )
    },
    updateTeamMembers: (state, action) => {
      state.teamMembers = mergeArrays(
        action.payload || [],
        state.teamMembers,
        "_id"
      )
    },
    incrementActiveTeamMembersCount: (state) => {
      state.teamStats.totalNumOfActiveEmployees =
        state.teamStats.totalNumOfActiveEmployees + 1
    },
    decrementActiveTeamMembersCount: (state) => {
      state.teamStats.totalNumOfActiveEmployees =
        state.teamStats.totalNumOfActiveEmployees - 1
    },
    handleArchivedUser: (state, action) => {
      if (action.payload?.isArchived) {
        state.archivedTeamMembers = mergeArrays(
          [action.payload],
          state.archivedTeamMembers,
          "_id"
        )
        state.teamMembers = state.teamMembers.filter(
          (member) => member._id !== action.payload._id
        )
      }
    },
    handleRestoreUser: (state, action) => {
      if (!action.payload?.isArchived) {
        state.teamMembers = mergeArrays(
          [action.payload],
          state.teamMembers,
          "_id"
        )
        state.archivedTeamMembers = state.archivedTeamMembers.filter(
          (member) => member._id !== action.payload._id
        )
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrganization.fulfilled, (state, action) => {
        state.loading = false
        state.organization = action.payload.organization
        state.shiftManagements = action.payload.organization
          .shiftManagements || { default: {}, custom: [] }
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
      .addCase(fetchDepartmentsAndPositions.fulfilled, (state, action) => {
        state.loading = false
        state.departments = action.payload.departments
        state.positions = action.payload.positions
      })
      .addCase(fetchDepartmentsAndPositions.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        toast.error(action.payload || "Something went wrong")
      })
      .addCase(fetchTeamData.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.loadingTeamStats = false
          state.loadingTeamData = false
          state.teamMembers = action.payload.teamMembers
          state.teamStats = {
            totalNumOfActiveEmployees: action.payload.totalNumberOfActiveStaff,
            totalNumOfWorkedHours: action.payload.totalHoursWorked,
          }
          state.teamStatsCache = {
            ...state.teamStatsCache,
            [getPastNumOfDays(7).toLocaleDateString()]:
              action.payload.totalHoursWorked,
          }
          state.recentlyViewedEmployees =
            action.payload.recentlyViewedTeamMembers
          state.hasInitializedTeam = true
        }
      })
      .addCase(fetchTeamData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        toast.error(action.payload || "Something went wrong")
      })
      .addCase(fetchStatsForDuration.pending, (state, action) => {
        state.loadingTeamStats = true
      })
      .addCase(fetchStatsForDuration.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.loadingTeamStats = false
          state.teamStats = {
            ...state.teamStats,
            totalNumOfWorkedHours: action.payload.totalHoursWorked,
          }
          state.teamStatsCache = {
            ...state.teamStatsCache,
            [action.payload.fromDate.toLocaleDateString()]:
              action.payload.totalHoursWorked,
          }
        }
      })
      .addCase(fetchStatsForDuration.rejected, (state, action) => {
        state.loading = false
        state.loadingTeamStats = false
        state.error = action.payload
        toast.error(action.payload || "Something went wrong")
      })
      .addCase(fetchArchivedTeamMembers.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.archivedTeamMembers = action.payload.archivedTeamMembers
        }
      })
      .addCase(fetchArchivedTeamMembers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        toast.error(action.payload || "Something went wrong")
      })
  },
})

export const {
  updateLoading,
  removeError,
  reset,
  updateTeamMembers,
  updateRecentlyViewed,
  incrementActiveTeamMembersCount,
  decrementActiveTeamMembersCount,
  updateTeamStats,
  handleRestoreUser,
  handleArchivedUser,
} = organizationSlice.actions
export const organizationReducer = organizationSlice.reducer
