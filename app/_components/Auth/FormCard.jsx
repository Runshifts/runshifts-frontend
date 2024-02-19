export default function FormCard({
  headingText = "",
  subHeadingText,
  children,
}) {
  return (
    <>
      <main className="bg-white flex flex-col items-stretch gap-y-8 py-16 px-10 w-full max-w-[454px] rounded-[16px]">
        <div>
          <h1 className="text-[#1B1818] text-3xl md:text-4xl leading-[43.2px] font-semibold">{headingText}</h1>
          {subHeadingText && <p>{subHeadingText}</p>}
        </div>
        <div>{children}</div>
      </main>
    </>
  )
}
