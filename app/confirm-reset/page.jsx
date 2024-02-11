"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

function Verify() {
  const router = useRouter();

  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [verificationError, setVerificationError] = useState(null);

  const handleCodeChange = (index, value) => {
    const updatedCode = [...verificationCode];
    updatedCode[index] = value;
    setVerificationCode(updatedCode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const URL = "http://localhost:2024/api/v1/users/verify-password-reset-code";

    try {
      const fullResetCode = verificationCode.join("");
      console.log(verificationCode);

      const response = await axios.post(URL, {
        passwordResetCode: fullResetCode,
        email: sessionStorage.getItem("email"),
      });
      if (response.data.statusCode === 200) {
        sessionStorage.setItem("passwordResetCode", fullResetCode);
        router.push("/change-password");
      }
      console.log(response);
    } catch (err) {
      console.log(err);
      console.error(
        "Error confirming email:",
        err.message || err.response?.data
      );
      setVerificationError(
        err?.response?.response?.data?.message ||
          "An error occurred while verifying the email"
      );
    }
  };

  return (
    <>
      <div className="confirm-bg h-screen bg-cover bg-center flex items-center justify-start ">
        <div className="mx-auto md:w-[400px] pl-8 ml-8 pt-8">
          <div className="w-full max-w-sm ">
            <div className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
              <div className=" bg-white rounded-md">
                <h1 className="py-4 text-2xl font-bold leading-12 tracking-tight text-left text-[#1B1818]">
                  Provide the code sent to your mail box
                </h1>

                <p className="text-xs text-gray-800 font-semibold py-2">
                  Please provide the six digit code sent to your email to reset
                  your password
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="flex justify-center">
                    {verificationCode.map((digit, index) => (
                      <input
                        key={index}
                        className="w-10 h-10 text-center mx-1 px-2 border border-gray-300 rounded-md text-lg"
                        type="text"
                        name={`digit-${index}`}
                        value={digit}
                        onChange={(e) =>
                          handleCodeChange(index, e.target.value)
                        }
                        maxLength="1"
                      />
                    ))}
                  </div>
                </form>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-[#7ED957] text-white rounded-md w-full p-2 my-4 "
                >
                  Confirm
                </button>
                <p className="text-red-500 text-sm"> {verificationError} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Verify;
