import axiosFetcher from "../../_utils/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import DASHBOARD_URLS from "../../_urls/dashboardURLs"

export const fetchWeeklySchedule = createAsyncThunk(
  "shifts/fetchWeeklySchedule",
  async ({ organizationId, date }, { rejectWithValue }) => {
    const res = await axiosFetcher({
      url: `${DASHBOARD_URLS.weeklySchedule(
        organizationId ? organizationId : null,
        date
      )}`,
      method: "get",
    })
    if (res.statusCode !== 200)
      return rejectWithValue(
        res.message || "Unable to fetch organization information."
      )
    else return { ...res, date }
  }
)

export const fetchTodaysSnapshot = createAsyncThunk(
  "shifts/fetchTodaysSnapshot",
  async ({ organizationId }, { rejectWithValue }) => {
    if (!organizationId) return {}
    const res = await axiosFetcher({
      url: `${DASHBOARD_URLS.snapshot(organizationId ? organizationId : null)}`,
      method: "get",
    })
    console.log(res)
    if (res.statusCode !== 200)
      return rejectWithValue(res.message || "Unable to fetch today's snapshot.")
    else return { ...res }
  }
)
export const fetchSwapRequests = createAsyncThunk(
  "shifts/fetchSwapRequests",
  async ({ organizationId }, { rejectWithValue }) => {
    if (!organizationId) return {}
    const res = await axiosFetcher({
      url: `${DASHBOARD_URLS.swapRequests()}`,
      method: "get",
    })
    console.log(res)
    if (res.statusCode !== 200)
      return rejectWithValue(res.message || "Unable to fetch swap requests.")
    else return { ...res }
  }
)
