"use server";

import { signIn, signOut } from "./auth";

export async function SigninAction() {
  await signIn("google", { redirectTo: "/" });
}
export async function SignoutAction() {
  await signOut({ redirectTo: "/login" });
}
