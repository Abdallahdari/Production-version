import React from "react";
import { Getcart } from "../_lib/dataService";
import CartPage from "./CartPage";

export default async function page() {
  const response = await Getcart();
  // const response = data?.map((item) => item.Product) || [];
  // console.log("response", response);
  return (
    <div className="">
      <CartPage response={response} />
    </div>
  );
}
