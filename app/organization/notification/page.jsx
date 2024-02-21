import React from "react";

function page() {
   
  return (
    <section className="w-1/2 p-3">

      <div className="bg-white flex items-start rounded-xl shadow-xl my-2">
        <div className="bg-[#FCD4CA] rounded-l-lg flex w-12 flex-col justify-center items-center flex-shrink-0 self-stretch">
          <FailedSvg />
        </div>
        <div className="flex justify-between p-4 items-between">
          <div>
            <h1 className="text-gray-900 text-sm not-italic font-semibold">
              Payment was unsuccessful
            </h1>
            <p className="text-gray-700 text-xs not-italic font-normal">
              Review this week&apos;s wages to fix error
            </p>
          </div>
          <div className="ml-18">
            <XSvg />
          </div>
        </div>
      </div>
      
      <div className="bg-white flex items-center rounded-xl shadow-xl my-2">
        <div className="bg-[#FCD4CA] rounded-l-lg flex w-12 flex-col justify-center items-center flex-shrink-0 self-stretch">
          <FailedSvg />
        </div>
        <div className="flex justify-around p-4 items-center">
          <div>
            <h1 className="text-gray-900 text-sm not-italic font-semibold">
            Andrea Nicolas Right to work ends 2 weeks 
            </h1>
            <p className="text-gray-700 text-xs not-italic font-normal">
            Check Andrea Nicolas right to work now
            </p>
            <button className="flex h-6 items-center bg-[#FAA995] text-[#B22A09] px-2 py-1 rounded-sm ">
                View
            </button>
          </div>
          <div>
            <XSvg />
          </div>
        </div>
      </div>

      <div className="bg-white flex items-center rounded-xl shadow-xl">
        <div className="bg-[#FFEECC] rounded-l-lg flex w-12 flex-col justify-center items-center flex-shrink-0 self-stretch">
          <WarningSvg />
        </div>
        <div className="flex justify-around p-4 items-center">
          <div>
            <h1 className="text-gray-900 text-sm not-italic font-semibold">
            Andrea Nicolas Right to work ends 3 months 
            </h1>
            <p className="text-gray-700 text-xs not-italic font-normal">
            Some important information will appear here
            </p>
          </div>
          <div>
            <XSvg />
          </div>
        </div>
      </div>

      <div className="bg-white flex items-center rounded-xl shadow-xl my-2">
        <div className="bg-[#FFEECC] rounded-l-lg flex w-12 flex-col justify-center items-center flex-shrink-0 self-stretch">
          <WarningSvg />
        </div>
        <div className="flex justify-around p-4 items-center">
          <div>
            <h1 className="text-gray-900 text-sm not-italic font-semibold">
            Cooler Caution Snackbar            </h1>
            <p className="text-gray-700 text-xs not-italic font-normal">
            Some important information will appear here
            </p>
            <button className="flex h-6 items-center bg-[#FFEECC] text-[#FFAB00] px-2 py-1 ">
                View
            </button>
          </div>
          <div>
            <XSvg />
          </div>
        </div>
      </div>

      <div className="bg-white flex items-center rounded-xl shadow-xl my-2">
        <div className="bg-[#E5F7DD] rounded-l-lg flex w-12 flex-col justify-center items-center flex-shrink-0 self-stretch">
          <CheckedSvg />
        </div>
        <div className="flex justify-around p-4 items-center">
          <div>
            <h1 className="text-gray-900 text-sm not-italic font-semibold">
            Cooler Caution Snackbar            </h1>
            <p className="text-gray-700 text-xs not-italic font-normal">
            Some important information will appear here            </p>
           
          </div>
          <div>
            <XSvg />
          </div>
        </div>
      </div>

      <div className="bg-white flex items-center rounded-xl shadow-xl">
        <div className="bg-[#E5F7DD] rounded-l-lg flex w-12 flex-col justify-center items-center flex-shrink-0 self-stretch">
          <CheckedSvg />
        </div>
        <div className="flex justify-around p-4 items-center">
          <div>
            <h1 className="text-gray-900 text-sm not-italic font-semibold">
            Wages for this week is successfully disbursed           
            </h1>
            <p className="text-gray-700 text-xs not-italic font-normal">
            Some important information will appear here            
            </p>
            <button className="flex h-6 items-center bg-[#E5F7DD] text-[#449522]  px-2 py-1 rounded-sm ">
                View
            </button>
          </div>
          <div>
            <XSvg />
          </div>
        </div>
      </div>

      <div className="bg-white flex items-center rounded-xl shadow-xl my-2">
        <div className="bg-[#D5DBE6] rounded-l-lg flex w-12 flex-col justify-center items-center flex-shrink-0 self-stretch">
          <MoreSvg />
        </div>
        <div className="flex justify-around p-4 items-center">
          <div>
            <h1 className="text-gray-900 text-sm not-italic font-semibold">
            Andrea Nicolas Right to work ends 6 months 
            </h1>
            <p className="text-gray-700 text-xs not-italic font-normal">
            Some important information will appear here            </p>
           
          </div>
          <div>
            <XSvg />
          </div>
        </div>
      </div>

      <div className="bg-white flex items-center rounded-xl shadow-xl">
        <div className="bg-[#D5DBE6] rounded-l-lg flex w-12 flex-col justify-center items-center flex-shrink-0 self-stretch">
          <MoreSvg />
        </div>
        <div className="flex justify-around p-4 items-center">
          <div>
            <h1 className="text-gray-900 text-sm not-italic font-semibold">
            Cooler Info Snackbar          
            </h1>
            <p className="text-gray-700 text-xs not-italic font-normal">
            Some important information will appear here            
            </p>
            <button className="flex h-6 items-center bg-[#E5F7DD] text-[#449522]  px-2 py-1 rounded-sm ">
                View
            </button>
          </div>
          <div>
            <XSvg />
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;

function FailedSvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22H2.9937C2.11018 22 1.66771 20.9229 2.29245 20.2929L4.2495 18.3195C2.84334 16.597 2 14.397 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.2071 8.79289C15.5976 9.18342 15.5976 9.81658 15.2071 10.2071L13.4142 12L15.2071 13.7929C15.5976 14.1834 15.5976 14.8166 15.2071 15.2071C14.8166 15.5976 14.1834 15.5976 13.7929 15.2071L12 13.4142L10.2071 15.2071C9.81658 15.5976 9.18342 15.5976 8.79289 15.2071C8.40237 14.8166 8.40237 14.1834 8.79289 13.7929L10.5858 12L8.79289 10.2071C8.40237 9.81658 8.40237 9.18342 8.79289 8.79289C9.18342 8.40237 9.81658 8.40237 10.2071 8.79289L12 10.5858L13.7929 8.79289C14.1834 8.40237 14.8166 8.40237 15.2071 8.79289Z"
        fill="#DE350B"
      />
    </svg>
  );
}

