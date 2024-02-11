"use client";

import React from "react";
import comp from "./_components/Assets/img/comp.png";
import user from "./_components/Assets/img/user.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Home = () => {
  const router = useRouter();

  return (
    <div className="home-bg h-screen bg-cover bg-center flex items-center justify-end">
      <div className="ml-4 md:w-[500px] mx-8 my-16 p-8 bg-white rounded-md">
        <h1 className="py-2 text-2xl font-semibold leading-12 tracking-tight text-left text-[#1B1818]">
          Sign up
        </h1>
        <div className="text-gray-800">
          <div
            className="border rounded-md flex items-center p-3 m-2 mb-5"
            name="signupType"
            value="employer"
            // onClick={() => handleSignupTypeChange("employer")}
            onClick={() => router.push("/signup?type=employer")}
          >
            <Image height={50} width={50} src={comp} alt="" className="" />
            <div className="pl-3">
              <h3 className="text-base font-medium leading-9 tracking-tighter text-left">
                As an organization?
              </h3>
              <p className="text-base font-sm leading-6 tracking-tighter text-left">
                Set up a new organization
              </p>
            </div>
          </div>
          <div
            className="border rounded-md flex items-center p-3 m-2 mt-3"
            name="signupType"
            value="employee"
            onClick={() => router.push("/signup?type=employee")}
          >
            <Image height={50} width={50} src={user} alt="" className="" />
            <div className="pl-3">
              <h3 className="text-base font-medium leading-9 tracking-tighter text-left">
                As an employee?
              </h3>
              <p className="text-base font-sm leading-6 tracking-tighter text-left">
                Create your account
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-800">Or</p>

        <Link href={"/login"}>
          <button className="bg-[#7ED957] text-white rounded-md w-full p-2 my-4">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
