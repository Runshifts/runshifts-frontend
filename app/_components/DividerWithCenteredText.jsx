export default function DividerWithCenteredText({ text = "" }) {
  return (
    <div className="relative py-2">
      <p className=" h-[1px] w-full bg-gray-100">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-fit px-2 text-[14px] text-gray-500 leading-[20.3px]">
          {text}
        </span>
      </p>
    </div>
  )
}
