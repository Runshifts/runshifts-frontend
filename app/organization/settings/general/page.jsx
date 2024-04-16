"use client";
import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash, FaRegEyeSlash } from "react-icons/fa";
import LogoAvatar from "../Avatar.svg";
import SettingTab from "../page";
import Shiftsmangements from "./ShiftsManagements";
import useAxios from "../../../_hooks/useAxios";
import { UserContext } from "../../../_providers/UserProvider";
import { OrganizationContext } from "../../../_providers/OrganizationProvider";
import AddLocationInputs from './AddLocationInputs'

const General = () => {
  const fetchData = useAxios();

  const { user, updateUser } = useContext(UserContext);
  const { organization } = useContext(OrganizationContext);

  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem("formData");
    return savedFormData
      ? JSON.parse(savedFormData)
      : {
          businessName: organization?.name || "",
          numberOfWorkers: "",
          officeAddress: [],
          image: null,
        };
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleAddAddress = () => {
    setFormData({
      ...formData,
      officeAddress: [...formData.officeAddress, ""],
    });
  };

  const handleAddressChange = (index, value) => {
    const updatedAddresses = [...formData.officeAddress];
    updatedAddresses[index] = value;
    setFormData({ ...formData, officeAddress: updatedAddresses });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formDataWithImage = new FormData();
    formDataWithImage.append("businessName", formData.businessName);
    formDataWithImage.append("numberOfWorkers", formData.numberOfWorkers);
    formDataWithImage.append("officeAddress", formData.officeAddress);
    formDataWithImage.append("image", selectedImage);

    const response = await fetchData(
      `/organizations/:id`,
      "put",
      formDataWithImage
    );

    if (response.statusCode === 200) {
      updateUser(response.user);
      toast.success(response.message || "Successfully updated profile");
    } else {
      toast.error(response.message || "Something went wrong");
    }
  };

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return (
    <section className="p-4">
      <div>
        <SettingTab />
      </div>
      <div className="max-w-md bg-white px-3">
        <form onSubmit={handleFormSubmit}>
          {selectedImage && (
            <div className="mb-2 rounded w-56">
              <Image
                width={89}
                height={89}
                src={URL.createObjectURL(selectedImage)}
                alt="Selected photo"
                className="max-w-full max-h-40 mb-4 rounded-full"
                loading="lazy"
              />
            </div>
          )}
          <div className="">
            <div className="mb-2 rounded max-w-md">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mb-4"
              />
            </div>
          </div>

          <div className="mb-4 flex space-x-2">
            <div className="w-1/2">
              <label
                htmlFor="businessName"
                className="text-xs font-thin my-2 leading-4"
              >
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                placeholder="Gravity hills"
                readOnly
                className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433]"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="numberOfWorkers"
                className="text-xs font-thin my-2 leading-4"
              >
                Number of Workers
              </label>
              <input
        type="text"
        id="numberOfWorkers"
        name="numberOfWorkers"
        placeholder="1-10"
        value={formData.numberOfWorkers}
        onChange={handleInputChange} // Bind onChange event to handleChange function
        className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433]"
      />
            </div>
          </div>
          <label
            htmlFor="officeAddress"
            className="text-xs font-thin my-2 leading-4"
          >
            Office Address
          </label>
          {/* <input
                type="text"
                value={formData.handleAddAddress}
                onChange={(e) => handleAddressChange(index, e.target.value)}
                className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433]"
                placeholder="123 Main St, City"
              /> */}

<AddLocationInputs />

<Shiftsmangements />
        
        </form>
       
      </div>
      <button
        type="submit"
        className="bg-[#7ED957] text-white rounded-md px-4 py-2 mt-4"
      >
        Save
      </button>
    </section>
  );
};

export default General;

function HomeSvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0.5 right-2 text-gray-400"
    >
      <path
        d="M15.65 21.4102C15.22 21.4102 14.79 21.3202 14.44 21.1502L9.19004 18.5202C8.89004 18.3702 8.30004 18.3802 8.01004 18.5502L5.65004 19.9002C4.63004 20.4802 3.58004 20.5602 2.79004 20.0902C1.99004 19.6302 1.54004 18.6902 1.54004 17.5102V7.79016C1.54004 6.88016 2.14004 5.85016 2.93004 5.40016L7.26004 2.92016C7.99004 2.50016 9.10004 2.47016 9.85004 2.85016L15.1 5.48016C15.4 5.63016 15.98 5.61016 16.28 5.45016L18.63 4.11016C19.65 3.53016 20.7 3.45016 21.49 3.92016C22.29 4.38016 22.74 5.32016 22.74 6.50016V16.2302C22.74 17.1402 22.14 18.1702 21.35 18.6202L17.02 21.1002C16.64 21.3002 16.14 21.4102 15.65 21.4102ZM8.64004 16.9202C9.07004 16.9202 9.50004 17.0102 9.85004 17.1802L15.1 19.8102C15.4 19.9602 15.98 19.9402 16.28 19.7802L20.61 17.3002C20.93 17.1202 21.24 16.5802 21.24 16.2202V6.49016C21.24 5.86016 21.06 5.39016 20.73 5.21016C20.41 5.03016 19.91 5.10016 19.37 5.41016L17.02 6.75016C16.29 7.17016 15.18 7.20016 14.43 6.82016L9.18004 4.19016C8.88004 4.04016 8.30004 4.06016 8.00004 4.22016L3.67004 6.70016C3.35004 6.88016 3.04004 7.42016 3.04004 7.79016V17.5202C3.04004 18.1502 3.22004 18.6202 3.54004 18.8002C3.86004 18.9902 4.36004 18.9102 4.91004 18.6002L7.26004 17.2602C7.65004 17.0302 8.15004 16.9202 8.64004 16.9202Z"
        fill="#706763"
      />
      <path
        d="M8.56006 17.75C8.15006 17.75 7.81006 17.41 7.81006 17V4C7.81006 3.59 8.15006 3.25 8.56006 3.25C8.97006 3.25 9.31006 3.59 9.31006 4V17C9.31006 17.41 8.97006 17.75 8.56006 17.75Z"
        fill="#706763"
      />
      <path
        d="M15.73 20.7501C15.32 20.7501 14.98 20.4101 14.98 20.0001V6.62012C14.98 6.21012 15.32 5.87012 15.73 5.87012C16.14 5.87012 16.48 6.21012 16.48 6.62012V20.0001C16.48 20.4101 16.14 20.7501 15.73 20.7501Z"
        fill="#706763"
      />
    </svg>
  );
}
