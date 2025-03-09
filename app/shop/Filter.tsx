"use client";
import React, { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Loader from "../loading";

interface Products {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
  Category: string;
  Discount: string;
}

interface Prod {
  data: Products[];
}

export default function Filter({ data }: Prod) {
  const [filteredProducts, setFilteredProducts] = useState<Products[]>(data);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [loading, Setloading] = useState(false);
  const [Isopen, Setisopn] = useState(false);
  // Extract unique categories from data
  const categories = Array.from(
    new Set(data.map((product) => product.Catogery))
  ).map((Catogery) => {
    const count = data.filter(
      (product) => product.Catogery === Catogery
    ).length;
    return { name: Catogery, count };
  });

  const priceRanges = [
    { label: "$0.00 - $20.00", min: 0, max: 20 },

    { label: "$20.00 - $50.00", min: 20, max: 50 },
    { label: "$50.00 - $100.00", min: 50, max: 100 },
    { label: "$100.00 - $200.00", min: 100, max: 200 },
    { label: "$200.00 - $500.00", min: 200, max: 500 },
  ];

  useEffect(() => {
    Setloading(true);
    let filtered = data;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.Catogery)
      );
    }

    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter((product) =>
        selectedPriceRanges.some((rangeLabel) => {
          const range = priceRanges.find((r) => r.label === rangeLabel);
          if (range) {
            const price = parseFloat(product.price);
            return price >= range.min && price <= range.max;
          }
          return false;
        })
      );
    }

    setFilteredProducts(filtered);
    Setloading(false);
  }, [selectedCategories, selectedPriceRanges, data]);

  // const handleCategoryChange = (category: string) => {
  //   setSelectedCategories((prev) =>
  //     prev.includes(category)
  //       ? prev.filter((c) => c !== category)
  //       : [...prev, category]
  //   );
  // };

  // const handlePriceChange = (label: string) => {
  //   setSelectedPriceRanges((prev) =>
  //     prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
  //   );
  // };

  return (
    <div className="container mx-auto xl:max-w-[1450px] py-12 mt-12">
      <div className="grid md:grid-cols-[17rem_1fr] gap-4">
        <div className="p-4 h-max bg-gray-50 ">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          {/* Size Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Size</h3>
            <div className="grid md:grid-cols-3 gap-2">
              {["XS", "S", "M", "L", "XL", "2X"].map((size) => (
                <button
                  key={size}
                  className="border border-gray-500 px-4 py-1 rounded hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Availability Filter */}

          {/* Collapsible Sections */}
          {["Category", "Ratings"].map((section) => (
            <div key={section} className="mb-4">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold">{section}</h3>
                <span>&#x276F;</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4 overflow-hidden">
          {loading ? (
            <Loader />
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <Link
                href={`/shop/${item.id}`}
                key={item.id}
                className="border block overflow-hidden group rounded-md"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full group-hover:scale-105 transition-all duration-200 h-64 object-cover rounded-t-lg"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                    %{item.Discount}
                  </span>
                </div>
                <div className="px-4 my-3 ">
                  <h1 className="text-xl font-semibold">{item.name}</h1>
                  <p>{item.description}</p>
                  <p className="text-green-600 font-bold">${item.price}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
