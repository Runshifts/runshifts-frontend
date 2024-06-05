import PAYROLL_URLS from "../../_urls/payrollURLs"
import axiosFetcher from "../../_utils/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchPayrollStats = createAsyncThunk(
  "payroll/fetchPayrollStats",
  async ({ date, organizationId }) => {
    const res = await axiosFetcher({
      url: `${PAYROLL_URLS.getStats(organizationId)}?date=${date}`,
      method: "get",
    })
    return { totalEarnedWage: res.totalEarnedWage, date }
  }
)
