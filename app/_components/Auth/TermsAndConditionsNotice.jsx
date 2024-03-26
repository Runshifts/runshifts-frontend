import Link from "next/link";


export default function TermsAndConditionsNotice(){
  return (
    <p className="text-[#303030] leading-[150%] text-[13px] font-[400]">
      By clicking create account, you accept our&nbsp;
      <Link href="/terms" className="text-info-400 underline">
        Terms
      </Link>
      &nbsp;&amp;&nbsp;
      <Link href="/policy" className="text-info-400 underline">
        Policy
      </Link>
    </p>
  )
}