import React from "react";

function Export() {
  return (
    <section>
      <div className="flex items-center justify-center ">
        <button className="bg-[#7ED957] rounded flex items-center jusitfy-center mx-2 px-3 py-1">
          <div>
            <AddSvg />
          </div>
          <p className="text-white text-xs px-2">Add funds</p>
        </button>
        <button className="hidden md:flex items-center justify-center rounded bg-[#091E420A] text-[#42526E] text-xs px-3 py-1">
            <ExportSvg />
          <p className="px-2">Export</p>
        </button>
      </div>
    </section>
  );
}

export default Export;

function ExportSvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.44 7.25C14.25 7.25 14.06 7.18001 13.91 7.03L11.88 5L9.85001 7.03C9.56001 7.32 9.08001 7.32 8.79001 7.03C8.50001 6.74001 8.50001 6.26 8.79001 5.97L11.35 3.41C11.64 3.12 12.12 3.12 12.41 3.41L14.97 5.97C15.26 6.26 15.26 6.74001 14.97 7.03C14.82 7.18001 14.63 7.25 14.44 7.25Z"
        fill="#42526E"
      />
      <path
        d="M11.88 14.93C11.47 14.93 11.13 14.59 11.13 14.18V4.01001C11.13 3.60001 11.47 3.26001 11.88 3.26001C12.29 3.26001 12.63 3.60001 12.63 4.01001V14.18C12.63 14.6 12.29 14.93 11.88 14.93Z"
        fill="#42526E"
      />
      <path
        d="M12 20.75C6.85 20.75 3.25 17.15 3.25 12C3.25 11.59 3.59 11.25 4 11.25C4.41 11.25 4.75 11.59 4.75 12C4.75 16.27 7.73 19.25 12 19.25C16.27 19.25 19.25 16.27 19.25 12C19.25 11.59 19.59 11.25 20 11.25C20.41 11.25 20.75 11.59 20.75 12C20.75 17.15 17.15 20.75 12 20.75Z"
        fill="#42526E"
      />
    </svg>
  );
}

