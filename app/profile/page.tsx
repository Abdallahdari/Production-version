import React from "react";
import Profilecom from "./ProfileCom";
import { Getorders } from "../_lib/dataService";

export default async function page() {
  const data = await Getorders();
  console.log(data);
  return (
    <div>
      <Profilecom data={data} />
    </div>
  );
}
