import Link from "next/link";
import React from "react";
import { LogOut } from "lucide-react";
import { House } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SignoutAction } from "../_lib/actions";

export default function Profileuser({ HandlecolseUser, user }) {
  const userData = {
    name: "Abdallah Abdirizak",
    email: "john@example.com",
    bio: "Product designer and developer based in New York",
    location: "New York, USA",
    website: "https://johndoe.com",
    avatar: "/placeholder.svg?height=100&width=100",
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "United States",
  };
  return (
    <form action={SignoutAction} className="flex flex-col gap-6">
      <div className="flex items-center  gap-3">
        <Avatar className="h-14 w-14">
          <AvatarImage className="" src={user.user.image} alt={userData.name} />
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
        onClick={HandlecolseUser}
        className="px-4 w-full hover:text-white hover:bg-slate-950 py-2 rounded-lg transition-all duration-300 flex items-center gap-3"
        href={`/profile`}
      >
        <House className=" h-4 w-4" />
        <span>My Profile</span>
      </Link>
      <button
        onClick={SignoutAction}
        className="px-4 w-full hover:text-white hover:bg-slate-950 py-2 rounded-lg transition-all duration-300 flex items-center gap-3"
      >
        <LogOut className=" h-4 w-4" />
        <span>Logout</span>
      </button>
    </form>
  );
}
