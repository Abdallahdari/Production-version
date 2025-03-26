"use client";
import React from "react";
import { MoveRight, Trash2 } from "lucide-react";
import { GetItem, GetTotalPrice, remove } from "../reduxToolkit/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

export default function CartPage() {
  const cartItems = useSelector(GetItem);
  const total = useSelector(GetTotalPrice);
  const discount = cartItems.map((item) => item.Discount);
  const dispatch = useDispatch();
  function Delete(id) {
    dispatch(remove(id));
  }
  // ✅ Calculate total discount for all items
  const Discount = cartItems.map((item) => item.Discount);
  console.log("disc", Discount);
  return (
    <div className="container mx-auto xl:max-w-[1200px] py-24">
      {cartItems.length > 0 ? (
        <>
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase mb-6 md:mb-12">
            Your cart
          </h1>
          <div className="grid md:grid-cols-[1fr_25rem] gap-5">
            <div className="px-4 py-2 border rounded-lg h-max">
              <div className="flex flex-col gap-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between py-3 w-full border-b"
                  >
                    <div className="flex items-center gap-4">
                      <img src={item.image} className="h-24" />
                      <div>
                        <p>{item.name}</p>
                        <p>
                          Size:
                          <span className="text-gray-500 ml-1">
                            {item.size}
                          </span>
                        </p>
                        <p className="font-semibold text-xl">${item.price}</p>
                        {item.Discount && (
                          <p className="text-red-500">
                            Discount: ${item.Discount}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <button onClick={() => Delete(item.id)}>
                        <Trash2 className="text-red-500 hover:text-red-700 transition-all duration-300" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-4 py-4 border rounded-lg h-max">
              <h2 className="text-2xl font-bold">Order Summary</h2>
              <div className="flex items-center w-full justify-between">
                <p className="text-gray-400">Subtotal</p>
                <p className="text-xl font-bold ">${total}</p>
              </div>
              {discount.length > 0 && <p>Discount :({discount}%)</p>}
              <div className="flex items-center justify-between w-full mt-2 py-2 border-b">
                <p className="font-bold text-lg">Total</p>${total}{" "}
              </div>
              <button className="w-full text-white mt-3 flex items-center justify-center py-4 hover:bg-blue-600 gap-3  bg-slate-950 rounded-full transition-all  duration-300  text-center">
                <p>Go to Checkout </p> <MoveRight />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="h-[calc(100vh-24rem)] flex items-center justify-center">
          {" "}
          <div>
            {" "}
            <p className="text-3xl uppercase">There is Nothing in your Cart</p>
            <div className="flex items-center justify-center mt-5">
              <Link
                className="px-4 py-3 text-white rounded-lg bg-slate-950 hover:bg-blue-600 transition-all duration-200 "
                href={"/shop"}
              >
                Go back to Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
