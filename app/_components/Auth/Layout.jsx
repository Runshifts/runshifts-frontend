import React from 'react';

export default function AuthLayout({ bgClassName, children, className, cardMaxW }) {
  return (
    <>
      <div
        className={`${bgClassName} bg-cover bg-no-repeat min-h-screen bg-center flex items-center justify-start px-[5.6%] auth-layout-bg`}
      >
        <div
          className={`${
            cardMaxW || "max-w-[454px]"
          } w-full bg-white rounded-[16px] px-[24px] md:px-8 py-7 md:py-[64px]`}
        >
          {children}
        </div>
      </div>
    </>
  );
}