import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware to protect Sanity Studio routes with authentication
 *
 * This middleware adds Basic HTTP Authentication to all /studio routes.
 * Users will be prompted for username/password before accessing the Studio.
 *
 * Environment Variables Required:
 * - STUDIO_USERNAME: Username for Studio access
 * - STUDIO_PASSWORD: Password for Studio access
 *
 * For production, use strong credentials and consider additional security measures.
 */
export function middleware(request: NextRequest) {
  // Only protect /studio routes
  if (request.nextUrl.pathname.startsWith("/studio")) {
    // Skip authentication in development if credentials not set
    const isDevelopment = process.env.NODE_ENV === "development";
    const username = process.env.STUDIO_USERNAME;
    const password = process.env.STUDIO_PASSWORD;

    // If credentials are not configured, warn but allow in development only
    if (!username || !password) {
      if (isDevelopment) {
        console.warn(
          "⚠️  WARNING: Studio authentication is not configured. Set STUDIO_USERNAME and STUDIO_PASSWORD in .env.local"
        );
        return NextResponse.next();
      } else {
        // In production, block access if credentials not set
        return new NextResponse("Studio authentication not configured", {
          status: 503,
        });
      }
    }

    // Check for authorization header
    const authHeader = request.headers.get("authorization");

    if (!authHeader) {
      // No auth provided - prompt for credentials
      return new NextResponse("Authentication required", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Sanity Studio", charset="UTF-8"',
        },
      });
    }

    // Parse Basic auth credentials
    const [type, credentials] = authHeader.split(" ");

    if (type !== "Basic" || !credentials) {
      return new NextResponse("Invalid authentication format", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Sanity Studio", charset="UTF-8"',
        },
      });
    }

    // Decode credentials
    let decodedCredentials: string;
    try {
      decodedCredentials = Buffer.from(credentials, "base64").toString("utf-8");
    } catch {
      return new NextResponse("Invalid authentication credentials", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Sanity Studio", charset="UTF-8"',
        },
      });
    }

    const [providedUsername, providedPassword] = decodedCredentials.split(":");

    // Verify credentials
    if (providedUsername === username && providedPassword === password) {
      // Authentication successful
      return NextResponse.next();
    }

    // Invalid credentials
    return new NextResponse("Invalid username or password", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Sanity Studio", charset="UTF-8"',
      },
    });
  }

  // Allow all other routes
  return NextResponse.next();
}

// Configure which routes to protect
export const config = {
  matcher: "/studio/:path*",
};
