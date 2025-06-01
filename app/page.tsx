import React, { Suspense } from "react";
import Loader from "./loading";
import FAQSection from "./_com/FAQSection";

import Testimonials from "./_com/Testimonials";
import HeroCarousel from "./_com/Hero";
import Catogery from "./_com/Catogery";
import Feutred from "./_com/Feutred";
import Trust from "./_com/Trust";
import { getAllProductsWithRatings } from "./_lib/dataService";

export default async function page() {
  const data = await getAllProductsWithRatings();
  console.log("rev", data);
  return (
    <div className="">
      <HeroCarousel />

      <Suspense fallback={<Loader />}>
        <Catogery />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Feutred data={data} />
      </Suspense>
      <Trust />
      <Suspense fallback={<Loader />}>
        <Testimonials />
      </Suspense>

      <FAQSection />
    </div>
  );
}
