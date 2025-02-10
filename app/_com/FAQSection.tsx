import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQSection() {
  return (
    <section className="container mx-auto xl:max-w-[1200px]  py-12 px-4">
      <div className="space-y-6 grid md:grid-cols-[30rem_1fr] items-center gap-10">
        <div className="space-y-2 ">
          <h2 className="text-3xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything You Need to Know About Shopping With Us
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Ask A Question
          </Button>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How can I track my order?</AccordionTrigger>
            <AccordionContent>
              Once your order is shipped, we&apos;ll send you an email with the
              tracking details. You can use the tracking number to monitor the
              delivery status on the courier&apos;s website. Alternatively, log
              in to your account, go to the &quot;Orders&quot; section, and
              click on the &quot;Track Order&quot; button
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              What is your return and refund policy?
            </AccordionTrigger>
            <AccordionContent>
              We offer a 30-day return policy for all unused items in their
              original packaging. Once we receive your return, we&apos;ll
              process your refund within 5-7 business days.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Do you offer international shipping?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we ship to most countries worldwide. Shipping costs and
              delivery times vary depending on your location. You can see the
              exact shipping costs at checkout.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              What payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent>
              We accept all major credit cards (Visa, MasterCard, American
              Express), PayPal, and Apple Pay. All payments are processed
              securely through our payment gateway.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
