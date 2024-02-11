'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function About() {
  const router = useRouter();

  const [industry, setIndustry] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!industry || !employeeCount) {
      setError("Please fill out all fields");
      return;
    }

    const URL = "http://localhost:2024/api/v1/organizations";

    try {
      const [minStaffCount, maxStaffCount] = employeeCount.split("-")
      console.log(localStorage.getItem("token"))

      const response = await axios.post(URL, {
        name: sessionStorage.getItem("businessName"),
        industry,
        maxStaffCount,
        minStaffCount,
      },
      {        
        "headers": {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
      }
      );

      console.log(response)
      const data = response.data;

      if (data.statusCode === 201) {
        localStorage.setItem('organization', JSON.stringify(data.organization))
        router.push("/invite-team");
      } else {
        setError("Invalid data. Please check your inputs.");
      }
    } catch (error) {
      console.log(error)
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="about-org-bg h-screen bg-cover bg-center flex items-center justify-start ">
        <div className="mx-auto md:pl-8 ml-8 pt-16">
          <div className="w-full max-w-sm ">
            <div className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
              <div className=" bg-white rounded-md">
                <p className="text-xs">STEP 2 OF 3</p>
                <h1 className="py-2 text-2xl font-semibold leading-12 tracking-tight text-left text-[#1B1818]">
                  Tell us about your organization
                </h1>

                <p className="text-xs text-gray-800 font-bold">
                  What kind of industry are you in?
                </p>

                <form onSubmit={handleSubmit} method="post">
                  <div className="flex flex-col space-y-16">
                    <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs pb-4 pt-1">
                      <div className="relative w-full lg:max-w-sm">
                        <select
                          className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                        >
                          <option value="">Select an industry</option>
                          <option value="Food">Food</option>
                          <option value="Engineering">Engineering</option>
                          <option value="Fashion">Fashion</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-16">
                    <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs pb-4 pt-1">
                      {/* Employee count buttons */}
                      <div className="w-14 h-10 ">
                        <button type="button"
                          className={`w-full h-full flex flex-col items-center justify-center text-center text-xs px-2 outline-none rounded-md border ${
                            employeeCount === "1-10"
                              ? "bg-blue-500 text-white"
                              : "bg-white text-gray-700"
                          }`}
                          onClick={() => setEmployeeCount("1-10")}
                        >
                          1-10
                        </button>
                      </div>
                      <div className="w-14 h-10 ">
                        <button type="button"
                          className={`w-full h-full flex flex-col items-center justify-center text-center text-xs px-2 outline-none rounded-md border ${
                            employeeCount === "11-50"
                              ? "bg-blue-500 text-white"
                              : "bg-white text-gray-700"
                          }`}
                          onClick={() => setEmployeeCount("11-50")}
                        >
                          11-50
                        </button>
                      </div>
                      <div className="w-14 h-10 ">
                        <button type="button"
                          className={`w-full h-full flex flex-col items-center justify-center text-center text-xs px-2 outline-none rounded-md border ${
                            employeeCount === " 51-150"
                              ? "bg-blue-500 text-white"
                              : "bg-white text-gray-700"
                          }`}
                          onClick={() => setEmployeeCount(" 51-150")}
                        >
                          51-150
                        </button>
                      </div>
                      <div className="w-14 h-10 ">
                        <button type="button"
                          className={`w-full h-full flex flex-col items-center justify-center text-center text-xs px-2 outline-none rounded-md border ${
                            employeeCount === "151-499"
                              ? "bg-blue-500 text-white"
                              : "bg-white text-gray-700"
                          }`}
                          onClick={() => setEmployeeCount("151-499")}
                        >
                          151-499
                        </button>
                      </div>
                      <div className="w-14 h-10 ">
                        <button type="button"
                          className={`w-full h-full flex flex-col items-center justify-center text-center text-xs px-2 outline-none rounded-md border ${
                            employeeCount === "500"
                              ? "bg-blue-500 text-white"
                              : "bg-white text-gray-700"
                          }`}
                          onClick={() => setEmployeeCount("500")}
                        >
                          500+
                        </button>
                      </div>
                                          </div>
                  </div>

                  {error && (
                    <div className="text-red-500 text-sm my-2">{error}</div>
                  )}

                  <button
                    type="submit"
                    className="bg-[#7ED957] text-white rounded-md w-full p-2 my-4"
                  >
                    Next
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
