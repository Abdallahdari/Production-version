import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import Loader from "../loading";
import { Quostions } from "../_lib/dataService";
import Link from "next/link";

export default async function FAQSection() {
  const data = await Quostions();
  console.log(data);

  return (
    <section className="container mx-auto xl:max-w-[1200px] py-12 px-4">
      <div className="space-y-6 grid md:grid-cols-[30rem_1fr] items-center gap-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything You Need to Know About Shopping With Us
          </p>
          <Link href={"/contactus"}>
            <Button className="bg-blue-500 my-2 hover:bg-blue-600 text-white">
              Ask A Question
            </Button>
          </Link>
        </div>
        <Suspense fallback={<Loader />}>
          <Accordion type="single" collapsible className="w-full">
            {data?.map((item) => (
              <AccordionItem key={item.id} value={item.id.toString()}>
                <AccordionTrigger>{item.Qustions}</AccordionTrigger>
                <AccordionContent>{item.Answers}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Suspense>
      </div>
    </section>
  );
}
