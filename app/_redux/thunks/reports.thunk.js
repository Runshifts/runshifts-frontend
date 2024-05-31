import REPORTS_URLS from "../../_urls/reportsURLs"
import axiosFetcher from "../../_utils/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchAttendanceStats = createAsyncThunk(
  "payroll/fetchAttendanceStats",
  async ({ employees, organizationId, daysAgo, cacheKey }) => {
    const res = await axiosFetcher({
      url: `${REPORTS_URLS.getAttendance(
        organizationId
      )}?daysAgo=${daysAgo}&employees=${employees}`,
      method: "get",
    })
    console.log(res, "res")
    return {
      attendance: res.attendance,
      statusCode: res.statusCode,
      cacheKey,
    }
  }
)
export const fetchWorkedHours = createAsyncThunk(
  "payroll/fetchWorkedHours",
  async ({ employees, organizationId, daysAgo, cacheKey }) => {
    const res = await axiosFetcher({
      url: `${REPORTS_URLS.getWorkedHours(
        organizationId
      )}?daysAgo=${daysAgo}&employees=${employees}`,
      method: "get",
    })
    console.log(res, "res")
    return {
      workedHours: res.workedHours,
      statusCode: res.statusCode,
      cacheKey,
    }
  }
)
export const fetchLabourCosts = createAsyncThunk(
  "payroll/fetchLabourCosts",
  async ({ employees, organizationId, daysAgo, cacheKey }) => {
    const res = await axiosFetcher({
      url: `${REPORTS_URLS.getLabourCosts(
        organizationId
      )}?daysAgo=${daysAgo}&employees=${employees}`,
      method: "get",
    })
    console.log(res, "res")
    return {
      earnings: res.earnings,
      statusCode: res.statusCode,
      cacheKey,
    }
  }
)
export const fetchScheduleAdherence = createAsyncThunk(
  "payroll/fetchScheduleAdherence",
  async ({ employees, organizationId, daysAgo, cacheKey }) => {
    const res = await axiosFetcher({
      url: `${REPORTS_URLS.getScheduleAdherence(
        organizationId
      )}?daysAgo=${daysAgo}&employees=${employees}`,
      method: "get",
    })
    console.log(res, "res")
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
  "payroll/fetchShiftPerformance",
  async ({ employees, organizationId, daysAgo, cacheKey }) => {
    const res = await axiosFetcher({
      url: `${REPORTS_URLS.getScheduleAdherence(
        organizationId
      )}?daysAgo=${daysAgo}&employees=${employees}`,
      method: "get",
    })
    console.log(res, "res")
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
