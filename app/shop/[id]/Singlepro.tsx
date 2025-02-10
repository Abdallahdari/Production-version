"use client";
import Link from "next/link";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
// import { useDispatch } from "react-redux";
import { Addingcart } from "./cartSlice";

export default function Singlepro({ product, similarProduct }) {
  const [count, setCount] = useState(1);
  const [mainImage, setMainImage] = useState(product.image); // For changing the main image
  // const dispatch = useDispatch();
  const decrease = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1)); // Prevent going below 1
  };

  const increase = () => {
    if (count < 10) setCount((prev) => prev + 1);
  };

  const addToCart = () => {
    const Newitem = {
      id: product.id,
      name: product.name,
      photo: product.image,
      price: product.price,
    };
    // dispatch(Addingcart(Newitem));
    toast.success(`added ${count} items to the cart!`, {
      position: "top-right",
    });
    console.log(Newitem);
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="container mx-auto p-6 max-w-[1200px] mt-5">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Side: Images */}
          <div className="flex gap-5">
            <div>
              {[...Array(3)].map((_, index) => (
                <img
                  key={index}
                  src={product.image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-28 mb-6 h-28 object-cover border rounded-lg cursor-pointer"
                  onClick={() => setMainImage(product.image)} // Change main image on click
                />
              ))}
            </div>
            <img
              src={mainImage}
              alt={product.name}
              className="w-[70%] h-96 object-cover rounded-lg border"
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="max-w-[400px]">
            <h1 className="text-2xl font-semibold">{product.name}</h1>
            <p className="text-lg text-green-600 font-semibold">
              ${product.price}
            </p>
            <p className="mt-2 text-gray-700">{product.description}</p>

            <div className="mt-4 my-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center my-3 border border-gray-300 rounded-md">
                  <button
                    onClick={decrease}
                    className="px-3 text-gray-500 hover:text-black"
                  >
                    -
                  </button>
                  <span className="px-4">{count}</span>
                  <button
                    onClick={increase}
                    className="px-3 py-2 text-gray-500 hover:text-black"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={addToCart}
                  className="w-full px-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-900 transition-all duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="bg-gray-300">
        <div className="container mx-auto xl:max-w-[1200px] py-12">
          <h1 className="text-2xl font-semibold">Description</h1>
          <p>{product.description}</p>
        </div>
      </div>

      {/* Similar Products */}
      <div>
        <div className="container mx-auto xl:max-w-[1200px] p-6">
          <h1 className="my-6 text-center text-2xl font-semibold">
            Similar Products
          </h1>
          <ul className="grid grid-cols-4 gap-4">
            {similarProduct.map((item) => (
              <Link
                href={`/shop/${item.id}`}
                key={item.id}
                className="group w-full overflow-hidden border rounded-lg shadow-md"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full group-hover:scale-105 transition-all duration-200 h-64 object-cover rounded-t-lg"
                  />
                  {item.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                      -{item.discount}%
                    </span>
                  )}
                </div>
                <div className="p-4 mt-3">
                  <h3 className="text-lg font-medium truncate">{item.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <span className="text-gray-500 line-through text-sm">
                        ${item.originalPrice || (item.price + 10).toFixed(2)}
                      </span>
                      <span className="text-green-600 font-semibold ml-2">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
