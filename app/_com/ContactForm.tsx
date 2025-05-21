"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast, ToastContainer } from "react-toastify";
import { CreateContact } from "../_lib/actions";
import { useState } from "react";
import { Loader2 } from "lucide-react";
// import { useState } from "react";

export default function ContactForm() {
  // const [email, Setemail] = useState();
  // const [password, SetPassword] = useState();
  // const [phone, SetPhone] = useState();
  const [isloading, setIsLoading] = useState(false);
  const handelsubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget; // Get the form element

    const formData = new FormData(form);

    // Validate required fields

    try {
      await CreateContact(formData);
      toast.success("sent the massage succsefully ", {
        autoClose: 2000,
        onClose: () => {
          window.location.reload();
        },
      });
    } catch (error) {
      console.log("error has been acured from the contact page", error);
      toast.error("couln't send the massage");
    }
  };
  return (
    <section className="w-full  max-w-6xl mx-auto p-4 md:p-6 my-16">
      <ToastContainer />
      <div className="  border rounded-md">
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
                  if you have any questions or any idea send with you're email ,
                  name , phone and you're question or idea
                </p>
              </div>

              <form onSubmit={handelsubmit} className="space-y-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    required
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="bg-white "
                  />
                  <Input
                    name="email"
                    required
                    type="email"
                    placeholder="Your E-mail"
                    className="bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="phone"
                    required
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-white"
                  />
                  <Input
                    required
                    name="topic"
                    type="text"
                    placeholder="Subject"
                    className="bg-white"
                  />
                </div>

                <Textarea
                  name="text"
                  required
                  placeholder="Message"
                  className="min-h-[150px] bg-white"
                />
                <Button
                  type="submit"
                  className="hover:bg-slate-950 transition-all duration-300"
                  disabled={isloading}
                >
                  {isloading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save changes"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
