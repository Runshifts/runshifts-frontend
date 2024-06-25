import DASHBOARD_URLS from "../../_urls/dashboardURLs"
import SHIFTS_URLS from "../../_urls/shiftsURLs"
import axiosFetcher from "../../_utils/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchShiftAndOvertimeRequests = createAsyncThunk(
  "shiftsAndOvertimeRequests/fetchShiftAndOvertimeRequests",
  async ({ organizationId }) => {
    if (!organizationId) return {}
    const [shiftsRes, overtimeRes] = await Promise.all([
      await axiosFetcher({
        url: `/shifts/${organizationId}/applications`,
        method: "get",
      }),
      await axiosFetcher({
        url: `/overtimes/${organizationId}/requests`,
        method: "get",
      }),
    ])
    const shiftRequests =
      shiftsRes?.statusCode === 200 ? shiftsRes?.results : []
    const overtimeRequests =
      overtimeRes?.statusCode === 200 ? overtimeRes?.results : []
    console.log(shiftRequests, overtimeRequests)
    return {
      overtimeRequests,
      shiftRequests,
      success: shiftsRes?.statusCode === 200 || overtimeRes?.statusCode === 200,
    }
  }
)
export const fetchSwapRequests = createAsyncThunk(
  "shiftsAndOvertimeRequests/fetchSwapRequests",
  async () => {
    const res = await axiosFetcher({
      url: DASHBOARD_URLS.swapRequests(),
      method: "get",
    })
    const swapRequests = res?.statusCode === 200 ? res?.results : []
    return {
      swapRequests,
      success: res?.statusCode === 200,
    }
  }
)
