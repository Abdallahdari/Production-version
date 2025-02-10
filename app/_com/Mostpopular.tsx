"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Mostpopular() {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const addToCart = () => {
    toast.success(`added ${quantity} items to the cart!`, {
      position: "top-right",
    });
  };
  return (
    <div>
      <ToastContainer />
      <div className="bg-white py-8 my-4">
        <div className="container mx-auto xl:max-w-[1200px]">
          <div className="flex items-center justify-between mb-8">
            <div className="text">
              <h1 className="text-2xl font-bold ">Most Popular Product</h1>
            </div>
          </div>
          <div className="flex  w-full ">
            <div className="    grid md:grid-cols-[20rem_1fr] items-center  gap-8 ">
              <div>
                <img
                  src={"/Abbaya.jpg"}
                  alt=""
                  className="h-96 object-cover rounded-md "
                />
              </div>
              <div className=" text">
                <h1 className="mb-5 font-semibold text-xl">
                  Jacket italain design has a lather cover with 3 different
                  color
                </h1>
                <p className="text-gray-700 mb-5">
                  Slim-fitting style, contrast raglan long sleeve, three-button
                  henley placket, light weight & soft fabric for breathable and
                  comfortable wearing. And Solid stitched shirts with round neck
                  made for durability and a great fit for casual fashion wear
                  and diehard baseball fans. The Henley style round neckline
                  includes a three-button placket.
                </p>
                <div className="flex items-center gap-5">
                  <div className=" flex items-center border border-gray-300 rounded-md">
                    <button
                      onClick={decreaseQuantity}
                      className="px-3  text-gray-500 hover:text-black"
                    >
                      -
                    </button>
                    <span className="px-4 ">{quantity}</span>
                    <button
                      onClick={increaseQuantity}
                      className="px-3 py-2 text-gray-500 hover:text-black"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={addToCart}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
