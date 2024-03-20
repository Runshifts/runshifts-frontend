'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Shedule() {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userInLocalStorage = JSON.parse(localStorage.getItem("user"))
    if(!userInLocalStorage) router.push("/")
    else setUser(userInLocalStorage)
  }, [router])

  return (
    <>
      <div className="runshifts-bg h-screen bg-cover bg-center flex items-center justify-start">
        <Link href={user?.type === 'employer' ?'/organization' : '/employee'}>
        <button className="bg-[#7ED957] text-white rounded-md absolute top-[50%] left-[30%] px-12 p-2 my-4 md:left-[40%] ">
          Start Scheduling
        </button>
        </Link>
       
      </div>
    </>
  );
}

export default Shedule;
