import React from "react";
import { TOpProduct } from "../_lib/dataService";

import Link from "next/link";

export default async function Topsalte() {
  const data = await TOpProduct();
  console.log(data);

  return (
    <div className="container mx-auto xl:max-w-[1200px] px-4 my-24">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-6 md:mb-12">
        NEW ARRIVALS
      </h1>
      <div className="grid md:grid-cols-4 gap-4">
        {data.map((item) => (
          <Link href={`/top/${item.id}`} className="group" key={item.id}>
            <div className="h-64 overflow-hidden rounded-lg group">
              <img
                src={item.image}
                alt={item.Description}
                className="w-full object-cover h-full group-hover:scale-110 transition-all duration-200"
              />
            </div>
            <h1 className="font-bold  my-2.5">{item.Description}</h1>
            <div className="flex items-center gap-3">
              {" "}
              <p className="flex items-center">
                {[...Array(item.Stars)].map((_, i) => (
                  <svg
                    key={i}
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z"
                      fill="#FFC633"
                    />
                  </svg>
                ))}
              </p>
              <p>{item.Stars}.0/5</p>
            </div>

            <div className="flex items-center gap-2 my-2">
              <p className="font-bold text-xl font-satoshi">${item.price}</p>
              {item.OldPrice && (
                <p className="text-gray-400 text-xl font-semibold line-through">
                  ${item.OldPrice}
                </p>
              )}
              {item.Discount && (
                <div className="px-4 py-1  bg-[#ffebeb] rounded-full">
                  <p className="text-[12px] text-[#FF3333]">{item.Discount}%</p>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
