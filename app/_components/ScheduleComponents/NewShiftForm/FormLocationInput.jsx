import DropDown from "../../../_components/AppComps/Dropdown"
import FormInputAndLabel from "./FormInputAndLabel"
import { Option } from "../../../_components/AppComps/Select"
import { useSelector } from "react-redux"

export default function FormLocationInput({
  currentLocation,
  updateCurrentValue,
}) {
  const { locations } = useSelector((store) => store.organization)
  return (
    <DropDown
      styleTrigger={false}
      dropDownTrigger={
        <FormInputAndLabel
          label="Select location"
          inputProps={{
            placeholder: "Select location",
            value: currentLocation?.address || "",
            readOnly: true,
          }}
        />
      }
      dropdownContent={
        <>
          <Option onClick={() => updateCurrentValue(null)}>Location</Option>
          {locations.map((opt) => (
            <Option
              isSelected={currentLocation?.address === opt?.address}
              onClick={() => updateCurrentValue(opt)}
              key={opt._id}
            >
              {opt.address}
            </Option>
          ))}
        </>
      }
    />
  )
}
