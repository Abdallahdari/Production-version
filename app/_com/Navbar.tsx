import React from "react";
import { auth } from "../_lib/auth";

import NavbarCop from "./NavCo";

export default async function Navbar() {
  const user = await auth();
  console.log();
  return (
    <div className="sticky top-0 z-50 w-full ">
      <NavbarCop user={user} />
    </div>
  );
}
