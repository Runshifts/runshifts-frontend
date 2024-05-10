import TIMESHEET_URLS from "../../_urls/timesheetsURLs"
import axiosFetcher from "../../_utils/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchTimeSheet = createAsyncThunk(
  "timesheets/getTimesheet",
  async ({ date, organizationId }) => {
    const res = await axiosFetcher({
      url: `${TIMESHEET_URLS.get(organizationId)}?date=${date}`,
      method: "get",
    })
    return { shifts: res.shifts, date }
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
