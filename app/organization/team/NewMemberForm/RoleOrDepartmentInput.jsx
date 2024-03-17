import DropDown from "../../../_components/AppComps/Dropdown"
import FormInputAndLabel from "../../schedule/NewShiftForm/FormInputAndLabel"
import { Option } from "../../../_components/AppComps/Select"
import { useContext } from "react"
import { DepartmentsAndRolesContext } from "../../../_providers/DepartmentsAndRolesProvider"

export default function RoleOrDepartmentInput({
  handleSelect = () => {},
  selectedOption,
  inputType,
}) {
  const { roles, departments } = useContext(DepartmentsAndRolesContext)
  const options = {
    role: roles,
    department: departments,
  }
  if (inputType !== "role" && inputType !== "department")
    throw new Error("Invalid Input Type!")
  return (
    <DropDown
      dropDownTrigger={
        <FormInputAndLabel
          label={inputType}
          inputProps={{
            readOnly: true,
            value: selectedOption?.name || "",
            placeholder: inputType,
          }}
        />
      }
      dropdownContent={
        <>
          {options[inputType].map((role) => (
            <Option key={role._id} onClick={() => handleSelect(role)}>
              {role.name}
            </Option>
          ))}
        </>
      }
    />
  )
}
