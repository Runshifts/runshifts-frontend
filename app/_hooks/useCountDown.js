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
  const years = Math.floor(time / (3600 * 24 * 365))
  const months = Math.floor((time % (3600 * 24 * 365)) / (3600 * 24 * 30))

  return {
    years,
    months,
    days: format(Math.floor(time / (3600 * 24))),
    hours: format(Math.floor((time / 3600) % 24)),
    minutes: format(Math.floor((time / 60) % 60)),
    seconds: format(time % 60),
  }
}
export const Timer = ({ seconds, onEnd }) => {
  const [timeLeft, setTimeLeft] = useState(seconds)

  useEffect(() => {
    if (!timeLeft)
      return typeof onEnd === "function" && onEnd()

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft, onEnd])

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    const formattedSeconds =
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds

    return `${minutes}:${formattedSeconds}`
  }

  return formatTime(timeLeft)
}
