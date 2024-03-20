import React from "react";

function TotalCards() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2">
        <div className="bg-[#E5F7DD] rounded-xl p-6">
          <div className=" bg-[#CBF0BC] rounded-full flex w-12 h-12 p-2 justify-center items-center">
            <UserSvg />
          </div>
          <h1 className="text-gray-800 text-2xl not-italic font-medium leading-10">
            2,547
          </h1>
          <p className="text-gray-700 text-xs not-italic font-medium leading-6">
            Total no of employees
          </p>
        </div>

        <div className="bg-[#E5F7DD] rounded-xl p-6">
          <div className=" bg-[#CBF0BC] rounded-full flex w-12 h-12 p-2 justify-center items-center">
            <ClockSvg />
          </div>
          <h1 className="text-gray-800 text-2xl not-italic font-medium leading-10">
            3,404
          </h1>
          <p className="text-gray-700 text-xs not-italic font-medium leading-6">
            Total number of hours worked
          </p>
        </div>
      </div>
    </section>
  );
}

export default TotalCards;

function UserSvg() {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4986 14.3118C10.1522 14.3118 7.42871 11.5883 7.42871 8.24197C7.42871 4.89563 10.1522 2.17212 13.4986 2.17212C16.8449 2.17212 19.5684 4.89563 19.5684 8.24197C19.5684 11.5883 16.8449 14.3118 13.4986 14.3118ZM13.4986 3.75556C11.0284 3.75556 9.01215 5.7718 9.01215 8.24197C9.01215 10.7121 11.0284 12.7284 13.4986 12.7284C15.9687 12.7284 17.985 10.7121 17.985 8.24197C17.985 5.7718 15.9687 3.75556 13.4986 3.75556Z"
        fill="#2D6316"
      />
      <path
        d="M22.567 24.8681C22.1342 24.8681 21.7753 24.5092 21.7753 24.0764C21.7753 20.4345 18.0595 17.4787 13.4992 17.4787C8.93889 17.4787 5.22309 20.4345 5.22309 24.0764C5.22309 24.5092 4.86417 24.8681 4.43137 24.8681C3.99856 24.8681 3.63965 24.5092 3.63965 24.0764C3.63965 19.5688 8.06272 15.8953 13.4992 15.8953C18.9357 15.8953 23.3587 19.5688 23.3587 24.0764C23.3587 24.5092 22.9998 24.8681 22.567 24.8681Z"
        fill="#2D6316"
      />
    </svg>
  );
}

