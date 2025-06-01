import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import sawir1 from "@/public/Men-shoes.jpg";
import sawir2 from "@/public/Abbaya.jpg";
import sawir3 from "@/public/bags.jpg";
export default function Catogery() {
  return (
    <div className="container mx-auto xl:max-w-[1400px]">
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Shop by Category</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated collections designed for every
              style and occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Men's Collection",
                image: sawir1,
                items: "250+ items",
              },
              {
                name: "Women's Fashion",
                image: sawir2,
                items: "180+ items",
              },
              {
                name: "Bags",
                image: sawir3,
                items: "120+ items",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.items}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
