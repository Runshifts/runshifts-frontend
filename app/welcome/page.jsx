"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { SubmitButton } from "../_components/Auth/Inputs"

function Shedule() {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userInLocalStorage = JSON.parse(localStorage.getItem("user"))
    if (!userInLocalStorage) router.push("/")
    else setUser(userInLocalStorage)
  }, [router])

  return (
    <>
      <div className="bg-[url(/img/welcome.png)] h-screen bg-cover bg-center flex items-center justify-center">
        <div className="w-full max-w-[286px]">
          <SubmitButton
            onClick={() =>
              router.push(
                user?.type === "employer" ? "/organization" : "/employee"
              )
            }
          >
            Start Scheduling
          </SubmitButton>
        </div>
      </div>
    </>
  )
}

export default Shedule
