import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const permissionCookie = request.cookies.get("permissions")?.value;

  const pathname = request.nextUrl.pathname;

  if (pathname === "/login") {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  let permissions: string[] = [];
  if (permissionCookie) {
    try {
      permissions = JSON.parse(permissionCookie);
    } catch (error) {
      permissions = [];
    }
  }

  //   route permission map
  const routePermissionMap: Record<string, string> = {
    "/dashboard": "dashboard.view",
    "/users": "users.view",
    "/reports": "reports.view",
  };

  const requiredPermission = routePermissionMap[pathname];

  if (requiredPermission && !permissions.includes(requiredPermission)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/users", "/reports"],
};
