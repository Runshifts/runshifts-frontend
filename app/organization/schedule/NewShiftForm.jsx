import CheckMark from "../../_assets/svgs/CheckMark"
import DropDown from "../../_components/AppComps/Dropdown"
import { useContext, useState } from "react"
import { LocationsContext } from "../../_providers/LocationsProvider"
import { Option } from "../../_components/AppComps/Select"
import { OrganizationContext } from "../../_providers/OrganizationProvider"

export default function NewShiftForm({ onCancel, employee }) {
  const [shiftData, setShiftData] = useState({
    employee: employee || null,
    location: null,
    shiftManagement: null,
    note: "",
    isGeofencingEnabled: false,
  })
  const { organization } = useContext(OrganizationContext)

  return (
    <section className="w-[95dvw] py-[24px] px-[24px] md:px-[40px] max-w-[576px] bg-white rounded-[16px]">
      <h3 className="text-center font-[600] text-[16px] text-[#1B1818] mb-[14px]">
        Add shift
      </h3>
      <form className="flex gap-y-[16px] flex-col items-start w-full">
        <div className="grid grid-cols-2 w-full gap-[16px]">
          <FormLocationInput />
          <FormInputAndLabel
            label="Select employee"
            inputProps={{
              placeholder: "Select employee",
              readOnly: !employee ? false : true,
            }}
          />
        </div>
        <div className="grid grid-cols-2 w-full gap-[16px]">
          <FormInputAndLabel
            label="Position"
            inputProps={{
              placeholder: "Choose position",
              readOnly: !employee ? false : true,
            }}
          />
          <FormInputAndLabel
            label="Unpaid break"
            inputProps={{ placeholder: "00:00" }}
          />
        </div>
        <fieldset>
          <FormLabelText>Radio group label</FormLabelText>
          <div className="flex gap-2 md:gap-4 flex-wrap">
            <FormRadio selected label="Morning shift" />
            <FormRadio selected label="Afternoon shift" />
            <FormRadio selected label="Evening shift" />
            <FormRadio selected label="Custom" />
          </div>
        </fieldset>
        <div className="grid grid-cols-2 w-full gap-[16px]">
          <DropDown
            styleTrigger={false}
            dropDownTrigger={
              <FormInputAndLabel
                label="Start"
                inputProps={{ placeholder: "00:00" }}
              />
            }
            dropdownContent={<p>hi</p>}
          />
          <DropDown
            styleTrigger={false}
            dropDownTrigger={
              <FormInputAndLabel
                label="End"
                inputProps={{ placeholder: "00:00" }}
              />
            }
            dropdownContent={<p>hi</p>}
          />
        </div>
        <div className="w-full">
          <FormInputAndLabel
            label="Note"
            inputProps={{
              placeholder: "This is a note...",
              value: shiftData.note,
              onChange: (e) =>
                setShiftData((prev) => ({ ...prev, note: e.target.value })),
            }}
          />
        </div>

        <FormRadio
          selected={shiftData.isGeofencingEnabled}
          label="Enable Geofencing"
          name={"enable geofencing"}
          handleChange={() =>
            setShiftData((prev) => ({
              ...prev,
              isGeofencingEnabled: !prev.isGeofencingEnabled,
            }))
          }
        />
        <div className="flex items-stretch gap-2 flex-col w-full -mt-[2px]">
          <button
            type="submit"
            className="bg-primary-500 py-2 px-4 text-white rounded-lg"
          >
            Publish
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="text-[#1E1E1E] font-[500]"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  )
}

function FormLocationInput({ currentLocation, updateCurrentValue,  }) {
  const { locations } = useContext(LocationsContext)
  return (
    <DropDown
      styleTrigger={false}
      dropDownTrigger={
        <FormInputAndLabel
          label="Select location"
          inputProps={{ placeholder: "Select location" }}
        />
      }
      dropdownContent={
        <>
          <Option onClick={() => updateCurrentValue(null)}>Location</Option>
          {locations.map((opt) => (
            <Option
              isSelected={currentLocation?.address === opt?.address}
              onClick={() => updateCurrentValue(opt._id)}
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

function FormInputAndLabel({ inputProps = {}, labelProps = {}, label }) {
  return (
    <label {...labelProps} className="flex items-start flex-col gap-1">
      <FormLabelText>{label}</FormLabelText>
      <input
        {...inputProps}
        className="focus:outline-none border-2 border-solid border-[#DFE1E6] w-full p-[8px] rounded-[3px] placeholder:text-[#7A869A] text-[14px] leading-[20px] font-[400]"
      />
    </label>
  )
}

function FormLabelText({ children }) {
  return (
    <span className="text-[#6B778C] text-[12px] leading-[16px] font-[100]">
      {children}
    </span>
  )
}

function FormRadio({ selected, label, handleChange, name }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-[13px] text-[#303030] font-[400] py-2 leading-[20px]">
      <span>
        <input
          checked={selected}
          name={name}
          onChange={(e) => handleChange(e.target.checked)}
          type="checkbox"
          className="sr-only"
        />
        <span
          className={`${
            selected ? "text-primary-600 bg-primary-100" : ""
          } hover:bg-primary-100 border-[0.66px] border-solid border-[#8A8A8A] w-[16px] h-[16px] rounded-[4px] inline-flex items-center justify-center`}
        >
          {selected && <CheckMark />}
        </span>
      </span>
      {label}
    </label>
  )
}
