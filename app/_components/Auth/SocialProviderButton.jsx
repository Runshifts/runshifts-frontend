export default function SocialProviderButton({
  Icon = () => <></>,
  text = "",
  ...props
}) {

  return (
    <button {...props} className="w-full max-w-[181px] text-center border border-gray-300 rounded-md font-medium flex gap-4 items-center justify-center p-4">
      <Icon />
      <span className="text-gray-700 text-base leading-[23.2px]">{text}</span>
    </button>
  )
}
