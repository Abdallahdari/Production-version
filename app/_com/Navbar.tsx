import React from "react";
import { auth } from "../_lib/auth";
import MainNav from "./MainNav";
import { Getcart } from "../_lib/dataService";

export default async function Navbar() {
  const user = await auth();


  return (
    <div>
      <MainNav user={user} />
    </div>
  );
}
