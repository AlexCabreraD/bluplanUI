import { Studio } from "./Studio";

// Recommended by Sanity: force-static for better performance
export const dynamic = "force-static";

// Import default metadata and viewport settings from next-sanity
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <Studio />;
}
