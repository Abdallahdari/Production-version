import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Feutred({ data }) {
  console.log("rev", data);
  const slicedData = data.slice(0, 8);
  return (
    <div className="container  bg-slate-50">
      <section className="py-16 lg:py-24 mx-auto xl:max-w-[1400px]">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Trending Now</h2>
            <p className="text-lg text-muted-foreground">
              Our most popular items this season
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {slicedData.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={`/shop/${product.id}`}>
                  {" "}
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={250}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.average_rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">
                        ({product.average_rating})
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold">
                        ${product.price}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                    <Link href={`/shop/${product.id}`}>
                      <Button
                        className="w-full bg-blue-600 hover:bg-slate-950 transition-all duration-300 "
                        size="sm"
                      >
                        view the Product{" "}
                      </Button>
                    </Link>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={"/shop"}>
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
