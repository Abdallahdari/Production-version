import { supabase } from "./supabase";

export async function getCabinas() {
  //   const { data, error } = await supabase.from("Cabinas").select("image");

  const { data, error } = await supabase.from("Product").select("*");

  if (error) {
    console.log(error);
    // throw new Error("Cabins could not be loaded");
  }

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
  return data;
}

export async function Cart() {
  const { data, error } = await supabase.from("Cart").select("*");
  if (error) {
    console.log("the fetchieng is not working ", error);
  }
  return data;
}

export async function GetAllbolgs() {
  let { data, error } = await supabase.from("Blogs").select("*");
  if (error) {
    console.log("error", error);
  }
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
  return data;
}

export async function Getcountris() {
  const { data, error } = await supabase.from("Countries").select("*");
  if (error) {
    console.log("API_error", error);
  }
  return data;
}
