import axiosFetcher from "../../_utils/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import DASHBOARD_URLS from "../../_urls/dashboardURLs"

export const fetchShiftAndOvertimeRequests = createAsyncThunk(
  "shiftsAndOvertimeRequests/fetchShiftAndOvertimeRequests",
  async ({ organizationId, date }, { rejectWithValue }) => {
    const res = await axiosFetcher({
      url: ``,
      method: "get",
    })
    if (res.statusCode !== 200)
      return rejectWithValue(
        res.message || "Unable to fetch shift and overtime requests"
      )
    else return { ...res, date }
  }
)
