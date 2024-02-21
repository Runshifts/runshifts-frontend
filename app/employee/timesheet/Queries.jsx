import React from "react";
import Avatar from "../my-shifts/Avatar.svg";
import Image from "next/image";

function Queries() {
  return (
    <div className="hidden md:block">
      <p className="text-[#292D32] text-base not-italic font-semibold mx-3 mt-5 mb-3">
        Queries
      </p>

      <div className="bg-white rounded-lg shadow-xl flex justify-between items-center p-4  my-2 m-2">
        <div className="flex justify-between items-center">
          <input type="checkbox" className="form-checkbox mr-6" />
          <Image src={Avatar} alt="dp" height={24} width={24} />
          <p className="mx-4 text-sm not-italic font-normal leading-5">John Doe</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm text-[#42526E] not-italic font-normal leading-5 mx-8">
            Your time for this shift was not fully....
          </p>
          <p className="text-sm text-[#42526E] not-italic font-normal leading-5 mx-8">17/12/2023</p>

          <button className="bg-[#5BC62D] rounded py-1 px-2">
            <div className="flex items-center">
              <EyeSvg />
              <p className="text-center text-white text-sm mx-1 not-italic font-medium leading-5 ml-4">View</p>
            </div>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-xl flex justify-between items-center p-4  my-2 m-2">
        <div className="flex justify-between items-center">
          <input type="checkbox" className="form-checkbox mr-6" />
          <Image src={Avatar} alt="dp" height={24} width={24} />
          <p className="mx-4 text-sm not-italic font-normal leading-5">John Doe</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm text-[#42526E] not-italic font-normal leading-5 mx-8">
            Your time for this shift was not fully....
          </p>
          <p className="text-sm text-[#42526E] not-italic font-normal leading-5 mx-8">17/12/2023</p>

          <button className="bg-[#5BC62D] rounded py-1 px-2">
            <div className="flex items-center">
              <EyeSvg />
              <p className="text-center text-white text-sm mx-1 not-italic font-medium leading-5 ml-4">View</p>
            </div>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-xl flex justify-between items-center p-4  my-2 m-2">
        <div className="flex justify-between items-center">
          <input type="checkbox" className="form-checkbox mr-6" />
          <Image src={Avatar} alt="dp" height={24} width={24} />
          <p className="mx-4 text-sm not-italic font-normal leading-5">John Doe</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm text-[#42526E] not-italic font-normal leading-5 mx-8">
            Your time for this shift was not fully....
          </p>
          <p className="text-sm text-[#42526E] not-italic font-normal leading-5 mx-8">17/12/2023</p>

          <button className="bg-[#5BC62D] rounded py-1 px-2">
            <div className="flex items-center">
              <EyeSvg />
              <p className="text-center text-white text-sm mx-1 not-italic font-medium leading-5 ml-4">View</p>
            </div>
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Queries;

function EyeSvg() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99995 10.8867C6.40661 10.8867 5.11328 9.59334 5.11328 8.00001C5.11328 6.40668 6.40661 5.11334 7.99995 5.11334C9.59328 5.11334 10.8866 6.40668 10.8866 8.00001C10.8866 9.59334 9.59328 10.8867 7.99995 10.8867ZM7.99995 6.11334C6.95995 6.11334 6.11328 6.96001 6.11328 8.00001C6.11328 9.04001 6.95995 9.88668 7.99995 9.88668C9.03995 9.88668 9.88661 9.04001 9.88661 8.00001C9.88661 6.96001 9.03995 6.11334 7.99995 6.11334Z"
        fill="white"
      />
      <path
        d="M7.99997 14.0133C5.4933 14.0133 3.12664 12.5467 1.49997 10C0.793304 8.9 0.793304 7.10666 1.49997 6C3.1333 3.45333 5.49997 1.98666 7.99997 1.98666C10.5 1.98666 12.8666 3.45333 14.4933 6C15.2 7.1 15.2 8.89333 14.4933 10C12.8666 12.5467 10.5 14.0133 7.99997 14.0133ZM7.99997 2.98666C5.84664 2.98666 3.78664 4.28 2.34664 6.54C1.84664 7.32 1.84664 8.68 2.34664 9.46C3.78664 11.72 5.84664 13.0133 7.99997 13.0133C10.1533 13.0133 12.2133 11.72 13.6533 9.46C14.1533 8.68 14.1533 7.32 13.6533 6.54C12.2133 4.28 10.1533 2.98666 7.99997 2.98666Z"
        fill="white"
      />
    </svg>
  );
}
