import React from "react";
import Avatar1 from "/app/admin/manage-employers/maritime.svg";
import Avatar2 from "/app/admin/manage-employers/WeCanStores.svg";
import Image from "next/image";

const AllEmployeesTable = () => {
  const employeeData = [
    {
      name: "Maritime Global Service",
      location: "Newcastle",
      nextDue: "12 Feb 2024",
      status: "Active",
      image: Avatar1,
    },
    {
      name: "WeCanStores",
      location: "Newcastle",
      nextDue: "07 Jan 2024",
      status: "Suspended",
      image: Avatar2,
    },
    {
      name: "WeCanStores",
      location: "Manchesters",
      nextDue: "12 Feb 2024",
      status: "Active",
      image: Avatar2,
    },
    {
      name: "Maritime Global Service",
      location: "London",
      nextDue: "12 Jan 2024",
      status: "Active",
      image: Avatar1,
    },
  ];

  const getStatusColorClass = (status) => {
    switch (status) {
      case "Active":
        return "bg-[#CBF0BC] text-[#5BC62D]"; // Green background for Active status
      case "Suspended":
        return "bg-[#FFCD66] text-[#996700] "; // Yellow background for Suspended status
      default:
        return "";
    }
  };

  return (
    <div className="rounded-lg overflow-x-auto shadow-lg">
      <h1 className="text-gray-900 text-base not-italic font-semibold mt-4 mb-2">
        All employers
      </h1>

      <div className="bg-[#F1F3F9] rounded-t-md my-2 grid grid-cols-7 gap-2">
        <div className="ml-2">
          <input type="checkbox" className="form-checkbox " />
        </div>
        <div className="py-2 text-[#2252525] text-xs font-thin">
          Employer
        </div>
        <div className="py-2 text-[#2252525] text-xs font-thin">Location</div>
        <div className="py-2 text-[#2252525] text-xs font-thin">Next Due</div>
        <div className="py-2 text-[#2252525] text-xs font-thin">Status</div>
        <div className="py-2 text-[#2252525] text-xs font-thin">Actions</div>
        <div className="py-2 text-[#2252525] text-xs font-thin"></div>
      </div>

      {employeeData.map((employee, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-5  place-items-start place-content-center  bg-white shadow-xl rounded my-2 p-1"
        >
          

          <div className="flex items-start justify-start py-2 text-[#2252525] text-xs font-thin">
          <div className="ml-2 mr-4">
            <input type="checkbox" className="form-checkbox " />
          </div>
            <Image
              src={employee.image}
              alt={`avatar-${employee.name}`}
              height={24}
              width={24}
              className="rounded-full mr-1"
            />
            <div className="text-[#1D2433] text-xs font-normal leading-5 tracking-normal text-start">
              {employee.name}
            </div>
          </div>

          <div className="py-1 px-4 text-sm not-italic font-normal leading-5">
            {employee.location}
          </div>

          <div className="py-1 px-4 text-sm not-italic font-normal leading-5">
            {employee.nextDue}
          </div>

          <div>
            <div
              className={`text-center px-1 rounded-full m-1 text-sm not-italic font-normal w-fit ${getStatusColorClass(
                employee.status
              )}`}
            >
              {employee.status}
            </div>
          </div>

          <div className="flex space-x-1 items-center">
            <button className="bg-[#5BC62D] rounded text-white py-[8px] px-[10px]">
              <div className="flex items-center">
                <PenSvg />
                <p className="ml-2 text-xs">Edit</p>
              </div>
            </button>
            <button className="rounded text-[#B22A09] py-[8px] px-[10px]">
              <div className="flex items-center">
                <div className="h-[20px] w-[20px]">
                  <DeleteSvg />
                </div>
                <p className="ml-2 text-xs">Request removal</p>
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllEmployeesTable;


function PenSvg() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9782 15.2066H6.97819C3.35819 15.2066 1.81152 13.66 1.81152 10.04V6.03996C1.81152 2.41996 3.35819 0.873291 6.97819 0.873291H8.31152C8.58486 0.873291 8.81152 1.09996 8.81152 1.37329C8.81152 1.64662 8.58486 1.87329 8.31152 1.87329H6.97819C3.90486 1.87329 2.81152 2.96662 2.81152 6.03996V10.04C2.81152 13.1133 3.90486 14.2066 6.97819 14.2066H10.9782C14.0515 14.2066 15.1449 13.1133 15.1449 10.04V8.70662C15.1449 8.43329 15.3715 8.20662 15.6449 8.20662C15.9182 8.20662 16.1449 8.43329 16.1449 8.70662V10.04C16.1449 13.66 14.5982 15.2066 10.9782 15.2066Z"
        fill="white"
      />
      <path
        d="M6.6454 11.8334C6.23873 11.8334 5.8654 11.6867 5.59206 11.4201C5.2654 11.0934 5.1254 10.6201 5.19873 10.1201L5.4854 8.11341C5.53873 7.72674 5.79206 7.22674 6.0654 6.95341L11.3187 1.70008C12.6454 0.373411 13.9921 0.373411 15.3187 1.70008C16.0454 2.42674 16.3721 3.16674 16.3054 3.90674C16.2454 4.50675 15.9254 5.09341 15.3187 5.69341L10.0654 10.9467C9.79206 11.2201 9.29206 11.4734 8.9054 11.5267L6.89873 11.8134C6.81206 11.8334 6.7254 11.8334 6.6454 11.8334ZM12.0254 2.40674L6.77206 7.66008C6.6454 7.78675 6.49873 8.08008 6.47206 8.25341L6.1854 10.2601C6.15873 10.4534 6.19873 10.6134 6.29873 10.7134C6.39873 10.8134 6.55873 10.8534 6.75206 10.8267L8.75873 10.5401C8.93206 10.5134 9.23206 10.3667 9.35206 10.2401L14.6054 4.98674C15.0387 4.55341 15.2654 4.16674 15.2987 3.80675C15.3387 3.37341 15.1121 2.91341 14.6054 2.40008C13.5387 1.33341 12.8054 1.63341 12.0254 2.40674Z"
        fill="white"
      />
      <path
        d="M14.2116 6.59347C14.1649 6.59347 14.1182 6.58681 14.0782 6.57347C12.3249 6.08014 10.9316 4.68681 10.4382 2.93347C10.3649 2.6668 10.5182 2.39347 10.7849 2.31347C11.0516 2.24014 11.3249 2.39347 11.3982 2.66014C11.7982 4.08014 12.9249 5.20681 14.3449 5.60681C14.6116 5.68014 14.7649 5.96014 14.6916 6.2268C14.6316 6.45347 14.4316 6.59347 14.2116 6.59347Z"
        fill="white"
      />
    </svg>
  );
}

function DeleteSvg() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.978 4.52685C14.9646 4.52685 14.9446 4.52685 14.9246 4.52685C11.398 4.17352 7.87797 4.04019 4.3913 4.39352L3.0313 4.52685C2.7513 4.55352 2.50464 4.35352 2.47797 4.07352C2.4513 3.79352 2.6513 3.55352 2.92464 3.52685L4.28464 3.39352C7.8313 3.03352 11.4246 3.17352 15.0246 3.52685C15.298 3.55352 15.498 3.80019 15.4713 4.07352C15.4513 4.33352 15.2313 4.52685 14.978 4.52685Z"
        fill="#B22A09"
      />
      <path
        d="M6.64503 3.85329C6.61836 3.85329 6.59169 3.85329 6.55836 3.84662C6.29169 3.79996 6.10503 3.53996 6.15169 3.27329L6.29836 2.39996C6.40503 1.75996 6.55169 0.873291 8.10503 0.873291H9.85169C11.4117 0.873291 11.5584 1.79329 11.6584 2.40662L11.805 3.27329C11.8517 3.54662 11.665 3.80662 11.3984 3.84662C11.125 3.89329 10.865 3.70662 10.825 3.43996L10.6784 2.57329C10.585 1.99329 10.565 1.87996 9.85836 1.87996H8.11169C7.40503 1.87996 7.39169 1.97329 7.29169 2.56662L7.13836 3.43329C7.09836 3.67996 6.88503 3.85329 6.64503 3.85329Z"
        fill="#B22A09"
      />
      <path
        d="M11.1181 15.2068H6.83812C4.51146 15.2068 4.41812 13.9201 4.34479 12.8801L3.91146 6.16676C3.89146 5.89342 4.10479 5.65342 4.37812 5.63342C4.65812 5.62009 4.89146 5.82676 4.91146 6.10009L5.34479 12.8134C5.41812 13.8268 5.44479 14.2068 6.83812 14.2068H11.1181C12.5181 14.2068 12.5448 13.8268 12.6115 12.8134L13.0448 6.10009C13.0648 5.82676 13.3048 5.62009 13.5781 5.63342C13.8515 5.65342 14.0648 5.88676 14.0448 6.16676L13.6115 12.8801C13.5381 13.9201 13.4448 15.2068 11.1181 15.2068Z"
        fill="#B22A09"
      />
      <path
        d="M10.0852 11.54H7.86523C7.5919 11.54 7.36523 11.3134 7.36523 11.04C7.36523 10.7667 7.5919 10.54 7.86523 10.54H10.0852C10.3586 10.54 10.5852 10.7667 10.5852 11.04C10.5852 11.3134 10.3586 11.54 10.0852 11.54Z"
        fill="#B22A09"
      />
      <path
        d="M10.6449 8.87329H7.31152C7.03819 8.87329 6.81152 8.64662 6.81152 8.37329C6.81152 8.09996 7.03819 7.87329 7.31152 7.87329H10.6449C10.9182 7.87329 11.1449 8.09996 11.1449 8.37329C11.1449 8.64662 10.9182 8.87329 10.6449 8.87329Z"
        fill="#B22A09"
      />
    </svg>
  );
}