function XSvg() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.295 2.115C13.6844 1.72564 13.6844 1.09436 13.295 0.705C12.9056 0.315639 12.2744 0.315639 11.885 0.705L7 5.59L2.115 0.705C1.72564 0.315639 1.09436 0.315639 0.705 0.705C0.315639 1.09436 0.315639 1.72564 0.705 2.115L5.59 7L0.705 11.885C0.315639 12.2744 0.315639 12.9056 0.705 13.295C1.09436 13.6844 1.72564 13.6844 2.115 13.295L7 8.41L11.885 13.295C12.2744 13.6844 12.9056 13.6844 13.295 13.295C13.6844 12.9056 13.6844 12.2744 13.295 11.885L8.41 7L13.295 2.115Z"
        fill="black"
      />
    </svg>
  );
}

function WarningSvg() {
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22H2.9937C2.11018 22 1.66771 20.9229 2.29245 20.2929L4.2495 18.3195C2.84334 16.597 2 14.397 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.99 8C12.99 7.44772 12.5446 7 11.995 7C11.4455 7 11 7.44772 11 8V12C11 12.5523 11.4455 13 11.995 13C12.5446 13 12.99 12.5523 12.99 12V8ZM11.995 15C11.4455 15 11 15.4477 11 16C11 16.5523 11.4455 17 11.995 17H12.005C12.5545 17 13 16.5523 13 16C13 15.4477 12.5545 15 12.005 15H11.995Z" fill="#FFAB00"/>
</svg>
    )
}

function CheckedSvg() {
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 10C20 15.5228 15.5228 20 10 20H0.993697C0.110179 20 -0.332289 18.9229 0.292453 18.2929L2.2495 16.3195C0.843343 14.597 1.21409e-08 12.397 1.21409e-08 10C1.21409e-08 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.48043 12.8946 8.73478 13 9 13C9.26522 13 9.51957 12.8946 9.70711 12.7071L13.7071 8.70711Z" fill="#449522"/>
</svg>

    )
}

function MoreSvg() {
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 2.11188e-08 4.47715 2.11188e-08 10C2.11188e-08 12.397 0.843343 14.597 2.2495 16.3195L0.292453 18.2929C-0.332289 18.9229 0.110179 20 0.993697 20H10ZM5.5 8C5.5 7.44772 5.94772 7 6.5 7H13.5C14.0523 7 14.5 7.44772 14.5 8C14.5 8.55229 14.0523 9 13.5 9H6.5C5.94772 9 5.5 8.55229 5.5 8ZM6.5 11C5.94772 11 5.5 11.4477 5.5 12C5.5 12.5523 5.94772 13 6.5 13H9.5C10.0523 13 10.5 12.5523 10.5 12C10.5 11.4477 10.0523 11 9.5 11H6.5Z" fill="#42526E"/>
</svg>

    )
}
