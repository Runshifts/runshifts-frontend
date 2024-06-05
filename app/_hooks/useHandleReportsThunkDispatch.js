import { useCallback, useContext, useEffect, useMemo, useState } from "react"
import { useDispatch } from "react-redux"
import { OrganizationContext } from "../_providers/OrganizationProvider"
import useDebouncedCallback from "./useDebouncedCallback"

export default function useHandleReportsThunkDispatch({
  cache = {},
  selectedEmployees = [],
  daysAgo = {
    displayValue: "Last 7 days",
    value: 7,
  },
  cacheValueKey = "",
  thunkFunction = () => {},
}) {
  const { organization } = useContext(OrganizationContext)
  const cacheKey = useMemo(
    () => `${daysAgo.value}-${selectedEmployees.map((it) => it._id).join(",")}`,
    [daysAgo.value, selectedEmployees]
  )
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  const checkForCacheOrFetch = useCallback(
    (isInit = false) => {
      if (!organization) return
      if (cache[cacheKey]?.[cacheValueKey]) return setLoading(false)
      else {
        dispatch(
          thunkFunction({
            employees: selectedEmployees.map((it) => it._id).join(","),
            organizationId: organization?._id,
            daysAgo: daysAgo.value,
            cacheKey,
          })
        )
        setLoading(false)
      }
    },
    [
      organization,
      dispatch,
      cacheKey,
      cache,
      daysAgo,
      selectedEmployees,
      cacheValueKey,
      thunkFunction,
    ]
  )
  const debouncedFetch = useDebouncedCallback(() => {
    if (cache[cacheKey]?.[cacheValueKey]) return setLoading(false)
    checkForCacheOrFetch()
  }, 1500)

  useEffect(() => {
    debouncedFetch()
  }, [debouncedFetch, cacheKey])

  useEffect(() => {
    if (!cache[cacheKey]?.[cacheValueKey]) setLoading(true)
    if (cache[cacheKey]?.[cacheValueKey]) setLoading(false)
  }, [cache, cacheKey, cacheValueKey])

  return { loading, cacheKey }
}
