import React from "react";
import Profilecom from "./ProfileCom";
import { Getorders } from "../_lib/dataService";
import { auth } from "../_lib/auth";

export default async function page() {
  const user = await auth();

  const data = await Getorders();
  console.log(data, user);
  return (
    <div>
      <Profilecom data={data} user={user} />
    </div>
  );
}
