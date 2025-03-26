import React from "react";
import { SigninAction } from "@/app/_lib/actions";
export default function page() {
  return (
    <form
      action={SigninAction}
      className="h-[calc(100vh-24rem)] flex items-center justify-center"
    >
      <div>
        <h1 className="font-satoshi text-xl font-semibold">
          Sign in with your Google account
        </h1>
        <div className="flex items-center justify-center w-full mt-4">
          <button className="py-3 rounded-lg px-6 bg-slate-950 hover:bg-blue-600 transition-all duration-300 text-white ">
            Signin with Google{" "}
          </button>
        </div>
      </div>
    </form>
  );
}
