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
import { Star, ThumbsDown, ThumbsUp } from "lucide-react";

export default function ProductReviews() {
  const [showReviewForm, setShowReviewForm] = useState(false);

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

  const ratingPercentages = ratingCounts.map(
    (count) => (count / totalReviews) * 100
  );

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">Customer Reviews</h2>

      <div className="mt-4 grid gap-4 md:grid-cols-[250px_1fr]">
        {/* Rating Summary - More compact */}
        <Card className="h-fit">
          <CardHeader className="p-4">
            <CardTitle className="text-lg">Rating Summary</CardTitle>
            <CardDescription className="text-sm">
              Based on {totalReviews} reviews
            </CardDescription>
            <div className="mt-1 flex items-center gap-2">
              <div className="text-2xl font-bold">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i <= Math.floor(averageRating)
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="space-y-1">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-2">
                  <div className="w-4 text-xs">{rating}★</div>
                  <Progress
                    value={ratingPercentages[rating - 1]}
                    className="h-1.5"
                  />
                  <div className="w-8 text-right text-xs text-muted-foreground">
                    {ratingCounts[rating - 1]}
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="mt-4 w-full text-sm"
              size="sm"
              onClick={() => setShowReviewForm(!showReviewForm)}
            >
              Write a Review
            </Button>

            {showReviewForm && (
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Star
                      key={rating}
                      className="h-5 w-5 cursor-pointer text-muted-foreground hover:text-primary"
                    />
                  ))}
                </div>
                <Textarea
                  placeholder="Share your experience with this product..."
                  className="text-sm"
                />
                <Button size="sm">Submit Review</Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Reviews List - More compact */}
        <div className="space-y-3">
          {reviews.map((review) => (
            <Card key={review.id} className="overflow-hidden">
              <CardHeader className="p-3 pb-0">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.author}
                      />
                      <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-semibold">
                        {review.author}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {review.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i <= review.rating
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <CardTitle className="mt-1 text-sm">{review.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-1">
                <p className="text-xs text-muted-foreground">
                  {review.content}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-6 gap-1 text-xs"
                  >
                    <ThumbsUp className="h-3 w-3" />
                    <span>Helpful ({review.helpful})</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-6 gap-1 text-xs"
                  >
                    <ThumbsDown className="h-3 w-3" />
                    <span>Not Helpful ({review.unhelpful})</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          <Button variant="outline" size="sm" className="w-full text-sm">
            Load More Reviews
          </Button>
        </div>
      </div>
    </section>
  );
}
