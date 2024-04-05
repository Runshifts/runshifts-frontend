import { useState, useEffect, useCallback, useMemo } from "react"
import { throwInvalidDateError } from "../_utils"

export default function useDateCountDown(deadline) {
  throwInvalidDateError(deadline)
  const [time, setTime] = useState(() =>
    Math.max(0, Math.floor((deadline.getTime() - Date.now()) / 1000))
  )

  const decrement = useCallback(
    () =>
      setTime((prevTime) => {
        return prevTime === 0 ? 0 : prevTime - 1
      }),
    []
  )

  useEffect(() => {
    const id = setInterval(decrement, 1000)
    return () => {
      clearInterval(id)
    }
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

export const useTimeCountdown = (ms) => {
  const [time, setTime] = useState(ms)

  const calculatedCountdown = useMemo(() => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((time % (1000 * 60)) / 1000)

    return {
      days,
      hours,
      minutes,
      seconds,
    }
  }, [time])

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1000 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setTime(ms)
  }, [ms])

  return calculatedCountdown
}
