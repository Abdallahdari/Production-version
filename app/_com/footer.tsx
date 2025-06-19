import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12">
      <div className="container mx-auto xl:max-w-[1200px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-white" />
              <span className="text-xl font-bold text-white">Dalab</span>
            </div>
            <p className="text-sm">
              Your destination for premium fashion and lifestyle products.
              Quality, style, and exceptional service.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="#"
                className="block text-sm hover:text-white transition-colors"
              >
                Shop
              </Link>
              <Link
                href="#"
                className="block text-sm hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="#"
                className="block text-sm hover:text-white transition-colors"
              >
                Profile
              </Link>
              <Link
                href="#"
                className="block text-sm hover:text-white transition-colors"
              >
                cart
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="space-y-2">
              <Link
                href={"https://github.com/settings/profile"}
                className="block text-sm hover:text-white transition-colors"
              >
                Github
              </Link>
              <Link
                href={"https://www.instagram.com/d50som/"}
                className="block text-sm hover:text-white transition-colors"
              >
                Instagram
              </Link>

              <Link
                href={
                  "https://www.linkedin.com/in/abdullahi-abdirizak-mohamed-96b5a4253/"
                }
                className="block text-sm hover:text-white transition-colors"
              >
                Linkedin
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} DalaB. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
