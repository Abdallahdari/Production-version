import { auth } from "./auth";
import { supabase } from "./supabase";

export async function getCabinas() {
  //   const { data, error } = await supabase.from("Cabinas").select("image");

  const { data, error } = await supabase.from("Product").select("*");

  if (error) {
    console.log(error);
    // throw new Error("Cabins could not be loaded");
  }
  console.log("data", data);

  return data;
}

export async function GetsingleProduct(id) {
  const { data, error } = await supabase
    .from("Product")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.log("error no fetching signle", error);
  }
  console.log("data", data);

  return data;
}

export async function Cart() {
  const { data, error } = await supabase.from("Cart").select("*");
  if (error) {
    console.log("the fetchieng is not working ", error);
  }
  console.log("data", data);

  return data;
}

export async function GetAllbolgs() {
  let { data, error } = await supabase.from("Blogs").select("*");
  if (error) {
    console.log("error", error);
  }
  console.log("data", data);

  return data;
}

export async function GetsingleBLog(id) {
  const { data, error } = await supabase
    .from("Blogs")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.log("error", error);
  }
  console.log("data", data);

  return data;
}

export async function Getcountris() {
  const { data, error } = await supabase.from("Countries").select("*");
  if (error) {
    console.log("API_error", error);
  }
  console.log("data", data);

  return data;
}

export async function TOpProduct() {
  const { data, error } = await supabase.from("TopProduct").select("*");
  if (error) {
    console.log("Eror", error.message);
  }

  console.log("top", data);

  return data;
}

export async function Topselling() {
  const { data, error } = await supabase.from("TopSelling").select("*");
  if (error) {
    console.log("error", error.message);
  }
  console.log("data", data);

  return data;
}

export async function Reviews() {
  const { data, error } = await supabase.from("Testimonials").select("*");
  if (error) {
    console.log("error", error.message);
  }
  console.log("data", data);

  return data;
}

export async function Quostions() {
  const { data, error } = await supabase.from("MostQuetions").select("*");
  if (error) {
    console.log("error", error.message);
  }
  console.log("data", data);

  return data;
}

export async function Addtocart(newItem) {
  try {
    // Ensure all fields are present
    if (!newItem.id || !newItem.name || !newItem.price || !newItem.quantity) {
      throw new Error("Invalid input: All fields are required");
    }

    console.log("Adding item to cart:", newItem);

    const { data, error } = await supabase
      .from("Cart")
      .insert([
        {
          product_id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      throw new Error(error.message);
    }

    console.log("Item added successfully:", data);
    return data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
}

export async function Getorders() {
  const { data, error } = await supabase.from("Orders").select("*");
  if (error) {
    console.log("error", error.message);
  }
  console.log("data", data);

  return data;
}
export async function Signup({ email, password, name }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
    },
  });

  if (error) {
    console.log("Signup error:", error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function GetUsers(email) {
  const { data, error } = await supabase
    .from("User")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

export async function CreateNewUser(newUser) {
  const { data, error } = await supabase.from("User").insert([newUser]);
  if (error) {
    throw new Error("New Guest couldn't create it  ");
  }
  return data;
}
// before update
export async function Getcart() {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) {
      throw new Error("No user ID found");
    }

    const { data, error } = await supabase
      .from("Cart")
      .select("*, Product:ProductId(name,price,Discount ,image)") // More explicit relationship
      .eq("UserId", userId);

    if (error) throw error;

    return data || [];
  } catch (err) {
    console.error("Error in Getcart:", err.message);
    throw err;
  }
}
//
export async function Getupdate() {
  const session = await auth();
  if (!session) return;

  const { data, error } = await supabase
    .from("User")
    .select("*")
    .eq("id", session.user.id)
    .single();

  if (error) throw new Error(error.message);
  return data;
}
// Get all the users Names and thier reviews and also rating don't change this one start
export async function Getreviews(ProductId, UserId) {
  const user = await auth();
  try {
    // Check if user reviewed this product
    const { data: userReview, error: userReviewError } = await supabase
      .from("reviews")
      .select("*,User:userID (name)")
      .eq("productId", ProductId)
      .eq("userID", UserId)
      .maybeSingle();

    if (user && userReviewError) {
      console.error("Supabase user review error:", userReviewError);
      throw new Error(`Couldn't fetch user review: ${userReviewError.message}`);
    }

    // Get all product reviews
    const { data: allProductReviews, error: allReviewsError } = await supabase
      .from("reviews")
      .select("*,User:userID (name)")
      .eq("productId", ProductId);

    if (allReviewsError) {
      console.error("Supabase all reviews error:", allReviewsError);
      throw new Error(`Couldn't fetch all reviews: ${allReviewsError.message}`);
    }

    return {
      hasUserReviewed: !!userReview,
      userReview,
      allReviews: allProductReviews || [],
    };
  } catch (error) {
    console.error("Error in Getreviews:", error);
    throw error; // Re-throw for the calling function
  }
}
// don't change this one end
// Getting the Product with reiview start
export async function getAllProductsWithRatings() {
  try {
    // Step 1: Get all products
    const { data: products, error: productsError } = await supabase
      .from("Product")
      .select("*");

    if (productsError) {
      console.error("Error fetching products:", productsError);
      throw productsError;
    }

    // Step 2: Loop through each product to get its reviews
    const productsWithRatings = await Promise.all(
      products.map(async (product) => {
        const { data: reviews, error: reviewError } = await supabase
          .from("reviews")
          .select("rating")
          .eq("productId", product.id);

        if (reviewError) {
          console.error(
            `Error fetching reviews for product ID ${product.id}:`,
            reviewError
          );
          return { ...product, average_rating: 0, total_reviews: 0 };
        }

        // Calculate average rating
        // const total = reviews?.length || 0;
        // const sum = reviews?.reduce((acc, r) => acc + (r.star || 0), 0);
        // const average = total > 0 ? sum / total : 0;

        const total = reviews?.length || 0;

        const sum = reviews?.reduce((acc, r) => {
          // Use whichever field exists
          const rating = r.rating !== undefined ? r.rating : r.star;
          return acc + (Number(rating) || 0);
        }, 0);

        const average = total > 0 ? parseFloat((sum / total).toFixed(1)) : 0;

        return {
          ...product,
          average_rating: average,
          total_reviews: total,
        };
      })
    );

    return productsWithRatings;
  } catch (error) {
    console.error(
      "❌ Error in getAllProductsWithRatings:",
      JSON.stringify(error, null, 2)
    );
    throw error;
  }
}
