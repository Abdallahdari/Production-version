"use client";

import { Sliders, Star } from "lucide-react";
import { useState } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import { toast, ToastContainer } from "react-toastify";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
export const revalidate = 60;
interface Products {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
  Category: string;
  Discount: string;
  Size: string; // Added Size field
  Stars: number; // Assuming Stars is a number, not a string
  OldPrice?: string; // Optional OldPrice field
}

interface Prod {
  data: Products[];
}

export default function Filter({ data }: Prod) {
  const [IsopenPrice, SetIsopenPrice] = useState(true);
  const [SetIsopenSize] = useState(true);
  const [filter, Setfilter] = useState(data);
  const [max, setMax] = useState(500);
  const [min, setMin] = useState(10);
  const [isFilterd, SetIsfilter] = useState(false);

  const [activeSize, setActiveSize] = useState<string | null>(null);

  // Extract and deduplicate sizes using a Set
  // const uniqueSizes = Array.from(
  //   new Set(data.map((item) => item.size.toLowerCase())) // Create unique size list
  // );

  const handleSliderChange = (values: number[]) => {
    const [newMin, newMax] = values;
    setMin(newMin);
    setMax(newMax);
  };
  function Handlesort(order) {
    const sortdata = [...data];
    if (order === "Highest Price") {
      sortdata.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (order === "Lowest Price") {
      sortdata.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    }
    Setfilter(sortdata);
  }
  function HandleFilter() {
    const filteredData = data.filter((item) => {
      const price =
        typeof item.price === "string"
          ? parseFloat(item.price.replace("$", ""))
          : item.price;
      const inPriceRange = price >= min && price <= max;

      const matchesSize = activeSize ? item.size === activeSize : true;

      return inPriceRange && matchesSize;
    });
    Setfilter(filteredData); // Update state with filtered data
    SetIsfilter(true);
    toast.success(`${filteredData.length} items Found`);
  }
  function Clearfilter() {
    SetIsfilter(false);

    Setfilter(data);
    setActiveSize();
    setMin(10);
    setMax(500);
    toast.error("filter has been removed");
  }
  return (
    <>
      <ToastContainer />
      <div className="container mx-auto xl:max-w-[1400px] mt-10 px-2 md:mt-20 py-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1 justify-center">
            <p>
              <Link href={`/shop}`} className="text-gray-400 block">
                Home
              </Link>
            </p>
            <p>
              {" "}
              <IoIosArrowForward className="text-gray-400" />
            </p>
          </div>

          <p>Shop</p>
        </div>
        <div className="grid md:grid-cols-[18rem_1fr] items-start gap-4">
          <div className="filter px-4 border h-max rounded-xl">
            <div className="flex items-center justify-between w-full border-b py-4 mb-1">
              <h1 className="font-satoshi font-semibold">Filters</h1>
              <Sliders className="border-none h-5" color="#adb5bd" />
            </div>

            {/* Price Filter */}
            <div className="w-full price border-b py-4 mb-3">
              <div className="flex items-center justify-between mb-3">
                <h1 className="font-satoshi font-semibold ">Price</h1>
                <button onClick={() => SetIsopenPrice((item) => !item)}>
                  {" "}
                  {IsopenPrice ? <IoIosArrowUp /> : <IoIosArrowForward />}
                </button>
              </div>
              {IsopenPrice && (
                <>
                  <Slider
                    range
                    value={[min, max]}
                    min={10}
                    max={500}
                    onChange={handleSliderChange}
                    trackStyle={[{ backgroundColor: "black" }]}
                    handleStyle={[
                      { borderColor: "black" },
                      { borderColor: "black" },
                    ]}
                    railStyle={{ backgroundColor: "#f1f3f5" }}
                  />
                  <div className="flex items-center justify-between w-full mt-2">
                    <p className="text-gray-500">Min Price: ${min}</p>
                    <p className="text-gray-500">Max Price: ${max}</p>
                  </div>
                </>
              )}
            </div>

            {/* Size Filter */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h1 className="font-satoshi font-semibold ">Size</h1>
                <button onClick={() => SetIsopenSize((item) => !item)}>
                  {" "}
                  {/* {IsopenSize ? <IoIosArrowUp /> : <IoIosArrowForward />} */}
                </button>{" "}
              </div>
              {/* {IsopenSize && (
                <div className="size grid grid-cols-3 gap-4 border-b py-4 mb-2">
                  {uniqueSizes.map((sizeOption) => (
                    <button
                      key={sizeOption}
                      onClick={() => handleSizeClick(sizeOption)}
                      className={`border py-1 px-3 rounded-full flex items-center justify-center transition-all ${
                        activeSize === sizeOption
                          ? "bg-black text-white"
                          : "bg-transparent text-black"
                      }`}
                    >
                      <span>{sizeOption.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              )} */}
            </div>

            {/* Submit Button */}
            <div className="py-5">
              <button
                onClick={HandleFilter}
                type="submit"
                className="text-center py-2 w-full bg-slate-950 text-white hover:bg-blue-500 transition-all duration-200 rounded-full"
              >
                Apply Filters
              </button>
            </div>
            {isFilterd && (
              <button
                className="text-center py-2 w-full bg-[#f03e3e] mb-6 text-white hover:bg-[#ff6b6b] transition-all duration-200 rounded-full"
                onClick={Clearfilter}
              >
                Clear filter
              </button>
            )}
          </div>

          {/* Product Listing */}
          <div className="product  px-4 ">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-satoshi font-semibold ">Shop</h1>
              <div className="flex items-center gap-4">
                <p className="text-gray-400 font-satoshi">
                  Showing 0 - {filter.length} of {data.length} Product
                </p>
                <select
                  title="select"
                  onChange={(e) => Handlesort(e.target.value)}
                  className="border  px-4 py-2 rounded-sm"
                >
                  <option>Sortby</option>

                  <option value="Lowest Price">Lowest Price</option>
                  <option value="Highest Price">Highest Price</option>
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {filter.map((item) => (
                <Link href={`/shop/${item.id}`} className="group" key={item.id}>
                  <div className="h-80 overflow-hidden rounded-lg group">
                    <img
                      src={item.image}
                      alt={item.description}
                      className="w-full object-cover h-full group-hover:scale-110 transition-all duration-200"
                    />
                  </div>
                  <h1 className="font-bold my-2.5">{item.name}</h1>
                  <div className="flex items-center gap-3">
                    <p className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(item.average_rating)
                              ? "text-yellow-400 fill-yellow-400" // Full star
                              : i < item.average_rating
                              ? "text-yellow-400 fill-yellow-400" // Half star (if you want to support half stars)
                              : "text-muted-foreground" // Empty star
                          }`}
                        />
                      ))}
                    </p>
                    <p>{item.average_rating.toFixed(1)}/5</p>
                  </div>
                  <div className="flex items-center gap-2 my-2">
                    <p className="font-semibold text-xl">${item.price}</p>
                    {item.OldPrice && (
                      <p className="text-gray-400 text-xl font-semibold line-through">
                        ${item.OldPrice}
                      </p>
                    )}
                    {item.Discount && (
                      <div className="px-4 py-1 bg-[#ffebeb] rounded-full">
                        <p className="text-[12px] text-[#FF3333]">
                          {item.Discount}%
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
