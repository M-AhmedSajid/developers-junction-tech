import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/signup";
  const isAdminPath = path === "/add-blog" || path.startsWith("/edit-blog");
  const token = cookies().get("token")?.value || "";
  const referer = request.headers.get("referer") || "/";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL(referer, request.nextUrl));
  }
  if (isAdminPath && !token) {
    return NextResponse.redirect(new URL(referer, request.nextUrl));
  }
}

export const config = {
  matcher: ["/login", "/signup", "/add-blog", "/edit-blog/:id*"],
};
