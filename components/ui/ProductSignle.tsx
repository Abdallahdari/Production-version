import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  Heart,
  Minus,
  Plus,
  Share2,
  ShoppingCart,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductReviews from "@/components/ui/Productrview";
interface Product {
  name: string;
  image: string;
  description: string;
  price: string;
  Discount: string;
  Stars: string;
  size: string;
  Quantity: string;
}
interface ProductProbs {
  product: Product;
}
export default function ProductPage({ product }: ProductProbs) {
  return (
    <main className="container mx-auto xl:max-w-[1200px] px-4 py-6 md:py-10">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/shop">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        {/* Product Images */}
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-lg border bg-white">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="aspect-square w-full object-cover"
              priority
            />
          </div>
          {/* <div className="flex gap-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border bg-white"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className="aspect-square h-20 w-20 cursor-pointer object-cover"
                />
              </div>
            ))}
          </div> */}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.Stars)
                        ? "fill-primary text-primary"
                        : i < product.Stars
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  ({product.reviewCount} reviews)
                </span>
              </div>
              <Badge variant="outline" className="px-2 py-1">
                {/* {product.inStock ? "In Stock" : "Out of Stock"} */}
              </Badge>
            </div>
            <div className="mt-4">
              <span className="text-3xl font-bold">
                {/* ${product.price.toFixed(2)} */}
              </span>
            </div>
          </div>

          <Separator />

          {/* Color Selection */}
          <div>
            <h3 className="mb-2 text-sm font-medium">Color</h3>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="mb-2 text-sm font-medium">Size</h3>
            <div className="flex gap-2">
              {/* {product.size.map((size) => (
                <Button
                  key={size}
                  variant="outline"
                  className="rounded-md px-3 py-1"
                >
                  {size}
                </Button>
              ))} */}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="mb-2 text-sm font-medium">Quantity</h3>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-r-none"
              >
                <Minus className="h-3 w-3" />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex h-8 w-12 items-center justify-center border-y">
                1
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-l-none"
              >
                <Plus className="h-3 w-3" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="mt-4 flex gap-2">
            <Button className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>

          {/* Product Description */}
          <Tabs defaultValue="description" className="mt-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
            </TabsContent>

            <TabsContent value="shipping" className="mt-4">
              <p className="text-sm text-muted-foreground">
                Free shipping on orders over $50. Standard delivery 3-5 business
                days. Express delivery 1-2 business days.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Reviews Section */}
      <ProductReviews />
    </main>
  );
}
