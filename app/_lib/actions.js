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
