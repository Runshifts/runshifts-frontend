"use client";
import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

export default function AddDynamicInputFields({
  officeAddress,
  handleAddressChange,
  handleAddAddress,
  handleRemoveAddress,
}) {
  return (
    <div className="container">
      <div className="mb-4">
        {officeAddress.map((address, index) => (
          <div key={index}>
            <input
              type="text"
              value={address.address}
              onChange={(e) => handleAddressChange(index, e.target.value)}
              className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433]"
              placeholder="123 Main St, City"
            />
            {officeAddress.length > 1 && (
              <button type="button" onClick={() => handleRemoveAddress(index)}>
                <RiDeleteBinLine />
              </button>
            )}
          </div>
        ))}

        {/* {formData.officeAddress.map((address, index) => (
          <div key={index}>
            <input
              type="text"
              value={address}
              onChange={(e) => handleAddressChange(index, e.target.value)}
              className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433]"
              placeholder="123 Main St, City"
            />
            <button onClick={() => handleRemoveAddress(index)}>
              <RiDeleteBinLine />
            </button>
          </div>
        ))} */}
      </div>
      <button
        type="button"
        onClick={handleAddAddress}
        className="bg-[#7ED957] text-white rounded-md px-4 py-2 mt-4"
      >
        + Add Location
      </button>
    </div>
  );
}
