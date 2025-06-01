"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Profileuser from "./Profileuser";

export default function NavbarCop({ user }) {
  const [show, SetUserOpen] = useState(false);
  console.log("userr", user);
  const HandelCOlose = () => {
    SetUserOpen(false);
  };
  // const { userOpen, Setuseropen } = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto xl:max-w-[1400px]">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Dalab</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href={"/"}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href={"/shop"}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Shop
            </Link>

            <Link
              href={"/about"}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href={"/blogs"}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Blogs
            </Link>
            <Link
              href={"/contactus"}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center justify-center space-x-4">
            {user ? (
              <button onClick={() => SetUserOpen(!show)}>
                <Avatar className="">
                  <AvatarFallback className="p-2 rounded-full bg-gray-300">
                    {user.user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </button>
            ) : (
              <Link href={"/login"}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-gray-200 transition-all duration-300"
                >
                  Sign In
                </Button>
              </Link>
            )}
            <Link href={"/cart"}>
              <Button
                size="sm"
                className="hover:bg-blue-600  transition-all duration-300"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Cart
              </Button>
            </Link>
          </div>
          <div
            className={`absolute right-7  z-50 top-[69px] w-[320px] p-7 rounded-xl bg-stone-50 shadow-md transition-all duration-300
              ${
                show
                  ? "opacity-100 translate-y-0"
                  : "  translate-y-36 opacity-0 pointer-events-none"
              }`}
          >
            {show && <Profileuser user={user} HandelCOlose={HandelCOlose} />}
          </div>
        </div>
      </div>
    </header>
  );
}
