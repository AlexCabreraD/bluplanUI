import { client } from "./client";
import { isSanityConfigured } from "../env";
import {
  projectsQuery,
  projectBySlugQuery,
  featuredProjectsQuery,
  projectSlugsQuery,
  faqsQuery,
} from "./queries";

// Fetch all projects
export async function getProjects() {
  if (!isSanityConfigured()) return [];
  try {
    return await client.fetch(projectsQuery, {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

// Fetch single project by slug
export async function getProjectBySlug(slug: string) {
  if (!isSanityConfigured()) return null;
  try {
    return await client.fetch(projectBySlugQuery, { slug }, { next: { revalidate: 60 } });
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

// Fetch featured projects for home page
export async function getFeaturedProjects() {
  if (!isSanityConfigured()) return [];
  try {
    return await client.fetch(featuredProjectsQuery, {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.error("Error fetching featured projects:", error);
    return [];
  }
}

// Fetch all project slugs for static generation
export async function getProjectSlugs() {
  if (!isSanityConfigured()) return [];
  try {
    return await client.fetch(projectSlugsQuery, {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.error("Error fetching project slugs:", error);
    return [];
  }
}

// Fetch FAQs
export async function getFAQs() {
  if (!isSanityConfigured()) return [];
  try {
    return await client.fetch(faqsQuery, {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
}
