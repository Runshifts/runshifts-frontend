
export default function FooterStore() {
  return (
    <div className="flex flex-col justify-start items-start md:flex-row">
      <div className="mr-2 mb-3 md:mb-0">
      <button className="bg-[#000] p-[2px] rounded-lg border-2 border-gray-300 inline-block">
      <div className="flex items-start justify-center px-2 mr-4">
            <PlaystoreSvg />
            <div>
              <p className="flex flex-col items-start not-italic text-xs text-white">
                GET IT ON{" "}
                <span className="text-base not-italic font-bold">
                  Google Play
                </span>
              </p>
            </div>
          </div>
        </button>
      </div>

      <div className="mr-2 mb-3 md:mb-0">
      <button className="bg-[#000] p-[2px] rounded-lg border-2 border-gray-300 inline-block">
          <div className="flex items-start justify-center px-2">
            <AppstoreLogo />
            <div>
              <p className="flex flex-col items-start not-italic text-xs text-white">
                DOWNLOAD ON THE{" "}
                <span className="text-base not-italic font-bold">
                  App Store
                </span>
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

function PlaystoreSvg() {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.51514 3.91604V28.8272C3.5153 28.8812 3.53142 28.934 3.56147 28.9789C3.59153 29.0239 3.63417 29.0589 3.68406 29.0797C3.73395 29.1005 3.78887 29.1061 3.84193 29.0958C3.89498 29.0855 3.94381 29.0597 3.9823 29.0218L16.9532 16.3722L3.9823 3.72144C3.94381 3.6835 3.89498 3.65776 3.84193 3.64746C3.78887 3.63715 3.73395 3.64274 3.68406 3.66353C3.63417 3.68431 3.59153 3.71936 3.56147 3.76428C3.53142 3.8092 3.5153 3.86199 3.51514 3.91604ZM22.3918 11.1745L6.12795 2.2141L6.11781 2.20839C5.83764 2.05626 5.57142 2.43532 5.80088 2.65591L18.5499 14.8465L22.3918 11.1745ZM5.80214 30.0886C5.57142 30.3092 5.83764 30.6882 6.11908 30.5361L6.12922 30.5304L22.3918 21.57L18.5499 17.8967L5.80214 30.0886ZM28.9575 14.7876L24.4158 12.2863L20.1454 16.3722L24.4158 20.4563L28.9575 17.9569C30.1929 17.2742 30.1929 15.4702 28.9575 14.7876Z"
        fill="url(#paint0_linear_1776_27223)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1776_27223"
          x1="3.51514"
          y1="16.3722"
          x2="29.884"
          y2="16.3722"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFA319" />
          <stop offset="0.505" stop-color="#3FFF2E" />
          <stop offset="1" stop-color="#A42FFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function AppstoreLogo() {
  return (
    <svg
      width="34"
      height="33"
      viewBox="0 0 34 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.8792 2.17383C9.03564 2.17383 2.68045 8.52902 2.68045 16.3725C2.68045 24.2161 9.03564 30.5713 16.8792 30.5713C24.7227 30.5713 31.0779 24.2161 31.0779 16.3725C31.0779 8.52902 24.7227 2.17383 16.8792 2.17383ZM11.4913 22.5775C11.4041 22.7261 11.2794 22.8492 11.1296 22.9343C10.9799 23.0194 10.8103 23.0636 10.6381 23.0624C10.4625 23.0639 10.29 23.0165 10.1398 22.9255C10.0281 22.8607 9.93018 22.7745 9.8518 22.6718C9.77342 22.5691 9.7161 22.4519 9.68311 22.327C9.65013 22.2021 9.64215 22.0719 9.65961 21.9439C9.67707 21.8159 9.71964 21.6926 9.78488 21.5811L10.7541 19.9698C10.803 19.8866 10.8729 19.8177 10.9568 19.7699C11.0406 19.7221 11.1355 19.697 11.232 19.6972H11.3753C12.0782 19.6972 12.5701 20.12 12.7134 20.5295L11.4913 22.5775ZM19.6967 19.4082L13.3498 19.4151H9.13136C8.99864 19.4157 8.86718 19.3893 8.74497 19.3375C8.62276 19.2857 8.51234 19.2097 8.42041 19.114C8.32848 19.0182 8.25695 18.9048 8.21016 18.7806C8.16337 18.6564 8.1423 18.524 8.14822 18.3914C8.16851 17.859 8.63314 17.4558 9.16242 17.4558H12.2202L15.8453 11.2851L14.6714 9.28523C14.4071 8.82948 14.5243 8.22857 14.9776 7.94206C15.0893 7.8698 15.2145 7.82087 15.3456 7.79824C15.4767 7.7756 15.6111 7.77971 15.7406 7.81032C15.8701 7.84093 15.992 7.89741 16.0991 7.97637C16.2062 8.05533 16.2963 8.15513 16.3638 8.26977L16.9914 9.34165H16.9983L17.6265 8.26977C17.6941 8.15572 17.784 8.05646 17.8908 7.9779C17.9976 7.89934 18.1192 7.84309 18.2482 7.8125C18.3772 7.78192 18.5111 7.77763 18.6418 7.79989C18.7725 7.82215 18.8974 7.8705 19.009 7.94206C19.4597 8.22857 19.5757 8.82948 19.3094 9.28713L18.1355 11.287L16.9945 13.2323L14.5167 17.4577V17.4647H18.1685C18.6261 17.4647 19.1998 17.7106 19.4318 18.1062L19.4521 18.1474C19.6568 18.4954 19.7728 18.7344 19.7728 19.0823C19.7694 19.1953 19.7443 19.3066 19.6986 19.4101L19.6967 19.4082ZM24.6251 19.4151H22.9067V19.4221L24.163 21.5589C24.2981 21.7839 24.3395 22.053 24.2782 22.3083C24.2169 22.5635 24.0578 22.7845 23.8353 22.9236C23.681 23.0177 23.5038 23.0674 23.3231 23.0675C23.1513 23.0674 22.9825 23.0229 22.8329 22.9383C22.6834 22.8536 22.5584 22.7318 22.4699 22.5845L20.6133 19.424L19.4597 17.459L17.9713 14.9146C17.7558 14.5513 17.6386 14.1381 17.6314 13.7157C17.6241 13.2934 17.7271 12.8764 17.9301 12.5059C18.2242 11.9868 18.4493 11.8505 18.4493 11.8505L21.76 17.4501H24.6067C25.1391 17.4501 25.5962 17.8596 25.6209 18.3851C25.626 18.5187 25.6041 18.6519 25.5564 18.7768C25.5087 18.9018 25.4363 19.0157 25.3435 19.1119C25.2506 19.2082 25.1393 19.2846 25.0162 19.3367C24.8931 19.3888 24.7607 19.4155 24.627 19.4151H24.6251Z"
        fill="url(#paint0_linear_1776_27229)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1776_27229"
          x1="2.68045"
          y1="16.3725"
          x2="31.0779"
          y2="16.3725"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFA319" />
          <stop offset="0.505" stop-color="#3FFF2E" />
          <stop offset="1" stop-color="#A42FFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}