function AddSvg() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 16.1899H9.5C9.09 16.1899 8.75 15.8499 8.75 15.4399C8.75 15.0299 9.09 14.6899 9.5 14.6899H14.5C14.91 14.6899 15.25 15.0299 15.25 15.4399C15.25 15.8499 14.91 16.1899 14.5 16.1899Z" fill="white"/>
    <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V13C11.25 12.59 11.59 12.25 12 12.25C12.41 12.25 12.75 12.59 12.75 13V18C12.75 18.41 12.41 18.75 12 18.75Z" fill="white"/>
    <path d="M5.2 10.4601C5.01 10.4601 4.82 10.3801 4.67 10.2401C4.46 10.0301 4.39 9.70012 4.51 9.42012L6.37 4.98012C6.41 4.89012 6.43 4.83012 6.46 4.78012C7.94 1.37012 9.83 0.540121 13.17 1.82012C13.36 1.89012 13.51 2.04012 13.59 2.23012C13.67 2.42012 13.67 2.63012 13.59 2.82012L10.66 9.62012C10.54 9.89012 10.27 10.0701 9.97 10.0701H7.12C6.55 10.0701 6.01 10.1801 5.49 10.4001C5.4 10.4401 5.3 10.4601 5.2 10.4601ZM10.61 2.75012C9.37 2.75012 8.61 3.56012 7.82 5.40012C7.81 5.43012 7.79 5.46012 7.78 5.49012L6.47 8.60012C6.69 8.58012 6.9 8.57012 7.12 8.57012H9.47L11.88 2.97012C11.41 2.82012 10.99 2.75012 10.61 2.75012Z" fill="white"/>
    <path d="M18.29 10.27C18.22 10.27 18.14 10.26 18.07 10.24C17.7 10.13 17.29 10.07 16.87 10.07H9.97001C9.72001 10.07 9.48001 9.94002 9.34001 9.73002C9.21001 9.52002 9.18001 9.25002 9.28001 9.02002L12.18 2.29002C12.33 1.93002 12.77 1.69002 13.14 1.81002C13.26 1.85002 13.37 1.90002 13.49 1.95002L15.85 2.94002C17.23 3.51002 18.15 4.11002 18.75 4.83002C18.87 4.97002 18.97 5.12002 19.06 5.27002C19.17 5.44002 19.27 5.65002 19.34 5.86002C19.37 5.93002 19.42 6.06002 19.45 6.20002C19.73 7.14002 19.59 8.31002 18.99 9.81002C18.87 10.09 18.59 10.27 18.29 10.27ZM11.11 8.57002H16.88C17.2 8.57002 17.51 8.60002 17.82 8.65002C18.1 7.78002 18.16 7.11002 18 6.57002C17.98 6.48002 17.96 6.44002 17.95 6.40002C17.89 6.24002 17.85 6.15002 17.8 6.07002C17.73 5.96002 17.68 5.87002 17.6 5.78002C17.17 5.26002 16.41 4.78002 15.28 4.32002L13.3 3.49002L11.11 8.57002Z" fill="white"/>
    <path d="M15.9 22.7501H8.1C7.82 22.7501 7.56 22.7301 7.3 22.7001C3.79 22.4601 1.79 20.4601 1.55 16.9101C1.52 16.6901 1.5 16.4201 1.5 16.1501V14.2001C1.5 11.9501 2.84 9.92007 4.91 9.02007C5.61 8.72007 6.36 8.57007 7.13 8.57007H16.89C17.46 8.57007 18.01 8.65007 18.52 8.81007C20.87 9.52007 22.52 11.7401 22.52 14.2001V16.1501C22.52 16.3701 22.51 16.5801 22.5 16.7801C22.28 20.6901 20 22.7501 15.9 22.7501ZM7.12 10.0701C6.55 10.0701 6.01 10.1801 5.49 10.4001C3.97 11.0601 2.99 12.5501 2.99 14.2001V16.1501C2.99 16.3601 3.01 16.5701 3.03 16.7701C3.22 19.6201 4.62 21.0201 7.43 21.2101C7.68 21.2401 7.88 21.2601 8.09 21.2601H15.89C19.19 21.2601 20.81 19.8101 20.97 16.7101C20.98 16.5301 20.99 16.3501 20.99 16.1501V14.2001C20.99 12.3901 19.78 10.7701 18.06 10.2401C17.69 10.1301 17.28 10.0701 16.86 10.0701H7.12Z" fill="white"/>
    <path d="M2.23999 14.95C1.82999 14.95 1.48999 14.61 1.48999 14.2V11.27C1.48999 8.12005 3.71999 5.40005 6.79999 4.80005C7.06999 4.75005 7.34999 4.85004 7.52999 5.06004C7.69999 5.27004 7.74999 5.57005 7.63999 5.82005L5.88999 10C5.80999 10.18 5.66999 10.32 5.49999 10.4C3.97999 11.06 2.99999 12.55 2.99999 14.2C2.98999 14.61 2.65999 14.95 2.23999 14.95ZM5.59999 6.82005C4.31999 7.54005 3.38999 8.80005 3.09999 10.27C3.53999 9.82005 4.04999 9.44004 4.62999 9.16004L5.59999 6.82005Z" fill="white"/>
    <path d="M21.76 14.95C21.35 14.95 21.01 14.61 21.01 14.2C21.01 12.39 19.8 10.77 18.08 10.24C17.88 10.18 17.71 10.04 17.62 9.85002C17.53 9.66002 17.52 9.44002 17.6 9.25002C18.07 8.08002 18.19 7.23002 18 6.57002C17.98 6.48002 17.96 6.44002 17.95 6.40002C17.82 6.11002 17.89 5.77002 18.12 5.55002C18.35 5.33002 18.7 5.28002 18.98 5.43002C21.16 6.57002 22.51 8.81002 22.51 11.27V14.2C22.51 14.61 22.17 14.95 21.76 14.95ZM19.25 9.09002C19.88 9.38002 20.44 9.79002 20.91 10.28C20.72 9.30002 20.25 8.41002 19.56 7.71002C19.51 8.13002 19.41 8.59002 19.25 9.09002Z" fill="white"/>
    </svg>
    
  );
}