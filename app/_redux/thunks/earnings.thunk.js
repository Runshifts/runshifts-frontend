import EARNINGS_URLS from "../../_urls/earningsURLs"
import axiosFetcher from "../../_utils/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchEarningsStats = createAsyncThunk(
  "earnings/fetchEarningsStats",
  async ({ date }) => {
    const res = await axiosFetcher({
      url: `${EARNINGS_URLS.getStats()}?date=${date}`,
      method: "get",
    })
    return {
      data: res.data,
      date,
    }
  }
)
