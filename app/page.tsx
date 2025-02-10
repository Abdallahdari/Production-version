import React, { Suspense } from "react";
import Discount from "./_com/Disocunt";
import Header from "./_com/Header";
import Mostpopular from "./_com/Mostpopular";
import Catogreis from "./_com/Catogreis";
import Loader from "./loading";
import FAQSection from "./_com/FAQSection";

export default function page() {
  return (
    <div>
      <Header />
      <Catogreis />
      <Suspense fallback={<Loader />}>
        <Discount />
      </Suspense>
      <Mostpopular />
      <FAQSection />
    </div>
  );
}
