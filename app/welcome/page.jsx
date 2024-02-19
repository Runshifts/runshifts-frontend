"use client";
import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function Welcome() {
  const router = useRouter();

  const [businessName, setBusinessName] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setBusinessName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!businessName) {
      setError("Business name is required");
      return;
    }
    try {
      sessionStorage.setItem("businessName", businessName);
      setBusinessName("");
      setError(null);
      router.push("/aboutorg");
    } catch (err) {
      setError("Error creating business");
      console.error(
        "Error creating business:",
        err.message || err.response?.data
      );
    }
  };
  return (
    <>
      <div className="welcome-bg h-screen bg-cover bg-center flex items-center justify-start ">
        <div className="mx-auto mr-4 pr-2 md:pl-8 ml-8 pt-8">
          <div className="w-full max-w-sm ">
            <div className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
              <div className=" bg-white rounded-md">
                <p className="text-xs">STEP 1 OF 3</p>
                <h1 className="py-4 text-3xl font-semibold leading-12 tracking-tight text-left text-[#1B1818]">
                  Welcome to RunShifts
                </h1>

                <p className="text-xs text-gray-800 font-semibold">
                  What is your organization name?
                </p>

                <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-row items-center justify-between w-full pb-4 pt-1">
                      <div className="w-full h-10">
                        <input
                          className="w-full h-full px-5 outline-none rounded-xl border border-gray-200 text-sm bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          type="text"
                          placeholder="Business name"
                          value={businessName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button
                      type="submit"
                      className="bg-[#7ED957] text-white rounded-md w-full p-2"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
