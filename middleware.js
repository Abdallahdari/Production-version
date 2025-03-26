// import { NextResponse } from "next/server";

// export function middleware(request) {
//   console.log(request);
//   return NextResponse.redirect(new URL("/profile", request.url));
// }
import { auth } from "./app/_lib/auth";
export const middleware = auth;
export const config = {
  matcher: ["/profile", "/cart"],
};
