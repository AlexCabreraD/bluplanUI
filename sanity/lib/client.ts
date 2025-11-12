import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: process.env.NEXT_PUBLIC_SANITY_READ_TOKEN,
  perspective: "published", // Only fetch published documents
});

export const serverClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false, // Never use CDN for writes
  token: process.env.SANITY_API_WRITE_TOKEN,
  perspective: "published",
});
