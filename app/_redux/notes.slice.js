"use client"
import { createSlice } from "@reduxjs/toolkit"
import { fetchNotes } from "./thunks/notes.thunk"
import { mergeArrays } from "../_utils"
import toast from "react-hot-toast"

const initialState = {
  notes: [],
  loading: true,
  error: null,
  hasFetchedNotes: false,
  hasMoreNotes: false,
}

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    updateAllNotes: (state, action) => {
      state.hasFetchedNotes = true
      state.notes = mergeArrays(action.payload.notes, [...state.notes], "_id")
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
      .addCase(fetchNotes.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.loading = false
        state.hasMoreNotes = action.payload.hasMoreNotes
        state.hasFetchedNotes = true
        if (Array.isArray(action.payload.notes)) {
          state.notes = mergeArrays(state.notes, action.payload.notes, "_id")
        }
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.loading = false
        toast.error("Something went wrong")
      })
  },
})

export const { removeError, reset, updateAllNotes } = notesSlice.actions
export const notesReducer = notesSlice.reducer
