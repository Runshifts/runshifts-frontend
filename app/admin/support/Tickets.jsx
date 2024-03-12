"use client";
import { useState, useEffect, useRef } from "react";
import Avatar from "../Ellipse.svg";
import Image from "next/image";

function Complaints() {
  const [isModalVisible, setModalVisible] = useState(false);

  const modalContentRef = useRef(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleOutsideClick = (event) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(event.target)
    ) {
      setModalVisible(false);
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalVisible]);

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {isModalVisible && (
        <div className="fixed inset-0  z-50 flex  justify-center items-center">
          <div
            className="bg-white rounded-xl shadow-xl p-2 text-xs not-italic leading-5"
            ref={modalContentRef}
          >
            <div className="flex my-1">
              <EyeSvg />
              <p className="mx-3">View</p>
            </div>
            <div className="flex my-1">
              <CheckboxSvg />
              <p className="mx-3">Mark as resolve</p>
            </div>
          </div>
        </div>
      )}

      <div className="">
        <h1 className="text-gray-900 text-base not-italic font-semibold">
          New tickets
        </h1>

        <div className="bg-white rounded shadow-xl p-3 flex justify-between my-2">
          <div className="flex justify-around items-center">
            <input type="checkbox" />
            <p className="mx-5 text-[#706763] text-sm not-italic font-normal leading-5">
              ID: <span className="text-[#1D2433] ">121234FA</span>
            </p>
          </div>

          <p className="mx-5 px-5 mr-5 text-sm text-[#42526E] not-italic font-normal leading-5">
            Days open
          </p>

          <div className="flex justify-between items-center">
            <p className="mx-5 px-5 mr-5 text-sm text-[#42526E] not-italic font-normal leading-5">
              Open
            </p>
            <MoreSvg onClick={toggleModal} />
          </div>
        </div>

        <div className="bg-[#F8F9FC] rounded shadow-xl p-3 flex justify-between my-2">
          <div className="flex justify-around items-center">
            <input type="checkbox" />
            <p className="mx-5 text-[#706763] text-sm not-italic font-normal leading-5">
              ID: <span className="text-[#1D2433] ">121234FA</span>
            </p>
          </div>

          <p className="mx-5 px-5 mr-5 text-sm text-[#42526E] not-italic font-normal leading-5">
            Days open
          </p>

          <div className="flex justify-between items-center">
            <p className="mx-5 px-5 mr-5 text-sm text-[#42526E] not-italic font-normal leading-5">
              Open
            </p>
            <MoreSvg />
          </div>
        </div>

        <div className="bg-white rounded shadow-xl p-3 flex justify-between my-2">
          <div className="flex justify-around items-center">
            <input type="checkbox" />
            <p className="mx-5 text-[#706763] text-sm not-italic font-normal leading-5">
              ID: <span className="text-[#1D2433] ">121234FA</span>
            </p>
          </div>

          <p className="mx-5 px-5 mr-5 text-sm text-[#42526E] not-italic font-normal leading-5">
            1
          </p>

          <div className="flex justify-between items-center">
            <p className="mx-5 px-5 mr-5 text-sm text-[#42526E] not-italic font-normal leading-5">
              Open
            </p>
            <MoreSvg />
          </div>
        </div>

        <div className="bg-[#F8F9FC] rounded shadow-xl p-3 flex justify-between my-2">
          <div className="flex justify-around items-center">
            <input type="checkbox" />
            <p className="mx-5 text-[#706763] text-sm not-italic font-normal leading-5">
              ID: <span className="text-[#1D2433] ">121234FA</span>
            </p>
          </div>

          <p className="mx-5 px-5 mr-5 text-sm text-[#42526E] not-italic font-normal leading-5">
            4
          </p>

          <div className="flex justify-between items-center">
            <p className="mx-5 px-5 mr-5 text-sm text-[#42526E] not-italic font-normal leading-5">
              Open
            </p>
            <MoreSvg />
          </div>
        </div>

        <div className="bg-[#F8F9FC] rounded shadow-xl p-3 flex justify-between my-2">
          <div className="flex justify-around items-center">
            <input type="checkbox" />
            <p className="mx-5 text-[#706763] text-sm not-italic font-normal leading-5">
              ID: <span className="text-[#1D2433] ">121234FA</span>
            </p>
          </div>

          <p className="mx-5 px-5 mr-5 text-sm text-[#42526E] not-italic font-normal leading-5">
            3
          </p>

          <div className="flex justify-between items-center">
            <p className="mx-5 px-5 mr-5 text-sm text-[#42526E] not-italic font-normal leading-5">
              Open
            </p>
            <MoreSvg />
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-gray-900 text-base not-italic font-semibold">
          Open tickets
        </h1>

        <div className="bg-white rounded shadow-xl p-3 flex justify-between my-2">
          <div className="flex justify-around items-center">
            <input type="checkbox" />
            <p className="mx-5 text-[#706763] text-sm not-italic font-normal leading-5">
              Ticket ID
            </p>
          </div>

          <div className="flex justify-around items-center">
            <p className="mx-3 px-1 mr-5 text-sm text-[#42526E] not-italic font-normal leading-5">
              Days Open
            </p>

            <p className="mx-3 px-5 mr-5 text-sm text-[#42526E] not-italic font-normal leading-5">
              <UpDownSVG />
            </p>

            <p className="mx-3 px-1 mr-5 text-sm text-[#42526E] not-italic font-normal leading-5">
              Status
            </p>
          </div>

          <div>
            <MoreSvg onClick={toggleModal} />
          </div>
        </div>

        <div className="bg-white rounded shadow-xl p-3 flex justify-between my-2">
          <div className="flex justify-around items-center">
            <input type="checkbox" />
            <p className="mx-5 text-[#706763] text-sm not-italic font-normal leading-5">
              ID: <span className="text-[#1D2433] ">121234FA</span>
            </p>
          </div>

          <p className="mx-5 px-5 mr-5 text-sm text-[#42526E] not-italic font-normal leading-5">
            1
          </p>

          <div className="flex justify-between items-center ml-12">
            <Image
              src={Avatar}
              alt="dp"
              height={24}
              width={24}
              className="ml-3"
            />
            <p className="mr-5 text-[#706763] text-sm not-italic font-normal leading-5">
              Pending
            </p>
          </div>

          <div>
            <MoreSvg />
          </div>
        </div>

        <div className="bg-[#F8F9FC] rounded shadow-xl p-3 flex justify-between my-2">
          <div className="flex justify-around items-center">
            <input type="checkbox" />
            <p className="mx-5 text-[#706763] text-sm not-italic font-normal leading-5">
              ID: <span className="text-[#1D2433] ">121234FA</span>
            </p>
          </div>

          <p className="mx-5 px-5 mr-5 text-sm text-[#42526E] not-italic font-normal leading-5">
            3
          </p>

          <div className="flex justify-between items-center ml-12">
            <Image
              src={Avatar}
              alt="dp"
              height={24}
              width={24}
              className="ml-3"
            />
            <p className="mr-5 text-[#706763] text-sm not-italic font-normal leading-5">
              Pending
            </p>
          </div>

          <div>
            <MoreSvg />
          </div>
        </div>

        <div className="bg-white rounded shadow-xl p-3 flex justify-between my-2">
          <div className="flex justify-around items-center">
            <input type="checkbox" />
            <p className="mx-5 text-[#706763] text-sm not-italic font-normal leading-5">
              ID: <span className="text-[#1D2433] ">121234FA</span>
            </p>
          </div>

          <p className="mx-5 px-5 mr-5 text-sm text-[#42526E] not-italic font-normal leading-5">
            3
          </p>

          <div className="flex justify-between items-center ml-12">
            <Image
              src={Avatar}
              alt="dp"
              height={24}
              width={24}
              className="ml-3"
            />
            <p className="mr-5 text-[#706763] text-sm not-italic font-normal leading-5">
              Pending
            </p>
          </div>

          <div>
            <MoreSvg />
          </div>
        </div>

        <div className="bg-[#F8F9FC] rounded shadow-xl p-3 flex justify-between my-2">
          <div className="flex justify-around items-center">
            <input type="checkbox" />
            <p className="mx-5 text-[#706763] text-sm not-italic font-normal leading-5">
              ID: <span className="text-[#1D2433] ">121234FA</span>
            </p>
          </div>

          <p className="mx-5 px-5 mr-5 text-sm text-[#42526E] not-italic font-normal leading-5">
            2
          </p>

          <div className="flex justify-between items-center ml-12">
            <Image
              src={Avatar}
              alt="dp"
              height={24}
              width={24}
              className="ml-3"
            />
            <p className="mr-5 text-[#706763] text-sm not-italic font-normal leading-5">
              Pending
            </p>
          </div>

          <div>
            <MoreSvg />
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-gray-900 text-base not-italic font-semibold">
          Closed tickets
        </h1>

        <div className="bg-white rounded shadow-xl p-3 flex justify-between my-2">
          <div className="flex justify-around items-center">
            <input type="checkbox" />
            <p className="mx-5 text-[#706763] text-sm not-italic font-normal leading-5">
              ID: <span className="text-[#1D2433] ">121234FA</span>
            </p>
          </div>

          <div className="flex justify-around items-center">
            <p className="mx-3 px-1 mr-5 text-sm text-[#42526E] not-italic font-normal leading-5">
              Date closed
            </p>

            <p className="mx-3 px-3 text-sm text-[#42526E] not-italic font-normal leading-5">
              <UpDownSVG />
            </p>

            <div className="flex justify-between items-center">
              <Image
                src={Avatar}
                alt="dp"
                height={24}
                width={24}
                className="mr-1"
              />
              <p className="mr-5 text-[#706763] text-sm not-italic font-normal leading-5">
                Closed
              </p>
            </div>
            <div>
              <MoreSvg onClick={toggleModal} />
            </div>
          </div>
        </div>

        <div className="bg-[#F8F9FC] rounded shadow-xl p-3 flex justify-between my-2">
          <div className="flex justify-around items-center">
            <input type="checkbox" />
            <p className="mx-5 text-[#706763] text-sm not-italic font-normal leading-5">
              ID: <span className="text-[#1D2433] ">121234FA</span>
            </p>
          </div>

          <div className="flex justify-around items-center">
            <p className="mx-3  pr-10 mr-8 text-sm text-[#42526E] not-italic font-normal leading-5">
              12 June 2023
            </p>

            <div className="flex justify-between items-center">
              <Image
                src={Avatar}
                alt="dp"
                height={24}
                width={24}
                className="mr-1"
              />
              <p className="mr-5 text-[#706763] text-sm not-italic font-normal leading-5">
                Closed
              </p>
            </div>
            <div>
              <MoreSvg onClick={toggleModal} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded shadow-xl p-3 flex justify-between my-2">
          <div className="flex justify-around items-center">
            <input type="checkbox" />
            <p className="mx-5 text-[#706763] text-sm not-italic font-normal leading-5">
              ID: <span className="text-[#1D2433] ">121234FA</span>
            </p>
          </div>

          <div className="flex justify-around items-center">
            <p className="mx-3  pr-10 mr-8 text-sm text-[#42526E] not-italic font-normal leading-5">
              12 June 2023
            </p>

            <div className="flex justify-between items-center">
              <Image
                src={Avatar}
                alt="dp"
                height={24}
                width={24}
                className="mr-1"
              />
              <p className="mr-5 text-[#706763] text-sm not-italic font-normal leading-5">
                Closed
              </p>
            </div>
            <div>
              <MoreSvg onClick={toggleModal} />
            </div>
          </div>
        </div>

        <div className="bg-[#F8F9FC] rounded shadow-xl p-3 flex justify-between my-2">
          <div className="flex justify-around items-center">
            <input type="checkbox" />
            <p className="mx-5 text-[#706763] text-sm not-italic font-normal leading-5">
              ID: <span className="text-[#1D2433] ">121234FA</span>
            </p>
          </div>

          <div className="flex justify-around items-center">
            <p className="mx-3  pr-10 mr-8 text-sm text-[#42526E] not-italic font-normal leading-5">
              12 June 2023
            </p>

            <div className="flex justify-between items-center">
              <Image
                src={Avatar}
                alt="dp"
                height={24}
                width={24}
                className="mr-1"
              />
              <p className="mr-5 text-[#706763] text-sm not-italic font-normal leading-5">
                Closed
              </p>
            </div>
            <div>
              <MoreSvg onClick={toggleModal} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded shadow-xl p-3 flex justify-between my-2">
          <div className="flex justify-around items-center">
            <input type="checkbox" />
            <p className="mx-5 text-[#706763] text-sm not-italic font-normal leading-5">
              ID: <span className="text-[#1D2433] ">121234FA</span>
            </p>
          </div>

          <div className="flex justify-around items-center">
            <p className="mx-3  pr-10 mr-8 text-sm text-[#42526E] not-italic font-normal leading-5">
              12 June 2023
            </p>

            <div className="flex justify-between items-center">
              <Image
                src={Avatar}
                alt="dp"
                height={24}
                width={24}
                className="mr-1"
              />
              <p className="mr-5 text-[#706763] text-sm not-italic font-normal leading-5">
                Closed
              </p>
            </div>
            <div>
              <MoreSvg onClick={toggleModal} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Complaints;

