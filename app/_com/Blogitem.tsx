import Link from "next/link";
import React from "react";
interface Data {
  id: string;
  image: string;
  topic: string;
  aouther: string;
  autherImage: string;
  description: string;
  Category: string;
}
interface OneBlogs {
  data: Data;
  Allproduct: Data[];
}
export default function Blogitem({ data, Allproduct }: OneBlogs) {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Main Featured Post */}
      <div className="flex flex-col items-center md:flex-row gap-9 mb-8">
        <img
          src={data.image}
          alt={data.title}
          className="w-[450px] h-80 object-cover rounded-xl"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{data.topic}</h3>
          <p className="text-gray-600 mb-4">{data.description}</p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <img
              src={data.autherImage} // Placeholder avatar
              alt="Author"
              className="w-6 h-6 rounded-full"
            />
            • <span>{data.aouther}</span>
          </div>
        </div>
      </div>

      {/* Other Posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-24 mb-7">
        {Allproduct.map((blog) => (
          <Link
            href={`/blogs/${blog.id}`}
            key={blog.id}
            className=" rounded-md group"
          >
            <img
              src={blog.image}
              alt={blog.topic}
              className="h-64 w-full rounded-md group-hover:scale-105 transition-all duration-300 "
            />
            <div className="px-2 mt-3 mb-2 py-1 bg-slate-950  w-max rounded-full">
              <h1 className=" font-bold  text-white">{blog.Category}</h1>
            </div>
            <p className="text-xl font-semibold">{blog.topic}</p>
            <p
              className="hover:underline-offset-2 hover:underline transition-all duration-200"
              // href={`/blogs/${blog.id}`}
            >
              Read more
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
