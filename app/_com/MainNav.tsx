"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import Profileuser from "./Profileuser";
import Unregstred from "./Unregstred";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// import { useSelector } from "react-redux";
// import { getTotal } from "../reduxToolkit/cartSlice";

export default function MainNav({ user }: any) {
  // const [item] = useState(0);
  const [Isopen, Setisopn] = useState(false);
  const [userOpen, SetisUser] = useState(false);

  function HandlecolseUser() {
    SetisUser(false);
  }

  return (
    <div className="relative mb-5">
      <div className="w-full fixed top-0 left-0  shadow z-50 bg-white ">
        <div className="container relative mx-auto xl:max-w-[1200px] px-4">
          <div className="flex items-center justify-between py-2 md:py-4  ">
            <h1 className="text-xl font-bold">
              <Link href={"/"}>Dalab</Link>
            </h1>
            <ul className="hidden md:flex  items-center gap-7">
              <li className="">
                <Link
                  href={"/"}
                  className="hover:text-gray-600 transition-all duration-200 "
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  href={"/shop"}
                  className="hover:text-gray-600 transition-all duration-200 "
                >
                  Shop
                </Link>
              </li>{" "}
              <li className="">
                <Link
                  href={"/contactus"}
                  className="hover:text-gray-600 transition-all duration-200 "
                >
                  Contact Us
                </Link>
              </li>{" "}
              <li className="">
                <Link
                  href={"/blogs"}
                  className="hover:text-gray-600 transition-all duration-200 "
                >
                  Blog
                </Link>
              </li>
            </ul>
            <div className="hidden md:flex items-center justify-center gap-7 ">
              <div className="flex items-center justify-center">
                <button
                  onClick={() => SetisUser((user) => !user)}
                  className=" "
                >
                  {user ? (
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className=" bg-gray-300">
                        {user.user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <svg
                      className="fill-black hover:fill-[#1E90FF] cursor-pointer transition-all duration-200"
                      width="17"
                      height="20"
                      viewBox="0 0 21 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.5996 10C9.22461 10 8.04753 9.51042 7.06836 8.53125C6.08919 7.55208 5.59961 6.375 5.59961 5C5.59961 3.625 6.08919 2.44792 7.06836 1.46875C8.04753 0.489584 9.22461 0 10.5996 0C11.9746 0 13.1517 0.489584 14.1309 1.46875C15.11 2.44792 15.5996 3.625 15.5996 5C15.5996 6.375 15.11 7.55208 14.1309 8.53125C13.1517 9.51042 11.9746 10 10.5996 10ZM0.599609 20V16.5C0.599609 15.7917 0.78211 15.1404 1.14711 14.5463C1.51211 13.9521 1.99628 13.4992 2.59961 13.1875C3.89128 12.5417 5.20378 12.0571 6.53711 11.7338C7.87044 11.4104 9.22461 11.2492 10.5996 11.25C11.9746 11.25 13.3288 11.4117 14.6621 11.735C15.9954 12.0583 17.3079 12.5425 18.5996 13.1875C19.2038 13.5 19.6884 13.9533 20.0534 14.5475C20.4184 15.1417 20.6004 15.7925 20.5996 16.5V20H0.599609Z" />
                    </svg>
                  )}
                </button>
              </div>

              {userOpen && (
                <div
                  className={`absolute z-50 top-[65px] w-[320px] p-7 rounded-xl bg-stone-50 shadow-md transition-all duration-300
    ${
      userOpen
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-full pointer-events-none"
    }`}
                >
                  {user ? (
                    <Profileuser
                      HandlecolseUser={HandlecolseUser}
                      user={user}
                    />
                  ) : (
                    <Unregstred />
                  )}
                </div>
              )}

              <div>
                <Link href={"/cart"} className="relative">
                  <svg
                    className="fill-black hover:fill-[#1E90FF] cursor-pointer transition-all duration-200"
                    width="17"
                    height="20"
                    viewBox="0 0 21 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.60455 0C12.2845 0 14.4878 2.10591 14.5996 4.77432H14.5735C14.5766 4.85189 14.5617 4.92913 14.5299 5H14.6861C15.9031 5 17.1775 5.84351 17.6884 7.8798L17.744 8.12007L18.5129 14.3147C19.0662 18.2657 16.9046 19.9273 13.9558 19.9977L13.7581 20H5.46814C2.47139 20 0.162154 18.908 0.66989 14.5836L0.704514 14.3147L1.48225 8.12007C1.86575 5.92719 3.15322 5.06225 4.39373 5.00326L4.53132 5H4.6095C4.59631 4.92535 4.59631 4.84898 4.6095 4.77432C4.72133 2.10591 6.9246 0 9.60455 0ZM6.69661 8.32929C6.2085 8.32929 5.81282 8.73655 5.81282 9.23893C5.81282 9.74131 6.2085 10.1486 6.69661 10.1486C7.18471 10.1486 7.5804 9.74131 7.5804 9.23893L7.57351 9.12483C7.51897 8.67631 7.14716 8.32929 6.69661 8.32929ZM12.4854 8.32929C11.9973 8.32929 11.6016 8.73655 11.6016 9.23893C11.6016 9.74131 11.9973 10.1486 12.4854 10.1486C12.9735 10.1486 13.3692 9.74131 13.3692 9.23893C13.3692 8.73655 12.9735 8.32929 12.4854 8.32929ZM9.56536 1.30238C7.64125 1.30238 6.08145 2.85682 6.08145 4.77432C6.09463 4.84898 6.09463 4.92535 6.08145 5H13.0928C13.065 4.92794 13.0502 4.85153 13.0493 4.77432C13.0493 2.85682 11.4895 1.30238 9.56536 1.30238Z" />
                  </svg>
                  <div className="absolute -right-4 -top-3  w-5 text-sm flex items-center justify-center text-center h-5 bg-red-600 text-white rounded-full">
                    <div className="flex items-center justify-center">
                      {/* <span>{Total}</span> */}
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="block md:hidden">
              {Isopen ? (
                <FaTimes onClick={() => Setisopn(false)} />
              ) : (
                <CiMenuFries onClick={() => Setisopn(true)} />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
      {Isopen && (
        <div className="mobile-nav    w-full z-50 fixed  inset-0 bg-white h-full ">
          <div>
            <div className="flex items-center justify-between  px-3 py-3">
              <div>
                <h1 className="text-xl font-bold">Dalab</h1>
              </div>
              <div className="">
                {" "}
                <FaTimes onClick={() => Setisopn(false)} />
              </div>
            </div>
          </div>
          {/* Mobile Nav */}
          <div className="mobile-Links">
            <ul className="flex py-3 flex-col gap-5 px-3 ">
              <li className="flex items-center justify-between border-b ">
                <Link onClick={() => Setisopn(false)} href={"/"}>
                  Home
                </Link>
                <span>
                  <IoIosArrowForward />
                </span>
              </li>
              <li className="flex items-center justify-between border-b ">
                <Link onClick={() => Setisopn(false)} href={"/shop"}>
                  Shop
                </Link>
                <span>
                  <IoIosArrowForward />
                </span>
              </li>
              <li className="flex items-center justify-between border-b ">
                <Link onClick={() => Setisopn(false)} href={"/blogs"}>
                  Blog
                </Link>
                <span>
                  <IoIosArrowForward />
                </span>
              </li>
              <li className="flex items-center justify-between border-b ">
                <Link onClick={() => Setisopn(false)} href={"/login"}>
                  Login
                </Link>
                <span>
                  <IoIosArrowForward />
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
