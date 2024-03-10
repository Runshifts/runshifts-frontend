"use client";
import Image from "next/image";
import Avatar from "./Avatar.svg";
import Button from "../../_components/AppComps/Button";

import { Modal } from "flowbite-react";
import { useState, useRef } from "react";


function Component() {
    const [openModal, setOpenModal] = useState(false);
  
    const closeModal = () => {
      setOpenModal(false);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
  
    const openModalHandler = () => {
      setOpenModal(true);
      document.addEventListener("mousedown", handleOutsideClick);
    };
  
    const modalRef = useRef(null);
  
    return (
      <>
        <button onClick={openModalHandler}>
          <div className="mx-1 my-auto">
            <ShareSvg />
          </div>
        </button>
  
        <Modal show={openModal} size="md" onClose={closeModal}>
          <div ref={modalRef} className="modal-overlay">
            <Modal.Body>
          <div>
            <input
              type="text"
              placeholder="Search name..."
              className="bg-[#F4F5F7] border-none p-3 my-4 mx-auto h-10 w-full text-[#7A869A] text-xs rounded cursor-pointer"
              name="members"
            />
            <div className="flex items-center justify-start border-2 rounded-lg m-2 p-6 ">
              <CheckedSvg />
              <Image
                src={Avatar}
                height={40}
                width={40}
                alt="dp"
                className="rounded-sm mx-6"
              />
              <div className="">
                <h1 className="text-sm font-medium leading-4 text-left mb-2">
                  Micheal Powers
                </h1>
                <p className="text-xs font-normal leading-3 tracking-normal text-left mt-2">
                  Manager
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start border-2 rounded-lg m-2 p-6 ">
              <CheckedSvg />
              <Image
                src={Avatar}
                height={40}
                width={40}
                alt="dp"
                className="rounded-sm mx-6"
              />
              <div className="">
                <h2 className="text-sm font-medium leading-4 text-left mb-2">
                  Micheal Powers
                </h2>
                <p className="text-xs font-normal leading-3 tracking-normal text-left mt-2">
                  Manager
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start border-2 rounded-lg m-2 p-6 ">
              <CheckedSvg />
              <Image
                src={Avatar}
                height={40}
                width={40}
                alt="dp"
                className="rounded-sm mx-6"
              />
              <div className="">
                <h1 className="text-sm font-medium leading-4 text-left mb-2">
                  Micheal Powers
                </h1>
                <p className="text-xs font-normal leading-3 tracking-normal text-left mt-2">
                  Manager
                </p>
              </div>
            </div>

          </div>
          <div className="w-42">
              <Button onClick={() => setOpenModal(true)}>
                <p className="p-3 ">Send</p>
              </Button>
            </div>
        </Modal.Body>
        </div>

      </Modal>
    </>
  );
}

export default Component;

function ShareSvg() {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.05 18.0251C11.0667 18.0251 9.67502 17.3334 8.57502 14.0251L7.97502 12.2251L6.17502 11.6251C2.87502 10.5251 2.18335 9.13339 2.18335 8.15006C2.18335 7.17506 2.87502 5.77506 6.17502 4.66673L13.25 2.30839C15.0167 1.71673 16.4917 1.89173 17.4 2.79173C18.3083 3.69173 18.4833 5.17506 17.8917 6.94173L15.5333 14.0167C14.425 17.3334 13.0333 18.0251 12.05 18.0251ZM6.56668 5.85839C4.25002 6.63339 3.42502 7.55006 3.42502 8.15006C3.42502 8.75006 4.25002 9.66673 6.56668 10.4334L8.66668 11.1334C8.85002 11.1917 9.00002 11.3417 9.05835 11.5251L9.75835 13.6251C10.525 15.9417 11.45 16.7667 12.05 16.7667C12.65 16.7667 13.5667 15.9417 14.3417 13.6251L16.7 6.55006C17.125 5.26673 17.05 4.21673 16.5083 3.67506C15.9667 3.13339 14.9167 3.06673 13.6417 3.49173L6.56668 5.85839Z"
        fill="#42526E"
      />
      <path
        d="M8.62487 12C8.46654 12 8.3082 11.9416 8.1832 11.8166C7.94154 11.575 7.94154 11.175 8.1832 10.9333L11.1665 7.94163C11.4082 7.69996 11.8082 7.69996 12.0499 7.94163C12.2915 8.18329 12.2915 8.58329 12.0499 8.82496L9.06654 11.8166C8.94987 11.9416 8.7832 12 8.62487 12Z"
        fill="#42526E"
      />
    </svg>
  );
}

function CheckedSvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="#5B7198"
      />
      <path
        d="M10.5799 15.58C10.3799 15.58 10.1899 15.5 10.0499 15.36L7.21994 12.53C6.92994 12.24 6.92994 11.76 7.21994 11.47C7.50994 11.18 7.98994 11.18 8.27994 11.47L10.5799 13.77L15.7199 8.62998C16.0099 8.33998 16.4899 8.33998 16.7799 8.62998C17.0699 8.91998 17.0699 9.39998 16.7799 9.68998L11.1099 15.36C10.9699 15.5 10.7799 15.58 10.5799 15.58Z"
        fill="#5B7198"
      />
    </svg>
  );
}
