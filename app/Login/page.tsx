import React from "react";
import { SigninAction } from "@/app/_lib/actions";
import GoogleLoginButton from "@/components/ui/GoogleLoginButton";
import Image from "next/image";
import LoginImage from "@/app/login/Login1.jpg";
export default function page() {
  return (
    <form
      action={SigninAction}
      className="h-[76%] my-32 flex items-center justify-center"
    >
      <main className="flex min-h-screen flex-col md:flex-row bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Left side - Login form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-gray-900 ">
                Welcome to Dalab
              </h1>
              <p className="mt-2 text-gray-600">
                Sign in to your account to continue
              </p>
            </div>

            <div className="space-y-6">
              <GoogleLoginButton />
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-xs text-center text-gray-500">
                By continuing, you agree to our{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden md:flex md:w-1/2 bg-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 flex flex-col items-center justify-center p-12 text-white">
            <Image
              src={LoginImage}
              alt="Login illustration"
              width={400}
              height={400}
              priority
              className="mb-8 rounded-md"
            />
            <h2 className="text-2xl font-bold text-center mb-4">
              Streamline Your Workflow
            </h2>
            <p className="text-center max-w-md">
              Join thousands of users who trust our platform for secure,
              efficient, and collaborative work.
            </p>
          </div>
        </div>
      </main>
    </form>
  );
}
