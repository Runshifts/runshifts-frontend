import Image from "next/image"
import placeholderImage from "../../_assets/img/user.png"
import MoreSvg from "../../_assets/svgs/More"

export default function TrackerTableSkeleton({ headings = [] }) {
  return (
    <>
      <table className="animate-pulse min-w-full rounded-lg shadow-lg">
        <thead className="bg-[#F8F9FC]">
          <tr>
            {headings.map((heading, idx, arr) => (
              <th
                key={idx}
                style={{ width: idx > 0 ? "24px" : "auto" }}
                className="px-2 py-[13px] text-start text-sm text-[#1D2433] font-thin"
              >
                {heading}
              </th>
            ))}
            <th></th>
          </tr>
          <EmployeeRowSkeleton isOdd={false} rows={headings} />
          <EmployeeRowSkeleton isOdd={true} rows={headings} />
          <EmployeeRowSkeleton isOdd={false} rows={headings} />
        </thead>
        <tbody></tbody>
      </table>
    </>
  )
}

function EmployeeRowSkeleton({ isOdd, rows = [] }) {
  return (
    <tr style={{ backgroundColor: isOdd ? "#F8F9FC" : "#FFFFFF" }}>
      <td className="py-[10px] px-2">
        <div className="flex gap-x-2 items-center justify-start leading-[20px] text-[#1D2433] text-[14px] font-[400] capitalize">
          <Image
            height={24}
            width={24}
            src={placeholderImage}
            alt=""
            className="w-[24px] h-[24px] object-cover rounded-full"
          />
          <div className="w-[60px] bg-info-200 h-[8px]"></div>
          <div className="w-[60px] bg-info-100 h-[8px]"></div>
        </div>
      </td>
      {rows.map((row, idx) => (
        <td key={idx}></td>
      ))}
      <td className="w-[28px] h-[40px]">
        <MoreSvg />
      </td>
    </tr>
  )
}
