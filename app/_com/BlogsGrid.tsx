"use client";
import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
export const revalidate = 60;

// Corrected Blog interface
interface Blog {
  image: string;
  id: number;
  topic: string;
  aouther: string;
  authorImage: string; // ✅ Fixed typo
  description: string;
  Category: string;
  Smlldescription: string;
  Date: string;
}

// Props type definition
interface BlogsGridProps {
  data: Blog[];
}

export default function BlogsGrid({ data }: BlogsGridProps) {
  const [sorting, Setsordting] = useState(data);
  function Handlesort(order: string) {
    const blogsorting = [...data];
    if (order === "Newst Blogs") {
      blogsorting.sort(
        (a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime()
      );
      toast.success("Sorted by Newest Blogs");
    } else if (order === "Oldes Blogs") {
      blogsorting.sort(
        (a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime()
      );
      toast.success("Sorted by Oldest Blogs");
    }
    Setsordting(blogsorting);
  }

  return (
    <div>
      <div
        className="h-screen w-full flex items-center justify-center bg-cover bg-center mt-16"
        style={{
          height: "calc(100vh - 14rem)",
          backgroundImage: "url('/Blog.png')",
        }}
      >
        <div className="px-5 md:px-24 text-center text-white z-10">
          <h1 className="mb-7 uppercase text-2xl md:text-7xl font-extrabold">
            Read our Latest Blogs
          </h1>

          {/* Link with smooth scroll */}
          {/* <Link
            href="#blogsSection"
            scroll={false} // Avoids Next.js default scroll behavior
            className="button-main bg-slate-950 mt-10 text-white hover:bg-white hover:text-black transition-all duration-300 px-5 md:px-10 rounded-full py-2 md:py-3"
          >
            {" "}
            Explore Blogs
          </Link> */}
        </div>
      </div>
      <div id="#blogs" className="container mx-auto xl:max-w-[1200px] py-12 ">
        {" "}
        <div>
          <div className="flex items-center justify-between px-4">
            <p className="text-gray-400 font-satoshi">
              Showing 0 - {data.length} of {data.length} Blogs
            </p>
            <select
              title="select"
              onChange={(e) => Handlesort(e.target.value)}
              // onChange={(e) => Handlesort(e.target.value)}
              className="border  px-4 py-2 rounded-sm"
            >
              <option>Sortby</option>

              <option value="Newst Blogs">Newst Blogs</option>
              <option value="Oldes Blogs">Oldes Blogs</option>
            </select>
          </div>
        </div>
        <div
          id="blogsSection"
          className="grid mt-12 mb-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6"
        >
          {sorting.map((blog) => (
            <Link
              href={`blogs/${blog.id}`}
              key={blog.id}
              className="bg-white  rounded-lg overflow-hidden group h-full flex flex-col justify-baseline"
            >
              <div className="relative group" id="blogsSection">
                <img
                  src={blog.image}
                  alt={blog.id}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-300"
                />
                <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {blog.topic}
                </span>
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-sm">{blog.Date}</p>
                <h3 className="text-lg font-semibold mt-2 ">
                  {blog.topic.length > 20
                    ? blog.topic.slice(0, 30) + "..."
                    : blog.topic}
                </h3>
                <p>
                  {blog.Smlldescription.length > 40
                    ? blog.Smlldescription.slice(0, 40) + "..."
                    : blog.Smlldescription}
                </p>{" "}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
