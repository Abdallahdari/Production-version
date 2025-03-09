import React, { Suspense } from "react";
import Header from "./_com/Header";
import Catogreis from "./_com/Catogreis";
import Loader from "./loading";
import FAQSection from "./_com/FAQSection";
import Topsalte from "./_com/Topsalte";
import NEWST from "./_com/NEWST";
import Testimonials from "./_com/Testimonials";

export default function page() {
  return (
    <div>
      <Header />

      <Suspense fallback={<Loader />}>
        <Topsalte />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <NEWST />
      </Suspense>
      <Catogreis />
      <Suspense fallback={<Loader />}>
        {" "}
        <Testimonials />
      </Suspense>

      <FAQSection />
    </div>
  );
}
