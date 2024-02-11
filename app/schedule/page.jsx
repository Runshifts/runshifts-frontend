import Link from "next/link";
import React from "react";

function Shedule() {
  return (
    <>
      <div className="runshifts-bg h-screen bg-cover bg-center flex items-center justify-start">
        <Link href={'/organization'}>
        <button className="bg-[#7ED957] text-white rounded-md absolute top-[50%] left-[30%] px-12 p-2 my-4 md:left-[40%] ">
          Start Scheduling
        </button>
        </Link>
       
      </div>
    </>
  );
}

export default Shedule;
