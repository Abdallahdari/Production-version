"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactForm() {
  const [email, Setemail] = useState();
  const [password, SetPassword] = useState();
  const [phone, SetPhone] = useState();

  return (
    <section className="w-full  max-w-6xl mx-auto p-4 md:p-6 my-16">
      <div className=" rounded-lg border rounded-md">
        <div className="bg-slate-950 px-4 py-5 flex items-center overflow-hidden rounded-t-lg ">
          <h2 className="text-2xl font-semibold  text-white">
            Get in Touch With Us
          </h2>
        </div>
        <div>
          <div className="grid md:grid-cols-2 gap-8 p-4">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm text-gray-600 mb-1">Phone Number</h3>
                <p className="text-gray-900">+905441702692</p>
              </div>

              <div>
                <h3 className="text-sm text-gray-600 mb-1">Email Address</h3>
                <p className="text-gray-900">abdallahabdirisaaq@gmail.com</p>
              </div>

              <div>
                <h3 className="text-sm text-gray-600 mb-1">Location</h3>
                <p className="text-gray-900">Istanbul-turkey</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="">
              <div className="mb-6 ">
                <h3 className="text-xl font-medium mb-2">Send us a message</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  fringilla nunc in molestie feugiat.
                </p>
              </div>

              <form className="space-y-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-white "
                  />
                  <Input
                    type="email"
                    placeholder="Your E-mail"
                    className="bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-white"
                  />
                  <Input
                    type="text"
                    placeholder="Subject"
                    className="bg-white"
                  />
                </div>

                <Textarea
                  placeholder="Message"
                  className="min-h-[150px] bg-white"
                />

                <Button
                  type="submit"
                  className="bg-gray-900 hover:bg-blue-600 transition-all duration-300 text-white px-6 py-5"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
