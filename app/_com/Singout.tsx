import { LogOut } from "lucide-react";
import React from "react";
import { SignoutAction } from "../_lib/actions";
import { Form } from "react-hook-form";

export default function Singout() {
  return (
    <Form action={SignoutAction}>
      <button className="px-4 w-full hover:text-white hover:bg-slate-950 py-2 rounded-lg transition-all duration-300 flex items-center gap-3">
        <LogOut className=" h-4 w-4" />
        <span>Logout</span>
      </button>
    </Form>
  );
}
