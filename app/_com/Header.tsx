"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import sawir1 from "@/public/bags.jpg";
import sawir2 from "@/public/kabo.jpg";
import sawir3 from "@/public/Abbaya.jpg";

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
                className="slider-item h-full w-full flex items-center justify-center relative bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image.src})` }}
              >
                <div className="text-center text-white z-10">
                  <div className="text-sub-display text-xl font-semibold mb-4">
                    {slide.subtitle}
                  </div>
                  <div className="text-display text-4xl font-bold mb-6">
                    {slide.title}
                  </div>
                  <Link
                    href="/shop"
                    className="button-main bg-white text-black  hover:bg-slate-950 hover:text-white transition-all duration-300  px-6 py-3 rounded-md"
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
