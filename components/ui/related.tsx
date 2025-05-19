"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function RelatedProducts({ relatedProducts }) {
  // Mock related products - in a real app, you would fetch this from an API

  // Mock cart items - in a real app, you would fetch this from state management

  return (
    <>
      {/* Continue Ordering Section - Enhanced */}
      <section className="mt-10 rounded-lg border bg-card p-6">
        {/* You May Also Like */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">You May Also Like</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <Link
                  href={`/shop/${product.id}`}
                  className="block overflow-hidden"
                >
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="aspect-square w-full object-cover transition-transform hover:scale-105"
                  />
                </Link>
                <CardContent className="p-3">
                  <Link
                    href={`/shop/${product.id}`}
                    className="hover:underline"
                  >
                    <h3 className="text-sm font-medium">{product.name}</h3>
                  </Link>
                  <div className="flex items-center gap-3">
                    <p className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.average_rating)
                              ? "text-yellow-400 fill-yellow-400" // Full star
                              : i < product.average_rating
                              ? "text-yellow-400 fill-yellow-400" // Half star (if you want to support half stars)
                              : "text-muted-foreground" // Empty star
                          }`}
                        />
                      ))}
                    </p>
                    <p>{product.average_rating.toFixed(2)}/5</p>
                  </div>
                  <p className="mt-1 text-sm font-semibold">
                    ${product.price.toFixed(2)}
                  </p>
                </CardContent>
                <CardFooter className="p-3 pt-0">
                  <Button variant="outline" size="sm" className="w-full">
                    <ShoppingCart className="mr-1 h-3 w-3" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
