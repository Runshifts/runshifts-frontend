import { useCallback, useRef } from "react"

function useDebouncedCallback(callback, delay) {
  const callbackRef = useRef(callback)
  const timeoutRef = useRef(null)

  callbackRef.current = callback

  const debouncedCallback = useCallback(
    (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        callbackRef.current(...args)
      }, delay)
    },
    [delay]
  )

  return debouncedCallback
}

export default useDebouncedCallback
