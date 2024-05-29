import { useState } from "react"
import DownChevron from "../../_assets/svgs/DownChevron"
import { Option } from "../../_components/AppComps/Select"
import useOutsideClick from "../../_hooks/useOutsideClick"

export default function CardDropdownSelect({
  defaultSelection,
  options = [],
  onSelect,
  getOptionDisplayValue = () => {},
}) {
  const [showOptions, setShowOptions] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const containerRef = useOutsideClick(() => setShowOptions(false))
  return (
    <>
      <div
        ref={containerRef}
        className={`relative ${showOptions ? "" : "overflow-hidden"}`}
      >
        <button
          onClick={() => setShowOptions((prev) => !prev)}
          className="text-[12px] text-[#4B5157] flex items-center gap-[4.25px]"
        >
          {selectedOption
            ? getOptionDisplayValue(selectedOption)
            : defaultSelection}
          <DownChevron color="#4B5157" />
        </button>
        <ul
          className={`${
            showOptions ? "max-h-screen" : "max-h-0"
          } transition-all duration-[250ms] overflow-hidden absolute left-[-5%] z-[10] bg-white rounded-[3px] py-[2px] w-max bg-white rounded-md shadow-lg`}
        >
          {options.map((opt) => (
            <Option
              onClick={() => {
                setSelectedOption(opt)
                onSelect(opt)
              }}
              isSelected={
                selectedOption &&
                getOptionDisplayValue(opt) ===
                  getOptionDisplayValue(selectedOption)
              }
              style={{ fontSize: "12px" }}
            >
              {getOptionDisplayValue(opt)}
            </Option>
          ))}
        </ul>
      </div>
    </>
  )
}

export function PastDateDurationSelect({ onSelect = () => {} }) {
  return (
    <CardDropdownSelect
      defaultSelection="Last 30 days"
      options={[
        {
          displayValue: "Last 7 days",
          value: 7,
        },
        {
          displayValue: "Last 14 days",
          value: 14,
        },
        {
          displayValue: "Last 30 days",
          value: 28,
        },
        {
          displayValue: "Last 3 months",
          value: 92,
        },
        {
          displayValue: "Last 6 months",
          value: 182,
        },
      ]}
      onSelect={onSelect}
      getOptionDisplayValue={(opt) => opt.displayValue}
    />
  )
}

export const SECTION_VIEWS = {
  GRAPHICAL: "graphical",
  NUMERICAL: "numerical",
}
export function SectionViewSelect({ onSelect = () => {}, defaultSelection = "---" }) {
  return (
    <CardDropdownSelect
      defaultSelection={defaultSelection}
      options={[
        {
          displayValue: "Graphical view",
          value: SECTION_VIEWS.GRAPHICAL,
        },
        {
          displayValue: "Numerical view",
          value: SECTION_VIEWS.NUMERICAL,
        },
      ]}
      onSelect={onSelect}
      getOptionDisplayValue={(opt) => opt.displayValue}
    />
  )
}
