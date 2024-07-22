import Image from "next/image"
import { useCallback, useState } from "react"
import placeholderImage from "../../_assets/img/user.png"

export default function DisplayImageInput({ handleChange }) {
  const [file, setFile] = useState(null)

  const handleFileChange = useCallback(
    (e) => {
      if (e.target.files) {
        setFile(e.target.files?.[0])
      }
    },
    [handleChange]
  )
  return (
    <>
      <label>
        <input type="file" className="sr-only" onChange={handleFileChange} />
        <Image
          src={placeholderImage}
          alt=""
          width={86}
          height={86}
          className="w-[86] h-[86] rounded-full object-cover"
        />
        <span className="font-[100] text-[#6B778C] text-[12px]">
          Image size: 100 x 100
        </span>
        <span className="block mt-[2px] cursor-pointer bg-info-100/50 w-fit text-info-500 px-3 py-[2px]">
          Upload your profile image
        </span>
      </label>
    </>
  )
}
