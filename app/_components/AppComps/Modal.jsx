"use client"
import { createPortal } from "react-dom"

export default function Modal({
  children,
  open = false,
  onClose = () => {},
  zIndex,
}) {
  return (
    <>
      {createPortal(
        <ModalElement
          zIndex={zIndex}
          children={children}
          open={open}
          onClose={onClose}
        />,
        document.getElementById("modal-container") || document.body
      )}
    </>
  )
}

export function ModalElement({
  zIndex = 1000,
  children,
  open = false,
  onClose = () => {},
}) {
  return (
    <>
      <div
        style={{ zIndex }}
        className={`${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } flex justify-center items-center fixed inset-0 `}
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