function UserCheckSvg() {
  return (
    <svg
      width="26"
      height="27"
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8316 14.3118C9.48523 14.3118 6.76172 11.5883 6.76172 8.24197C6.76172 4.89563 9.48523 2.17212 12.8316 2.17212C16.1779 2.17212 18.9014 4.89563 18.9014 8.24197C18.9014 11.5883 16.1779 14.3118 12.8316 14.3118ZM12.8316 3.75556C10.3614 3.75556 8.34516 5.7718 8.34516 8.24197C8.34516 10.7121 10.3614 12.7284 12.8316 12.7284C15.3017 12.7284 17.318 10.7121 17.318 8.24197C17.318 5.7718 15.3017 3.75556 12.8316 3.75556Z"
        fill="#2D6316"
      />
      <path
        d="M3.76438 24.8681C3.33157 24.8681 2.97266 24.5092 2.97266 24.0764C2.97266 19.5688 7.39572 15.8953 12.8322 15.8953C13.8984 15.8953 14.9434 16.0325 15.9568 16.3175C16.3791 16.4337 16.6219 16.8664 16.5058 17.2887C16.3897 17.7109 15.9568 17.9538 15.5346 17.8376C14.669 17.5948 13.7611 17.4787 12.8322 17.4787C8.27189 17.4787 4.5561 20.4345 4.5561 24.0764C4.5561 24.5092 4.19718 24.8681 3.76438 24.8681Z"
        fill="#2D6316"
      />
      <path
        d="M19.1656 24.868C17.4133 24.868 15.7665 23.9391 14.8798 22.4296C14.4047 21.6695 14.1514 20.7722 14.1514 19.8538C14.1514 18.3126 14.8375 16.8875 16.0304 15.9374C16.9171 15.2302 18.0361 14.8396 19.1656 14.8396C21.9313 14.8396 24.1798 17.0881 24.1798 19.8538C24.1798 20.7722 23.9265 21.6695 23.4514 22.4401C23.1875 22.8835 22.8497 23.2846 22.4486 23.6224C21.5724 24.4247 20.4007 24.868 19.1656 24.868ZM19.1656 16.423C18.3844 16.423 17.6455 16.6869 17.0227 17.1831C16.2098 17.827 15.7348 18.8088 15.7348 19.8538C15.7348 20.4766 15.9037 21.0889 16.231 21.6167C16.8432 22.6512 17.9727 23.2846 19.1656 23.2846C19.9995 23.2846 20.8018 22.9785 21.4141 22.4296C21.6885 22.1973 21.9208 21.9228 22.0897 21.6273C22.4275 21.0889 22.5964 20.4766 22.5964 19.8538C22.5964 17.9643 21.0552 16.423 19.1656 16.423Z"
        fill="#2D6316"
      />
      <path
        d="M18.5627 21.6905C18.3621 21.6905 18.1615 21.6167 18.0032 21.4583L16.9581 20.4133C16.652 20.1071 16.652 19.6004 16.9581 19.2942C17.2642 18.9881 17.7709 18.9881 18.0771 19.2942L18.5838 19.801L20.2728 18.2386C20.5895 17.943 21.0961 17.9642 21.3917 18.2809C21.6873 18.5976 21.6662 19.1043 21.3495 19.3998L19.101 21.4794C18.9427 21.6166 18.7527 21.6905 18.5627 21.6905Z"
        fill="#2D6316"
      />
    </svg>
  );
}

function BuildingSvg() {
  return (
    <svg
      width="26"
      height="27"
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.221 24.8681H5.77598C3.22137 24.8681 1.81738 23.4641 1.81738 20.9095V12.4645C1.81738 9.90984 3.22137 8.50586 5.77598 8.50586H11.0541C11.4869 8.50586 11.8458 8.86477 11.8458 9.29758V20.9095C11.8458 22.5774 12.5531 23.2846 14.221 23.2846C14.6538 23.2846 15.0127 23.6435 15.0127 24.0763C15.0127 24.5091 14.6538 24.8681 14.221 24.8681ZM5.77598 10.0893C4.10809 10.0893 3.40082 10.7966 3.40082 12.4645V20.9095C3.40082 22.5774 4.10809 23.2846 5.77598 23.2846H10.843C10.4629 22.6618 10.2624 21.8701 10.2624 20.9095V10.0893H5.77598Z"
        fill="#2D6316"
      />
      <path
        d="M11.0542 10.0891H5.77609C5.34329 10.0891 4.98438 9.73023 4.98438 9.29743V7.18617C4.98438 5.58162 6.2828 4.2832 7.88735 4.2832H11.1703C11.4131 4.2832 11.6454 4.3993 11.7932 4.58931C11.941 4.78988 11.9937 5.04326 11.9304 5.27549C11.867 5.50773 11.8459 5.77164 11.8459 6.13055V9.29743C11.8459 9.73023 11.487 10.0891 11.0542 10.0891ZM6.56781 8.50571H10.2625V6.13055C10.2625 6.03554 10.2625 5.95109 10.2625 5.86664H7.88735C7.15896 5.86664 6.56781 6.45779 6.56781 7.18617V8.50571Z"
        fill="#2D6316"
      />
      <path
        d="M15.2771 15.3674C14.8443 15.3674 14.4854 15.0085 14.4854 14.5757V9.29758C14.4854 8.86477 14.8443 8.50586 15.2771 8.50586C15.7099 8.50586 16.0688 8.86477 16.0688 9.29758V14.5757C16.0688 15.0085 15.7099 15.3674 15.2771 15.3674Z"
        fill="#2D6316"
      />
      <path
        d="M19.4997 15.3674C19.0669 15.3674 18.708 15.0085 18.708 14.5757V9.29758C18.708 8.86477 19.0669 8.50586 19.4997 8.50586C19.9325 8.50586 20.2914 8.86477 20.2914 9.29758V14.5757C20.2914 15.0085 19.9325 15.3674 19.4997 15.3674Z"
        fill="#2D6316"
      />
      <path
        d="M19.4996 24.8679H15.2771C14.8443 24.8679 14.4854 24.509 14.4854 24.0762V19.8537C14.4854 18.8403 15.3193 18.0063 16.3327 18.0063H18.4439C19.4573 18.0063 20.2913 18.8403 20.2913 19.8537V24.0762C20.2913 24.509 19.9324 24.8679 19.4996 24.8679ZM16.0688 23.2845H18.7079V19.8537C18.7079 19.7059 18.5917 19.5898 18.4439 19.5898H16.3327C16.1849 19.5898 16.0688 19.7059 16.0688 19.8537V23.2845Z"
        fill="#2D6316"
      />
      <path
        d="M6.83176 19.5899C6.39895 19.5899 6.04004 19.231 6.04004 18.7982V14.5757C6.04004 14.1428 6.39895 13.7839 6.83176 13.7839C7.26457 13.7839 7.62348 14.1428 7.62348 14.5757V18.7982C7.62348 19.231 7.26457 19.5899 6.83176 19.5899Z"
        fill="#2D6316"
      />
      <path
        d="M20.555 24.8681H14.2213C11.6667 24.8681 10.2627 23.4641 10.2627 20.9095V6.13072C10.2627 3.5761 11.6667 2.17212 14.2213 2.17212H20.555C23.1097 2.17212 24.5136 3.5761 24.5136 6.13072V20.9095C24.5136 23.4641 23.1097 24.8681 20.555 24.8681ZM14.2213 3.75556C12.5534 3.75556 11.8461 4.46283 11.8461 6.13072V20.9095C11.8461 22.5774 12.5534 23.2846 14.2213 23.2846H20.555C22.2229 23.2846 22.9302 22.5774 22.9302 20.9095V6.13072C22.9302 4.46283 22.2229 3.75556 20.555 3.75556H14.2213Z"
        fill="#2D6316"
      />
    </svg>
  );
}

