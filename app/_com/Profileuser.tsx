import Link from "next/link";
import React from "react";
import { House } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SignoutAction } from "../_lib/actions";

export default function Profileuser({ HandelCOlose, user }) {
  return (
    <form action={SignoutAction} className="flex flex-col gap-6">
      <div className="flex items-center  gap-3">
        <Avatar className="h-14 w-14">
          <AvatarFallback className="text-xl bg-gray-300">
            {user.user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm">{user.user.name}</p>
          <p className="text-sm">{user.user.email}</p>
        </div>
      </div>

      <Link
        onClick={HandelCOlose}
        className="px-4 w-full hover:text-white hover:bg-slate-950 py-2 rounded-lg transition-all duration-300 flex items-center gap-3"
        href={`/profile`}
      >
        <House className=" h-4 w-4" />
        <span>My Profile</span>
      </Link>
    </form>
  );
}
