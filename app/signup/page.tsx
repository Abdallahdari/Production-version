"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { supabase } from "../_lib/supabase";

export default function SignupCom() {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    paswrd: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(function () {
    async function Handlesubmit() {
      const { data, error } = await supabase.auth.signUp({
        email: "someone@email.com",
        password: "oGIdvsMCbZindQXJlALx",
      });
    }
  }, []);
  return (
    <>
      <div>
        <div className="container mx-auto xl:max-w-[1200px] pt-8 px-4">
          <div className="my-14">
            <div className="grid md:grid-cols-2">
              <div className="text border p-7 py-8 shadow-sm rounded-l-md">
                <h1 className="text-2xl font-bold mb-3">Signup</h1>
                <p className="text-gray-400">
                  Already Have An Account?
                  <Link
                    href="/login"
                    className="underline ml-1 hover:no-underline hover:text-gray-600 transition-all duration-200"
                  >
                    Login
                  </Link>
                </p>

                <form>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="my-3">
                      <label>Full Name</label>
                      <input
                        name="Name"
                        value={formData.Name}
                        onChange={handleChange}
                        className="w-full py-2 rounded-full px-4 mt-1 border focus:border-[#1e35ff] outline-none transition-all duration-200"
                        placeholder="Abdallah"
                      />
                    </div>
                    <div className="my-3">
                      <label>Email</label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full py-2 rounded-full px-4 mt-1 border focus:border-[#1e35ff] outline-none transition-all duration-200"
                        placeholder="abdallah@example.com"
                      />
                    </div>
                    <div className="my-3">
                      <label>Password</label>
                      <input
                        name="paswrd"
                        value={formData.paswrd}
                        onChange={handleChange}
                        className="w-full py-2 rounded-full px-4 mt-2 border focus:border-[#1e35ff] outline-none transition-all duration-200"
                        placeholder="*********"
                        type="password"
                      />
                    </div>
                    <div className="my-3">
                      <label>Confirm Password</label>
                      <input
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full py-2 rounded-full px-4 mt-2 border focus:border-[#1e35ff] outline-none transition-all duration-200"
                        placeholder="*********"
                        type="password"
                      />
                    </div>
                  </div>
                  <button
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
                  src="/login.jpg"
                  alt="Signup Visual"
                  className="rounded-r-md h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
