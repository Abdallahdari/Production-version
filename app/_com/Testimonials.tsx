import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import React from "react";
import { Testimonial } from "../_lib/dataService";

export default async function Testimonials() {
  const data = await Testimonial();
  return (
    <div className="container mx-auto xl:max-w-[1400px]">
      <section className="py-16 lg:py-24 ">
        <div className="container ">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don&quot;t just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.map((testimonial) => (
              <Card key={testimonial.id} className="p-6">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.Stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.Review}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-semibold">
                        {testimonial.UserName}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
