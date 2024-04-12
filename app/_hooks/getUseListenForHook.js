"use client"
import { useEffect } from "react"
import socket from "../_socket"

export default function getUseListenForHook() {
  const useListenForHook = ({ event = "", callback = () => {} }) => {
    useEffect(() => {
      socket.on(event, callback)
      return () => {
        socket.off(event, callback)
      }
    }, [event, callback])
  }
  return useListenForHook
}
