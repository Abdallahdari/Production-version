import React from "react";

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
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-700 mt-12">
      <div className="mt-4 space-y-4">
        {/* Image with 35% height but full width */}
        <img
          src={data.image}
          alt={data.id}
          className="w-full object-cover"
          style={{ height: "45vh" }} // 35% of viewport height
        />
        <p>{data.description}</p>
        <p>
          Synergistically drive e-business leadership with unique synergy.
          Compellingly seize market positioning ROI and bricks-and-clicks
          e-markets.
        </p>
        <blockquote className="border-l-4 border-orange-500 pl-4 text-2xl font-semibold text-orange-700">
          {data.Smlldescription}
        </blockquote>
        <p>
          Compellingly enhance seamless resources through competitive content.
          Continually actualize 24/365 alignments for resource-leveling
          platforms.
        </p>
      </div>
      <div className="mt-6 flex space-x-2">
        <span className="bg-gray-200 px-3 py-1 text-sm rounded-full">
          {data.Category}
        </span>

        <span className="bg-gray-200 px-3 py-1 text-sm rounded-full">
          DESIGN
        </span>
      </div>
      <div className="mt-8 flex items-center gap-2 mb-7 border-b pb-4">
        <img
          src={data.autherImage}
          alt={data.id}
          className="rounded-full h-12 w-12"
        />

        <div className="">
          <p className="text-sm font-semibold">By Jennifer Lawrence</p>
          <p className="text-xs text-gray-500">Thinker & Designer</p>
          <span>{data.Date}</span>
        </div>
      </div>
    </div>
  );
}
