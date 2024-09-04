import FormInputAndLabel, {
  FormMultipleSelectInputAndLabel,
} from "./FormInputAndLabel"
import DropDown from "../../../_components/AppComps/Dropdown"
import { Option } from "../../../_components/AppComps/Select"
import { useSelector } from "react-redux"
import { useCallback, useMemo } from "react"

export default function EmployeeInput({
  defaultAssignee,
  selectedUsers,
  handleSelect,
  deselectUser,
  selectedPositions,
}) {
  const { employees } = useSelector((store) => store.organization)

  const InputDisplay = useCallback(
    ({ value }) => (
      <FormInputAndLabel
        label="Select employee"
        inputProps={{
          placeholder: "Select employee",
          value,
          readOnly: true,
          role: defaultAssignee ? "select" : "input",
        }}
      />
    ),
    [defaultAssignee]
  )
  const availableUserOptions = useMemo(
    () =>
      employees.filter(
        (emp) =>
          JSON.stringify(selectedUsers).includes(emp._id) === false &&
          (selectedPositions.length === 0 ||
            JSON.stringify(selectedPositions)
              .toLowerCase()
              .includes(emp.position?.name?.toLowerCase()) === true)
      ),
    [employees, selectedUsers, selectedPositions]
  )

  if (defaultAssignee)
    return (
      <InputDisplay
        value={
          `${defaultAssignee?.firstName || ""} ${
            defaultAssignee?.lastName || ""
          }`.trim() ||
          defaultAssignee?.email ||
          ""
        }
      />
    )
  return (
    <DropDown
      dropDownTrigger={
        <FormMultipleSelectInputAndLabel
          label="Select employee"
          placeholder="Select employee"
          selectedOptions={selectedUsers}
          handleDeselect={deselectUser}
          getDisplayValue={(option) =>
            option.firstName || option.lastName || option.email
          }
        />
      }
      dropdownContent={
        <>
          {availableUserOptions.map((emp) => (
            <Option key={emp._id} onClick={() => handleSelect(emp)}>
              {emp.firstName || emp.lastName || emp.email || ""}
            </Option>
          ))}
        </>
      }
    />
  )
}
