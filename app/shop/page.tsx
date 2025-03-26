import React from "react";
import { getCabinas } from "../_lib/dataService";
import Filter from "./Filter";
import { unstable_noStore as nostore } from "next/cache";
export default async function page() {
  nostore();
  const data = await getCabinas();
  console.log(data);
  return (
    <div>
      <Filter data={data} />
    </div>
  );
}
