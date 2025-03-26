import { auth } from "../_lib/auth";

export async function getSession() {
  return await auth(); // Fetch session data
}
