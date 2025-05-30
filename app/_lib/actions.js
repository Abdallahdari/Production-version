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
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) throw error;

  // Get all reviews with product and user info
  const { data: reviews, error: reviewError } = await supabase.from("reviews")
    .select(`
      *,
      product:productId(*),
      user:userId(*)
    `);

  if (reviewError) throw reviewError;

  // Attach reviews to products
  return products.map((product) => ({
    ...product,
    reviews: reviews.filter((review) => review.productId === product.id),
  }));
}

//
export async function CreateContact(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const text = formData.get("text");
  const phone = formData.get("phone");
  const topic = formData.get("topic");

  console.log(formData);
  const { data, error } = await supabase
    .from("contact")
    .insert([
      {
        phone: phone,
        email: email,
        question: text,
        subject: topic,
        name: name,
      },
    ])
    .select();
  if (error) {
    throw new Error("couldn't Send the questions");
  }
  return data;
}

export async function addcart(ProductId, quantity, sizes) {
  try {
    // Validate inputs
    if (!ProductId || !sizes) {
      throw new Error("Product ID and size are required");
    }
    quantity = Number(quantity) || 1; // Ensure quantity is a number

    const user = await auth();
    if (!user?.user?.id) {
      throw new Error("User not authenticated");
    }

    // First check if product exists
    const { data: product, error: productError } = await supabase
      .from("Product")
      .select("*")
      .eq("id", ProductId)
      .single();

    if (productError || !product) {
      throw new Error("Product not found");
    }

    // Check for existing cart item
    const { data: existingItems, error: fetchError } = await supabase
      .from("Cart")
      .select("*")
      .eq("UserId", user.user.id)
      .eq("ProductId", ProductId)
      .eq("sizes", sizes)
      .maybeSingle(); // Returns null instead of throwing if no match

    if (fetchError) {
      throw new Error(`Failed to check cart: ${fetchError.message}`);
    }

    // If exists, update quantity
    if (existingItems) {
      const newQuantity = existingItems.quantity + quantity;
      const { data: updatedItem, error: updateError } = await supabase
        .from("Cart")
        .update({
          quantity: newQuantity,
        })
        .eq("id", existingItems.id)
        .select()
        .single();

      if (updateError) throw updateError;
      return updatedItem;
    }

    // Otherwise create new
    const { data: newItem, error: insertError } = await supabase
      .from("Cart")
      .insert({
        UserId: user.user.id,
        ProductId,
        quantity,
        sizes,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (insertError) throw insertError;
    return newItem;
  } catch (err) {
    console.error("Cart operation failed:", err.message);
    throw err;
  }
}

export async function DeleteCart(cartItemId) {
  try {
    const user = await auth();

    if (!user?.user?.id) {
      throw new Error("User not authenticated");
    }

    console.log("Deleting cart item:", cartItemId, "for user:", user.user.id);

    // Delete by cart item ID and user ID for security
    const { error, data } = await supabase
      .from("Cart")
      .delete()
      .eq("id", cartItemId) // Use cart item ID instead of ProductId
      .eq("UserId", user.user.id)
      .select(); // Add select to see what was deleted

    if (error) {
      console.error("Supabase delete error:", error);
      throw error;
    }

    console.log("Deleted data:", data);

    // Revalidate the cart page to reflect changes

    return { success: true, deletedCount: data?.length || 0 };
  } catch (error) {
    console.error("Error in DeleteCart:", error);
    throw error;
  }
}
//  payment fucntion
// export async function Payment(formData) {
//   const user = await auth();
//   const userId = user?.user?.id;

//   try {
//     if (!user) {
//       throw new Error("User not authenticated");
//     }

//     const { cartitmes, error } = await supabase
//       .from("Cart")
//       .select("* ,ProductId:Product")
//       .eq("UserId", userId);

//     if (error) {
//       throw new Error("couldn't fetch the cart");
//     }
//     console.log("cart", data);
//     const cartItem = cartitmes.map((item) => {
//       return item.Product;
//     });
//     const { orders, error: OrderError } = await supabase
//       .from("Orders-Main")
//       .insert([{ UserId: user.user.id, ProductId: cartItem }])
//       .select();
//     if (OrderError) {
//       throw new Error("error in payment", ProductId);
//     }
//     console.log("orders", orders);
//     // Delete the cart items after creating the order
//     const { error: deleteError } = await supabase
//       .from("Cart")
//       .delete()
//       .eq("UserId", userId);
//     if (deleteError) {
//       throw new Error("couldn't delete the cart ");
//     }
//   } catch (error) {
//     throw new Error("error in payment", error);
//   }
//   console.log(user);
// }

// export async function Payment(formData) {
//   const user = await auth();
//   const userId = user?.user?.id;

//   try {
//     if (!user) {
//       throw new Error("User not authenticated");
//     }

//     // Fetch cart items
//     const { data: cartItems, error: cartError } = await supabase
//       .from("Cart")
//       .select("*, Product:ProductId(*)")
//       .eq("UserId", userId);

//     if (cartError) {
//       throw new Error("Couldn't fetch the cart: " + cartError.message);
//     }

//     if (!cartItems || cartItems.length === 0) {
//       throw new Error("Cart is empty");
//     }

//     // Calculate total
//     // const total = cartItems.reduce((sum, item) => {
//     //   return sum + (item.Product?.price || 0) * (item.quantity || 1);
//     // }, 0);
//     const orderItems = cartItems.map((item) => ({
//       ProductId: item.ProductId,
//     }));

//     // Create order
//     const { data: order, error: orderError } = await supabase
//       .from("Orders-Main")
//       .insert([
//         {
//           UserId: userId,
//           ProductId: orderItems,
//         },
//       ])
//       .select()
//       .single();

//     if (orderError) {
//       throw new Error("Error creating order: " + orderError.message);
//     }

//     // Create order items

//     // Clear cart
//     const { error: deleteError } = await supabase
//       .from("Cart")
//       .delete()
//       .eq("UserId", userId);

//     if (deleteError) {
//       throw new Error("Couldn't delete the cart: " + deleteError.message);
//     }

//     return { success: true, orderId: order.id };
//   } catch (error) {
//     console.error("Payment error:", error);
//     throw new Error("Payment failed: " + error.message);
//   }
// }

export async function Payment(formData) {
  const user = await auth();
  const userId = user?.user?.id;

  try {
    if (!user) {
      throw new Error("User not authenticated");
    }

    // Fetch cart items
    const { data: cartItems, error: cartError } = await supabase
      .from("Cart")
      .select("*, Product:ProductId(*)")
      .eq("UserId", userId);

    if (cartError) {
      throw new Error("Couldn't fetch the cart: " + cartError.message);
    }

    if (!cartItems || cartItems.length === 0) {
      throw new Error("Cart is empty");
    }

    // Create the order
    const { data: order, error: orderError } = await supabase
      .from("Orders-Main")
      .insert([{ UserId: userId }])
      .select()
      .single();

    if (orderError) {
      throw new Error("Error creating order: " + orderError.message);
    }

    // Create order items
    const orderItems = cartItems.map((item) => ({
      OrderId: order.id,
      ProductID: item.ProductId,
      quatitiy: item.quantity || 1,
    }));

    const { error: itemsError } = await supabase
      .from("OrderItems")
      .insert(orderItems);

    if (itemsError) {
      throw new Error("Error creating order items: " + itemsError.message);
    }

    // Clear cart
    const { error: deleteError } = await supabase
      .from("Cart")
      .delete()
      .eq("UserId", userId);

    if (deleteError) {
      throw new Error("Couldn't delete the cart: " + deleteError.message);
    }

    return { success: true, orderId: order.id };
  } catch (error) {
    console.error("Payment error:", error);
    throw new Error("Payment failed: " + error.message);
  }
}
