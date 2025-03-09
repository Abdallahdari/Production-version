import React from "react";
const catogries = [
  { name: "shoes", photo: "/kabo.jpg" },
  { name: "Men Clothes", photo: "/Men-shoes.jpg" },
  { name: "Women Clothes", photo: "/Abbaya.jpg" },
  { name: "Bags", photo: "/bags.jpg" },
];

export default async function Catogreis() {
  return (
    <div>
      <div className="bg-gray-100 py-10 px-4">
        <div className="container mx-auto xl:max-w-[1200px]">
          <h2 className="text-center text-3xl font-semibold mb-4">
            View Our Range Of Categories
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 grid- md:grid-cols-2 md:grid-r-w  gap-6">
            {catogries.map((category) => (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg"
              >
                <img
                  src={category.photo}
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-semibold">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
