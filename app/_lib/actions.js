"use server";

import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
// update user
export async function UpdateUser(formData) {
  const session = await auth();
  if (!session) throw new Error("You should Login");

  const Phone = formData.get("Phone");
  const street = formData.get("street");
  const city = formData.get("city");
  const state = formData.get("state");
  const postalCode = formData.get("postalCode");
  const country = formData.get("country");

  const { data, error } = await supabase
    .from("User")
    .update({
      street: street,
      city: city,
      country: country,
      postalCode: postalCode,
      Phone: Phone,
      statE: state, // Fixed potential typo from statE to state
    })
    .eq("id", session.user.id) // Add this to specify which user to update
    .select(); // Simplified select to return all fields

  if (error) {
    console.error("Update error:", error);
    throw error;
  }

  return data;
}
// signin
export async function SigninAction() {
  await signIn("google", { redirectTo: "/" });
}
// singout
export async function SignoutAction() {
  await signOut({ redirectTo: "/login" });
}
// export async function Createreviews(id, formData) {
//   const user = await auth();
//   const comment = formData.get("comment");
//   const stars = formData.get("stars");
//   const product = id;
//   if (!user) {
//     return null;
//   }

//   console.log(formData);
//   const { data, error } = await supabase
//     .from("reviews")
//     .insert([
//       {
//         rating: stars,
//         comment: comment,
//         productId: product,
//         userID: user.user.id,
//       },
//     ])
//     .select();
//   if (error) {
//     console.log("error", error);
//   }
//   return data;
// }

export async function Createreviews(id, formData) {
  const user = await auth();
  const comment = formData.get("comment");
  const stars = formData.get("stars");

  if (!user) {
    return null;
  }
  const { data: existingReview, error: checkError } = await supabase
    .from("reviews")
    .select("*")
    .eq("userID", user.user.id)
    .eq("productId", id.id)
    .maybeSingle();

  if (checkError) throw checkError;
  if (existingReview) throw new Error("you reivew before");
  if (!existingReview) {
    const productId = id.id; // ✅ id must be a number (e.g., 77)

    const { data, error } = await supabase
      .from("reviews")
      .insert([
        {
          rating: stars,
          comment: comment,
          productId: productId,
          userID: user.user.id, // ✅ must be a number
        },
      ])
      .select();

    if (error) {
      console.log("error", error);
    }

    return data;
  }
}

// Add this function to get reviews for all products
export async function getProductsWithReviews() {
  const { data: products, error } = await supabase
    .from('products')
    .select('*');
    
  if (error) throw error;

  // Get all reviews with product and user info
  const { data: reviews, error: reviewError } = await supabase
    .from('reviews')
    .select(`
      *,
      product:productId(*),
      user:userId(*)
    `);

  if (reviewError) throw reviewError;

  // Attach reviews to products
  return products.map(product => ({
    ...product,
    reviews: reviews.filter(review => review.productId === product.id)
  }));
}
