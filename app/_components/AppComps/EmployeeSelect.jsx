import { Fragment, useCallback, useRef, useState } from "react"
import PageSearchInput from "./PageSearchInput"
import useOutsideClick from "../../_hooks/useOutsideClick"
import Image from "next/image"
import { FaTimes } from "react-icons/fa"
import { Option } from "./Select"
import defaultUserImage from "../../_assets/img/user.png"

export default function EmployeesSelect({
  employees = [],
  selectedEmployees,
  handleSelect,
  handleRemove,
  handleSearchChange,
  removeLastSelected,
}) {
  const [showOptions, setShowOptions] = useState(false)
  const containerRef = useOutsideClick(() => setShowOptions(false))
  const isSelected = useCallback(
    (employee) => JSON.stringify(selectedEmployees).includes(employee._id),
    [selectedEmployees]
  )
  const inputRef = useRef()
  return (
    <div
      ref={containerRef}
      className={`${showOptions ? "" : "overflow-hidden"} relative`}
    >
      <div className="flex items-center gap-[2px] w-[200px] bg-[#F4F5F7] rounded-[3px] pl-[3px] overflow-auto styled-scrollbar">
        <div className={selectedEmployees.length > 0 ? "flex m-0" : "hidden"}>
          {selectedEmployees.map((employee) => (
            <SelectedEmployeeChip
              key={employee._id}
              employee={employee}
              handleRemove={handleRemove}
            />
          ))}
        </div>
        <PageSearchInput
          ref={inputRef}
          onFocus={() => setShowOptions(true)}
          placeholder={selectedEmployees.length === 0 ? "Type to search" : ""}
          onChange={(e) => handleSearchChange(e.target.value)}
          onKeyDown={(e) =>
            (e.key === "Backspace" || e.key === "Delete") &&
            removeLastSelected()
          }
        />
      </div>
      <ul
        className={`${
          showOptions ? "max-h-screen" : "max-h-0"
        }  transition-all duration-[250ms] overflow-hidden absolute left-[-5%] z-[10] bg-white rounded-[3px] py-[2px] min-w-full w-max bg-white rounded-md shadow-lg`}
      >
        {employees.map((employee) =>
          isSelected(employee) ? (
            <Fragment key={employee._id}></Fragment>
          ) : (
            <li key={employee._id}>
              <Option
                isSelected={isSelected(employee)}
                onClick={() => {
                  // isSelected(employee)
                  //   ? handleRemove(employee)
                  //   :
                  handleSelect(employee)
                  inputRef.current.scrollIntoView({
                    block: "nearest",
                    inline: "nearest",
                  })
                }}
              >
                {employee.firstName} {employee.lastName}{" "}
                {!employee.firstName && !employee.lastName && employee.email}
              </Option>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

function SelectedEmployeeChip({ employee, handleRemove = () => {} }) {
  if (!employee) return null
  return (
    <>
      <p className="flex items-center text-[14px] text-[#0052CC] w-max">
        <Image
          alt=""
          src={employee?.profileImage?.secure_url || defaultUserImage}
          w={16}
          h={16}
          className="w-4 h-4 rounded-full mr-1"
        />
        {employee.firstName} {employee.lastName}
        <button
          className="text-black p-1"
          onClick={() => handleRemove(employee)}
        >
          <FaTimes size={12} />
        </button>
      </p>
    </>
  )
}
