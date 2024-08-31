import { useSelector } from "react-redux"
import FormInputAndLabel, {
  FormMultipleSelectInputAndLabel,
} from "./FormInputAndLabel"
import DropDown from "../../../_components/AppComps/Dropdown"
import { Option } from "../../../_components/AppComps/Select"
import { useMemo } from "react"

export default function PositionInput({
  defaultAssignee,
  selectedPositions = [],
  handleSelect,
  deselectPosition,
}) {
  const { positions } = useSelector((store) => store.organization)
  const availableRoleOptions = useMemo(
    () =>
      positions.filter(
        (role) =>
          JSON.stringify(selectedPositions)?.includes(role._id) === false
      ),
    [positions, selectedPositions]
  )

  if (defaultAssignee)
    return (
      <FormInputAndLabel
        label="Position"
        inputProps={{
          placeholder: "Choose position",
          readOnly: true,
          value: defaultAssignee?.position?.name || "",
        }}
      />
    )
  return (
    <DropDown
      disabled={availableRoleOptions.length === 0}
      dropDownTrigger={
        <FormMultipleSelectInputAndLabel
          label="Choose Position"
          placeholder={
            positions.length > 0 ? "Choose Position" : "No positions available"
          }
          selectedOptions={selectedPositions}
          handleDeselect={deselectPosition}
          getDisplayValue={(option) => option.name}
        />
      }
      dropdownContent={
        <>
          {availableRoleOptions.map((role) => (
            <Option key={role._id} onClick={() => handleSelect(role)}>
              {role.name}
            </Option>
          ))}
        </>
      }
    />
  )
}
