
"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

function CheckInvite() {
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

    const URL = "/users/accept-invite";

    try {
      const fullInvitationCode = verificationCode.join("");
      console.log(verificationCode)

      const response = await axios.post(URL, {
        invitationCode: fullInvitationCode, 
      });

      console.log(response);
      if(response.data.statusCode === 200) {
        localStorage.setItem("token", response.data.token)
        router.push("/organization");
      }
      
    } catch (err) {
      console.log(err)
      console.error(
        "Error verifying email:",
        err.message || err.response?.data

      );
      setVerificationError(
        err?.response?.response?.data?.message || "An error occurred while verifying the email"
      );
    }
  };

  return (
    <>
      <div className="login-verify-bg h-screen bg-cover bg-center flex items-center justify-start ">
        <div className="mx-auto md:w-[400px] pl-8 ml-8 pt-8">
          <div className="w-full max-w-sm ">
            <div className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
              <div className=" bg-white rounded-md">
                <h1 className="py-4 text-2xl font-bold leading-12 tracking-tight text-left text-[#1B1818]">
                See if  you’ve been invited to a team
                </h1>

                <p className="text-xs text-gray-800 font-semibold py-3">
                Please provide the invite code that was sent to your work email address
                </p>

                <form onSubmit={handleSubmit}>
                  <p className="text-xs py-2 pl-2">Invite code</p>
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
                  <div className="flex flex-col items-center justify-between">
                    <button
                      
                  type="button"
                  onClick={handleSubmit}
                      className="bg-[#7ED957] text-white rounded-md w-full p-2 my-5 "
                    >
                      Check now
                    </button>

                    <p className="text-gray-600">or</p>

                    <button
                    
                  onClick={handleSubmit}
                      type="button"
                      className="bg-white border border-[#7ED957] text-gray-700 font-bold rounded-md w-full p-2 my-5 "
                    >
                      Create a new account
                    </button>
                  </div>
                </form>

               
                <p className="text-red-500 text-sm"> {verificationError} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckInvite;





