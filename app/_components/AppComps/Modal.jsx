"use client"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

export default function Modal({
  children,
  open = false,
  onClose = () => {},
  zIndex,
  modalClassNames,
}) {
  const [canUsePortal, setCanUsePortal] = useState(false)
  useEffect(() => {
    if (window) setCanUsePortal(true)
  }, [])
if(!canUsePortal) return null
  return (
    <>
      {createPortal(
        <ModalElement
          zIndex={zIndex}
          open={open}
          onClose={onClose}
          modalClassNames={modalClassNames}
        >
          {children}
        </ModalElement>,
        globalThis?.document?.getElementById("modal-container") ||
          globalThis?.document?.body
      )}
    </>
  )
}

export function ModalElement({
  zIndex = 1000,
  children,
  open = false,
  onClose = () => {},
  modalClassNames,
}) {
  return (
    <>
      <div
        style={{ zIndex }}
        className={`${modalClassNames} ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } flex justify-center items-center fixed inset-0 `}
      >
        <div
          onClick={onClose}
          className={`fixed inset-0 bg-black/10 z-[1] ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        ></div>
        <div className="z-[2] grow max-w-max">{children}</div>
      </div>
    </>
  )
}
