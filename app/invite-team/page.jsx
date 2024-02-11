"use client";
import React, { useState } from "react";
import axios from "axios";
import { RiUserLine } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

function InviteTeam() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [teamMembers, setTeamMembers] = useState([]);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data
    if (!formData.fullName.trim() || !formData.email.trim()) {
      setError("Please fill out all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:2024/api/v1/users/employees/invite",
        {
          teamMembers: [...teamMembers, formData],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("Invite sent successfully:", response.data);
      if (response.data.statusCode === 200) {
        setFormData({
          fullName: "",
          email: "",
        });
        setError(null);
        setSuccess(true);
        router.push("/schedule");
      } else {
        setError("Error sending invite");
      }
    } catch (err) {
      setError("Error sending invite");
      console.error("Error sending invite:", err.message || err.response?.data);
      console.log(err);
      setSuccess(false);
    }
  };

  const HandleAddPeople = () => {
    if (
      JSON.stringify(teamMembers)
        .toLowerCase()
        .includes(formData.email.toLowerCase())
    ) {
      return alert("user already added");
    }
    setTeamMembers((prevState) => {
      return [...prevState, formData];
    });
    setFormData({
      email: "",
      fullName: "",
    });
    console.log(formData);
  };

  return (
    <>
      <div className="invite-bg h-screen  bg-cover bg-center flex items-center justify-start">
        <div className="mx-auto mr-4 pr-2 md:w-[500px] pl-8 ml-8 pt-12">
          <div className="w-full max-w-md ">
            <div className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
              <p className="text-xs">STEP 3 OF 3</p>
              <h1 className="py-2 text-2xl font-semibold leading-12 tracking-tight text-left text-[#1B1818]">
                Invite team members
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <div className="w-full pb-4 pt-1">
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-semibold mb-2"
                        htmlFor="fullName"
                      >
                        Full name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <RiUserLine />
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-semibold mb-2"
                        htmlFor="email"
                      >
                        Email address
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <IoMailOutline />
                        </div>
                      </div>
                    </div>

                    <div onClick={HandleAddPeople}>
                      <p className="border border-gray-800 border-dashed p-3 font-semibold text-center rounded-md">
                        Add another team member
                      </p>
                    </div>
                  </div>
                </div>

                {error && <div style={{ color: "red" }}>{error}</div>}
                {success && (
                  <div style={{ color: "green" }}>
                    Invite sent successfully!
                  </div>
                )}

                <button className="bg-[#7ED957] text-white rounded-md w-full p-2 my-4">
                  Send invite
                </button>
              </form>

              <p className="font-bold text-gray-800 text-center">
                Do this later
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InviteTeam;
