import { toast } from "react-toastify";
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
  return data;
}

export async function Reviews() {
  const { data, error } = await supabase.from("Testimonials").select("*");
  if (error) {
    console.log("error", error.message);
  }
  return data;
}

export async function Quostions() {
  const { data, error } = await supabase.from("MostQuetions").select("*");
  if (error) {
    console.log("error", error.message);
  }
  return data;
}
