import NOTES_URLS from "../../_urls/notesURLS"
import TIMESHEET_URLS from "../../_urls/timesheetsURLs"
import axiosFetcher from "../../_utils/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchNotes = createAsyncThunk(
  "timesheets/getNotes",
  async (organizationId) => {
    const res = await axiosFetcher({
      url: `${NOTES_URLS.getNotes(organizationId)}`,
      method: "get",
    })
    return { notes: res.results, hasMore: res.hasMore }
  }
)
export const fetchQueries = createAsyncThunk(
  "timesheets/getQueries",
  async ({ organizationId, date }) => {
    const res = await axiosFetcher({
      url: `${TIMESHEET_URLS.getQueries(organizationId)}?date=${date}`,
      method: "get",
    })
    return { shifts: res.shifts, date }
  }
)
