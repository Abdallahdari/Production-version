"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Star, ThumbsDown, ThumbsUp } from "lucide-react";
import { StarIcon } from "lucide-react";
import { Createreviews } from "@/app/_lib/actions";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
export default function ProductReviews({
  product,
  hasUserReviewed,
  comment,
  allReviews,
}) {
  const [showReviewForm, setShowReviewForm] = useState(true);
  const [rating, setRating] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  // Mock reviews data - in a real app, you would fetch this from an API
  const reviews = [
    {
      id: "1",
      author: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2 months ago",
      title: "Excellent quality and fit",
      content:
        "I absolutely love this t-shirt! The fabric is soft and comfortable, and the fit is perfect. I've already ordered two more in different colors.",
      helpful: 24,
      unhelpful: 2,
    },
    {
      id: "2",
      author: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      date: "1 month ago",
      title: "Great shirt, slightly large",
      content:
        "The quality is excellent and the material feels premium. My only issue is that it runs slightly large. I would recommend sizing down if you prefer a more fitted look.",
      helpful: 18,
      unhelpful: 3,
    },
    {
      id: "3",
      author: "Jessica Williams",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "3 weeks ago",
      title: "Perfect everyday shirt",
      content:
        "This has quickly become my go-to shirt for everyday wear. It's comfortable, washes well, and looks great. Highly recommend!",
      helpful: 12,
      unhelpful: 0,
    },
  ];

  // Calculate rating statistics
  const totalReviews = reviews.length;
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews;

  const ratingCounts = [0, 0, 0, 0, 0];
  reviews.forEach((review) => {
    ratingCounts[review.rating - 1]++;
  });

  const Handlesubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target); // ✅ capture the form data
    if (!rating) {
      toast.error("you should rate ");
      setIsLoading(false);

      return null;
    }
    try {
      await Createreviews(product, formData);

      toast.success("Review submitted successfully", {
        autoClose: 1000, // 1 second
        onClose: () => {
          window.location.reload();
        },
      });
    } catch (error) {
      toast.error("Failed to submit review");
      console.error(error);
    }
  };

  return (
    <section className="mt-8">
      <ToastContainer />
      <h2 className="text-xl font-bold">Customer Reviews</h2>

      <div
        className={`mt-4 grid gap-4 ${
          hasUserReviewed ? "" : "md:grid-cols-[250px_1fr]"
        } `}
      >
        {/* Rating  */}

        {hasUserReviewed ? (
          ""
        ) : (
          <Card className="h-fit">
            <form onSubmit={Handlesubmit}>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Rating Summary</CardTitle>
                <CardDescription className="text-sm">
                  Based on 5 reviews
                </CardDescription>
                <div className="mt-1 flex items-center gap-2">
                  <div className="text-2xl font-bold">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="focus:outline-none"
                      >
                        <StarIcon
                          className={`h-6 w-6 ${
                            star <= rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                    <input type="hidden" name="stars" value={rating} required />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-1">
                  {[5, 4, 3, 2, 1].map((star) => {
                    // Calculate count of reviews for this star rating
                    const count = allReviews.filter(
                      (review) => review.rating === star
                    ).length;
                    // Calculate percentage (rounded to nearest integer)
                    const percentage =
                      allReviews.length > 0
                        ? Math.round((count / allReviews.length) * 100)
                        : 0;

                    return (
                      <div key={star} className="flex items-center gap-2">
                        <div className="w-4 text-xs">{star}★</div>
                        <Progress
                          value={percentage}
                          className="h-1.5 text-yellow-400 fill-yellow-400"
                        />
                        <div className="w-8 text-right text-xs text-muted-foreground">
                          {count}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-3 space-y-3">
                  <Textarea
                    name="comment"
                    placeholder="Share your experience with this product..."
                    className="text-sm"
                  />
                  <Button
                    type="submit"
                    className="hover:bg-slate-950 transition-all duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      "Save changes"
                    )}
                  </Button>{" "}
                </div>
              </CardContent>
            </form>
          </Card>
        )}

        {/* Reviews shown soo bandhigid */}
        <div className=" grid md:grid-cols-3  gap-4">
          {allReviews.map((review) => (
            <Card
              key={review.id}
              className="overflow-hidden flex flex-col h-full"
            >
              <CardHeader className="p-3 pb-0">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={review.User?.avatar || "/placeholder.svg"}
                        alt={review.User?.name}
                      />
                      <AvatarFallback>
                        {review.User?.name?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-semibold">
                        {review.User?.name || "Anonymous"}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(review.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i <= review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                {review.title && (
                  <CardTitle className="mt-1 text-sm">{review.title}</CardTitle>
                )}
              </CardHeader>
              <CardContent className="p-3 pt-1">
                <p className="text-xs text-muted-foreground">
                  {review.comment || review.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
