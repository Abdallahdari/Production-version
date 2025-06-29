import Link from "next/link";
import React from "react";
export default function Unregstred({ HandlecolseUser }) {
  return (
    <div className=" flex items-center justify-center">
      <div className="w-full">
        <h1 className="text-center mb-3 text-xl font-satoshi font-semibold">
          Pleas Login{" "}
        </h1>
        <Link
          onClick={() => HandlecolseUser()}
          href={"/login"}
          className="w-full bg-slate-950 px-3 py-2 text-white flex items-center justify-center rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
