import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

/**
 * Public client for reading published content
 *
 * - Safe to use in browser/client-side code
 * - Uses CDN for better performance
 * - Read-only access to published documents
 * - Token can be exposed (viewer permissions only)
 */
export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: process.env.NEXT_PUBLIC_SANITY_READ_TOKEN,
  perspective: "published", // Only fetch published documents
});

/**
 * Server client for mutations (create/update/delete)
 *
 * - ONLY use in server-side code (API routes, Server Components)
 * - NEVER expose this client or its token to the browser
 * - Has write permissions (Editor role)
 * - Does not use CDN (needs fresh data for mutations)
 *
 * Example usage:
 * ```typescript
 * // In an API route:
 * import { serverClient } from '@/sanity/lib/client'
 *
 * export async function POST(request: Request) {
 *   await serverClient.create({
 *     _type: 'contactSubmission',
 *     ...data
 *   })
 * }
 * ```
 */
export const serverClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false, // Never use CDN for writes
  token: process.env.SANITY_API_WRITE_TOKEN,
  perspective: "published",
});