function ClockSvg() {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4982 24.908C7.96669 24.908 3.46973 20.411 3.46973 14.8795C3.46973 9.34804 7.96669 4.85107 13.4982 4.85107C19.0297 4.85107 23.5266 9.34804 23.5266 14.8795C23.5266 20.411 19.0297 24.908 13.4982 24.908ZM13.4982 6.43451C8.84286 6.43451 5.05317 10.2242 5.05317 14.8795C5.05317 19.5348 8.84286 23.3245 13.4982 23.3245C18.1535 23.3245 21.9432 19.5348 21.9432 14.8795C21.9432 10.2242 18.1535 6.43451 13.4982 6.43451Z"
        fill="#2D6316"
      />
      <path
        d="M13.4988 15.4075C13.0659 15.4075 12.707 15.0486 12.707 14.6157V9.33762C12.707 8.90481 13.0659 8.5459 13.4988 8.5459C13.9316 8.5459 14.2905 8.90481 14.2905 9.33762V14.6157C14.2905 15.0486 13.9316 15.4075 13.4988 15.4075Z"
        fill="#2D6316"
      />
      <path
        d="M16.6655 3.7956H10.3318C9.89895 3.7956 9.54004 3.43668 9.54004 3.00388C9.54004 2.57107 9.89895 2.21216 10.3318 2.21216H16.6655C17.0983 2.21216 17.4572 2.57107 17.4572 3.00388C17.4572 3.43668 17.0983 3.7956 16.6655 3.7956Z"
        fill="#2D6316"
      />
    </svg>
  );
}

