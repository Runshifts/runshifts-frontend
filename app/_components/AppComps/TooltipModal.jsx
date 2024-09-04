"use client"
import React, { useState, useRef, useEffect, useCallback } from "react"
import useOutsideClick from "../../_hooks/useOutsideClick"

export default function TooltipModal({ children, tooltipContent, name, styles }) {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setStyles] = useState(styles || {
    right: "100%",
    top: 0,
    bottom: 0,
  })
  const outsideClickRef = useOutsideClick(() => setIsVisible(false))
  const tooltipRef = useRef(null)

  const updatePosition = useCallback(() => {
    const current = tooltipRef.current
    const distanceFromLeftOfScreen = current?.parentElement?.offsetLeft
    const distanceFromRightOfScreen =
      window.innerWidth - distanceFromLeftOfScreen
    if (distanceFromRightOfScreen <= current?.clientWidth)
      setStyles({ right: "100%", top: 0, bottom: 0 })
    else if (distanceFromLeftOfScreen >= current?.clientWidth)
      setStyles({ left: "100%", top: 0, bottom: 0 })
    else setStyles({ left: "50%", bottom: "100%", transform: "translateX(-50%)" })
  }, [])

  useEffect(() => {
    if (typeof styles !== "object") {
      updatePosition()
      window.addEventListener("resize", updatePosition)
    }
    return () => {
      window.removeEventListener("resize", updatePosition)
    }
  }, [updatePosition, styles])

  const handleShow = () => {
    setIsVisible(true)
  }

  const handleHide = () => {
    setIsVisible(false)
  }

  return (
    <span
      className="relative inline-block"
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
      ref={outsideClickRef}
    >
      <span
        className={`absolute z-10 inline-block ${isVisible ? "" : "invisible opacity-0"
          }`}
        style={{ ...position }}
        ref={tooltipRef}
        name={name}
        role="tooltip"
      >
        {tooltipContent}
      </span>
      <span onClick={handleShow} className="cursor-pointer">
        {children}
      </span>
    </span>
  )
}
