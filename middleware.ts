// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get("isLoggedIn")?.value;

  // The middleware can't access to client side so can use localstorage here
  // const isLoggedInLocalStorage = localStorage.getItem("isLoggedIn");
  // Define public paths (e.g., login page)
  const publicPaths = ["/login", "/news", "/dashboard"];
  const path = request.nextUrl.pathname;

  // If the user is not logged in and tries to access a protected route
  if (!isLoggedIn && !publicPaths.includes(path)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If the user is logged in but tries to access the login page
  if (isLoggedIn && path === "/login") {
    return NextResponse.redirect(
      new URL("/test_product_with_middleware", request.url)
    );
  }

  return NextResponse.next();
}

// Specify which paths the middleware should run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
