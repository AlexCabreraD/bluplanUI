import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Sanity-specific types
export interface SanityProject {
  _id: string;
  title: string;
  subtitle: string;
  slug: string;
  hoverName: string;
  hoverAddress: string;
  location: string;
  description: string;
  category: string;
  status: string;
  year: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  cars: number;
  stories?: number;
  thumbnailImage: SanityImageSource;
  heroImage: SanityImageSource;
  galleryImages: SanityImageSource[];
  features?: string[];
  services?: string[];
  featured?: boolean;
  featuredImage?: SanityImageSource;
  publishedAt: string;
}

export interface SanityFeaturedProject {
  _id: string;
  title: string;
  slug: string;
  featuredImage?: SanityImageSource;
  thumbnailImage: SanityImageSource;
}

export interface SanityFAQ {
  _id: string;
  question: string;
  answer: string;
  order: number;
}
