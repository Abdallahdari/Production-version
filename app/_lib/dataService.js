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

export async function Getcart() {
  const session = await auth();
  const userId = session.user.id;
  if (!userId) {
    console.error("No user ID found");
    return;
  }
  const { data, error } = await supabase
    .from("Cart")
    .select(" Product(*)")
    .eq("UserId", userId);

  if (error) {
    console.error("Error fetching cart:", error);
  } else {
    console.log("Cart items:", data);
    return data;
  }
}

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
export async function Getorderss() {
  const { data, error } = await supabase
    .from("tijaabo")
    .select("tijabo")
    .limit(1);

  if (error) {
    console.error("Error fetching data:", error.message);
    return;
  }

  const firstItem = data?.[0]?.tijabo?.[0];
  const seconditem = data?.[0]?.tijabo?.[1];
  console.log("First item in tijabo:", firstItem, seconditem);
  return { firstItem, seconditem };
}
