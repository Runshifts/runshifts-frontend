"use client"
import { createPortal } from "react-dom"

export default function Modal({ children, open = false, onClose = () => {} }) {
  return (
    <>
      {createPortal(
        <ModalElement children={children} open={open} onClose={onClose} />,
        document.getElementById("modal-container") || document.body
      )}
    </>
  )
}

export function ModalElement({ children, open = false, onClose = () => {} }) {
  return (
    <>
      <div
        className={`${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } z-[1000] flex justify-center items-center fixed inset-0 `}
      >
        <div
          onClick={onClose}
          className={`fixed inset-0 bg-black/10 z-[1] ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        ></div>
        <div className="z-[2]">{children}</div>
      </div>
    </>
  )
}
