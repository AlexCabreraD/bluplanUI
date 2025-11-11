import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemaTypes } from "./sanity/schemas";

/**
 * Sanity Studio Configuration
 *
 * SECURITY NOTE:
 * - Vision Tool has been removed for security
 * - Vision Tool allows arbitrary GROQ queries which could expose sensitive data
 * - To re-enable for debugging: npm install @sanity/vision, import visionTool, add to plugins
 */

export default defineConfig({
  name: "default",
  title: "BluPlan Studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  basePath: "/studio",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
