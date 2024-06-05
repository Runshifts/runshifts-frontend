import Image from "next/image"

export default function SignupTypeCard({ imageSrc, heading, body, onClick }) {
  return (
    <div
      className="border border-[#B8B8B8] rounded-md hover:shadow-md transition-all flex items-center gap-[15px] px-[12px] py-[18px] md:py-[24px] md:px-[42px] cursor-pointer text-left"
      name="signupType"
      value="employer"
      onClick={onClick}
    >
      <Image height={64} width={64} src={imageSrc} alt="" className="" />
      <div>
        <h3 className="text-base md:text-[24px] leading-[150%] text-[#000000CC] font-medium leading-9 tracking-tighter">
          {heading}
        </h3>
        <p className="text-[12px] md:text-base text-[#000000CC] font-sm leading-6 tracking-tighter">
          {body}
        </p>
      </div>
    </div>
  )
}
