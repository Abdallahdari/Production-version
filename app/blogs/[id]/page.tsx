import Blogitem from "@/app/_com/Blogitem";
import { GetAllbolgs, GetsingleBLog } from "@/app/_lib/dataService";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const data = await GetsingleBLog(params.id);
  const semilar = await GetAllbolgs();
  const Allproduct = semilar?.filter(
    (item) => item.Category === data.Category && item.id !== data.id
  );

  console.log("data", data);

  console.log("All product", Allproduct);

  if (!data) {
    return <p>there is no data</p>;
  }
  return (
    <div>
      <Blogitem data={data} Allproduct={Allproduct} />
    </div>
  );
}
