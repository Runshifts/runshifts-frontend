import React from "react";

function Cards() {
  return (
    <div className="flex items-center justify-center flex-col m-12 md:flex-row">
      <div className="w-[321px] h-[272px] my-4 mx-2 bg-white rounded-lg shadow-md flex flex-col items-center justify-center">
        <div className="bg-[#449522] rounded-full p-2.5 mb-4">
          <BookSvg />
        </div>
        <h1 className="text-xl text-[#36322F] font-medium leading-6 tracking-normal text-left p-2">
          Resources
        </h1>
        <p className="text-sm text-[#706763] font-normal leading-6 tracking-normal text-center">
          Check our free resources & tutorials on how to get started with
          Runshifts.
        </p>
      </div>

      <div className="w-[321px] h-[272px] mx-2 bg-white rounded-lg shadow-md flex flex-col items-center justify-center">
        <div className="bg-[#449522] rounded-full p-2.5 mb-4">
          <HeadphoneSvg />
        </div>
        <h1 className="text-xl text-[#36322F] font-medium leading-6 tracking-normal text-left p-2">
          Contact us
        </h1>
        <p className="text-sm text-[#706763] font-normal leading-6 tracking-normal text-center">
          Contact our support team. we’ll do everything to help you.
        </p>
      </div>
    </div>
  );
}

export default Cards;

function BookSvg() {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 29.44C16.1 29.44 15.7 29.3467 15.3667 29.16C12.8733 27.8 8.48667 26.36 5.74001 26L5.35334 25.9467C3.60667 25.7333 2.16667 24.0933 2.16667 22.32V6.21332C2.16667 5.15999 2.58001 4.19999 3.34001 3.50666C4.10001 2.81332 5.08667 2.47999 6.12667 2.57332C9.06001 2.79999 13.4867 4.26666 15.9933 5.83999L16.3133 6.02666C16.4067 6.07999 16.6067 6.07999 16.6867 6.03999L16.9 5.90666C19.4067 4.33332 23.8333 2.83999 26.78 2.58666C26.8067 2.58666 26.9133 2.58666 26.94 2.58666C27.9133 2.49332 28.9133 2.83999 29.66 3.53332C30.42 4.22666 30.8333 5.18666 30.8333 6.23999V22.3333C30.8333 24.12 29.3933 25.7467 27.6333 25.96L27.1933 26.0133C24.4467 26.3733 20.0467 27.8267 17.6067 29.1733C17.2867 29.36 16.9 29.44 16.5 29.44ZM5.80667 4.55999C5.38001 4.55999 4.99334 4.70666 4.68667 4.98666C4.35334 5.29332 4.16667 5.73332 4.16667 6.21332V22.32C4.16667 23.1067 4.84667 23.8667 5.60667 23.9733L6.00667 24.0267C9.00667 24.4267 13.6067 25.9333 16.2733 27.3867C16.3933 27.44 16.5667 27.4533 16.6333 27.4267C19.3 25.9467 23.9267 24.4267 26.94 24.0267L27.3933 23.9733C28.1533 23.88 28.8333 23.1067 28.8333 22.32V6.22666C28.8333 5.73332 28.6467 5.30666 28.3133 4.98666C27.9667 4.67999 27.5267 4.53332 27.0333 4.55999C27.0067 4.55999 26.9 4.55999 26.8733 4.55999C24.3267 4.78666 20.22 6.15999 17.98 7.55999L17.7667 7.70666C17.0333 8.15999 15.9933 8.15999 15.2867 7.71999L14.9667 7.53332C12.6867 6.13332 8.58001 4.77332 5.96667 4.55999C5.91334 4.55999 5.86001 4.55999 5.80667 4.55999Z"
        fill="white"
      />
      <path
        d="M16.5 28.32C15.9533 28.32 15.5 27.8667 15.5 27.32V7.32001C15.5 6.77334 15.9533 6.32001 16.5 6.32001C17.0467 6.32001 17.5 6.77334 17.5 7.32001V27.32C17.5 27.88 17.0467 28.32 16.5 28.32Z"
        fill="white"
      />
      <path
        d="M10.8333 12.32H7.83333C7.28666 12.32 6.83333 11.8667 6.83333 11.32C6.83333 10.7733 7.28666 10.32 7.83333 10.32H10.8333C11.38 10.32 11.8333 10.7733 11.8333 11.32C11.8333 11.8667 11.38 12.32 10.8333 12.32Z"
        fill="white"
      />
      <path
        d="M11.8333 16.32H7.83333C7.28666 16.32 6.83333 15.8667 6.83333 15.32C6.83333 14.7733 7.28666 14.32 7.83333 14.32H11.8333C12.38 14.32 12.8333 14.7733 12.8333 15.32C12.8333 15.8667 12.38 16.32 11.8333 16.32Z"
        fill="white"
      />
    </svg>
  );
}

function HeadphoneSvg() {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.92664 30.2667C4.80664 30.2667 2.16664 27.6267 2.16664 24.5067V16.2933C2.09998 12.4 3.53998 8.73334 6.23331 5.98667C8.92664 3.25334 12.54 1.73334 16.4333 1.73334C24.38 1.73334 30.8333 8.2 30.8333 16.1333V24.3467C30.8333 27.52 28.2466 30.1067 25.0733 30.1067C21.9533 30.1067 19.3133 27.4667 19.3133 24.3467V20.6C19.3133 18.6667 20.8333 17.1467 22.7666 17.1467C24.7 17.1467 26.22 18.6667 26.22 20.6V24.64C26.22 25.1867 25.7666 25.64 25.22 25.64C24.6733 25.64 24.22 25.1867 24.22 24.64V20.6C24.22 19.6933 23.4866 19.1467 22.7666 19.1467C21.86 19.1467 21.3133 19.88 21.3133 20.6V24.3467C21.3133 26.3867 23.0333 28.1067 25.0733 28.1067C27.1133 28.1067 28.8333 26.3867 28.8333 24.3467V16.1333C28.8333 9.29334 23.2733 3.73334 16.4333 3.73334C13.0866 3.73334 9.97998 5.02667 7.65998 7.38667C5.33998 9.74667 4.09998 12.9067 4.16664 16.2667V24.5067C4.16664 26.5467 5.88664 28.2667 7.92664 28.2667C9.96664 28.2667 11.6866 26.5467 11.6866 24.5067V20.76C11.6866 19.8533 10.9533 19.3067 10.2333 19.3067C9.32664 19.3067 8.77998 20.04 8.77998 20.76V24.6533C8.77998 25.2 8.32664 25.6533 7.77998 25.6533C7.23331 25.6533 6.77998 25.2 6.77998 24.6533V20.76C6.77998 18.8267 8.29998 17.3067 10.2333 17.3067C12.1666 17.3067 13.6866 18.8267 13.6866 20.76V24.5067C13.6866 27.6267 11.0466 30.2667 7.92664 30.2667Z"
        fill="white"
      />
    </svg>
  );
}
