import React from 'react'

function Footer() {
  return (
    <div>
          <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-3 px-3 mx-3">
          <EmojiSvg />
          <p>Reply</p>
        </div>

        <div className="flex items-center justify-between  gap-3 px-3 mx-3">
          <PictureSvg />
          <div className="bg-[#5BC62D] rounded-full">
            <ArrowRightSvg />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

function EmojiSvg() {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1055_32824)">
        <path
          d="M9.20962 16.7134C13.1821 16.7134 16.4024 13.4931 16.4024 9.52065C16.4024 5.54819 13.1821 2.32788 9.20962 2.32788C5.23716 2.32788 2.01685 5.54819 2.01685 9.52065C2.01685 13.4931 5.23716 16.7134 9.20962 16.7134Z"
          stroke="#0D082C"
          strokeWidth="1.43855"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.33228 10.9592C6.33228 10.9592 7.41119 12.3978 9.20938 12.3978C11.0076 12.3978 12.0865 10.9592 12.0865 10.9592"
          stroke="#0D082C"
          strokeWidth="1.43855"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.05176 7.36279H7.05961"
          stroke="#0D082C"
          strokeWidth="1.43855"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.3674 7.36279H11.3753"
          stroke="#0D082C"
          strokeWidth="1.43855"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1055_32824">
          <rect
            width="17.2626"
            height="17.2626"
            fill="white"
            transform="translate(0.578125 0.889404)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

function PictureSvg() {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.4">
        <path
          d="M13.9396 3.04688H3.86971C3.07521 3.04688 2.43115 3.69094 2.43115 4.48543V14.5553C2.43115 15.3498 3.07521 15.9939 3.86971 15.9939H13.9396C14.7341 15.9939 15.3781 15.3498 15.3781 14.5553V4.48543C15.3781 3.69094 14.7341 3.04688 13.9396 3.04688Z"
          stroke="black"
          strokeWidth="1.43855"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.7469 8.80118C7.5414 8.80118 8.18546 8.15712 8.18546 7.36263C8.18546 6.56813 7.5414 5.92407 6.7469 5.92407C5.95241 5.92407 5.30835 6.56813 5.30835 7.36263C5.30835 8.15712 5.95241 8.80118 6.7469 8.80118Z"
          stroke="black"
          strokeWidth="1.43855"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.3783 11.6782L13.1586 9.45854C12.8888 9.18885 12.523 9.03735 12.1415 9.03735C11.7601 9.03735 11.3942 9.18885 11.1245 9.45854L4.58911 15.9939"
          stroke="black"
          strokeWidth="1.43855"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

function ArrowRightSvg() {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.55298 13.8362L10.8686 9.5205L6.55298 5.20483"
        stroke="white"
        strokeWidth="1.43855"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}