function MoreSvg({ onClick }) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M10.9782 16.7467C10.5199 16.7467 10.1276 16.5836 9.80152 16.2575C9.47486 15.9308 9.31152 15.5383 9.31152 15.08C9.31152 14.6217 9.47486 14.2292 9.80152 13.9025C10.1276 13.5764 10.5199 13.4133 10.9782 13.4133C11.4365 13.4133 11.829 13.5764 12.1557 13.9025C12.4818 14.2292 12.6449 14.6217 12.6449 15.08C12.6449 15.5383 12.4818 15.9308 12.1557 16.2575C11.829 16.5836 11.4365 16.7467 10.9782 16.7467ZM10.9782 11.7467C10.5199 11.7467 10.1276 11.5833 9.80152 11.2567C9.47486 10.9306 9.31152 10.5383 9.31152 10.08C9.31152 9.62166 9.47486 9.22916 9.80152 8.9025C10.1276 8.57639 10.5199 8.41333 10.9782 8.41333C11.4365 8.41333 11.829 8.57639 12.1557 8.9025C12.4818 9.22916 12.6449 9.62166 12.6449 10.08C12.6449 10.5383 12.4818 10.9306 12.1557 11.2567C11.829 11.5833 11.4365 11.7467 10.9782 11.7467ZM10.9782 6.74666C10.5199 6.74666 10.1276 6.58333 9.80152 6.25666C9.47486 5.93055 9.31152 5.53833 9.31152 5.08C9.31152 4.62166 9.47486 4.22944 9.80152 3.90333C10.1276 3.57666 10.5199 3.41333 10.9782 3.41333C11.4365 3.41333 11.829 3.57666 12.1557 3.90333C12.4818 4.22944 12.6449 4.62166 12.6449 5.08C12.6449 5.53833 12.4818 5.93055 12.1557 6.25666C11.829 6.58333 11.4365 6.74666 10.9782 6.74666Z"
        fill="#1D2433"
        fillOpacity="0.8"
      />
    </svg>
  )
}

