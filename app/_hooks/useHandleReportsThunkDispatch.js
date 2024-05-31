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
    () => `${daysAgo.value}-${selectedEmployees.join(",")}`,
    [daysAgo.value, selectedEmployees]
  )
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  const checkForCacheOrFetch = useCallback(
    (isInit = false) => {
      if (!organization) return
      if (cache[cacheKey]?.[cacheValueKey]) return setLoading(false)
      else {
        console.log("go", isInit)
        dispatch(
          thunkFunction({
            employees: selectedEmployees.join(","),
            organizationId: organization?._id,
            daysAgo: daysAgo.value,
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
    if (!cache[cacheKey]?.[cacheValueKey]) setLoading(true)
    if (cache[cacheKey]?.[cacheValueKey]) setLoading(false)
    debouncedFetch()
  }, [
    debouncedFetch,
    daysAgo,
    selectedEmployees,
    cache,
    cacheKey,
    cacheValueKey,
  ])

  return { loading, cacheKey }
}
