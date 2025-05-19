import React from "react";
import { getAllProductsWithRatings } from "@/app/_lib/dataService";
import Filter from "./Filter";
import { unstable_noStore as nostore } from "next/cache";
export default async function page() {
  nostore();
  const data = await getAllProductsWithRatings();
  console.log("data", data);
  return (
    <div>
      <Filter data={data} />
    </div>
  );
}
