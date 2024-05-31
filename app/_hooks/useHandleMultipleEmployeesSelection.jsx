"use client"
import { useCallback, useState } from "react"

export default function useHandleMultipleEmployeesSelection({
  onEmployeeSelect = () => {},
  onEmployeeRemove = () => {},
}) {
  const [selectedEmployees, setSelectedEmployees] = useState([])

  const handleSelectEmployee = useCallback(
    (employee) => {
      if (!employee) return
      const isAlreadySelected = JSON.stringify(selectedEmployees).includes(employee._id)
      if (isAlreadySelected) return
      setSelectedEmployees((prev) => [...prev, employee])
      typeof onEmployeeSelect === "function" && onEmployeeSelect(employee)
    },
    [selectedEmployees, onEmployeeRemove]
  )

  const handleRemoveEmployee = useCallback(
    (employee) => {
      if (!employee) return
      setSelectedEmployees((prev) =>
        prev.filter((emp) => emp._id !== employee._id)
      )
      typeof onEmployeeRemove === "function" && onEmployeeRemove(employee)
    },
    [onEmployeeRemove]
  )

  return { selectedEmployees, handleSelectEmployee, handleRemoveEmployee }
}
