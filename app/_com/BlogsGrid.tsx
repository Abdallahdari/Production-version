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
  Smlldescription: string;
  Date: string;
}

// Props type definition
interface BlogsGridProps {
  data: Blog[];
}

export default function BlogsGrid({ data }: BlogsGridProps) {
  return (
    <div className="grid mt-12 mb-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {data.map((blog) => (
        <Link
          href={`blogs/${blog.id}`}
          key={blog.id}
          className="bg-white  rounded-lg overflow-hidden group h-full flex flex-col justify-baseline"
        >
          <div className="relative group">
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
            <h3 className="text-lg font-semibold mt-2">{blog.topic}</h3>
            <p>{blog.Smlldescription}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
