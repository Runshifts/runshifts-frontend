export default function SocialProviderButton({
  Icon = () => <></>,
  text = "",
  ...props
}) {

  return (
    <button type="button" {...props} className="w-full max-w-[181px] text-center border border-gray-300 rounded-md font-medium flex gap-1 md:gap-4 items-center justify-center p-2 md:p-4 hover:bg-gray-100 transition-all">
      <Icon />
      <span className="whitespace-nowrap text-gray-700 text-base leading-[23.2px]">{text}</span>
    </button>
  )
}
