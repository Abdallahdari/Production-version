import React from "react";
import Profilecom from "./ProfileCom";
import { Getorders, Getupdate } from "../_lib/dataService";
import { auth } from "../_lib/auth";

export default async function page() {
  const user = await auth();

  const data = await Getorders();
  const session = await auth();
  const updat = await Getupdate();
  console.log(session, updat);
  return (
    <div>
      <Profilecom data={data} user={user} updat={updat} />
    </div>
  );
}
