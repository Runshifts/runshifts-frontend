import { useRef, useState } from "react"

export default function useHandlePinInputState({  pinLength = 6 }) {
  const [pinInputState, setOtp] = useState(new Array(pinLength).fill(""))
  const pinInputStateBoxReference = useRef([])

  function handleChange(value, index) {
    let newArr = [...pinInputState]
    newArr[index] = value.trim()
    setOtp(newArr)
    if (value.trim() && index < pinLength - 1) {
      pinInputStateBoxReference.current[index + 1].focus()
    }
  }

  function handleBackspaceAndEnter(e, index) {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      pinInputStateBoxReference.current[index - 1].focus()
    }
    if (e.key === "Enter" && e.target.value && index < pinLength - 1) {
      pinInputStateBoxReference.current[index + 1].focus()
    }
  }
  const handlePaste = (e) => {
    e.preventDefault()
    const codeToPaste = e.clipboardData.getData("text").split("")
    if (codeToPaste.length === pinLength) {
      setOtp(prev => prev.map((it, idx) => it.length > 0 ? it : codeToPaste[idx]))
    }
  }
  return {
    pinInputState,
    pinInputStateBoxReference,
    handleBackspaceAndEnter,
    handleChange,
    handlePaste
  }
}
