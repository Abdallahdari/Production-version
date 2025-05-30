import PaymentPage from "@/components/ui/payment-page";
import React from "react";
import { Getcart, Getupdate } from "../_lib/dataService";
import Link from "next/link";

export default async function page() {
  const response = await Getcart();

  const update = await Getupdate();
  console.log("update", update);
  return (
    <div className="pt-7">
      {response.length > 0 ? (
        <PaymentPage response={response} update={update} />
      ) : (
        <p>
          {" "}
          <div className="h-[calc(100vh-15rem)] flex items-center justify-center">
            {" "}
            <div>
              <p className="text-3xl uppercase">
                There is Nothing in your Cart
              </p>
              <div className="flex items-center justify-center mt-5">
                <Link
                  className="px-4 py-3 text-white rounded-lg bg-slate-950 hover:bg-blue-600 transition-all duration-200 "
                  href={"/shop"}
                >
                  Go back to Shopping
                </Link>
              </div>
            </div>
          </div>
        </p>
      )}{" "}
    </div>
  );
}
