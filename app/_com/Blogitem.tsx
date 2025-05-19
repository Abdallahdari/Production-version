import Link from "next/link";
import React from "react";
export const revalidate = 60;

interface Data {
  id: string;
  image: string;
  topic: string;
  aouther: string;
  autherImage: string;
  description: string;
  Category: string;
  Smlldescription: string;
  Date: string;
}

interface OneBlogs {
  data: Data;
  Allproduct: Data[];
}

export default function Blogitem({ data, Allproduct }: OneBlogs) {
  const viewBlogs = Allproduct.slice(0, 4);
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
      <div className="container mx-auto xl:max-w-[1200px] font-Lora">
        <div className="grid md:grid-cols-[10rem_1fr] gap-5 my-12">
          <div className="text-gray-400 font-semibold">
            <p>{data.Date} </p>
          </div>
          <div className=" mx-auto  text-gray-700 ">
            <div className=" space-y-4">
              {/* Image with 35% height but full width */}

              <p>{data.description}</p>

              <blockquote className="border-l-4 border-orange-500 pl-4 text-2xl font-semibold text-orange-700">
                {data.Smlldescription}
              </blockquote>
              <img
                src={data.image}
                alt={data.id}
                className="w-full object-cover rounded-md"
                style={{ height: "45vh" }} // 35% of viewport height
              />
            </div>
            <div className="mt-8 flex items-center gap-2 mb-7 border-b pb-4">
              <img
                src={data.autherImage}
                alt={data.id}
                className="rounded-full h-12 w-12"
              />

              <div className="">
                <p className="text-sm font-semibold">{data.aouther}</p>
                <p className="text-xs text-gray-500">Thinker & Designer</p>
                <span>{data.Date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto xl:max-w-[1200px]">
        <div className="grid mt-12 mb-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {viewBlogs.map((blog) => (
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
                <h3 className="text-lg font-semibold mt-2">{blog.topic}</h3>
                <p>{blog.Smlldescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