function EyeSvg() {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99994 13.8812C8.00827 13.8812 6.3916 12.2646 6.3916 10.2729C6.3916 8.28122 8.00827 6.66455 9.99994 6.66455C11.9916 6.66455 13.6083 8.28122 13.6083 10.2729C13.6083 12.2646 11.9916 13.8812 9.99994 13.8812ZM9.99994 7.91455C8.69993 7.91455 7.6416 8.97288 7.6416 10.2729C7.6416 11.5729 8.69993 12.6312 9.99994 12.6312C11.2999 12.6312 12.3583 11.5729 12.3583 10.2729C12.3583 8.97288 11.2999 7.91455 9.99994 7.91455Z"
        fill="#42526E"
      />
      <path
        d="M10.0004 17.7897C6.86706 17.7897 3.90872 15.9563 1.87539 12.773C0.992057 11.398 0.992057 9.15635 1.87539 7.77301C3.91706 4.58968 6.87539 2.75635 10.0004 2.75635C13.1254 2.75635 16.0837 4.58968 18.1171 7.77301C19.0004 9.14801 19.0004 11.3897 18.1171 12.773C16.0837 15.9563 13.1254 17.7897 10.0004 17.7897ZM10.0004 4.00635C7.30872 4.00635 4.73372 5.62301 2.93372 8.44801C2.30872 9.42301 2.30872 11.123 2.93372 12.098C4.73372 14.923 7.30872 16.5397 10.0004 16.5397C12.6921 16.5397 15.2671 14.923 17.0671 12.098C17.6921 11.123 17.6921 9.42301 17.0671 8.44801C15.2671 5.62301 12.6921 4.00635 10.0004 4.00635Z"
        fill="#42526E"
      />
    </svg>
  );
}

