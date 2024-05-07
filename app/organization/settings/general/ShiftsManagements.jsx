import React from "react";
import Options from "./Options";
import { RiDeleteBinLine } from "react-icons/ri";

const ShiftsManagementForm = ({
  handleShiftTimeChange,
  shiftManagementEnabled,
  setShiftManagementEnabled,
  defaultShiftManagements,
  deleteCustomShift,
  addCustomShift,
  customShiftManagements,
  setShiftManagement,
  timeChange,
}) => {

  return (
    <div>
      <div className="flex justify-between items-center my-2">
        <div>
          <p className="text-base font-normal leading-5">
            Enable Shifts Management
          </p>
        </div>
        <div>
          <label className="relative inline-flex items-end me-5 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={shiftManagementEnabled}
              onChange={(e) => setShiftManagementEnabled(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          </label>
        </div>
      </div>
      <hr />

      {defaultShiftManagements.map((defaultShift, index) => (
        <div key={index}>
          <h1 className="m-2 text-sm font-semibold leading-5">
            {defaultShift.name}
          </h1>
          <div className="mb-4 flex space-x-2">
            <div className="w-1/2 flex flex-col">
              <label
                htmlFor={`startHour_${index}`}
                className="text-xs font-thin m-2 leading-4"
              >
                Start Time
              </label>
              <Options
                id={`startHour_${index}`}
                disabled={!shiftManagementEnabled}
                value={`${defaultShift.startHour}:${defaultShift.minutes}`}
                onChange={(e) =>
                  handleShiftTimeChange(defaultShift, e.target.value)
                }
              />
            </div>
            <div className="w-1/2 flex flex-col">
              <label
                htmlFor={`stopHour_${index}`}
                className="text-xs font-thin my-2 leading-4"
              >
                Stop Time
              </label>
              <Options
                id={`stopHour_${index}`}
                disabled={true}
                value={`${defaultShift.endHour}:${defaultShift.minutes}`}
              />
            </div>
          </div>
        </div>
      ))}

      {customShiftManagements.map((customShift, index) => (
        <div key={index} className="mb-4 ">
          <h1 className="m-2 text-sm font-semibold leading-5">
            Custom shift
          </h1>
          <div className="flex space-x-2">
            <div className="w-1/2 flex flex-col">
              <label
                htmlFor={`customStartHour_${index}`}
                className="text-xs font-thin m-2 leading-4"
              >
                Start Time
              </label>
              <Options
                id={`customStartHour_${index}`}
                disabled={!shiftManagementEnabled}
                value={`${customShift.startHour}:${customShift.minutes}`}
                onChange={(e) => {
                  const newCustomShiftManagements = customShiftManagements.map(
                    (custom, id) => {
                      if (id === index) {
                        return timeChange(e.target.value);
                      }
                      return custom;
                    }
                  );
                  setShiftManagement(newCustomShiftManagements);
                }}
              />
            </div>

            <div className="w-1/2 flex flex-col">
              <label
                htmlFor={`customStopHour_${index}`}
                className="text-xs font-thin my-2 leading-4"
              >
                Stop Time
              </label>
              <Options
                id={`customStopHour_${index}`}
                disabled={true}
                value={`${customShift.endHour}:${customShift.minutes}`}
              />
            </div>
          </div>

          <button type="button" onClick={() => deleteCustomShift(index)}>
            <RiDeleteBinLine />
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addCustomShift}
        className="bg-[#7ED957] text-white rounded-md m-2 px-4 py-2"
      >
        + Add Custom Time
      </button>
    </div>
  );
};

export default ShiftsManagementForm;