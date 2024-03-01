import { useState, useEffect, useCallback } from "react"
import { throwInvalidDateError } from "../_utils"


export default function useCountdown(deadline) {
  throwInvalidDateError(deadline)
  // Time is in seconds
  const [time, setTime] = useState(() =>
    Math.max(0, Math.floor((deadline.getTime() - Date.now()) / 1000))
  )

  const decrement = useCallback(() =>
    setTime((prevTime) => {
      return prevTime === 0 ? 0 : prevTime - 1
    })
  , [])

  useEffect(() => {
    const id = setInterval(decrement, 1000)
    return () => clearInterval(id)
  }, [decrement])

  const format = (num) => {
    return num < 10 ? "0" + num : num.toString()
  }

  return {
    days: format(Math.floor(time / (3600 * 24))),
    hours: format(Math.floor((time / 3600) % 24)),
    minutes: format(Math.floor((time / 60) % 60)),
    seconds: format(time % 60),
  }
}