function CheckboxSvg() {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5003 19.2314H7.50033C2.97533 19.2314 1.04199 17.298 1.04199 12.773V7.77303C1.04199 3.24803 2.97533 1.3147 7.50033 1.3147H12.5003C17.0253 1.3147 18.9587 3.24803 18.9587 7.77303V12.773C18.9587 17.298 17.0253 19.2314 12.5003 19.2314ZM7.50033 2.5647C3.65866 2.5647 2.29199 3.93136 2.29199 7.77303V12.773C2.29199 16.6147 3.65866 17.9814 7.50033 17.9814H12.5003C16.342 17.9814 17.7087 16.6147 17.7087 12.773V7.77303C17.7087 3.93136 16.342 2.5647 12.5003 2.5647H7.50033Z"
        fill="#42526E"
      />
      <path
        d="M8.81621 13.2564C8.64954 13.2564 8.49121 13.1897 8.37454 13.073L6.01621 10.7147C5.77454 10.473 5.77454 10.073 6.01621 9.83136C6.25788 9.5897 6.65788 9.5897 6.89954 9.83136L8.81621 11.748L13.0995 7.4647C13.3412 7.22303 13.7412 7.22303 13.9829 7.4647C14.2245 7.70636 14.2245 8.10636 13.9829 8.34803L9.25788 13.073C9.14121 13.1897 8.98288 13.2564 8.81621 13.2564Z"
        fill="#42526E"
      />
    </svg>
  );
}

