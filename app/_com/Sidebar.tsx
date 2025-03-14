import Link from "next/link";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaBorderNone } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="">
      <div className="flex flex-col gap-2 ">
        <Link href={"/profile"} className=" ">
          <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-400 rounded-md">
            <IoHomeOutline />
            <span>my Profile</span>
          </div>
        </Link>
        <Link href={"/profile/myOrders"} className=" ">
          <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-400 rounded-md">
            <FaBorderNone />
            <span>My odres</span>
          </div>
        </Link>
        <div className="">
          <Link href={"/"}>
            <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-400 rounded-md">
              <FiLogOut />
              <span>Log out</span>{" "}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
