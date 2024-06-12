import axiosFetcher from "../../_utils/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import DASHBOARD_URLS from "../../_urls/dashboardURLs"

export const fetchOrganization = createAsyncThunk(
  "payroll/fetchOrganization",
  async (organizationId, { rejectWithValue }) => {
    const res = await axiosFetcher({
      url: `${DASHBOARD_URLS.organization(
        organizationId ? organizationId : null
      )}`,
      method: "get",
    })
    if (res.statusCode !== 200)
      return rejectWithValue(
        res.message || "Unable to fetch organization information."
      )
    else return res
  }
)

export const fetchEmployees = createAsyncThunk(
  "payroll/fetchEmployees",
  async (organizationId, { rejectWithValue }) => {
    try {
      const res = await axiosFetcher({
        url: `${DASHBOARD_URLS.employees(organizationId)}`,
        method: "get",
      })
      console.log(res, "hereer")
      if (res.statusCode === 200) return res
      if (res.statusCode === 400) return { organization: null, statuscode: 400 }
      return rejectWithValue(res.message || "Unable to fetch employees.")
    } catch (err) {
      return rejectWithValue(err?.message || "Unable to fetch employees.")
    }
  }
)
