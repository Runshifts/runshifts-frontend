import axiosFetcher from "../../_utils/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import DASHBOARD_URLS from "../../_urls/dashboardURLs"

export const fetchOrganization = createAsyncThunk(
  "organization/fetchOrganization",
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
  "organization/fetchEmployees",
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

export const fetchDepartmentsAndPositions = createAsyncThunk(
  "organization/fetchDepartmentsAndPositions",
  async (organizationIndustry, { rejectWithValue }) => {
    try {
      const [departmentsRes, positionsRes] = await Promise.all([
        await axiosFetcher({
          url: `/industries/${organizationIndustry?.toLowerCase()}/departments`,
          method: "get",
        }),
        await axiosFetcher({
          url: `/industries/${organizationIndustry?.toLowerCase()}/positions`,
          method: "get",
        }),
      ])
      const departments =
        departmentsRes.statusCode === 200 ? departmentsRes.results : []
      const positions =
        positionsRes.statusCode === 200 ? positionsRes.results : []
      return { departments, positions }
    } catch (err) {
      return rejectWithValue(
        err?.message || "Unable to fetch departments and positions"
      )
    }
  }
)
