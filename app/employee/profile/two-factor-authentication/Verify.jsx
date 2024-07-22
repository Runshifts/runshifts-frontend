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

    const URL = "http://localhost:2024/api/v1/users/verify-email";

    try {
      const fullVerificationCode = verificationCode.join("");
      console.log(verificationCode);

      const response = await axios.post(URL, {
        emailVerificationCode: fullVerificationCode,
        email: sessionStorage.getItem("email"),
      });

      console.log(response);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      router.push("/welcome");
    } catch (err) {
      console.log(err);
      console.error(
        "Error verifying email:",
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
      <div className=" flex items-center justify-start ">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                className="w-10 h-10 text-center mx-1 px-2 border border-gray-300 rounded-md text-lg"
                type="text"
                name={`digit-${index}`}
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                maxLength="1"
              />
            ))}
          </div>
        </form>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-[#7ED957] text-white rounded-md  p-2 my-4 "
      >
        Activate 2FA
      </button>
      <p className="text-red-500 text-sm"> {verificationError} </p>
    </>
  );
}

export default Verify;
