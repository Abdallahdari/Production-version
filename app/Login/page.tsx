"use client";

import Link from "next/link";
import type React from "react";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setEmailError("");
    setPasswordError("");

    // Validate fields
    if (!email) {
      setEmailError("Email is required");
    }
    if (!password) {
      setPasswordError("Password is required");
    }

    // If both fields are filled, you can proceed with login logic here
    if (email && password) {
      console.log("Login attempt with", { email, password });
      // Add your login logic here
    }
  };

  return (
    <div>
      <div className="container mx-auto xl:max-w-[1200px] pt-8 px-4">
        <div className="my-14">
          <div className="grid overflow-hidden md:grid-cols-2">
            <div className="text border p-7 py-8 rounded-l-md">
              <h1 className="text-2xl font-bold mb-3">Login</h1>
              <p className="text-gray-400">
                Do not have an account,
                <Link
                  href="/signup"
                  className="underline ml-1 hover:no-underline hover:text-gray-600 transition-all duration-200"
                >
                  create a new one.
                </Link>
              </p>
              <Link
                href="/admin-login"
                className="underline my-3 block hover:no-underline w-max hover:text-gray-600 transition-all duration-200"
              >
                login as Admin
              </Link>
              <form onSubmit={handleSubmit}>
                <div className="my-3">
                  <label htmlFor="email">Enter Your Email or Phone</label>
                  <input
                    id="email"
                    required
                    className={`w-full py-2 rounded-full px-4 mt-1 border focus:border focus:border-[#1e35ff] outline-none transition-all duration-200 ${
                      emailError ? "border-red-500" : ""
                    }`}
                    placeholder="abdallah@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                  )}
                </div>

                <div className="my-3">
                  <label htmlFor="password">Enter Your Password</label>
                  <input
                    id="password"
                    required
                    className={`w-full py-2 rounded-full px-4 mt-2 border focus:border focus:border-[#1e35ff] outline-none transition-all duration-200 ${
                      passwordError ? "border-red-500" : ""
                    }`}
                    placeholder="*********"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordError && (
                    <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full active:scale-95 text-xl rounded-full py-3 mt-4 hover:bg-[#1e35ff] text-white bg-[#1E90FF] transition-all duration-200"
                >
                  Login
                </button>
              </form>
              <div className="flex items-center justify-center mt-4">
                <Link
                  href="/forgot-password"
                  className="underline hover:no-underline hover:text-gray-600 transition-all duration-200"
                >
                  Forgot Your Password?
                </Link>
              </div>
            </div>
            <div className="">
              <img
                src="/log.png"
                alt="A person typing on a laptop illustrating the login process"
                className="md:block rounded-r-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
