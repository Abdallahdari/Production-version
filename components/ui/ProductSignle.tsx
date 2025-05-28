"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  Loader2,
  Minus,
  Plus,
  ShoppingCart,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductReviews from "@/components/ui/Productrview";
import { useState } from "react";
import RelatedProducts from "./related";
import { ToastContainer, toast } from "react-toastify";
import { addcart } from "@/app/_lib/actions";

export default function ProductPage({
  product,
  user,
  hasUserReviewed,
  allReviews,
  comment,
  relatedProducts,
}) {
  const [quantity, setQuantity] = useState(1);
  const [sizes, setsize] = useState(false);
  const [loading, setloading] = useState(false);

  const decrease = () => {
    const newValue = quantity - 1;
    setQuantity(newValue);
  };

  const increase = () => {
    const newValue = quantity + 1;
    setQuantity(newValue);
  };
  const HandleaddCart = async (e) => {
    e.preventDefault();
    setloading(true);
    if (!sizes) {
      setloading(false); // make sure the variable name matches exactly

      toast.error("Please select a size", {
        autoClose: 1500,
      });
      return;
    }
    try {
      await addcart(product.id, quantity, sizes);
      toast.success("Added to the cart", {
        autoClose: 1500,
        onClose: () => {
          setloading(false); // make sure the variable name matches exactly
        },
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  // Calculate average rating from actual reviews
  const averageRating =
    allReviews.length > 0
      ? allReviews.reduce((sum, review) => sum + review.rating, 0) /
        allReviews.length
      : 0;
  return (
    <main className="container mx-auto xl:max-w-[1200px] px-4 py-6 md:py-10">
      <ToastContainer />
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
        <div onSubmit={HandleaddCart} className="flex flex-col gap-4">
          <div className="overflow-hidden  bg-white">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="aspect-square w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4">
          <form onSubmit={HandleaddCart}>
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="mt-2 flex items-center gap-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(averageRating)
                          ? "text-yellow-400 fill-yellow-400"
                          : i < averageRating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({allReviews.length} reviews)
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-3xl font-bold">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>

            <Separator />

            {/* Color Selection */}

            {/* Size Selection */}
            <div className="">
              <h3 className="mb-2 text-sm font-medium">Size :</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <Button
                    type="button"
                    onClick={() => setsize(size)}
                    key={size}
                    variant="outline"
                    className={`${
                      size === sizes ? "bg-slate-950 text-gray-100 " : ""
                    }rounded-md px-3 py-1`}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="mb-2 text-sm font-medium">Quantity</h3>
              <div className="flex items-center">
                <Button
                  onClick={decrease}
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-r-none"
                >
                  <Minus className="h-3 w-3" />
                  <span className="sr-only">Decrease</span>
                </Button>
                <div className="flex h-8 w-12 items-center justify-center border-y">
                  {quantity}{" "}
                </div>
                <Button
                  type="button"
                  onClick={increase}
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
            {
              <div className="mt-4 flex gap-2">
                {loading ? (
                  <>
                    {" "}
                    <Button className="flex-1">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Adding
                      to the Cart
                    </Button>
                  </>
                ) : (
                  <Button className="flex-1">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                )}
              </div>
            }

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
                  Free shipping on orders over $50. Standard delivery 3-5
                  business days. Express delivery 1-2 business days.
                </p>
              </TabsContent>
            </Tabs>
          </form>
        </div>
      </div>
      {/* Reviews Section */}
      {user && (
        <ProductReviews
          product={product}
          hasUserReviewed={hasUserReviewed}
          comment={comment}
          allReviews={allReviews}
        />
      )}{" "}
      {
        //   Related section

        <RelatedProducts relatedProducts={relatedProducts} />
      }
    </main>
  );
}
