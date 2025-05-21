import { auth } from "@/app/_lib/auth";
import {
  getAllProductsWithRatings,
  Getreviews,
  GetsingleProduct,
} from "@/app/_lib/dataService";
import ProductPage from "@/components/ui/ProductSignle";

export default async function page({ params }: { params: { id: string } }) {
  const product = await GetsingleProduct(params.id);
  const products = await getAllProductsWithRatings();
  const relatedProducts = products.slice(0, 4);
  const user = await auth();
  const { allReviews, hasUserReviewed, userReview } = await Getreviews(
    params.id,
    user?.user?.id
  ); // Fixed here  console.log("reivew");
  console.log("reivew", allReviews, hasUserReviewed);
  const usernames = allReviews.map((review) => review.User?.name);
  const comment = userReview?.comment;
  console.log("userNames", usernames, comment);
  return (
    <div className="py-12">
      <ProductPage
        product={product}
        user={user}
        hasUserReviewed={hasUserReviewed}
        userReview={userReview}
        allReviews={allReviews}
        comment={comment}
        relatedProducts={relatedProducts}
      />
    </div>
  );
}