function MoneySvg() {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5494 20.1261H7.27045C6.72153 20.1261 6.20426 20.0733 5.73978 19.9678C5.49699 19.9361 5.20142 19.8516 4.89529 19.7355C3.49131 19.2077 1.83398 17.9093 1.83398 14.6791V9.24259C1.83398 5.79069 3.81855 3.80615 7.27045 3.80615H16.5494C19.4629 3.80615 21.3419 5.19955 21.8486 7.73305C21.9436 8.19753 21.9859 8.69366 21.9859 9.24259V14.6791C21.9859 18.1521 20.0119 20.1261 16.5494 20.1261ZM7.28099 5.41072C4.68415 5.41072 3.42796 6.66688 3.42796 9.26372V14.7002C3.42796 16.5898 4.09302 17.751 5.45477 18.2682C5.6659 18.3421 5.86648 18.3949 6.05649 18.4265C6.45763 18.511 6.84818 18.5532 7.28099 18.5532H16.5599C19.1568 18.5532 20.413 17.2971 20.413 14.7002V9.26372C20.413 8.82036 20.3813 8.42977 20.3074 8.07086C19.9485 6.27629 18.724 5.41072 16.5599 5.41072H7.28099Z"
        fill="#2D6316"
      />
      <path
        d="M19.7157 23.293H10.4368C9.53951 23.293 8.73722 23.1663 8.05106 22.9024C6.49929 22.3218 5.48588 21.0973 5.13753 19.345C5.08475 19.0811 5.16922 18.8066 5.35923 18.6272C5.54924 18.4372 5.82371 18.3633 6.08762 18.4266C6.43597 18.5005 6.82655 18.5427 7.26991 18.5427H16.5489C19.1457 18.5427 20.4019 17.2865 20.4019 14.6897V9.25321C20.4019 8.80984 20.3702 8.41926 20.2963 8.06034C20.2436 7.79644 20.328 7.53254 20.5075 7.34253C20.6975 7.15251 20.9614 7.06805 21.2253 7.13139C23.7588 7.64865 25.1522 9.52767 25.1522 12.4201V17.8566C25.1522 21.319 23.1782 23.293 19.7157 23.293ZM7.07991 20.1261C7.41771 20.7384 7.9244 21.1713 8.62111 21.4246C9.12781 21.6146 9.74005 21.7096 10.4473 21.7096H19.7263C22.3231 21.7096 23.5793 20.4534 23.5793 17.8566V12.4201C23.5793 10.7522 23.0621 9.6438 21.9959 9.0632C21.9959 9.12654 21.9959 9.18987 21.9959 9.25321V14.6897C21.9959 18.1416 20.0113 20.1261 16.5594 20.1261H7.28045C7.20655 20.1261 7.14324 20.1261 7.07991 20.1261Z"
        fill="#2D6316"
      />
      <path
        d="M11.9155 15.5554C9.94148 15.5554 8.33691 13.9508 8.33691 11.9768C8.33691 10.0028 9.94148 8.39819 11.9155 8.39819C13.8895 8.39819 15.4941 10.0028 15.4941 11.9768C15.4941 13.9508 13.8895 15.5554 11.9155 15.5554ZM11.9155 9.98163C10.8177 9.98163 9.92035 10.8789 9.92035 11.9768C9.92035 13.0746 10.8177 13.9719 11.9155 13.9719C13.0134 13.9719 13.9106 13.0746 13.9106 11.9768C13.9106 10.8789 13.0134 9.98163 11.9155 9.98163Z"
        fill="#2D6316"
      />
      <path
        d="M5.87668 15.091C5.44387 15.091 5.08496 14.7321 5.08496 14.2993V9.65451C5.08496 9.22171 5.44387 8.86279 5.87668 8.86279C6.30949 8.86279 6.6684 9.22171 6.6684 9.65451V14.2993C6.6684 14.7321 6.32004 15.091 5.87668 15.091Z"
        fill="#2D6316"
      />
      <path
        d="M17.9421 15.091C17.5093 15.091 17.1504 14.7321 17.1504 14.2993V9.65451C17.1504 9.22171 17.5093 8.86279 17.9421 8.86279C18.3749 8.86279 18.7338 9.22171 18.7338 9.65451V14.2993C18.7338 14.7321 18.3855 15.091 17.9421 15.091Z"
        fill="#2D6316"
      />
    </svg>
  );
}
