import React from "react";
import { auth } from "../_lib/auth";
import MainNav from "./MainNav";

export default async function Navbar() {
  const user = await auth();
  console.log(user);
  return (
    <div>
      <MainNav user={user} />
    </div>
  );
}
