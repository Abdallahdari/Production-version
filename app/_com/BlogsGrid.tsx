import React from "react";
import Link from "next/link";
import Image from "next/image";

// Corrected Blog interface
interface Blog {
  image: string;
  id: number;
  topic: string;
  aouther: string;
  authorImage: string; // ✅ Fixed typo
  description: string;
  Category: string;
}

// Props type definition
interface BlogsGridProps {
  data: Blog[];
}

export default function BlogsGrid({ data }: BlogsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((blog) => (
        <div key={blog.id} className=" rounded-md group">
          <img
            src={blog.image}
            alt={blog.topic}
            className="h-64 w-full  rounded-md overflow-hidden object-cover overflow-hidden "
            loading="lazy"
          />
          <div className="px-2 mt-3 mb-2 py-1 bg-slate-950  w-max rounded-full">
            <h1 className=" font-bold  text-white">{blog.Category}</h1>
          </div>
          <p className="text-xl font-semibold">{blog.topic}</p>
          <Link
            className="hover:underline-offset-2 hover:underline transition-all duration-200"
            href={`blogs/${blog.id}`}
          >
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
}
