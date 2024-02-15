"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import SocialProviders from "../_components/Auth/SocialProviders";

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loginURL = "http://localhost:2024/api/v1/users/login";

    try {
      console.log(formData)
      const response = await axios.post(loginURL, formData);

      if (response.data.statusCode === 200) {
        setFormData({
          email: "",
          password: "",
        });
        setError(null);

        const token = response.data.token;
        localStorage.setItem("token", token);
        router.push("/organization");
      } 
       else {
        setError("Invalid username or password");
      }

      console.log("Login successful", response.data);
    } catch (err) {
       if(err.response.data.statusCode === 302) {
        console.log('302 working')
        router.push('/verify-email')
      }
      console.error("Error logging in:", err.message || err.response?.data);
      setError("Invalid username or password");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Company email
        </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
      <SocialProviders/>
    </form>
  );
};

export default LoginForm;
