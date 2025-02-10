import React from "react";
import { GetAllbolgs } from "../_lib/dataService";
import BlogsGrid from "../_com/BlogsGrid";

export default async function page() {
  const data = await GetAllbolgs();
  console.log(data);

  return (
    <div className="container mx-auto xl:max-w-[1200px] py-12">
      <BlogsGrid key={data.id} data={data} />
    </div>
  );
}
