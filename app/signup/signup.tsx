"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function SignupCom({}) {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    paswrd: "",
    confirmPassword: "",
  });

  console.log(formData);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { Name, email, paswrd, confirmPassword } = formData;

    if (!Name || !email || !paswrd || !confirmPassword) {
      setError("Please fill in all fields!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address!");
      return;
    }

    if (paswrd !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");

    toast.success("Check your email to verify your account.");
    console.log(formData);
    redirect("Login");
  };
  return (
    <div>
      <div>
        <ToastContainer />
        <div className="container mx-auto xl:max-w-[1200px] pt-8 px-4">
          <div className="my-14">
            <div className="grid md:grid-cols-2">
              <div className="text border p-7 py-8 shadow-sm rounded-l-md">
                <h1 className="text-2xl font-bold mb-3">Signup</h1>
                <p className="text-gray-400">
                  Already Have An Account,
                  <Link
                    href={"/login"}
                    className="underline ml-1 hover:no-underline hover:text-gray-600 transition-all duration-200"
                  >
                    Login
                  </Link>
                </p>

                <form>
                  {error && <div className="text-red-500 mb-3">{error}</div>}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="my-3">
                      <label>Full Name</label>
                      <input
                        name="Name"
                        value={formData.Name}
                        onChange={handleChange}
                        className="w-full py-2 rounded-full px-4 mt-1 border focus:border focus:border-[#1e35ff] outline-none transition-all duration-200"
                        placeholder="Abdallah"
                      />
                    </div>
                    <div className="my-3">
                      <label>Email</label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full py-2 rounded-full px-4 mt-1 border focus:border focus:border-[#1e35ff] outline-none transition-all duration-200"
                        placeholder="abdallah@example.com"
                      />
                    </div>
                    <div className="my-3">
                      <label>Password</label>
                      <input
                        name="paswrd"
                        value={formData.paswrd}
                        onChange={handleChange}
                        className="w-full py-2 rounded-full px-4 mt-2 border focus:border focus:border-[#1e35ff] outline-none transition-all duration-200"
                        placeholder="*********"
                        type="password"
                      />
                    </div>
                    <div className="my-3">
                      <label>Confirm Password</label>
                      <input
                        name="confirmPassword"
                        onChange={handleChange}
                        className="w-full py-2 rounded-full px-4 mt-2 border focus:border focus:border-[#1e35ff] outline-none transition-all duration-200"
                        placeholder="*********"
                        type="password"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="w-full rounded-full py-3 active:scale-95 mt-4 hover:bg-[#5e6ef8] text-white bg-[#1E90FF] transition-all duration-300"
                  >
                    Create Account
                  </button>
                </form>
                <div className="flex items-center justify-center mt-4">
                  <Link
                    href="/forgot-password"
                    className="underline hover:no-underline hover:text-gray-600 transition-all duration-200"
                  >
                    Forgot Your Password
                  </Link>
                </div>
              </div>
              <div>
                <img
                  src="/log.png"
                  alt="Signup Visual"
                  className="rounded-r-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
