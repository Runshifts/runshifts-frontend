import Image from "next/image";
import React from "react";
import Ellipse1 from "../Ellipse1.svg";
import Ellipse2 from "../Ellipse2.svg";
import Ellipse3 from "../Ellipse3.svg";

function InfoCards({ title, content }) {
  return (
    <div className="p-5 max-w-[410px] bg-white rounded-lg shadow-lg ">
      <h1 className="text-[#449522] text-xl font-medium leading-6 tracking-normal text-left ">
        {title}
      </h1>
      <p className="my-4 text-[#706763] text-sm font-normal leading-6 tracking-normal text-left">
        {content}
      </p>
      <hr />
      <div className="flex items-center justify-between pt-3">
      <div className="flex items-center justify-between">
        <div class="flex -space-x-4 rtl:space-x-reverse">
          <Image
            class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src={Ellipse1}
            alt=""
          />
          <Image
            class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src={Ellipse2}
            alt=""
          />
          <Image
            class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src={Ellipse3}
            alt=""
          />
        </div>
        <p className="text-sm font-normal leading-6 tracking-normal text-[#706763] text-right">28 entries</p>

        </div>
       
        <button className="text-[#449522] ">View</button>
      </div>
    </div>
  );
}

export default InfoCards;
