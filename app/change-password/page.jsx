'use client'
import React, { useState } from "react";
import axios from "axios";
import { LuShieldCheck } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

function ChangePassword() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

 

  const handleChangePassword = async () => {
    // Validate the form data if needed
    if (!password || !confirmPassword) {
      setError("Please fill in both password and confirm password fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password and confirm password do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:2024/api/v1/users/reset-password", {
        newPassword: password,
        email: sessionStorage.getItem('email'),
        passwordResetCode: sessionStorage.getItem('passwordResetCode'),
      });

      if(response.data.statusCode === 200) {
        alert(response.data.message)
        router.push('/login')
      }

      console.log("Password changed successfully:", response.data);

      setError(null);
      setSuccess(true);
    } catch (error) {
      setError("Error changing password. Please try again.");
      console.error(
        "Error changing password:",
        error.message || error.response?.data
      );
      setSuccess(false);
    }
  };

  return (
    <>
      <div className="change-bg h-screen bg-cover bg-center flex items-center justify-start">
        <div className="mx-auto md:w-[400px] pl-8 ml-8 pt-8">
          <div className="w-full max-w-md ">
            <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
              <h1 className="py-2 text-2xl font-semibold leading-12 tracking-tight text-left text-[#1B1818]">
                Change your password
              </h1>
              <p className="text-gray-500 text-sm font-bold py-4">
                Create a new password
              </p>

              <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <div className="mr-2">
                        <LuShieldCheck />
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <div className="ml-2">
                        <FaRegEyeSlash />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="confirmpassword"
                  >
                    Confrim Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="confirmpassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <div className="mr-2">
                        <LuShieldCheck />
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <div className="ml-2">
                        <FaRegEyeSlash />
                      </div>
                    </div>
                  </div>
                </div>

              {error && <div style={{ color: "red" }}>{error}</div>}

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleChangePassword}
                  className="bg-[#7ED957] text-white rounded-md w-full p-2 my-4 "
                >
                  Change password
                </button>
              </div>

              {success && <p className="text-green-600">Password changed successfully!</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
