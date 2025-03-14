import Link from "next/link";
import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Marquee from "react-fast-marquee";

export default function footer() {
  return (
    <div className="bg-[#F0F0F0]  ">
      <div className="container mx-auto  px-7 xl:max-w-[1200px] relative">
        {/* <div className="rounded-lg  bg-slate-900 w-full py-7 px-9 md:px-16 absolute  -translate-y-1/2">
          <div className="grid md:grid-cols-[1fr_20rem] justify-between  gap-y-5">
            <h1 className="text-4xl uppercase font-extrabold md:max-w-[65%] text-white">
              stay upto Date About our Lates offers
            </h1>
            <div className="   ">
              <div className="flex flex-col w-full items-center justify-center gap-5">
                {" "}
                <div className="w-full relative flex items-center">
                  <Input
                    placeholder="Enter your Email "
                    className=" w-full rounded-full px-10 py-2 border focus:border-blue-700 focus:scale-105 transition-all duration-200  bg-white "
                  />
                  <span className="absolute left-3">
                    <MdOutlineMail className="text-[20px]" />
                  </span>
                </div>
                <button className="px-5 py-2 w-full active:scale-75 bg-white rounded-full hover:bg-black hover:text-white  transition-all duration-300">
                  Subscribe to NewSletter
                </button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="grid sm:grid-cols-2 py-5 border-b  md:grid-cols-4 gap-4 pt-36">
          <div className="flex flex-col justify-between  h-full">
            <h1 className="text-3xl font-extrabold font-satoshi">DALAB</h1>
            <p className="text-gray-600 text-[14px] font-satoshi max-w-[200px]">
              We have clothes that suits your and which you &#x2019; re proud to
              wear. From women to men
            </p>
            <div className="flex items-center gap-3">
              <Link href={"/"}>
                <div className="w-10 h-10 flex items-center justify-center border rounded-full transition-all duration-300 hover:bg-black">
                  <TiSocialFacebook className="text-black hover:text-white text-2xl transition-all duration-300" />
                </div>{" "}
              </Link>
              <Link href={`/`}>
                <div className="w-10 h-10 flex items-center justify-center border rounded-full transition-all duration-200 hover:bg-black">
                  <IoLogoInstagram className="text-black hover:text-white text-2xl transition-all duration-300" />
                </div>{" "}
              </Link>

              <Link href={""}>
                <div className="w-10 h-10 flex items-center justify-center border rounded-full transition-all duration-300 hover:bg-black">
                  <FaGithub className="text-black hover:text-white text-2xl transition-all duration-300" />
                </div>
              </Link>
            </div>
          </div>
          <div className="footer-1 flex flex-col gap-3">
            <h1 className="uppercase ">Company</h1>
            <ul className="flex flex-col gap-2 text-[14px] ">
              <li>
                <Link href={""}>About</Link>
              </li>
              <li>
                <Link href={""}>Contact us</Link>
              </li>
              <li>
                <Link href={""}>About</Link>
              </li>
              <li>
                <Link href={""}>About</Link>
              </li>
            </ul>
          </div>

          <div className="footer-1 flex flex-col gap-3">
            <h1 className="uppercase ">Company</h1>
            <ul className="flex flex-col gap-2 text-[14px] ">
              <li>
                <Link href={""}>About</Link>
              </li>
              <li>
                <Link href={""}>Contact us</Link>
              </li>
              <li>
                <Link href={""}>About</Link>
              </li>
              <li>
                <Link href={""}>About</Link>
              </li>
            </ul>
          </div>
          <div className="footer-1 flex flex-col gap-5 ">
            <h1 className="uppercase ">Company</h1>
            <ul className="flex flex-col gap-3 text-[14px] ">
              <li>
                <Link href={""}>About</Link>
              </li>
              <li>
                <Link href={""}>Contact us</Link>
              </li>
              <li>
                <Link href={""}>About</Link>
              </li>
              <li>
                <Link href={""}>About</Link>
              </li>
            </ul>
          </div>
        </div>
        <Marquee>
          <div className="date py-6 text-center">
            <p className="text-slate-900 font-satoshi font-semibold">
              Copy@right by Abdallah Abdirizak at {new Date().getFullYear()}
            </p>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
