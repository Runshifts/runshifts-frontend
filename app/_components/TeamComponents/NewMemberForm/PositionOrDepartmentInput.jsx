import DropDown from "../../../_components/AppComps/Dropdown"
import FormInputAndLabel from "../../../_components/ScheduleComponents/NewShiftForm/FormInputAndLabel"
import { Option } from "../../../_components/AppComps/Select"
import { useSelector } from "react-redux"

export default function PositionOrDepartmentInput({
  handleSelect = () => {},
  selectedOption,
  inputType,
}) {
  const { positions, departments } = useSelector((store) => store.organization)
  const options = {
    positions: positions,
    department: departments,
  }
  if (inputType !== "position" && inputType !== "department")
    throw new Error("Invalid Input Type!")
  return (
    <DropDown
      dropDownTrigger={
        <FormInputAndLabel
          label={inputType}
          inputProps={{
            readOnly: true,
            value: selectedOption?.name || selectedOption || "",
            placeholder: inputType,
          }}
        />
      }
      dropdownContent={
        <>
          {options[inputType]?.map((position) => (
            <Option key={position._id} onClick={() => handleSelect(position)}>
              {position.name}
            </Option>
          ))}
        </>
      }
    />
  )
}
