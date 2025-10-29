import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const url = req.nextUrl.clone();

  // If there's no token and user tries to access a protected route, redirect to login
  if (!token && url.pathname.startsWith("/admin")) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (!token && url.pathname.startsWith("/student")) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (!token && url.pathname.startsWith("/superadmin")) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Add additional checks based on roles
  if (token?.role !== "Admin" && url.pathname.startsWith("/admin")) {
    url.pathname = "/unauthorized";
    return NextResponse.redirect(url);
  }

  if (token?.role !== "Student" && url.pathname.startsWith("/student")) {
    url.pathname = "/unauthorized";
    return NextResponse.redirect(url);
  }

  if (token?.role !== "Superadmin" && url.pathname.startsWith("/superadmin")) {
    url.pathname = "/unauthorized";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/student/:path*", "/superadmin/:path*"],
};
