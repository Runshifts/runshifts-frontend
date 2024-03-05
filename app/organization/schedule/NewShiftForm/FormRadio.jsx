
import CheckMark from '../../../_assets/svgs/CheckMark';


export default function FormRadio({ selected, label, handleChange, name }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-[13px] text-[#303030] font-[400] py-2 leading-[20px]">
      <span className="flex">
        <input
          checked={selected}
          name={name}
          onChange={(e) => handleChange(e.target.checked)}
          type="checkbox"
          className="sr-only"
        />
        <span
          className={`${
            selected ? "bg-primary-600 text-white" : ""
          } hover:bg-primary-100 p-[3px] border-[0.66px] border-solid border-[#8A8A8A] w-[16px] h-[16px] rounded-[4px] inline-flex items-center justify-center`}
        >
          {selected && <CheckMark />}
        </span>
      </span>
      <span className="first-letter:uppercase">
        {label}
      </span>
    </label>
  )
}