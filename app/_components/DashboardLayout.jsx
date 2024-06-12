export default function DashboardLayout({ children, links }) {
  return (
    <div className="h-[100dvh] overflow-hidden">
      <div>
        <header className="sticky top-0 inset-x-0 h-[56px] w-full bg-white ">
          header
        </header>
        <div
          className="h-[4px] w-full"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(9, 30, 66, 0.13) 0%, rgba(9, 30, 66, 0.13) 25%, rgba(9, 30, 66, 0.08) 25.01%, rgba(9, 30, 66, 0.00) 100%)",
          }}
        ></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 h-[calc(100dvh-60px)] overflow-hidden">
        <nav className="sticky top-0 h-full col-span-3 col-start-1 flex ">
          <div className="grow bg-[#FAFBFC]">sddsf</div>
          <div
            className="w-[6px] h-full"
            style={{
              opacity: 0.5,
              background:
                "linear-gradient(270deg, #091E42 -340.65%, rgba(9, 30, 66, 0.55) -207.28%, rgba(9, 30, 66, 0.17) -96.18%, rgba(9, 30, 66, 0.00) 97.56%);",
            }}
          ></div>
        </nav>
        <main className="col-span-1 lg:col-span-9 h-[calc(100dvh-60px)] overflow-auto w-full">
          <div className="h-[1000vh] bg-white w-full px-[17.5px] lg:px-[40px] pt-[21px] lg:pt-[24px]">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
