import React from "react";
import { getCabinas } from "../_lib/dataService";
import Filter from "./Filter";

export default async function page() {
  const data = await getCabinas();
  console.log(data);
  return (
    <div>
      <Filter data={data} />
    </div>
  );
}
