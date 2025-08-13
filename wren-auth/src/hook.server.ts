import { redirect, type Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { REDIRECT_WRENAI } from "$env/static/private";

const auth: Handle = async ({ event, resolve }) => {
  const token = event.cookies.get("google_auth_token");
  
  if (token) {
    event.locals.google_auth_token = token;
  } else {
    event.locals.google_auth_token = null;
  }

  return resolve(event);
};

const authGuard: Handle = async ({ event, resolve }) => {
  const token = event.locals.google_auth_token;
  const pathname = event.url.pathname;
  const hasCode = event.url.searchParams.has("code");
  const publicRoutes = ["/", "/oauth"];
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  );

  if (!token && !isPublicRoute) {
    redirect(303, "/oauth");
  }

  if (token && pathname === "/logout") {
    event.cookies.delete("google_auth_token", {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
    });
    
    event.locals.google_auth_token = null;
    redirect(303, "/");
  }

  if (token && pathname === "/oauth" && !hasCode) {
    redirect(303, REDIRECT_WRENAI);
  }
  if (token && pathname === "/") {
    redirect(303, REDIRECT_WRENAI);
  }

  return resolve(event);
};

const security: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  
  return response;
};

export const handle: Handle = sequence(auth, authGuard, security);