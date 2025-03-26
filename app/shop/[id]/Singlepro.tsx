"use client";

import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addCart } from "@/app/reduxToolkit/cartSlice";
import Link from "next/link";
import { SignoutAction } from "@/app/_lib/actions";
export const revalidate = 60;

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  size: string;
  image: string;
  Discount?: number;
}

interface SingleproProps {
  product: Product;
  similarProduct: Product[];
}

export default function Singlepro({ product, user }: SingleproProps) {
  const [count, setCount] = useState<number>(1);
  const [mainImage, setMainImage] = useState<string>(product.image);
  const dispatch = useDispatch();

  // Decrease quantity (min: 1)
  const decrease = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  // Increase quantity (max: 10)
  const increase = () => setCount((prev) => (prev < 10 ? prev + 1 : 10));

  function Addcart() {
    const Newitem = {
      id: product.id, // Ensure ID is included
      image: product.image,
      name: product.name,
      Discount: product.Discount,
      size: product.size,
      quantity: count, // Include quantity
      price: product.price * count,
    };
    dispatch(addCart(Newitem));
    toast.success("Item added to cart!");
  }

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
                  onClick={() => setMainImage(product.image)}
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
            {product.Discount && (
              <p className="mt-2 text-gray-700">
                Discount{" "}
                <span className="text-red-500"> %{product.Discount}</span>
              </p>
            )}

            {/* Quantity Selector & Add to Cart Button */}
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

                {user ? (
                  <button
                    onClick={Addcart}
                    className="w-full px-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-900 transition-all duration-200"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button
                    onClick={() => SignoutAction()}
                    className="bg-slate-950 py-2 px-4 rounded-md text-white hover:bg-blue-600 transition-all duration-300"
                  >
                    Login To addcart
                  </button>
                )}
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
          <ul className="grid grid-cols-4 gap-4"></ul>
        </div>
      </div>
    </div>
  );
}
