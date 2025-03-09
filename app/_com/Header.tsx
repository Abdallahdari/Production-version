"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import sawir1 from "@/public/image.png";
import sawir2 from "@/public/image.png";
import sawir3 from "@/public/image.png";

export default function Header() {
  const slides = [
    {
      image: sawir1,
      title: "Summer Sale Collections",
      subtitle: "Sale! Up To 20% Off!",
    },
    {
      image: sawir2,
      title: "Fashion for Every Occasion",
      subtitle: "Sale! Up To 50% Off!",
    },
    {
      image: sawir3,
      title: "Stylish Looks for Any Season",
      subtitle: "Sale! Up To 30% Off!",
    },
  ];

  return (
    <div className="slider-block style-one bg-linear xl:h-[860px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[320px] w-full">
      <div className="slider-main h-full w-full">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="h-full relative"
          autoplay={{ delay: 4000 }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="slider-item h-full w-full flex items-center   bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image.src})` }}
              >
                <div className="px-5 md:px-24 text-black z-10">
                  <h1 className=" mb-5 uppercase text-2xl md:text-7xl font-extrabold">
                    Find clothes <br /> That matches <br /> Your style
                  </h1>

                  <p className="mb-5 text-gray-700 max-w-[250px] md:max-w-max">
                    Order now and get in 72hours And also get 24hour support{" "}
                  </p>

                  <Link
                    href="/shop"
                    className="button-main bg-slate-950 mt-5 text-white   hover:bg-white hover:text-black transition-all duration-300  px-5 md:px-10 rounded-full py-2  md:py-3 "
                  >
                    Shop Now
                  </Link>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