function UpDownSVG() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.96714 4.97998C6.84048 4.97998 6.71379 4.93333 6.61379 4.83333L4.48712 2.70667L2.36045 4.83333C2.16712 5.02667 1.84712 5.02667 1.65379 4.83333C1.46046 4.64 1.46046 4.32 1.65379 4.12667L4.13381 1.64665C4.22714 1.55331 4.35379 1.5 4.48712 1.5C4.62046 1.5 4.74714 1.55331 4.84048 1.64665L7.32046 4.12667C7.51379 4.32 7.51379 4.64 7.32046 4.83333C7.22046 4.93333 7.09381 4.97998 6.96714 4.97998Z"
        fill="#9A928D"
      />
      <path
        d="M4.48633 14.5C4.21299 14.5 3.98633 14.2733 3.98633 14V2C3.98633 1.72667 4.21299 1.5 4.48633 1.5C4.75966 1.5 4.98633 1.72667 4.98633 2V14C4.98633 14.2733 4.75966 14.5 4.48633 14.5Z"
        fill="#9A928D"
      />
      <path
        d="M11.5203 14.5C11.387 14.5 11.2603 14.4467 11.167 14.3534L8.68699 11.8733C8.49366 11.68 8.49366 11.36 8.68699 11.1667C8.88033 10.9733 9.20032 10.9733 9.39366 11.1667L11.5203 13.2933L13.647 11.1667C13.8403 10.9733 14.1603 10.9733 14.3537 11.1667C14.547 11.36 14.547 11.68 14.3537 11.8733L11.8736 14.3534C11.7803 14.4467 11.647 14.5 11.5203 14.5Z"
        fill="#9A928D"
      />
      <path
        d="M11.5137 14.5C11.2403 14.5 11.0137 14.2733 11.0137 14V2C11.0137 1.72667 11.2403 1.5 11.5137 1.5C11.787 1.5 12.0137 1.72667 12.0137 2V14C12.0137 14.2733 11.7937 14.5 11.5137 14.5Z"
        fill="#9A928D"
      />
    </svg>
  );
}
