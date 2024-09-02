"use client"
import { io } from "socket.io-client"

const socket = io("http://localhost:2024", {
  reconnectionDelay: 10000,
  reconnectionDelayMax: 10000,
  auth: {
    token: globalThis?.localStorage?.getItem("token"),
  },
})
export default socket
