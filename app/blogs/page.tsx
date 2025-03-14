import React from "react";
import { GetAllbolgs } from "../_lib/dataService";
import BlogsGrid from "../_com/BlogsGrid";

export default async function Page() {
  const data = await GetAllbolgs();
  console.log(data);

  return (
    <div>
      {/* Blogs Section */}
      <div>
        <BlogsGrid key={data.id} data={data} />
      </div>
    </div>
  );
}
