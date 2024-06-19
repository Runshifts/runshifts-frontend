import axiosFetcher from "../../_utils/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchShiftAndOvertimeRequests = createAsyncThunk(
  "shiftsAndOvertimeRequests/fetchShiftAndOvertimeRequests",
  async ({ organizationId }) => {
    if (!organizationId) return {}
    const [shiftsRes, overtimeRes] = await Promise.all([
      await axiosFetcher(`/shifts/${organizationId}/applications`, "get"),
      await axiosFetcher(`/overtimes/${organizationId}/requests`, "get"),
    ])
    const shiftRequests =
      shiftsRes?.statusCode === 200 ? shiftsRes?.results : []
    const overtimeRequests =
      overtimeRes?.statusCode === 200 ? overtimeRes?.results : []
    return {
      overtimeRequests,
      shiftRequests,
      success: shiftsRes?.statusCode === 200 || overtimeRes?.statusCode === 200,
    }
  }
)
