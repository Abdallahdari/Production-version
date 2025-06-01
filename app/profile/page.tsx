import React from "react";
import Profilecom from "./ProfileCom";
import { getUserOrders, Getorders, Getupdate } from "../_lib/dataService";
import { auth } from "../_lib/auth";

export default async function page() {
  const user = await auth();

  const data = await Getorders();
  const orders = await getUserOrders();
  const updat = await Getupdate();
  console.log("ORDERS", JSON.stringify(orders, null, 2));
  return (
    <div>
      <Profilecom data={data} user={user} updat={updat} orders={orders} />
    </div>
  );
}
