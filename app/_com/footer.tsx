import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#030712] text-gray-400 pt-14 py-5">
      <div className="container mx-auto xl:max-w-[1200px] grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Dalab Section */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Dalab</h3>
          <p>
            The best place to find exclusive products. Shop with us for an
            amazing experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href={"/"} className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href={"/signup"} className="hover:text-white">
                Signup
              </Link>
            </li>
            <li>
              <Link href={"/login"} className="hover:text-white">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Products</h4>
          <ul className="space-y-2">
            <li>
              <Link href={""} className="hover:text-white">
                Shoes
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:text-white">
                Bags
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:text-white">
                Abaya
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:text-white">
                T-shirts
              </Link>
            </li>
            <li>
              <Link href={""} className="hover:text-white">
                Jackets
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
          <p>Phone: 05072337517</p>
          <p>Address: Istanbul</p>
          <p>Email: abdallahabdirisaa@gmail.com</p>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <Link href={""} className="text-gray-400 hover:text-white">
              X
            </Link>
            <Link
              href={"/https://www.instagram.com/dhere_coder_/"}
              className="text-gray-400 hover:text-white"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-5 text-center">
        <p>Copyright © 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}
