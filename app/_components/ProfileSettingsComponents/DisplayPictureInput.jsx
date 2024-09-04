"use client"
import NextImage from "next/image"
import { useCallback, useState } from "react"
import placeholderImage from "../../_assets/img/user.png"
import toast from "react-hot-toast"

export default function DisplayImageInput({
  handleChange,
  uploadedImg,
  isImageRounded,
  labelText,
}) {
  const [preview, setPreview] = useState("")

  const handleFileChange = useCallback(
    (e) => {
      typeof handleChange === "function" && handleChange(e)
      if (e.target.files) {
        const file = e.target.files[0]
        if (file) {
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = function (e) {
            const image = new Image()
            image.src = e.target.result
            image.onload = function () {
              const height = this.height
              const width = this.width
              if (height > 100 || width > 100) {
                toast.error(
                  `Height and Width of image must not exceed 100px. You uploaded a ${width} x ${height} image.`,
                  { duration: 4000 }
                )
                return false
              }
              setPreview(e.target.result)
              return true
            }
          }
        }
      }
    },
    [handleChange]
  )
  return (
    <>
      <label>
        <input
          accept="image/*"
          type="file"
          className="sr-only"
          onChange={handleFileChange}
        />
        <NextImage
          src={preview || uploadedImg || placeholderImage}
          alt=""
          width={86}
          height={86}
          className={`${
            isImageRounded ? "rounded-full" : "rounded-[6.67px]"
          } w-[86px] h-[86px] object-cover mb-4`}
        />
        <span className="font-[100] text-[#6B778C] text-[12px]">
          Image size: 100 x 100
        </span>
        <span className="block mt-[2px] cursor-pointer bg-info-100/50 w-fit text-info-500 px-3 py-[2px]">
          {labelText}
        </span>
      </label>
    </>
  )
}
