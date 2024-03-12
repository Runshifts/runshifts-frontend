import React from "react";
import Button from "../../_components/AppComps/Button";

function page() {
  return (
    <section className="p-6 h-screen">
      <div className="flex items-center justify-between">
        <h1 className="custom-h1">Shift Management</h1>

        <Button>
          <div className="flex items-center justify-center">
            <PlusSvg />
            <p>Create new ticket</p>
          </div>
        </Button>
      </div>

      <select
        className="bg-[#F4F5F7] border-none text-xs text-[#7A869A] mr-2 h-10 rounded-md md:text-sm "
        aria-label="Default select example"
      >
        <option>Search ticket ID...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      
    </section>
  );
}

export default page;

function PlusSvg() {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 12.75H6.5C6.09 12.75 5.75 12.41 5.75 12C5.75 11.59 6.09 11.25 6.5 11.25H18.5C18.91 11.25 19.25 11.59 19.25 12C19.25 12.41 18.91 12.75 18.5 12.75Z"
        fill="white"
      />
      <path
        d="M12.5 18.75C12.09 18.75 11.75 18.41 11.75 18V6C11.75 5.59 12.09 5.25 12.5 5.25C12.91 5.25 13.25 5.59 13.25 6V18C13.25 18.41 12.91 18.75 12.5 18.75Z"
        fill="white"
      />
    </svg>
  );
}
