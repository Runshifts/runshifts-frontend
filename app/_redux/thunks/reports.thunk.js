import REPORTS_URLS from "../../_urls/reportsURLs"
import axiosFetcher from "../../_utils/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchAttendanceStats = createAsyncThunk(
  "reports/fetchAttendanceStats",
  async ({ employees, organizationId, daysAgo, cacheKey }) => {
    const res = await axiosFetcher({
      url: `${REPORTS_URLS.getAttendance(
        organizationId
      )}?daysAgo=${daysAgo}&employees=${employees}`,
      method: "get",
    })
    return {
      attendance: res.attendance,
      statusCode: res.statusCode,
      cacheKey,
    }
  }
)
export const fetchWorkedHours = createAsyncThunk(
  "reports/fetchWorkedHours",
  async ({ employees, organizationId, daysAgo, cacheKey }) => {
    const res = await axiosFetcher({
      url: `${REPORTS_URLS.getWorkedHours(
        organizationId
      )}?daysAgo=${daysAgo}&employees=${employees}`,
      method: "get",
    })
    return {
      workedHours: res.workedHours,
      statusCode: res.statusCode,
      cacheKey,
    }
  }
)
export const fetchLabourCosts = createAsyncThunk(
  "reports/fetchLabourCosts",
  async ({ employees, organizationId, daysAgo, cacheKey }) => {
    const res = await axiosFetcher({
      url: `${REPORTS_URLS.getLabourCosts(
        organizationId
      )}?daysAgo=${daysAgo}&employees=${employees}`,
      method: "get",
    })
    return {
      earnings: res.earnings,
      statusCode: res.statusCode,
      cacheKey,
    }
  }
)
export const fetchScheduleAdherence = createAsyncThunk(
  "reports/fetchScheduleAdherence",
  async ({ employees, organizationId, daysAgo, cacheKey }) => {
    const res = await axiosFetcher({
      url: `${REPORTS_URLS.getScheduleAdherence(
        organizationId
      )}?daysAgo=${daysAgo}&employees=${employees}`,
      method: "get",
    })
    return {
      percentageOfScheduleAdherence: res.percentageOfScheduleAdherence,
      actualSchedules: res.actualSchedules,
      plannedSchedules: res.plannedSchedules,
      statusCode: res.statusCode,
      cacheKey,
    }
  }
)
export const fetchShiftPerformance = createAsyncThunk(
  "reports/fetchShiftPerformance",
  async ({ employees, organizationId, daysAgo, cacheKey }) => {
    const res = await axiosFetcher({
      url: `${REPORTS_URLS.getShiftsPerformance(
        organizationId
      )}?daysAgo=${daysAgo}&employees=${employees}`,
      method: "get",
    })
    return {
      percentageOfAcceptedShifts: res.percentageOfAcceptedShifts,
      percentageOfRejectedShifts: res.percentageOfRejectedShifts,
      percentageOfSwappedShifts: res.percentageOfSwappedShifts,
      percentageOfCompletedShifts: res.percentageOfCompletedShifts,
      percentageOfNonRespondedShifts: res.percentageOfNonRespondedShifts,
      statusCode: res.statusCode,
      cacheKey,
    }
  }
)
