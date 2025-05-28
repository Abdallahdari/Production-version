import PaymentPage from "@/components/ui/payment-page";
import React from "react";
import { Getcart, Getupdate } from "../_lib/dataService";

export default async function page() {
  const response = await Getcart();

  const update = await Getupdate();
  console.log("update", update);
  return (
    <div className="pt-7">
      <PaymentPage response={response} update={update} />
    </div>
  );
}
